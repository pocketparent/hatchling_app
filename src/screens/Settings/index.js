import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BackgroundContainer from '../../components/decorations/BackgroundContainer';
import { useAuth } from '../../context/AuthContext';
import { useOnboarding } from '../../context/OnboardingContext';
import { useTheme } from '../../theme/ThemeProvider';
import theme from '../../theme';

/**
 * Settings Screen
 * 
 * Enhanced user settings and profile management
 * Includes theme options, language settings, and legal section
 */
export default function SettingsScreen({ navigation }) {
  const { signOut } = useAuth();
  const { babyData, resetOnboarding } = useOnboarding();
  const { colorScheme, toggleTheme } = useTheme();
  
  // State for settings
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [contentPreferences, setContentPreferences] = useState({
    sleep: true,
    feeding: true,
    development: true,
    health: true,
    behavior: true
  });
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  
  // Mock data for baby profile
  const babyProfile = {
    name: babyData?.name || 'Emma',
    age: babyData?.age || '4 months',
    birthDate: babyData?.birthDate || 'January 25, 2025',
  };

  // Available languages
  const languages = [
    { id: 'en', name: 'English' },
    { id: 'es', name: 'Español' },
    { id: 'fr', name: 'Français' }
  ];

  // Handle sign out
  const handleSignOut = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Sign Out',
          onPress: () => signOut()
        }
      ]
    );
  };

  // Handle content preference toggle
  const toggleContentPreference = (key) => {
    setContentPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Handle language selection
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    // In a real app, this would update the app's language
  };

  // Settings sections
  const settingsSections = [
    {
      id: '1',
      title: 'Profile',
      items: [
        { 
          id: '1-1', 
          title: 'Edit Baby Profile', 
          icon: 'baby',
          action: () => navigation.navigate('EditProfile')
        },
        { 
          id: '1-2', 
          title: 'Add Another Child', 
          icon: 'add-circle',
          action: () => navigation.navigate('AddChild')
        },
      ]
    },
    {
      id: '2',
      title: 'Preferences',
      items: [
        { 
          id: '2-1', 
          title: 'Notifications', 
          icon: 'notifications',
          toggle: true,
          value: notificationsEnabled,
          onToggle: () => setNotificationsEnabled(prev => !prev)
        },
        { 
          id: '2-2', 
          title: 'Content Preferences', 
          icon: 'list',
          action: () => navigation.navigate('ContentPreferences')
        },
        { 
          id: '2-3', 
          title: 'Dark Mode', 
          icon: 'moon',
          toggle: true,
          value: colorScheme === 'dark',
          onToggle: toggleTheme
        },
      ]
    },
    {
      id: '3',
      title: 'Account',
      items: [
        { 
          id: '3-1', 
          title: 'Subscription', 
          icon: 'star',
          action: () => navigation.navigate('Subscription')
        },
        { 
          id: '3-2', 
          title: 'Privacy Settings', 
          icon: 'lock-closed',
          action: () => navigation.navigate('PrivacySettings')
        },
        { 
          id: '3-3', 
          title: 'Sign Out', 
          icon: 'log-out',
          action: handleSignOut,
          danger: true
        },
      ]
    },
    {
      id: '4',
      title: 'Language',
      custom: (
        <View style={styles.languageSelector}>
          {languages.map(lang => (
            <TouchableOpacity
              key={lang.id}
              style={[
                styles.languageOption,
                selectedLanguage === lang.name && styles.languageOptionSelected
              ]}
              onPress={() => handleLanguageSelect(lang.name)}
            >
              <Text style={[
                styles.languageOptionText,
                selectedLanguage === lang.name && styles.languageOptionTextSelected
              ]}>
                {lang.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )
    },
    {
      id: '5',
      title: 'Content Topics',
      custom: (
        <View style={styles.contentPreferencesContainer}>
          {Object.entries(contentPreferences).map(([key, value]) => (
            <View key={key} style={styles.contentPreferenceItem}>
              <Text style={styles.contentPreferenceText}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Text>
              <Switch
                value={value}
                onValueChange={() => toggleContentPreference(key)}
                trackColor={{ false: '#767577', true: theme.colors.primary.main }}
                thumbColor={value ? theme.colors.primary.light : '#f4f3f4'}
              />
            </View>
          ))}
        </View>
      )
    },
    {
      id: '6',
      title: 'Support',
      items: [
        { 
          id: '6-1', 
          title: 'Help Center', 
          icon: 'help-circle',
          action: () => navigation.navigate('HelpCenter')
        },
        { 
          id: '6-2', 
          title: 'Contact Us', 
          icon: 'mail',
          action: () => navigation.navigate('ContactUs')
        },
        { 
          id: '6-3', 
          title: 'About Hatchling', 
          icon: 'information-circle',
          action: () => navigation.navigate('About')
        },
      ]
    },
    {
      id: '7',
      title: 'Legal',
      items: [
        { 
          id: '7-1', 
          title: 'Privacy Policy', 
          icon: 'document-text',
          action: () => navigation.navigate('PrivacyPolicy')
        },
        { 
          id: '7-2', 
          title: 'Terms of Service', 
          icon: 'document-text',
          action: () => navigation.navigate('Terms')
        },
        { 
          id: '7-3', 
          title: 'Data Deletion', 
          icon: 'trash',
          action: () => Alert.alert(
            'Delete Data',
            'Are you sure you want to delete all your data? This action cannot be undone.',
            [
              {
                text: 'Cancel',
                style: 'cancel'
              },
              {
                text: 'Delete',
                onPress: () => resetOnboarding(),
                style: 'destructive'
              }
            ]
          ),
          danger: true
        },
      ]
    },
  ];

  return (
    <BackgroundContainer>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.headerTitle}>Settings</Text>
          
          {/* Baby profile summary */}
          <View style={styles.profileCard}>
            <View style={styles.profileImagePlaceholder}>
              <Ionicons name="person" size={30} color={theme.colors.neutral.white} />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{babyProfile.name}</Text>
              <Text style={styles.profileDetails}>{babyProfile.age}</Text>
              <Text style={styles.profileDetails}>Born: {babyProfile.birthDate}</Text>
            </View>
            <TouchableOpacity 
              style={styles.editProfileButton}
              onPress={() => navigation.navigate('EditProfile')}
            >
              <Ionicons name="pencil" size={20} color={theme.colors.primary.main} />
            </TouchableOpacity>
          </View>
          
          {/* Settings sections */}
          {settingsSections.map(section => (
            <View key={section.id} style={styles.settingsSection}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              
              {section.custom ? (
                section.custom
              ) : (
                section.items.map(item => (
                  <TouchableOpacity 
                    key={item.id} 
                    style={styles.settingsItem}
                    onPress={item.action}
                    disabled={item.toggle}
                  >
                    <View style={styles.settingsItemLeft}>
                      <View style={[
                        styles.settingsItemIconContainer,
                        item.danger && styles.settingsItemIconContainerDanger
                      ]}>
                        <Ionicons 
                          name={item.icon} 
                          size={20} 
                          color={item.danger ? theme.colors.feedback.error : theme.colors.primary.main} 
                        />
                      </View>
                      <Text style={[
                        styles.settingsItemTitle,
                        item.danger && styles.settingsItemTitleDanger
                      ]}>
                        {item.title}
                      </Text>
                    </View>
                    
                    {item.toggle ? (
                      <Switch
                        value={item.value}
                        onValueChange={item.onToggle}
                        trackColor={{ false: '#767577', true: theme.colors.primary.main }}
                        thumbColor={item.value ? theme.colors.primary.light : '#f4f3f4'}
                      />
                    ) : (
                      <Ionicons name="chevron-forward" size={20} color={theme.colors.neutral.medium} />
                    )}
                  </TouchableOpacity>
                ))
              )}
            </View>
          ))}
          
          {/* Version info */}
          <Text style={styles.versionText}>Hatchling v1.0.0</Text>
        </ScrollView>
      </SafeAreaView>
    </BackgroundContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: theme.spacing.spacing.screenPadding,
    paddingBottom: 100, // Extra padding for bottom tab bar
  },
  headerTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 28,
    color: theme.colors.neutral.white,
    marginBottom: theme.spacing.spacing.lg,
    marginTop: theme.spacing.spacing.md,
  },
  profileCard: {
    flexDirection: 'row',
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 12,
    padding: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.xl,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  profileImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.spacing.md,
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  profileName: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 20,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.xxs,
  },
  profileDetails: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    color: theme.colors.neutral.dark,
    marginBottom: theme.spacing.spacing.xxs,
  },
  editProfileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.neutral.lighter,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  settingsSection: {
    marginBottom: theme.spacing.spacing.lg,
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 12,
    padding: theme.spacing.spacing.md,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  sectionTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.sm,
    paddingHorizontal: theme.spacing.spacing.sm,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.spacing.md,
    paddingHorizontal: theme.spacing.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral.lighter,
  },
  settingsItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsItemIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(42, 157, 143, 0.1)', // Light teal background
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.spacing.md,
  },
  settingsItemIconContainerDanger: {
    backgroundColor: 'rgba(244, 67, 54, 0.1)', // Light red background
  },
  settingsItemTitle: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    color: theme.colors.neutral.darkest,
  },
  settingsItemTitleDanger: {
    color: theme.colors.feedback.error,
  },
  versionText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 12,
    color: theme.colors.neutral.white,
    textAlign: 'center',
    marginTop: theme.spacing.spacing.xl,
    marginBottom: theme.spacing.spacing.md,
  },
  languageSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.spacing.sm,
    paddingVertical: theme.spacing.spacing.md,
  },
  languageOption: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  languageOptionSelected: {
    backgroundColor: theme.colors.primary.main,
  },
  languageOptionText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 14,
    color: theme.colors.neutral.darkest,
  },
  languageOptionTextSelected: {
    color: theme.colors.neutral.white,
  },
  contentPreferencesContainer: {
    paddingHorizontal: theme.spacing.spacing.sm,
    paddingVertical: theme.spacing.spacing.md,
  },
  contentPreferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  contentPreferenceText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    color: theme.colors.neutral.darkest,
  },
});

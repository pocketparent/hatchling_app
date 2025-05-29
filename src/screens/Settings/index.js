import React, { useState } from 'react';
import { View, TouchableOpacity, Switch, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContext';
import { useOnboarding } from '../../context/OnboardingContext';
import { useTheme } from '../../theme/ThemeProvider';
import { ScreenErrorWrapper } from '../../components/error/ErrorComponents';
import theme from '../../theme';

// Import UI components
import {
  Container,
  Row,
  Column,
  Spacer,
  Card,
  H2,
  H3,
  Body,
  BodySmall,
  Caption,
  Button,
  Section,
  IconButton
} from '../../components/ui';

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
  
  // Mock data for baby profile
  const babyProfile = {
    name: babyData?.name || 'Emma',
    age: babyData?.age || '4 months',
    birthDate: babyData?.birthDate || 'January 25, 2025',
  };

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

  // Settings sections - Simplified with Dieter Rams principles
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
        }
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
        }
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
          id: '3-3', 
          title: 'Sign Out', 
          icon: 'log-out',
          action: handleSignOut,
          danger: true
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
          id: '7-4', 
          title: 'Typography Test', 
          icon: 'text',
          action: () => navigation.navigate('TypographyTest')
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
    <ScreenErrorWrapper screenName="Settings" navigation={navigation}>
      <Container>
        <View style={styles.contentContainer}>
          {/* Baby profile summary */}
          <Card style={styles.profileCard}>
            <Row>
              <View style={styles.profileImagePlaceholder}>
                <Ionicons name="person" size={30} color={theme.colors.neutral.white} />
              </View>
              <Column style={styles.profileInfo}>
                <H2>{babyProfile.name}</H2>
                <BodySmall>{babyProfile.age}</BodySmall>
                <Caption>Born: {babyProfile.birthDate}</Caption>
              </Column>
              <IconButton 
                icon="pencil"
                size="medium"
                variant="secondary"
                color={theme.colors.primary.main}
                style={styles.editProfileButton}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </Row>
          </Card>
          
          {/* Settings sections */}
          {settingsSections.map(section => (
            <Section key={section.id}>
              <H3 style={styles.sectionTitle}>{section.title}</H3>
              
              <Card style={styles.settingsSection}>
                {section.items.map(item => (
                  <TouchableOpacity 
                    key={item.id} 
                    style={styles.settingsItem}
                    onPress={item.action}
                    disabled={item.toggle}
                  >
                    <Row style={styles.settingsItemRow}>
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
                      <Body 
                        style={[
                          styles.settingsItemTitle,
                          item.danger && styles.settingsItemTitleDanger
                        ]}
                      >
                        {item.title}
                      </Body>
                      
                      {item.toggle ? (
                        <Switch
                          value={item.value}
                          onValueChange={item.onToggle}
                          trackColor={{ false: theme.colors.neutral.medium, true: theme.colors.primary.main }}
                          thumbColor={item.value ? theme.colors.primary.lightest : theme.colors.neutral.lightest}
                        />
                      ) : (
                        <Ionicons name="chevron-forward" size={20} color={theme.colors.neutral.medium} />
                      )}
                    </Row>
                  </TouchableOpacity>
                ))}
              </Card>
            </Section>
          ))}
          
          {/* Version info */}
          <Caption style={styles.versionText}>Hatchling v1.0.0</Caption>
          <Spacer size="xl" />
        </View>
      </Container>
    </ScreenErrorWrapper>
  );
}

const styles = {
  contentContainer: {
    flex: 1,
    paddingHorizontal: theme.spacing.spacing.md,
    paddingBottom: 100, // Extra padding for bottom tab bar
  },
  profileCard: {
    marginBottom: theme.spacing.spacing.xl,
    padding: theme.spacing.spacing.md,
  },
  profileImagePlaceholder: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: theme.colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.spacing.md,
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  editProfileButton: {
    alignSelf: 'center',
    backgroundColor: `${theme.colors.primary.main}15`, // 15% opacity
  },
  settingsSection: {
    marginBottom: theme.spacing.spacing.lg,
    overflow: 'hidden',
    borderRadius: theme.spacing.borderRadius.md,
    padding: 0,
  },
  sectionTitle: {
    marginBottom: theme.spacing.spacing.md,
    marginLeft: theme.spacing.spacing.sm,
    color: theme.colors.neutral.white,
  },
  settingsItem: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral.lightest + '20', // 20% opacity
  },
  settingsItemRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing.spacing.md,
  },
  settingsItemIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: `${theme.colors.primary.main}15`, // 15% opacity
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.spacing.md,
  },
  settingsItemIconContainerDanger: {
    backgroundColor: `${theme.colors.feedback.error}15`, // 15% opacity
  },
  settingsItemTitle: {
    flex: 1,
  },
  settingsItemTitleDanger: {
    color: theme.colors.feedback.error,
  },
  versionText: {
    textAlign: 'center',
    marginTop: theme.spacing.spacing.xl,
    marginBottom: theme.spacing.spacing.md,
    color: theme.colors.neutral.white + '99', // 60% opacity
  },
};

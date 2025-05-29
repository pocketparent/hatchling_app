import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContext';
import { useOnboarding } from '../../context/OnboardingContext';
import { useTheme } from '../../theme/ThemeProvider';
import { ScreenErrorWrapper } from '../../components/error/ErrorComponents';

// Import UI components
import {
  Container,
  SafeContainer,
  ScrollContainer,
  Section,
  Row,
  Column,
  Spacer,
  Card,
  H1,
  H2,
  H3,
  Body,
  BodySmall,
  Caption,
  Label,
  AppHeader,
  PrimaryButton,
  SecondaryButton,
  TextButton,
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
    <ScreenErrorWrapper screenName="Settings" navigation={navigation}>
      <Container>
        <SafeContainer>
          <AppHeader title="Settings" />
          
          <ScrollContainer contentContainerStyle={styles.scrollContent}>
            {/* Baby profile summary */}
            <Card style={styles.profileCard}>
              <Row>
                <View style={styles.profileImagePlaceholder}>
                  <Ionicons name="person" size={30} color="white" />
                </View>
                <Column style={styles.profileInfo}>
                  <H2>{babyProfile.name}</H2>
                  <BodySmall>{babyProfile.age}</BodySmall>
                  <Caption>Born: {babyProfile.birthDate}</Caption>
                </Column>
                <TouchableOpacity 
                  style={styles.editProfileButton}
                  onPress={() => navigation.navigate('EditProfile')}
                >
                  <Ionicons name="pencil" size={20} color="#4A9B9B" />
                </TouchableOpacity>
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
                            color={item.danger ? "#F44336" : "#4A9B9B"} 
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
                            trackColor={{ false: '#767577', true: '#4A9B9B' }}
                            thumbColor={item.value ? '#E0F2F1' : '#f4f3f4'}
                          />
                        ) : (
                          <Ionicons name="chevron-forward" size={20} color="#757575" />
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
          </ScrollContainer>
        </SafeContainer>
      </Container>
    </ScreenErrorWrapper>
  );
}

const styles = {
  scrollContent: {
    paddingBottom: 100, // Extra padding for bottom tab bar
  },
  profileCard: {
    marginBottom: 24,
  },
  profileImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4A9B9B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  editProfileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0F2F1',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  settingsSection: {
    marginBottom: 8,
    overflow: 'hidden',
  },
  sectionTitle: {
    marginBottom: 8,
    marginLeft: 8,
  },
  settingsItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  settingsItemRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  settingsItemIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(74, 155, 155, 0.1)', // Light teal background
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  settingsItemIconContainerDanger: {
    backgroundColor: 'rgba(244, 67, 54, 0.1)', // Light red background
  },
  settingsItemTitle: {
    flex: 1,
  },
  settingsItemTitleDanger: {
    color: '#F44336',
  },
  versionText: {
    textAlign: 'center',
    marginTop: 32,
  },
};

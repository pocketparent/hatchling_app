import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import theme from '../../theme';

/**
 * Settings Screen
 * 
 * User settings and profile management
 * Non-tracking, minimalist approach
 */
export default function SettingsScreen() {
  // Mock data for baby profile
  const babyProfile = {
    name: 'Emma',
    age: '4 months',
    birthDate: 'January 25, 2025',
  };

  // Settings sections
  const settingsSections = [
    {
      id: '1',
      title: 'Profile',
      items: [
        { id: '1-1', title: 'Edit Baby Profile', icon: '👶' },
        { id: '1-2', title: 'Add Another Child', icon: '➕' },
      ]
    },
    {
      id: '2',
      title: 'Preferences',
      items: [
        { id: '2-1', title: 'Notifications', icon: '🔔' },
        { id: '2-2', title: 'Content Preferences', icon: '📝' },
      ]
    },
    {
      id: '3',
      title: 'Account',
      items: [
        { id: '3-1', title: 'Subscription', icon: '⭐' },
        { id: '3-2', title: 'Privacy Settings', icon: '🔒' },
      ]
    },
    {
      id: '4',
      title: 'Support',
      items: [
        { id: '4-1', title: 'Help Center', icon: '❓' },
        { id: '4-2', title: 'Contact Us', icon: '✉️' },
        { id: '4-3', title: 'About Hatchling', icon: 'ℹ️' },
      ]
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>Settings</Text>
        
        {/* Baby profile summary */}
        <View style={styles.profileCard}>
          <View style={styles.profileImagePlaceholder}>
            <Text style={styles.profileImageText}>👶</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{babyProfile.name}</Text>
            <Text style={styles.profileDetails}>{babyProfile.age}</Text>
            <Text style={styles.profileDetails}>Born: {babyProfile.birthDate}</Text>
          </View>
        </View>
        
        {/* Settings sections */}
        {settingsSections.map(section => (
          <View key={section.id} style={styles.settingsSection}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.items.map(item => (
              <TouchableOpacity key={item.id} style={styles.settingsItem}>
                <Text style={styles.settingsItemIcon}>{item.icon}</Text>
                <Text style={styles.settingsItemTitle}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        
        {/* Version info */}
        <Text style={styles.versionText}>Hatchling v1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral.white,
  },
  scrollContent: {
    padding: theme.spacing.spacing.screenPadding,
  },
  headerTitle: {
    ...theme.typography.textVariants.h2,
    color: theme.colors.neutral.darkest,
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
    backgroundColor: theme.colors.primary.light,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.spacing.md,
  },
  profileImageText: {
    fontSize: 30,
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  profileName: {
    ...theme.typography.textVariants.h4,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.xxs,
  },
  profileDetails: {
    ...theme.typography.textVariants.body2,
    color: theme.colors.neutral.dark,
    marginBottom: theme.spacing.spacing.xxs,
  },
  settingsSection: {
    marginBottom: theme.spacing.spacing.lg,
  },
  sectionTitle: {
    ...theme.typography.textVariants.h5,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.sm,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral.lighter,
  },
  settingsItemIcon: {
    fontSize: 20,
    marginRight: theme.spacing.spacing.md,
    width: 24,
    textAlign: 'center',
  },
  settingsItemTitle: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
  },
  versionText: {
    ...theme.typography.textVariants.caption,
    color: theme.colors.neutral.medium,
    textAlign: 'center',
    marginTop: theme.spacing.spacing.xl,
    marginBottom: theme.spacing.spacing.md,
  },
});

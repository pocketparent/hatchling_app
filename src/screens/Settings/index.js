import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Switch
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { AppContext } from '../../../App';
import theme from '../../theme';

const SettingsScreen = () => {
  const { babyName, babyAge, setBabyName } = useContext(AppContext);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [weeklyCheckInReminders, setWeeklyCheckInReminders] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  
  // Calculate baby's age in months
  const ageInMonths = Math.floor(babyAge / 30);
  
  return (
    <View style={styles.container}>
      <View style={styles.backgroundElements}>
        {/* Decorative elements */}
        <View style={[styles.decorativeElement, { top: 50, left: 20 }]} />
        <View style={[styles.decorativeElement, { top: 120, right: 30 }]} />
        <View style={[styles.decorativeStar, { top: 80, right: 50 }]} />
        <View style={[styles.decorativeLeaf, { top: 100, right: 20 }]} />
      </View>
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
      
      <ScrollView style={styles.contentContainer}>
        {/* Profile Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile</Text>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingContent}>
              <Ionicons name="person-outline" size={24} color={theme.colors.primary.main} style={styles.settingIcon} />
              <View>
                <Text style={styles.settingLabel}>Baby's Name</Text>
                <Text style={styles.settingValue}>{babyName}</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={theme.colors.neutral.medium} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingContent}>
              <Ionicons name="calendar-outline" size={24} color={theme.colors.primary.main} style={styles.settingIcon} />
              <View>
                <Text style={styles.settingLabel}>Baby's Birthday</Text>
                <Text style={styles.settingValue}>{ageInMonths} months old</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={theme.colors.neutral.medium} />
          </TouchableOpacity>
        </View>
        
        {/* Notifications Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingContent}>
              <Ionicons name="notifications-outline" size={24} color={theme.colors.primary.main} style={styles.settingIcon} />
              <View>
                <Text style={styles.settingLabel}>Push Notifications</Text>
                <Text style={styles.settingDescription}>Receive daily insights and milestone alerts</Text>
              </View>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: theme.colors.neutral.light, true: theme.colors.primary.light }}
              thumbColor={notificationsEnabled ? theme.colors.primary.main : theme.colors.neutral.medium}
            />
          </View>
          
          <View style={styles.settingItem}>
            <View style={styles.settingContent}>
              <Ionicons name="checkbox-outline" size={24} color={theme.colors.primary.main} style={styles.settingIcon} />
              <View>
                <Text style={styles.settingLabel}>Weekly Check-In Reminders</Text>
                <Text style={styles.settingDescription}>Get reminded to complete your weekly check-in</Text>
              </View>
            </View>
            <Switch
              value={weeklyCheckInReminders}
              onValueChange={setWeeklyCheckInReminders}
              trackColor={{ false: theme.colors.neutral.light, true: theme.colors.primary.light }}
              thumbColor={weeklyCheckInReminders ? theme.colors.primary.main : theme.colors.neutral.medium}
            />
          </View>
        </View>
        
        {/* Appearance Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Appearance</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingContent}>
              <Ionicons name="moon-outline" size={24} color={theme.colors.primary.main} style={styles.settingIcon} />
              <View>
                <Text style={styles.settingLabel}>Dark Mode</Text>
                <Text style={styles.settingDescription}>Use dark theme throughout the app</Text>
              </View>
            </View>
            <Switch
              value={darkModeEnabled}
              onValueChange={setDarkModeEnabled}
              trackColor={{ false: theme.colors.neutral.light, true: theme.colors.primary.light }}
              thumbColor={darkModeEnabled ? theme.colors.primary.main : theme.colors.neutral.medium}
            />
          </View>
        </View>
        
        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingContent}>
              <Ionicons name="cloud-upload-outline" size={24} color={theme.colors.primary.main} style={styles.settingIcon} />
              <View>
                <Text style={styles.settingLabel}>Backup & Sync</Text>
                <Text style={styles.settingDescription}>Sync your data across devices</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={theme.colors.neutral.medium} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingContent}>
              <Ionicons name="lock-closed-outline" size={24} color={theme.colors.primary.main} style={styles.settingIcon} />
              <View>
                <Text style={styles.settingLabel}>Privacy Settings</Text>
                <Text style={styles.settingDescription}>Manage your data and privacy preferences</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={theme.colors.neutral.medium} />
          </TouchableOpacity>
        </View>
        
        {/* Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingContent}>
              <Ionicons name="help-circle-outline" size={24} color={theme.colors.primary.main} style={styles.settingIcon} />
              <View>
                <Text style={styles.settingLabel}>Help Center</Text>
                <Text style={styles.settingDescription}>Get help with using Hatchling</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={theme.colors.neutral.medium} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingContent}>
              <Ionicons name="mail-outline" size={24} color={theme.colors.primary.main} style={styles.settingIcon} />
              <View>
                <Text style={styles.settingLabel}>Contact Us</Text>
                <Text style={styles.settingDescription}>Send us feedback or report an issue</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={theme.colors.neutral.medium} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingContent}>
              <Ionicons name="information-circle-outline" size={24} color={theme.colors.primary.main} style={styles.settingIcon} />
              <View>
                <Text style={styles.settingLabel}>About Hatchling</Text>
                <Text style={styles.settingDescription}>Version 1.0.0</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={theme.colors.neutral.medium} />
          </TouchableOpacity>
        </View>
        
        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
        
        {/* Spacing at bottom */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary.main,
  },
  backgroundElements: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  decorativeElement: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  decorativeStar: {
    position: 'absolute',
    width: 12,
    height: 12,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    transform: [{ rotate: '180deg' }],
  },
  decorativeLeaf: {
    position: 'absolute',
    width: 20,
    height: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    transform: [{ rotate: '45deg' }],
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.primary.dark,
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral.lighter,
  },
  settingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    marginRight: 15,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.neutral.darker,
    marginBottom: 3,
  },
  settingValue: {
    fontSize: 14,
    color: theme.colors.neutral.dark,
  },
  settingDescription: {
    fontSize: 14,
    color: theme.colors.neutral.medium,
  },
  logoutButton: {
    backgroundColor: theme.colors.neutral.lightest,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  logoutButtonText: {
    color: theme.colors.status.error,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default SettingsScreen;

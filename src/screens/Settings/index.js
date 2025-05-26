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

const SettingsScreen = ({ navigation }) => {
  const { 
    babyName, 
    babyAge, 
    setBabyName, 
    darkMode, 
    toggleDarkMode, 
    currentTheme 
  } = useContext(AppContext);
  
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [weeklyCheckInReminders, setWeeklyCheckInReminders] = useState(true);
  
  // Calculate baby's age in months
  const ageInMonths = Math.floor(babyAge / 30);
  
  // Use current theme based on dark mode
  const colors = currentTheme.colors;
  
  return (
    <View style={[styles.container, { backgroundColor: colors.primary.main }]}>
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
      
      <ScrollView style={[styles.contentContainer, { backgroundColor: colors.neutral.white }]}>
        {/* Profile Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary.dark }]}>Profile</Text>
          
          <TouchableOpacity 
            style={[styles.settingItem, { borderBottomColor: colors.neutral.lighter }]}
            onPress={() => navigation.navigate('Profile')}
          >
            <View style={styles.settingContent}>
              <Ionicons name="person-outline" size={24} color={colors.primary.main} style={styles.settingIcon} />
              <View>
                <Text style={[styles.settingLabel, { color: colors.neutral.darker }]}>Baby's Name</Text>
                <Text style={[styles.settingValue, { color: colors.neutral.dark }]}>{babyName}</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.neutral.medium} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.settingItem, { borderBottomColor: colors.neutral.lighter }]}
            onPress={() => navigation.navigate('Birthday')}
          >
            <View style={styles.settingContent}>
              <Ionicons name="calendar-outline" size={24} color={colors.primary.main} style={styles.settingIcon} />
              <View>
                <Text style={[styles.settingLabel, { color: colors.neutral.darker }]}>Baby's Birthday</Text>
                <Text style={[styles.settingValue, { color: colors.neutral.dark }]}>{ageInMonths} months old</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.neutral.medium} />
          </TouchableOpacity>
        </View>
        
        {/* Notifications Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary.dark }]}>Notifications</Text>
          
          <View style={[styles.settingItem, { borderBottomColor: colors.neutral.lighter }]}>
            <View style={styles.settingContent}>
              <Ionicons name="notifications-outline" size={24} color={colors.primary.main} style={styles.settingIcon} />
              <View>
                <Text style={[styles.settingLabel, { color: colors.neutral.darker }]}>Push Notifications</Text>
                <Text style={[styles.settingDescription, { color: colors.neutral.medium }]}>Receive daily insights and milestone alerts</Text>
              </View>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: colors.neutral.light, true: colors.primary.light }}
              thumbColor={notificationsEnabled ? colors.primary.main : colors.neutral.medium}
            />
          </View>
          
          <View style={[styles.settingItem, { borderBottomColor: colors.neutral.lighter }]}>
            <View style={styles.settingContent}>
              <Ionicons name="checkbox-outline" size={24} color={colors.primary.main} style={styles.settingIcon} />
              <View>
                <Text style={[styles.settingLabel, { color: colors.neutral.darker }]}>Weekly Check-In Reminders</Text>
                <Text style={[styles.settingDescription, { color: colors.neutral.medium }]}>Get reminded to complete your weekly check-in</Text>
              </View>
            </View>
            <Switch
              value={weeklyCheckInReminders}
              onValueChange={setWeeklyCheckInReminders}
              trackColor={{ false: colors.neutral.light, true: colors.primary.light }}
              thumbColor={weeklyCheckInReminders ? colors.primary.main : colors.neutral.medium}
            />
          </View>
        </View>
        
        {/* Appearance Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary.dark }]}>Appearance</Text>
          
          <View style={[styles.settingItem, { borderBottomColor: colors.neutral.lighter }]}>
            <View style={styles.settingContent}>
              <Ionicons name="moon-outline" size={24} color={colors.primary.main} style={styles.settingIcon} />
              <View>
                <Text style={[styles.settingLabel, { color: colors.neutral.darker }]}>Dark Mode</Text>
                <Text style={[styles.settingDescription, { color: colors.neutral.medium }]}>Use dark theme throughout the app</Text>
              </View>
            </View>
            <Switch
              value={darkMode}
              onValueChange={toggleDarkMode}
              trackColor={{ false: colors.neutral.light, true: colors.primary.light }}
              thumbColor={darkMode ? colors.primary.main : colors.neutral.medium}
            />
          </View>
        </View>
        
        {/* Account Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary.dark }]}>Account</Text>
          
          <TouchableOpacity 
            style={[styles.settingItem, { borderBottomColor: colors.neutral.lighter }]}
            onPress={() => navigation.navigate('Backup')}
          >
            <View style={styles.settingContent}>
              <Ionicons name="cloud-upload-outline" size={24} color={colors.primary.main} style={styles.settingIcon} />
              <View>
                <Text style={[styles.settingLabel, { color: colors.neutral.darker }]}>Backup & Sync</Text>
                <Text style={[styles.settingDescription, { color: colors.neutral.medium }]}>Sync your data across devices</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.neutral.medium} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.settingItem, { borderBottomColor: colors.neutral.lighter }]}
            onPress={() => navigation.navigate('Privacy')}
          >
            <View style={styles.settingContent}>
              <Ionicons name="lock-closed-outline" size={24} color={colors.primary.main} style={styles.settingIcon} />
              <View>
                <Text style={[styles.settingLabel, { color: colors.neutral.darker }]}>Privacy Settings</Text>
                <Text style={[styles.settingDescription, { color: colors.neutral.medium }]}>Manage your data and privacy preferences</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.neutral.medium} />
          </TouchableOpacity>
        </View>
        
        {/* Support Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary.dark }]}>Support</Text>
          
          <TouchableOpacity 
            style={[styles.settingItem, { borderBottomColor: colors.neutral.lighter }]}
            onPress={() => navigation.navigate('HelpCenter')}
          >
            <View style={styles.settingContent}>
              <Ionicons name="help-circle-outline" size={24} color={colors.primary.main} style={styles.settingIcon} />
              <View>
                <Text style={[styles.settingLabel, { color: colors.neutral.darker }]}>Help Center</Text>
                <Text style={[styles.settingDescription, { color: colors.neutral.medium }]}>Get help with using Hatchling</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.neutral.medium} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.settingItem, { borderBottomColor: colors.neutral.lighter }]}
            onPress={() => navigation.navigate('Contact')}
          >
            <View style={styles.settingContent}>
              <Ionicons name="mail-outline" size={24} color={colors.primary.main} style={styles.settingIcon} />
              <View>
                <Text style={[styles.settingLabel, { color: colors.neutral.darker }]}>Contact Us</Text>
                <Text style={[styles.settingDescription, { color: colors.neutral.medium }]}>Send us feedback or report an issue</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.neutral.medium} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.settingItem, { borderBottomColor: colors.neutral.lighter }]}
            onPress={() => navigation.navigate('About')}
          >
            <View style={styles.settingContent}>
              <Ionicons name="information-circle-outline" size={24} color={colors.primary.main} style={styles.settingIcon} />
              <View>
                <Text style={[styles.settingLabel, { color: colors.neutral.darker }]}>About Hatchling</Text>
                <Text style={[styles.settingDescription, { color: colors.neutral.medium }]}>Version 1.0.0</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.neutral.medium} />
          </TouchableOpacity>
        </View>
        
        {/* Logout Button */}
        <TouchableOpacity 
          style={[styles.logoutButton, { backgroundColor: colors.neutral.lightest }]}
        >
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
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
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
    marginBottom: 3,
  },
  settingValue: {
    fontSize: 14,
  },
  settingDescription: {
    fontSize: 14,
  },
  logoutButton: {
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

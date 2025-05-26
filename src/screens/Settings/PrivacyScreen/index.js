import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  SafeAreaView,
  Switch,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { AppContext } from '../../../../App';

const PrivacyScreen = ({ navigation }) => {
  const { currentTheme } = useContext(AppContext);
  const [dataCollection, setDataCollection] = React.useState(true);
  const [locationServices, setLocationServices] = React.useState(false);
  const [analytics, setAnalytics] = React.useState(true);
  
  // Use current theme based on dark mode
  const colors = currentTheme.colors;
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.neutral.white }]}>
      <View style={[styles.header, { borderBottomColor: colors.neutral.lighter }]}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.primary.main} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.neutral.darkest }]}>Privacy Settings</Text>
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView style={styles.content}>
        <View style={[styles.settingItem, { borderBottomColor: colors.neutral.lighter }]}>
          <View style={styles.settingContent}>
            <Ionicons name="analytics-outline" size={24} color={colors.primary.main} style={styles.settingIcon} />
            <View>
              <Text style={[styles.settingLabel, { color: colors.neutral.darker }]}>Data Collection</Text>
              <Text style={[styles.settingDescription, { color: colors.neutral.medium }]}>Allow anonymous usage data collection</Text>
            </View>
          </View>
          <Switch
            value={dataCollection}
            onValueChange={setDataCollection}
            trackColor={{ false: colors.neutral.light, true: colors.primary.light }}
            thumbColor={dataCollection ? colors.primary.main : colors.neutral.medium}
          />
        </View>
        
        <View style={[styles.settingItem, { borderBottomColor: colors.neutral.lighter }]}>
          <View style={styles.settingContent}>
            <Ionicons name="location-outline" size={24} color={colors.primary.main} style={styles.settingIcon} />
            <View>
              <Text style={[styles.settingLabel, { color: colors.neutral.darker }]}>Location Services</Text>
              <Text style={[styles.settingDescription, { color: colors.neutral.medium }]}>Allow access to your location</Text>
            </View>
          </View>
          <Switch
            value={locationServices}
            onValueChange={setLocationServices}
            trackColor={{ false: colors.neutral.light, true: colors.primary.light }}
            thumbColor={locationServices ? colors.primary.main : colors.neutral.medium}
          />
        </View>
        
        <View style={[styles.settingItem, { borderBottomColor: colors.neutral.lighter }]}>
          <View style={styles.settingContent}>
            <Ionicons name="bar-chart-outline" size={24} color={colors.primary.main} style={styles.settingIcon} />
            <View>
              <Text style={[styles.settingLabel, { color: colors.neutral.darker }]}>Analytics</Text>
              <Text style={[styles.settingDescription, { color: colors.neutral.medium }]}>Help improve Hatchling with usage analytics</Text>
            </View>
          </View>
          <Switch
            value={analytics}
            onValueChange={setAnalytics}
            trackColor={{ false: colors.neutral.light, true: colors.primary.light }}
            thumbColor={analytics ? colors.primary.main : colors.neutral.medium}
          />
        </View>
        
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary.dark }]}>Data Management</Text>
          
          <TouchableOpacity style={[styles.actionItem, { borderBottomColor: colors.neutral.lighter }]}>
            <View style={styles.actionContent}>
              <Ionicons name="download-outline" size={24} color={colors.primary.main} style={styles.actionIcon} />
              <Text style={[styles.actionLabel, { color: colors.neutral.darker }]}>Download My Data</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.neutral.medium} />
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.actionItem, { borderBottomColor: colors.neutral.lighter }]}>
            <View style={styles.actionContent}>
              <Ionicons name="trash-outline" size={24} color={colors.status.error} style={styles.actionIcon} />
              <Text style={{ color: colors.status.error, fontSize: 16 }}>Delete All My Data</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.neutral.medium} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary.dark }]}>Legal</Text>
          
          <TouchableOpacity style={[styles.actionItem, { borderBottomColor: colors.neutral.lighter }]}>
            <View style={styles.actionContent}>
              <Ionicons name="document-text-outline" size={24} color={colors.primary.main} style={styles.actionIcon} />
              <Text style={[styles.actionLabel, { color: colors.neutral.darker }]}>Privacy Policy</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.neutral.medium} />
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.actionItem, { borderBottomColor: colors.neutral.lighter }]}>
            <View style={styles.actionContent}>
              <Ionicons name="document-outline" size={24} color={colors.primary.main} style={styles.actionIcon} />
              <Text style={[styles.actionLabel, { color: colors.neutral.darker }]}>Terms of Service</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.neutral.medium} />
          </TouchableOpacity>
        </View>
        
        {/* Spacing at bottom */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  placeholder: {
    width: 34, // Same width as back button for centering
  },
  content: {
    flex: 1,
    padding: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    marginBottom: 10,
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
  settingDescription: {
    fontSize: 14,
  },
  section: {
    marginTop: 25,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  actionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    marginRight: 15,
  },
  actionLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default PrivacyScreen;

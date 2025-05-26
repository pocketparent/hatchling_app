import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  SafeAreaView,
  Switch
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { AppContext } from '../../../../App';

const BackupScreen = ({ navigation }) => {
  const { currentTheme } = useContext(AppContext);
  const [autoBackup, setAutoBackup] = React.useState(false);
  const [includeMedia, setIncludeMedia] = React.useState(true);
  
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
        <Text style={[styles.headerTitle, { color: colors.neutral.darkest }]}>Backup & Sync</Text>
        <View style={styles.placeholder} />
      </View>
      
      <View style={styles.content}>
        <View style={[styles.settingItem, { borderBottomColor: colors.neutral.lighter }]}>
          <View style={styles.settingContent}>
            <Ionicons name="cloud-upload-outline" size={24} color={colors.primary.main} style={styles.settingIcon} />
            <View>
              <Text style={[styles.settingLabel, { color: colors.neutral.darker }]}>Auto Backup</Text>
              <Text style={[styles.settingDescription, { color: colors.neutral.medium }]}>Automatically backup your data daily</Text>
            </View>
          </View>
          <Switch
            value={autoBackup}
            onValueChange={setAutoBackup}
            trackColor={{ false: colors.neutral.light, true: colors.primary.light }}
            thumbColor={autoBackup ? colors.primary.main : colors.neutral.medium}
          />
        </View>
        
        <View style={[styles.settingItem, { borderBottomColor: colors.neutral.lighter }]}>
          <View style={styles.settingContent}>
            <Ionicons name="images-outline" size={24} color={colors.primary.main} style={styles.settingIcon} />
            <View>
              <Text style={[styles.settingLabel, { color: colors.neutral.darker }]}>Include Media</Text>
              <Text style={[styles.settingDescription, { color: colors.neutral.medium }]}>Include photos and videos in backup</Text>
            </View>
          </View>
          <Switch
            value={includeMedia}
            onValueChange={setIncludeMedia}
            trackColor={{ false: colors.neutral.light, true: colors.primary.light }}
            thumbColor={includeMedia ? colors.primary.main : colors.neutral.medium}
          />
        </View>
        
        <TouchableOpacity 
          style={[styles.actionButton, { backgroundColor: colors.primary.main }]}
        >
          <Ionicons name="cloud-upload" size={20} color="#FFFFFF" style={styles.buttonIcon} />
          <Text style={styles.actionButtonText}>Backup Now</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.actionButton, { backgroundColor: colors.primary.light }]}
        >
          <Ionicons name="cloud-download" size={20} color="#FFFFFF" style={styles.buttonIcon} />
          <Text style={styles.actionButtonText}>Restore from Backup</Text>
        </TouchableOpacity>
      </View>
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
  actionButton: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonIcon: {
    marginRight: 10,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default BackupScreen;

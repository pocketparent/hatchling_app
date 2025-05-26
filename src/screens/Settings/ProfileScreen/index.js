import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { AppContext } from '../../../../App';

const ProfileScreen = ({ navigation }) => {
  const { babyName, setBabyName, currentTheme } = useContext(AppContext);
  const [name, setName] = useState(babyName);
  
  // Use current theme based on dark mode
  const colors = currentTheme.colors;
  
  const handleSave = () => {
    setBabyName(name);
    navigation.goBack();
  };
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.neutral.white }]}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.primary.main} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.neutral.darkest }]}>Baby's Name</Text>
        <View style={styles.placeholder} />
      </View>
      
      <View style={styles.content}>
        <Text style={[styles.label, { color: colors.neutral.dark }]}>Name</Text>
        <TextInput
          style={[
            styles.input, 
            { 
              backgroundColor: colors.neutral.lightest,
              color: colors.neutral.darkest,
              borderColor: colors.neutral.lighter
            }
          ]}
          value={name}
          onChangeText={setName}
          placeholder="Enter baby's name"
          placeholderTextColor={colors.neutral.medium}
        />
        
        <TouchableOpacity 
          style={[styles.saveButton, { backgroundColor: colors.primary.main }]}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>Save</Text>
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
    borderBottomColor: '#EEEEEE',
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
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 30,
  },
  saveButton: {
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;

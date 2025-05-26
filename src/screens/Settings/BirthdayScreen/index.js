import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  SafeAreaView,
  DatePickerIOS
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { AppContext } from '../../../../App';

const BirthdayScreen = ({ navigation }) => {
  const { babyAge, setBabyAge, currentTheme } = useContext(AppContext);
  
  // Calculate current date minus babyAge days
  const calculateBirthday = () => {
    const today = new Date();
    const birthDate = new Date(today);
    birthDate.setDate(today.getDate() - babyAge);
    return birthDate;
  };
  
  const [birthDate, setBirthDate] = useState(calculateBirthday());
  
  // Use current theme based on dark mode
  const colors = currentTheme.colors;
  
  const handleSave = () => {
    // Calculate age in days based on selected birth date
    const today = new Date();
    const diffTime = Math.abs(today - birthDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    setBabyAge(diffDays);
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
        <Text style={[styles.headerTitle, { color: colors.neutral.darkest }]}>Baby's Birthday</Text>
        <View style={styles.placeholder} />
      </View>
      
      <View style={styles.content}>
        <Text style={[styles.label, { color: colors.neutral.dark }]}>Birth Date</Text>
        
        <View style={[styles.datePickerContainer, { backgroundColor: colors.neutral.lightest }]}>
          <DatePickerIOS
            date={birthDate}
            onDateChange={setBirthDate}
            mode="date"
            maximumDate={new Date()}
            textColor={colors.neutral.darkest}
          />
        </View>
        
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
  datePickerContainer: {
    borderRadius: 8,
    marginBottom: 30,
    overflow: 'hidden',
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

export default BirthdayScreen;

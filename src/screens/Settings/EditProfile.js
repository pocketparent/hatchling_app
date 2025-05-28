import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BackgroundContainer from '../../components/decorations/BackgroundContainer';
import theme from '../../theme';
import { useOnboarding } from '../../context/OnboardingContext';

/**
 * Edit Profile Screen
 * 
 * Allows users to edit their baby's profile information
 */
export default function EditProfileScreen({ navigation }) {
  const { babyData, updateBabyData } = useOnboarding();
  
  const [name, setName] = useState(babyData?.name || '');
  const [birthDate, setBirthDate] = useState(babyData?.birthDate || '');
  
  const handleSave = () => {
    updateBabyData({ name, birthDate });
    navigation.goBack();
  };
  
  return (
    <BackgroundContainer>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Edit Profile</Text>
            <TouchableOpacity 
              style={styles.saveButton} 
              onPress={handleSave}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImagePlaceholder}>
              <Ionicons name="person" size={40} color={theme.colors.neutral.white} />
            </View>
            <TouchableOpacity style={styles.changePhotoButton}>
              <Text style={styles.changePhotoText}>Change Photo</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Baby's Name</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter baby's name"
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Birth Date</Text>
              <TextInput
                style={styles.input}
                value={birthDate}
                onChangeText={setBirthDate}
                placeholder="MM/DD/YYYY"
              />
            </View>
          </View>
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.spacing.xl,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 20,
    color: theme.colors.neutral.white,
  },
  saveButton: {
    padding: 8,
  },
  saveButtonText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: theme.colors.neutral.white,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.spacing.xl,
  },
  profileImagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: theme.colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.spacing.md,
  },
  changePhotoButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
  },
  changePhotoText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 14,
    color: theme.colors.neutral.white,
  },
  formContainer: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 16,
    padding: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.xl,
  },
  inputContainer: {
    marginBottom: theme.spacing.spacing.lg,
  },
  inputLabel: {
    fontFamily: 'SFProText-Medium',
    fontSize: 14,
    color: theme.colors.neutral.darkest,
    marginBottom: 8,
  },
  input: {
    backgroundColor: theme.colors.neutral.white,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    borderWidth: 1,
    borderColor: theme.colors.neutral.light,
  },
});

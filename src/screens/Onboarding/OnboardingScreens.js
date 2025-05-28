/**
 * Hatchling App Onboarding Screens
 * 
 * Implements simplified onboarding flow screens
 * Includes Baby Info, Feeding Method, Sleep Arrangement, Experience Level, and Top Concern screens
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useOnboarding } from '../../context/OnboardingContext';
import theme from '../../theme';

// Onboarding Progress Indicator
const ProgressIndicator = ({ currentStep, totalSteps }) => {
  return (
    <View style={styles.progressContainer}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View 
          key={index} 
          style={[
            styles.progressDot, 
            index < currentStep ? styles.progressDotActive : {}
          ]} 
        />
      ))}
    </View>
  );
};

// Baby Information Screen
export const BabyInfoScreen = ({ navigation }) => {
  const { babyData, updateBabyData, nextStep } = useOnboarding();
  const [name, setName] = useState(babyData.name || '');
  const [birthDate, setBirthDate] = useState(babyData.birthDate || '');
  
  const handleContinue = () => {
    updateBabyData({ name, birthDate });
    nextStep();
    navigation.navigate('FeedingMethod');
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ProgressIndicator currentStep={1} totalSteps={5} />
        
        <Text style={styles.screenTitle}>Tell us about your baby</Text>
        
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
          <Text style={styles.inputLabel}>Birth Date / Due Date</Text>
          <TextInput
            style={styles.input}
            value={birthDate}
            onChangeText={setBirthDate}
            placeholder="MM/DD/YYYY"
          />
        </View>
        
        <View style={styles.photoUploadPlaceholder}>
          <Text style={styles.photoUploadText}>Add Baby Photo (Optional)</Text>
        </View>
        
        <TouchableOpacity 
          style={[styles.button, styles.primaryButton, !name && styles.disabledButton]} 
          onPress={handleContinue}
          disabled={!name}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

// Feeding Method Screen
export const FeedingMethodScreen = ({ navigation }) => {
  const { babyData, updateBabyData, nextStep, prevStep } = useOnboarding();
  const [feedingMethod, setFeedingMethod] = useState(babyData.feedingMethod || null);
  
  const feedingOptions = [
    { id: 'breastfeeding', label: 'Breastfeeding' },
    { id: 'formula', label: 'Formula' },
    { id: 'combination', label: 'Combination' },
    { id: 'undecided', label: 'Not yet decided' },
  ];
  
  const handleContinue = () => {
    updateBabyData({ feedingMethod });
    nextStep();
    navigation.navigate('SleepArrangement');
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => {
            prevStep();
            navigation.goBack();
          }}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        
        <ProgressIndicator currentStep={2} totalSteps={5} />
        
        <Text style={styles.screenTitle}>How are you feeding your baby?</Text>
        
        <View style={styles.optionsContainer}>
          {feedingOptions.map(option => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionButton,
                feedingMethod === option.id && styles.optionButtonSelected
              ]}
              onPress={() => setFeedingMethod(option.id)}
            >
              <Text 
                style={[
                  styles.optionButtonText,
                  feedingMethod === option.id && styles.optionButtonTextSelected
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <TouchableOpacity 
          style={[styles.button, styles.primaryButton, !feedingMethod && styles.disabledButton]} 
          onPress={handleContinue}
          disabled={!feedingMethod}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

// Sleep Arrangement Screen
export const SleepArrangementScreen = ({ navigation }) => {
  const { babyData, updateBabyData, nextStep, prevStep } = useOnboarding();
  const [sleepArrangement, setSleepArrangement] = useState(babyData.sleepArrangement || null);
  
  const sleepOptions = [
    { id: 'crib_own_room', label: 'Crib in own room' },
    { id: 'crib_parents_room', label: 'Crib/bassinet in parents\' room' },
    { id: 'cosleeping', label: 'Co-sleeping' },
    { id: 'other', label: 'Other/combination' },
  ];
  
  const handleContinue = () => {
    updateBabyData({ sleepArrangement });
    nextStep();
    navigation.navigate('ExperienceLevel');
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => {
            prevStep();
            navigation.goBack();
          }}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        
        <ProgressIndicator currentStep={3} totalSteps={5} />
        
        <Text style={styles.screenTitle}>Where does your baby sleep?</Text>
        
        <View style={styles.optionsContainer}>
          {sleepOptions.map(option => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionButton,
                sleepArrangement === option.id && styles.optionButtonSelected
              ]}
              onPress={() => setSleepArrangement(option.id)}
            >
              <Text 
                style={[
                  styles.optionButtonText,
                  sleepArrangement === option.id && styles.optionButtonTextSelected
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <TouchableOpacity 
          style={[styles.button, styles.primaryButton, !sleepArrangement && styles.disabledButton]} 
          onPress={handleContinue}
          disabled={!sleepArrangement}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

// Experience Level Screen
export const ExperienceLevelScreen = ({ navigation }) => {
  const { babyData, updateBabyData, nextStep, prevStep } = useOnboarding();
  const [experienceLevel, setExperienceLevel] = useState(babyData.experienceLevel || null);
  
  const experienceOptions = [
    { id: 'first_time', label: 'First-time parent' },
    { id: 'experienced', label: 'Have older children' },
  ];
  
  const handleContinue = () => {
    updateBabyData({ experienceLevel });
    nextStep();
    navigation.navigate('TopConcern');
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => {
            prevStep();
            navigation.goBack();
          }}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        
        <ProgressIndicator currentStep={4} totalSteps={5} />
        
        <Text style={styles.screenTitle}>What's your parenting experience?</Text>
        
        <View style={styles.optionsContainer}>
          {experienceOptions.map(option => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionButton,
                experienceLevel === option.id && styles.optionButtonSelected
              ]}
              onPress={() => setExperienceLevel(option.id)}
            >
              <Text 
                style={[
                  styles.optionButtonText,
                  experienceLevel === option.id && styles.optionButtonTextSelected
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <TouchableOpacity 
          style={[styles.button, styles.primaryButton, !experienceLevel && styles.disabledButton]} 
          onPress={handleContinue}
          disabled={!experienceLevel}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

// Top Concern Screen
export const TopConcernScreen = ({ navigation }) => {
  const { babyData, updateBabyData, nextStep, prevStep, completeOnboarding } = useOnboarding();
  const [topConcern, setTopConcern] = useState(babyData.topConcern || null);
  
  const concernOptions = [
    { id: 'sleep', label: 'Sleep' },
    { id: 'feeding', label: 'Feeding' },
    { id: 'development', label: 'Development' },
    { id: 'crying', label: 'Crying/fussiness' },
    { id: 'parent_wellbeing', label: 'Parent wellbeing' },
  ];
  
  const handleContinue = () => {
    updateBabyData({ topConcern });
    nextStep();
    completeOnboarding();
    navigation.navigate('Personalization');
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => {
            prevStep();
            navigation.goBack();
          }}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        
        <ProgressIndicator currentStep={5} totalSteps={5} />
        
        <Text style={styles.screenTitle}>What's your top concern right now?</Text>
        
        <View style={styles.optionsContainer}>
          {concernOptions.map(option => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionButton,
                topConcern === option.id && styles.optionButtonSelected
              ]}
              onPress={() => setTopConcern(option.id)}
            >
              <Text 
                style={[
                  styles.optionButtonText,
                  topConcern === option.id && styles.optionButtonTextSelected
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <TouchableOpacity 
          style={[styles.button, styles.primaryButton, !topConcern && styles.disabledButton]} 
          onPress={handleContinue}
          disabled={!topConcern}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

// Personalization Screen
export const PersonalizationScreen = ({ navigation }) => {
  React.useEffect(() => {
    // Auto-navigate to main app after delay
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      });
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigation]);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.screenTitle}>Creating your personalized Hatchling experience...</Text>
        
        <View style={styles.loadingAnimation}>
          <Text style={styles.loadingText}>🐣</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
  content: {
    flex: 1,
    padding: theme.spacing.spacing.screenPadding,
    justifyContent: 'center',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: theme.spacing.spacing.xl,
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 4,
  },
  progressDotActive: {
    backgroundColor: theme.colors.neutral.white,
  },
  screenTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 28,
    color: theme.colors.neutral.white,
    marginBottom: theme.spacing.spacing.xl,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: theme.spacing.spacing.lg,
  },
  inputLabel: {
    fontFamily: 'SFProText-Medium',
    fontSize: 14,
    color: theme.colors.neutral.white,
    marginBottom: 8,
  },
  input: {
    backgroundColor: theme.colors.neutral.white,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
  },
  photoUploadPlaceholder: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.spacing.xl,
  },
  photoUploadText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: theme.colors.neutral.white,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 16,
    marginBottom: 12,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: theme.colors.neutral.white,
  },
  buttonText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: theme.colors.primary.main,
  },
  disabledButton: {
    opacity: 0.7,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  backButtonText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: theme.colors.neutral.white,
  },
  optionsContainer: {
    marginBottom: theme.spacing.spacing.xl,
  },
  optionButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  optionButtonSelected: {
    backgroundColor: theme.colors.neutral.white,
  },
  optionButtonText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: theme.colors.neutral.white,
    textAlign: 'center',
  },
  optionButtonTextSelected: {
    color: theme.colors.primary.main,
  },
  loadingAnimation: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing.spacing.xxl,
  },
  loadingText: {
    fontSize: 72,
  },
});

export default {
  BabyInfoScreen,
  FeedingMethodScreen,
  SleepArrangementScreen,
  ExperienceLevelScreen,
  TopConcernScreen,
  PersonalizationScreen,
};

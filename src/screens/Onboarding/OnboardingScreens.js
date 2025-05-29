import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useOnboarding } from '../../context/OnboardingContext';
import theme from '../../theme';

// Import UI components
import {
  Container,
  Row,
  Column,
  Spacer,
  H2,
  Body,
  BodySmall,
  Caption,
  Button,
  TextInput,
  BackButton,
  ProgressIndicator,
  OptionButton
} from '../../components/ui';

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
        <ProgressIndicator 
          currentStep={1} 
          totalSteps={5} 
          style={styles.progressIndicator}
        />
        
        <H2 style={styles.screenTitle}>Tell us about your baby</H2>
        
        <Column style={styles.inputContainer}>
          <BodySmall color="white" style={styles.inputLabel}>Baby's Name</BodySmall>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter baby's name"
          />
        </Column>
        
        <Column style={styles.inputContainer}>
          <BodySmall color="white" style={styles.inputLabel}>Birth Date / Due Date</BodySmall>
          <TextInput
            value={birthDate}
            onChangeText={setBirthDate}
            placeholder="MM/DD/YYYY"
          />
        </Column>
        
        <View style={styles.photoUploadPlaceholder}>
          <Body color="white" style={styles.photoUploadText}>Add Baby Photo (Optional)</Body>
        </View>
        
        <Button 
          label="Continue"
          variant="primary"
          onPress={handleContinue}
          disabled={!name}
          style={styles.button}
        />
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
        <BackButton 
          onPress={() => {
            prevStep();
            navigation.goBack();
          }}
          color="white"
          style={styles.backButton}
        />
        
        <ProgressIndicator 
          currentStep={2} 
          totalSteps={5} 
          style={styles.progressIndicator}
        />
        
        <H2 style={styles.screenTitle}>How are you feeding your baby?</H2>
        
        <Column style={styles.optionsContainer}>
          {feedingOptions.map(option => (
            <OptionButton
              key={option.id}
              label={option.label}
              isSelected={feedingMethod === option.id}
              onPress={() => setFeedingMethod(option.id)}
              style={styles.optionButton}
            />
          ))}
        </Column>
        
        <Button 
          label="Continue"
          variant="primary"
          onPress={handleContinue}
          disabled={!feedingMethod}
          style={styles.button}
        />
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
        <BackButton 
          onPress={() => {
            prevStep();
            navigation.goBack();
          }}
          color="white"
          style={styles.backButton}
        />
        
        <ProgressIndicator 
          currentStep={3} 
          totalSteps={5} 
          style={styles.progressIndicator}
        />
        
        <H2 style={styles.screenTitle}>Where does your baby sleep?</H2>
        
        <Column style={styles.optionsContainer}>
          {sleepOptions.map(option => (
            <OptionButton
              key={option.id}
              label={option.label}
              isSelected={sleepArrangement === option.id}
              onPress={() => setSleepArrangement(option.id)}
              style={styles.optionButton}
            />
          ))}
        </Column>
        
        <Button 
          label="Continue"
          variant="primary"
          onPress={handleContinue}
          disabled={!sleepArrangement}
          style={styles.button}
        />
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
        <BackButton 
          onPress={() => {
            prevStep();
            navigation.goBack();
          }}
          color="white"
          style={styles.backButton}
        />
        
        <ProgressIndicator 
          currentStep={4} 
          totalSteps={5} 
          style={styles.progressIndicator}
        />
        
        <H2 style={styles.screenTitle}>What's your parenting experience?</H2>
        
        <Column style={styles.optionsContainer}>
          {experienceOptions.map(option => (
            <OptionButton
              key={option.id}
              label={option.label}
              isSelected={experienceLevel === option.id}
              onPress={() => setExperienceLevel(option.id)}
              style={styles.optionButton}
            />
          ))}
        </Column>
        
        <Button 
          label="Continue"
          variant="primary"
          onPress={handleContinue}
          disabled={!experienceLevel}
          style={styles.button}
        />
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
        <BackButton 
          onPress={() => {
            prevStep();
            navigation.goBack();
          }}
          color="white"
          style={styles.backButton}
        />
        
        <ProgressIndicator 
          currentStep={5} 
          totalSteps={5} 
          style={styles.progressIndicator}
        />
        
        <H2 style={styles.screenTitle}>What's your top concern right now?</H2>
        
        <Column style={styles.optionsContainer}>
          {concernOptions.map(option => (
            <OptionButton
              key={option.id}
              label={option.label}
              isSelected={topConcern === option.id}
              onPress={() => setTopConcern(option.id)}
              style={styles.optionButton}
            />
          ))}
        </Column>
        
        <Button 
          label="Continue"
          variant="primary"
          onPress={handleContinue}
          disabled={!topConcern}
          style={styles.button}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// Personalization Screen
export const PersonalizationScreen = ({ navigation }) => {
  useEffect(() => {
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
      <Container style={styles.content}>
        <H2 style={styles.screenTitle}>Creating your personalized Hatchling experience...</H2>
        
        <View style={styles.loadingAnimation}>
          <Body style={styles.loadingText}>🐣</Body>
        </View>
      </Container>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
  content: {
    flex: 1,
    padding: theme.spacing.spacing.lg,
    justifyContent: 'center',
  },
  progressIndicator: {
    marginBottom: theme.spacing.spacing.xl,
  },
  screenTitle: {
    color: theme.colors.neutral.white,
    marginBottom: theme.spacing.spacing.xl,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: theme.spacing.spacing.lg,
  },
  inputLabel: {
    marginBottom: theme.spacing.spacing.xs,
  },
  photoUploadPlaceholder: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: theme.spacing.borderRadius.md,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.spacing.xl,
  },
  photoUploadText: {
    textAlign: 'center',
  },
  button: {
    marginBottom: theme.spacing.spacing.sm,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  optionsContainer: {
    marginBottom: theme.spacing.spacing.xl,
    gap: theme.spacing.spacing.sm,
  },
  optionButton: {
    width: '100%',
  },
  loadingAnimation: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing.spacing.xxl,
  },
  loadingText: {
    fontSize: 72,
  },
};

export default {
  BabyInfoScreen,
  FeedingMethodScreen,
  SleepArrangementScreen,
  ExperienceLevelScreen,
  TopConcernScreen,
  PersonalizationScreen,
};

import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity,
  TextInput,
  Animated,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';
import mockCheckIns from '../../data/mockCheckIns';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - (theme.spacing.spacing.screenPadding * 2);

/**
 * CheckInQuestion Component
 * 
 * Renders different question types (multiple choice, text input, etc.)
 */
const CheckInQuestion = ({ question, onAnswer, currentAnswer }) => {
  const [textValue, setTextValue] = useState('');
  
  const handleTextChange = (text) => {
    setTextValue(text);
    onAnswer(question.id, text);
  };
  
  const renderQuestionByType = () => {
    switch (question.type) {
      case 'multiple_choice':
        return (
          <View style={styles.optionsContainer}>
            {question.options.map(option => (
              <TouchableOpacity 
                key={option.id}
                style={[
                  styles.optionButton,
                  currentAnswer === option.id && styles.optionButtonSelected
                ]}
                onPress={() => onAnswer(question.id, option.id)}
              >
                <Text style={[
                  styles.optionText,
                  currentAnswer === option.id && styles.optionTextSelected
                ]}>
                  {option.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
        
      case 'multiple_select':
        return (
          <View style={styles.optionsContainer}>
            {question.options.map(option => {
              const isSelected = Array.isArray(currentAnswer) && currentAnswer.includes(option.id);
              return (
                <TouchableOpacity 
                  key={option.id}
                  style={[
                    styles.optionButton,
                    isSelected && styles.optionButtonSelected
                  ]}
                  onPress={() => {
                    let newAnswer = Array.isArray(currentAnswer) ? [...currentAnswer] : [];
                    if (isSelected) {
                      newAnswer = newAnswer.filter(id => id !== option.id);
                    } else {
                      newAnswer.push(option.id);
                    }
                    onAnswer(question.id, newAnswer);
                  }}
                >
                  <View style={styles.checkboxContainer}>
                    <View style={[
                      styles.checkbox,
                      isSelected && styles.checkboxSelected
                    ]}>
                      {isSelected && <Ionicons name="checkmark" size={12} color={theme.colors.neutral.white} />}
                    </View>
                    <Text style={styles.optionText}>{option.text}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        );
        
      case 'scale':
        return (
          <View style={styles.scaleContainer}>
            <Text style={styles.scaleLabel}>{question.minLabel}</Text>
            <View style={styles.scaleButtons}>
              {Array.from({ length: question.max - question.min + 1 }).map((_, index) => {
                const value = question.min + index;
                return (
                  <TouchableOpacity 
                    key={value}
                    style={[
                      styles.scaleButton,
                      currentAnswer === value && styles.scaleButtonSelected
                    ]}
                    onPress={() => onAnswer(question.id, value)}
                  >
                    <Text style={[
                      styles.scaleButtonText,
                      currentAnswer === value && styles.scaleButtonTextSelected
                    ]}>
                      {value}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <Text style={styles.scaleLabel}>{question.maxLabel}</Text>
          </View>
        );
        
      case 'text_input':
        return (
          <TextInput
            style={styles.textInput}
            placeholder="Type your answer here..."
            value={textValue}
            onChangeText={handleTextChange}
            multiline
            textAlignVertical="top"
          />
        );
        
      default:
        return null;
    }
  };
  
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{question.text}</Text>
      {renderQuestionByType()}
    </View>
  );
};

/**
 * WeeklyCheckIn Component
 * 
 * Main component for the weekly check-in flow
 */
export default function WeeklyCheckIn({ onComplete }) {
  const [currentCheckIn] = useState(mockCheckIns[0]); // Use first check-in for demo
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  
  // Handle answer selection
  const handleAnswer = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer
    });
  };
  
  // Navigate to next question
  const handleNext = () => {
    if (currentQuestionIndex < currentCheckIn.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };
  
  // Navigate to previous question
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  // Complete check-in
  const handleComplete = () => {
    // In a real app, this would save answers to Firestore
    console.log('Check-in answers:', answers);
    onComplete();
  };
  
  // Current question
  const currentQuestion = currentCheckIn.questions[currentQuestionIndex];
  
  // Check if current question has an answer
  const hasAnswer = () => {
    const answer = answers[currentQuestion.id];
    if (answer === undefined || answer === null) return false;
    if (Array.isArray(answer) && answer.length === 0) return false;
    if (typeof answer === 'string' && answer.trim() === '') return false;
    return true;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Weekly Check-In</Text>
          <Text style={styles.headerSubtitle}>{currentCheckIn.title}</Text>
          <Text style={styles.headerDescription}>{currentCheckIn.description}</Text>
        </View>
        
        {/* Progress indicator */}
        <View style={styles.progressContainer}>
          <View style={styles.progressTrack}>
            <View 
              style={[
                styles.progressBar, 
                { 
                  width: `${((currentQuestionIndex + 1) / currentCheckIn.questions.length) * 100}%` 
                }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            Question {currentQuestionIndex + 1} of {currentCheckIn.questions.length}
          </Text>
        </View>
        
        {/* Question card */}
        {!isCompleted ? (
          <View style={styles.questionCard}>
            <CheckInQuestion 
              question={currentQuestion}
              onAnswer={handleAnswer}
              currentAnswer={answers[currentQuestion.id]}
            />
            
            {/* Navigation buttons */}
            <View style={styles.navigationContainer}>
              {currentQuestionIndex > 0 && (
                <TouchableOpacity 
                  style={styles.navigationButton}
                  onPress={handlePrevious}
                >
                  <Ionicons name="arrow-back" size={20} color={theme.colors.primary.main} />
                  <Text style={styles.navigationButtonText}>Previous</Text>
                </TouchableOpacity>
              )}
              
              <TouchableOpacity 
                style={[
                  styles.navigationButton,
                  styles.nextButton,
                  !hasAnswer() && styles.nextButtonDisabled
                ]}
                onPress={handleNext}
                disabled={!hasAnswer()}
              >
                <Text style={[
                  styles.navigationButtonText,
                  styles.nextButtonText,
                  !hasAnswer() && styles.nextButtonTextDisabled
                ]}>
                  Next
                </Text>
                <Ionicons 
                  name="arrow-forward" 
                  size={20} 
                  color={hasAnswer() ? theme.colors.neutral.white : theme.colors.neutral.light} 
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.completionCard}>
            <View style={styles.completionIconContainer}>
              <Ionicons name="checkmark-circle" size={64} color={theme.colors.primary.main} />
            </View>
            <Text style={styles.completionTitle}>Check-In Complete!</Text>
            <Text style={styles.completionText}>
              Thank you for sharing. We'll use this information to personalize your experience.
            </Text>
            <TouchableOpacity 
              style={styles.completionButton}
              onPress={handleComplete}
            >
              <Text style={styles.completionButtonText}>Return to Today</Text>
            </TouchableOpacity>
          </View>
        )}
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
    paddingBottom: theme.spacing.spacing.xxxl,
  },
  header: {
    marginBottom: theme.spacing.spacing.lg,
  },
  headerTitle: {
    ...theme.typography.textVariants.h2,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.xs,
  },
  headerSubtitle: {
    ...theme.typography.textVariants.h4,
    color: theme.colors.primary.dark,
    marginBottom: theme.spacing.spacing.xs,
  },
  headerDescription: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
  },
  progressContainer: {
    marginBottom: theme.spacing.spacing.lg,
  },
  progressTrack: {
    height: 6,
    backgroundColor: theme.colors.neutral.lighter,
    borderRadius: 3,
    marginBottom: theme.spacing.spacing.xs,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: theme.colors.primary.main,
    borderRadius: 3,
  },
  progressText: {
    ...theme.typography.textVariants.caption,
    color: theme.colors.neutral.medium,
    textAlign: 'right',
  },
  questionCard: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 16,
    padding: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.xl,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  questionContainer: {
    marginBottom: theme.spacing.spacing.lg,
  },
  questionText: {
    ...theme.typography.textVariants.h5,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.md,
  },
  optionsContainer: {
    marginTop: theme.spacing.spacing.sm,
  },
  optionButton: {
    backgroundColor: theme.colors.neutral.white,
    borderRadius: 8,
    padding: theme.spacing.spacing.md,
    marginBottom: theme.spacing.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.neutral.lighter,
  },
  optionButtonSelected: {
    backgroundColor: theme.colors.primary.lightest,
    borderColor: theme.colors.primary.main,
  },
  optionText: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
  },
  optionTextSelected: {
    color: theme.colors.primary.dark,
    fontWeight: '500',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: theme.colors.neutral.medium,
    marginRight: theme.spacing.spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: theme.colors.primary.main,
    borderColor: theme.colors.primary.main,
  },
  scaleContainer: {
    marginTop: theme.spacing.spacing.md,
  },
  scaleLabel: {
    ...theme.typography.textVariants.caption,
    color: theme.colors.neutral.medium,
    marginBottom: theme.spacing.spacing.xs,
  },
  scaleButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: theme.spacing.spacing.sm,
  },
  scaleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.neutral.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.neutral.lighter,
  },
  scaleButtonSelected: {
    backgroundColor: theme.colors.primary.main,
    borderColor: theme.colors.primary.main,
  },
  scaleButtonText: {
    ...theme.typography.textVariants.button,
    color: theme.colors.neutral.dark,
  },
  scaleButtonTextSelected: {
    color: theme.colors.neutral.white,
  },
  textInput: {
    backgroundColor: theme.colors.neutral.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.neutral.lighter,
    padding: theme.spacing.spacing.md,
    minHeight: 100,
    ...theme.typography.textVariants.body1,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.spacing.lg,
  },
  navigationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.spacing.sm,
  },
  nextButton: {
    backgroundColor: theme.colors.primary.main,
    borderRadius: 8,
    paddingHorizontal: theme.spacing.spacing.md,
  },
  nextButtonDisabled: {
    backgroundColor: theme.colors.neutral.lighter,
  },
  navigationButtonText: {
    ...theme.typography.textVariants.button,
    color: theme.colors.primary.main,
    marginHorizontal: theme.spacing.spacing.xs,
  },
  nextButtonText: {
    color: theme.colors.neutral.white,
  },
  nextButtonTextDisabled: {
    color: theme.colors.neutral.medium,
  },
  completionCard: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 16,
    padding: theme.spacing.spacing.xl,
    marginBottom: theme.spacing.spacing.xl,
    alignItems: 'center',
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  completionIconContainer: {
    marginBottom: theme.spacing.spacing.lg,
  },
  completionTitle: {
    ...theme.typography.textVariants.h3,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.md,
    textAlign: 'center',
  },
  completionText: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
    textAlign: 'center',
    marginBottom: theme.spacing.spacing.xl,
  },
  completionButton: {
    backgroundColor: theme.colors.primary.main,
    borderRadius: 8,
    paddingVertical: theme.spacing.spacing.sm,
    paddingHorizontal: theme.spacing.spacing.lg,
  },
  completionButtonText: {
    ...theme.typography.textVariants.button,
    color: theme.colors.neutral.white,
  },
});

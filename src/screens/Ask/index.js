import React, { useState } from 'react';
import { 
  View, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView,
  Text,
  StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenErrorWrapper } from '../../components/error/ErrorComponents';
import theme from '../../theme';

// Import UI components
import {
  Container,
  Row,
  Column,
  Spacer,
  Card,
  H1,
  H2,
  H3,
  Body,
  BodySmall,
  Caption,
  Button,
  TextInput,
  Section,
  BackButton,
  CategoryPill
} from '../../components/ui';

/**
 * Ask Screen
 * 
 * Q&A system with pre-written answers to common parenting questions
 * Enhanced with chat-like interface and interactive elements
 */
export default function AskScreen({ navigation }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [userMessage, setUserMessage] = useState('');
  
  // Mock data for question categories
  const categories = [
    { id: '1', name: 'Sleep', icon: '🌙' },
    { id: '2', name: 'Feeding', icon: '🍼' },
    { id: '3', name: 'Development', icon: '🧩' },
    { id: '4', name: 'Health', icon: '🩺' },
    { id: '5', name: 'Behavior', icon: '🧸' },
    { id: '6', name: 'Parenting', icon: '👨‍👩‍👧' },
  ];

  // Mock data for recommended questions
  const recommendedQuestions = [
    { 
      id: '1', 
      category: '1',
      question: 'Why is my baby suddenly fussy at night?',
      preview: 'Sleep patterns change as your baby develops. Around 4 months...',
      fullAnswer: `Sleep patterns change as your baby develops. Around 4 months, many babies experience a sleep regression due to developmental leaps and changes in sleep cycles. This is completely normal and temporary.

During this time, babies begin to cycle through light and deep sleep more like adults do, which can cause them to wake more frequently. They may also be developing new skills like rolling over or becoming more aware of their surroundings, which can disrupt sleep.

What you can do:
• Maintain a consistent bedtime routine
• Ensure the sleep environment is comfortable and conducive to sleep
• Consider an earlier bedtime if overtiredness might be a factor
• Practice putting baby down drowsy but awake to help them learn to self-soothe

Remember that this phase is temporary and usually resolves within 2-6 weeks as your baby adjusts to their new sleep patterns.`
    },
    { 
      id: '2', 
      category: '1',
      question: 'When do 4-month-olds drop a nap?',
      preview: 'Most 4-month-olds still need 3-4 naps per day, but this varies...',
      fullAnswer: `At 4 months old, most babies still need 3-4 naps per day, totaling about 4-5 hours of daytime sleep. It's typically not until around 6-8 months that babies consolidate to 3 naps, and then to 2 naps around 8-10 months.

However, every baby is different, and some may show signs of changing their nap patterns earlier. Signs your baby might be ready to drop a nap include:
• Consistently fighting a particular nap
• Taking very short naps or skipping naps entirely
• Being able to stay awake longer between sleep periods without becoming overtired
• Still sleeping well at night despite nap changes

If your 4-month-old seems to be dropping a nap, first rule out other causes like:
• A sleep regression (very common at 4 months)
• Overtiredness making it harder to fall asleep
• Environmental distractions
• Hunger or discomfort

Rather than dropping a nap completely at 4 months, focus on establishing a consistent nap routine with age-appropriate wake windows (typically 1.5-2.5 hours for a 4-month-old). If nap transitions are happening, they'll occur gradually as your baby matures.`
    },
  ];

  // Filter questions based on search query
  const getFilteredQuestions = () => {
    const allQuestions = [...recommendedQuestions];
    if (!searchQuery.trim()) return [];
    
    return allQuestions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.preview.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Get questions by category
  const getQuestionsByCategory = (categoryId) => {
    const allQuestions = [...recommendedQuestions];
    return allQuestions.filter(q => q.category === categoryId);
  };

  // Handle search submission
  const handleSearch = () => {
    if (searchQuery.trim()) {
      setShowSearchResults(true);
      setActiveCategory(null);
      setSelectedQuestion(null);
    }
  };

  // Handle category selection
  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    setShowSearchResults(false);
    setSearchQuery('');
    setSelectedQuestion(null);
  };

  // Handle question selection
  const handleQuestionSelect = (question) => {
    setSelectedQuestion(question);
  };

  // Handle back from question detail
  const handleBackFromDetail = () => {
    setSelectedQuestion(null);
  };

  // Handle send message
  const handleSendMessage = () => {
    if (userMessage.trim()) {
      // In a real app, this would send the message to a backend
      // For now, we'll just clear the input
      setUserMessage('');
    }
  };

  // Render question detail view
  const renderQuestionDetail = () => {
    return (
      <Container>
        <Row style={styles.backButtonRow}>
          <BackButton onPress={handleBackFromDetail} color="white" />
          <BodySmall color="white" style={styles.backButtonText}>Back to Questions</BodySmall>
        </Row>
        
        <Card style={styles.detailCard}>
          <H2 style={styles.detailQuestion}>{selectedQuestion.question}</H2>
          
          <View style={styles.answerScrollView}>
            <Body>{selectedQuestion.fullAnswer}</Body>
          </View>
          
          <Row style={styles.feedbackContainer} justify="space-between" align="center">
            <BodySmall>Was this helpful?</BodySmall>
            <Row style={styles.feedbackButtons}>
              <Button 
                label="Yes" 
                icon="thumbs-up-outline"
                onPress={() => console.log('Feedback: Yes')}
                variant="secondary"
                size="small"
                style={styles.feedbackButton}
              />
              <Spacer size="sm" horizontal />
              <Button 
                label="No" 
                icon="thumbs-down-outline"
                onPress={() => console.log('Feedback: No')}
                variant="secondary"
                size="small"
                style={styles.feedbackButton}
              />
            </Row>
          </Row>
        </Card>
        
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={100}
          style={styles.messageInputContainer}
        >
          <TextInput
            style={styles.messageInput}
            value={userMessage}
            onChangeText={setUserMessage}
            placeholder="Ask a follow-up question..."
            multiline
          />
          <TouchableOpacity 
            style={[
              styles.sendButton, 
              !userMessage.trim() && styles.sendButtonDisabled
            ]} 
            onPress={handleSendMessage}
            disabled={!userMessage.trim()}
          >
            <Ionicons name="send" size={20} color={theme.colors.neutral.white} />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </Container>
    );
  };

  // Render question item
  const renderQuestionItem = (item) => (
    <Card 
      key={item.id}
      style={styles.questionCard}
      elevation="soft"
      animated={true}
      pressable={true}
      onPress={() => handleQuestionSelect(item)}
    >
      <H3>{item.question}</H3>
      <BodySmall color="dark" style={styles.answerPreview}>{item.preview}</BodySmall>
      <Row style={styles.readMoreContainer} align="center">
        <Ionicons name="chevron-forward" size={24} color={theme.colors.primary.main} style={styles.chevronIcon} />
      </Row>
    </Card>
  );

  // Render main content
  const renderMainContent = () => {
    return (
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <Container>
          {/* Header with personalized greeting */}
          <Section style={styles.headerSection}>
            <H1 style={styles.headerTitle}>Hi Emma's Parent — what's on your mind today?</H1>
          </Section>
          
          {/* Search bar */}
          <Section style={styles.searchBarContainer}>
            <Card 
              style={styles.searchCard}
              elevation="soft"
            >
              <Row align="center">
                <Ionicons name="search" size={24} color={theme.colors.neutral.medium} style={styles.searchIcon} />
                <TextInput
                  style={styles.searchInput}
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  placeholder="Ask a question about sleep, feeding, or anything else..."
                  returnKeyType="search"
                  onSubmitEditing={handleSearch}
                />
              </Row>
            </Card>
          </Section>
          
          {/* Content based on selection */}
          <View style={styles.questionsContainer}>
            {/* Search Results */}
            {showSearchResults && (
              <Section>
                <H2 style={styles.sectionTitle}>
                  Search Results for "{searchQuery}"
                </H2>
                {getFilteredQuestions().length > 0 ? (
                  <Column style={styles.questionsList}>
                    {getFilteredQuestions().map(item => renderQuestionItem(item))}
                  </Column>
                ) : (
                  <Card style={styles.noResultsContainer}>
                    <Body style={styles.noResultsText}>
                      No results found for "{searchQuery}"
                    </Body>
                    <Button 
                      label="Ask this question directly"
                      onPress={() => setUserMessage(searchQuery)}
                      style={styles.askDirectlyButton}
                    />
                  </Card>
                )}
              </Section>
            )}
            
            {/* Category Questions */}
            {activeCategory && (
              <Section>
                <H2 style={styles.sectionTitle}>
                  {categories.find(c => c.id === activeCategory)?.name} Questions
                </H2>
                <Column style={styles.questionsList}>
                  {getQuestionsByCategory(activeCategory).map(item => renderQuestionItem(item))}
                </Column>
              </Section>
            )}
            
            {/* Recommended and Browse sections - show only if not searching or filtering by category */}
            {!showSearchResults && !activeCategory && (
              <>
                <Section>
                  <H2 style={styles.sectionTitle}>Recommended for You</H2>
                  <Column style={styles.questionsList}>
                    {recommendedQuestions.map(item => renderQuestionItem(item))}
                  </Column>
                </Section>
                
                <Section>
                  <H2 style={styles.sectionTitle}>Browse by Topic</H2>
                  <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.categoriesContainer}
                  >
                    {categories.map(item => (
                      <CategoryPill
                        key={item.id}
                        label={item.name}
                        icon={item.icon}
                        isSelected={activeCategory === item.id}
                        onPress={() => handleCategorySelect(item.id)}
                        style={styles.categoryPill}
                      />
                    ))}
                  </ScrollView>
                </Section>
              </>
            )}
            
            <Spacer size="xl" />
          </View>
        </Container>
      </ScrollView>
    );
  };

  return (
    <ScreenErrorWrapper screenName="Ask" navigation={navigation}>
      <View style={styles.container}>
        {selectedQuestion ? renderQuestionDetail() : renderMainContent()}
      </View>
    </ScreenErrorWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral.lightest,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  headerSection: {
    paddingTop: theme.spacing.spacing.lg,
    paddingHorizontal: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.md,
  },
  headerTitle: {
    fontSize: 28,
    textAlign: 'center',
    color: theme.colors.primary.dark,
    fontFamily: 'SFProDisplay-Bold',
  },
  searchBarContainer: {
    paddingHorizontal: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.xl,
  },
  searchCard: {
    backgroundColor: theme.colors.neutral.white,
    borderRadius: 30,
    padding: theme.spacing.spacing.sm,
    paddingHorizontal: theme.spacing.spacing.md,
  },
  searchIcon: {
    marginRight: theme.spacing.spacing.sm,
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: theme.colors.neutral.dark,
  },
  sectionTitle: {
    marginBottom: theme.spacing.spacing.md,
    color: theme.colors.primary.dark,
    paddingHorizontal: theme.spacing.spacing.lg,
  },
  questionsContainer: {
    flex: 1,
  },
  questionsList: {
    paddingHorizontal: theme.spacing.spacing.lg,
  },
  questionCard: {
    backgroundColor: theme.colors.secondary.light,
    borderRadius: theme.spacing.borderRadius.lg,
    padding: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.md,
  },
  answerPreview: {
    marginTop: theme.spacing.spacing.xs,
    marginBottom: theme.spacing.spacing.sm,
  },
  readMoreContainer: {
    justifyContent: 'flex-end',
  },
  chevronIcon: {
    alignSelf: 'flex-end',
  },
  categoriesContainer: {
    paddingHorizontal: theme.spacing.spacing.lg,
    paddingBottom: theme.spacing.spacing.md,
  },
  categoryPill: {
    marginRight: theme.spacing.spacing.sm,
    marginBottom: theme.spacing.spacing.sm,
  },
  noResultsContainer: {
    padding: theme.spacing.spacing.lg,
    alignItems: 'center',
    marginHorizontal: theme.spacing.spacing.lg,
  },
  noResultsText: {
    textAlign: 'center',
    marginBottom: theme.spacing.spacing.md,
  },
  askDirectlyButton: {
    width: '100%',
  },
  backButtonRow: {
    paddingHorizontal: theme.spacing.spacing.md,
    paddingVertical: theme.spacing.spacing.md,
    alignItems: 'center',
  },
  backButtonText: {
    marginLeft: theme.spacing.spacing.sm,
  },
  detailCard: {
    flex: 1,
    margin: theme.spacing.spacing.md,
    padding: theme.spacing.spacing.lg,
    marginBottom: 80,
  },
  detailQuestion: {
    marginBottom: theme.spacing.spacing.md,
  },
  answerScrollView: {
    flex: 1,
    marginBottom: theme.spacing.spacing.lg,
  },
  feedbackContainer: {
    paddingTop: theme.spacing.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral.light,
  },
  feedbackButtons: {
    justifyContent: 'flex-end',
  },
  feedbackButton: {
    minWidth: 80,
  },
  messageInputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.neutral.white,
    padding: theme.spacing.spacing.sm,
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral.light,
  },
  messageInput: {
    flex: 1,
    minHeight: 40,
    maxHeight: 100,
    backgroundColor: theme.colors.neutral.lighter,
    borderRadius: 20,
    paddingHorizontal: theme.spacing.spacing.md,
    paddingVertical: theme.spacing.spacing.xs,
    marginRight: theme.spacing.spacing.sm,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: theme.colors.neutral.medium,
  },
});

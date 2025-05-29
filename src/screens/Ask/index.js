import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView,
  Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenErrorWrapper } from '../../components/error/ErrorComponents';
import theme from '../../theme';

// Import UI components
import {
  Container,
  SafeContainer,
  ScrollContainer,
  Section,
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
  Label,
  AppHeader,
  PrimaryButton,
  SecondaryButton,
  TextButton,
  IconButton,
  Input
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
  ];

  // Mock data for recent questions
  const recentQuestions = [
    { 
      id: '1', 
      category: '1',
      question: 'Why is my baby waking up every hour at night?',
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
      category: '2',
      question: 'How do I know if my baby is getting enough milk?',
      preview: 'Look for these signs of satisfaction after feeding...',
      fullAnswer: `It can be challenging to know exactly how much milk your baby is getting, especially if you're breastfeeding. Here are reliable indicators that your baby is getting enough milk:

Physical signs:
• Steady weight gain following initial newborn weight loss
• At least 6-8 wet diapers per day after the first week
• Regular bowel movements (frequency varies by age and feeding method)
• Your baby appears satisfied after feedings
• Good skin elasticity and moist mouth

Feeding behavior:
• You can hear or see your baby swallowing during feeds
• Your baby seems content after most feedings
• Feeding sessions last approximately 20-40 minutes (breastfeeding) or your baby finishes the expected amount of formula

If you're concerned about your baby's intake, tracking wet/dirty diapers and regular weight checks can provide reassurance. Always consult your pediatrician if you have ongoing concerns about feeding or weight gain.`
    },
    { 
      id: '3', 
      category: '3',
      question: 'When should my baby start rolling over?',
      preview: 'Most babies begin rolling from tummy to back around 4 months...',
      fullAnswer: `Rolling over is an important milestone in your baby's physical development. Here's what you can expect:

• Most babies start rolling from tummy to back between 4-5 months
• Rolling from back to tummy typically happens between 5-6 months
• Some babies may roll as early as 3 months or as late as 7 months
• Some babies may skip rolling from tummy to back and go straight to rolling from back to tummy

To encourage rolling:
• Provide plenty of supervised tummy time daily
• Place toys slightly out of reach during floor play to encourage movement
• Gently assist your baby by showing them how to shift their weight to the side

Remember that all babies develop at their own pace. If your baby hasn't started rolling by 6-7 months, or if they roll one way but not the other by 8 months, it's a good idea to mention it to your pediatrician at your next visit.`
    },
  ];

  // Mock data for common questions
  const commonQuestions = [
    { 
      id: '4', 
      category: '1',
      question: 'When will my baby start sleeping through the night?',
      preview: 'Every baby is different, but most begin to sleep for longer stretches...',
      fullAnswer: `The timeline for sleeping through the night varies significantly from baby to baby. Here's a general guideline:

• Newborns (0-3 months): Sleep is irregular with frequent wakings every 2-4 hours to feed
• 3-6 months: Many babies begin to have longer sleep stretches of 5-6 hours
• 6-9 months: Some babies may sleep 8-10 hours without feeding
• 9-12 months: Many babies can sleep 10-12 hours through the night

Factors that influence when a baby sleeps through the night include:
• Individual temperament and development
• Feeding method and schedule
• Sleep environment and routines
• Growth spurts and developmental milestones

It's important to have realistic expectations and understand that night wakings are normal and necessary for many babies, especially those who are breastfed. Consistent bedtime routines, age-appropriate sleep schedules, and gradually helping your baby learn to self-soothe can support the development of healthy sleep patterns.`
    },
    { 
      id: '5', 
      category: '2',
      question: 'When should I start solid foods?',
      preview: 'Most pediatricians recommend introducing solids around 6 months...',
      fullAnswer: `The American Academy of Pediatrics recommends introducing solid foods around 6 months of age. Here are signs your baby is ready for solids:

• Can sit up with minimal support
• Has good head control
• Shows interest in food (watches you eat, reaches for food)
• Has lost the tongue-thrust reflex (no longer automatically pushes food out of mouth)
• Seems hungry after a full day of milk feedings

When starting solids:
• Begin with single-ingredient foods without added sugar or salt
• Wait 3-5 days between introducing new foods to watch for allergic reactions
• Offer a variety of flavors and textures as your baby becomes more experienced
• Continue breast milk or formula as the primary source of nutrition through the first year

Common first foods include iron-fortified infant cereal, pureed vegetables and fruits, and soft, mashed foods. Some families choose to follow a baby-led weaning approach with appropriate finger foods instead of purees. Discuss your plans with your pediatrician to determine the best approach for your baby.`
    },
  ];

  // Filter questions based on search query
  const getFilteredQuestions = () => {
    const allQuestions = [...recentQuestions, ...commonQuestions];
    if (!searchQuery.trim()) return [];
    
    return allQuestions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.preview.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Get questions by category
  const getQuestionsByCategory = (categoryId) => {
    const allQuestions = [...recentQuestions, ...commonQuestions];
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
        <SafeContainer>
          <Row style={styles.backButtonRow}>
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={handleBackFromDetail}
            >
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
              <BodySmall color="white" style={styles.backButtonText}>Back to Questions</BodySmall>
            </TouchableOpacity>
          </Row>
          
          <Card style={styles.detailCard}>
            <H2 style={styles.detailQuestion}>{selectedQuestion.question}</H2>
            
            <ScrollContainer style={styles.answerScrollView}>
              <Body>{selectedQuestion.fullAnswer}</Body>
            </ScrollContainer>
            
            <Row style={styles.feedbackContainer} justify="space-between" align="center">
              <BodySmall>Was this helpful?</BodySmall>
              <Row style={styles.feedbackButtons}>
                <SecondaryButton 
                  title="Yes" 
                  icon="thumbs-up-outline"
                  onPress={() => console.log('Feedback: Yes')}
                  style={styles.feedbackButton}
                />
                <Spacer size={8} horizontal />
                <SecondaryButton 
                  title="No" 
                  icon="thumbs-down-outline"
                  onPress={() => console.log('Feedback: No')}
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
        </SafeContainer>
      </Container>
    );
  };

  // Render question item
  const renderQuestionItem = (item) => (
    <Card 
      key={item.id}
      style={styles.questionCard}
    >
      <TouchableOpacity onPress={() => handleQuestionSelect(item)}>
        <H3>{item.question}</H3>
        <BodySmall color="medium" style={styles.answerPreview}>{item.preview}</BodySmall>
        <Row style={styles.readMoreContainer} align="center">
          <TextButton 
            title="Read more" 
            onPress={() => handleQuestionSelect(item)}
            style={styles.readMoreButton}
          />
          <Ionicons name="chevron-forward" size={16} color={theme.colors.primary.main} />
        </Row>
      </TouchableOpacity>
    </Card>
  );

  // Render main content
  const renderMainContent = () => {
    return (
      <Container>
        <SafeContainer>
          {/* App header with logo */}
          <AppHeader title="Ask" />
          
          {/* Search bar */}
          <Section style={styles.searchBarContainer}>
            <Row>
              <TextInput
                style={styles.searchInput}
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search questions..."
                returnKeyType="search"
                onSubmitEditing={handleSearch}
              />
              <TouchableOpacity 
                style={styles.searchButton} 
                onPress={handleSearch}
              >
                <Ionicons name="search" size={20} color={theme.colors.neutral.white} />
              </TouchableOpacity>
            </Row>
          </Section>
          
          {/* Categories */}
          <Section>
            <H2 color="white" style={styles.sectionTitle}>Browse by Topic</H2>
            <ScrollView 
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesContainer}
            >
              {categories.map(item => (
                <TouchableOpacity 
                  key={item.id}
                  style={[
                    styles.categoryButton,
                    activeCategory === item.id && styles.categoryButtonActive
                  ]}
                  onPress={() => handleCategorySelect(item.id)}
                >
                  <Text style={styles.categoryIcon}>{item.icon}</Text>
                  <BodySmall 
                    style={activeCategory === item.id ? styles.categoryNameActive : styles.categoryName}
                  >
                    {item.name}
                  </BodySmall>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </Section>
          
          {/* Content based on selection */}
          <ScrollContainer style={styles.questionsContainer} showsVerticalScrollIndicator={false}>
            {/* Search Results */}
            {showSearchResults && (
              <Section>
                <H2 color="white" style={styles.sectionTitle}>
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
                    <PrimaryButton 
                      title="Ask this question directly"
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
                <H2 color="white" style={styles.sectionTitle}>
                  {categories.find(c => c.id === activeCategory)?.name} Questions
                </H2>
                <Column style={styles.questionsList}>
                  {getQuestionsByCategory(activeCategory).map(item => renderQuestionItem(item))}
                </Column>
              </Section>
            )}
            
            {/* Recent and Common questions - show only if not searching or filtering by category */}
            {!showSearchResults && !activeCategory && (
              <>
                <Section>
                  <H2 color="white" style={styles.sectionTitle}>Recent Questions</H2>
                  <Column style={styles.questionsList}>
                    {recentQuestions.map(item => renderQuestionItem(item))}
                  </Column>
                </Section>
                
                <Section>
                  <H2 color="white" style={styles.sectionTitle}>Common Questions</H2>
                  <Column style={styles.questionsList}>
                    {commonQuestions.map(item => renderQuestionItem(item))}
                  </Column>
                </Section>
              </>
            )}
            
            <Spacer size="xl" />
          </ScrollContainer>
        </SafeContainer>
      </Container>
    );
  };

  return (
    <ScreenErrorWrapper screenName="Ask" navigation={navigation}>
      {selectedQuestion ? renderQuestionDetail() : renderMainContent()}
    </ScreenErrorWrapper>
  );
}

const styles = {
  searchBarContainer: {
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 24,
    paddingHorizontal: 16,
    color: '#FFFFFF',
    fontSize: 16,
  },
  searchButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  categoriesContainer: {
    paddingBottom: 16,
  },
  categoryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    alignItems: 'center',
    minWidth: 80,
  },
  categoryButtonActive: {
    backgroundColor: '#FFFFFF',
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  categoryName: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  categoryNameActive: {
    color: theme.colors.primary.main,
    textAlign: 'center',
  },
  questionsContainer: {
    flex: 1,
  },
  questionsList: {
    gap: 12,
  },
  questionCard: {
    padding: 16,
  },
  answerPreview: {
    marginTop: 8,
    marginBottom: 12,
  },
  readMoreContainer: {
    marginTop: 8,
  },
  readMoreButton: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    height: 'auto',
  },
  noResultsContainer: {
    padding: 16,
    alignItems: 'center',
  },
  noResultsText: {
    textAlign: 'center',
    marginBottom: 16,
  },
  askDirectlyButton: {
    marginTop: 8,
  },
  backButtonRow: {
    marginBottom: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  backButtonText: {
    marginLeft: 8,
  },
  detailCard: {
    padding: 16,
    marginBottom: 16,
  },
  detailQuestion: {
    marginBottom: 16,
  },
  answerScrollView: {
    maxHeight: 400,
    marginBottom: 16,
  },
  feedbackContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
  },
  feedbackButtons: {
    marginLeft: 16,
  },
  feedbackButton: {
    height: 36,
    paddingVertical: 0,
  },
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
  },
  messageInput: {
    flex: 1,
    minHeight: 40,
    maxHeight: 100,
    color: '#FFFFFF',
    fontSize: 16,
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: theme.colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  sendButtonDisabled: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
};

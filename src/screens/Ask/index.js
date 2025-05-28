import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BackgroundContainer from '../../components/decorations/BackgroundContainer';
import theme from '../../theme';
import { ScreenErrorWrapper } from '../../components/error/ErrorComponents';

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
      <View style={styles.detailContainer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={handleBackFromDetail}
        >
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          <Text style={styles.backButtonText}>Back to Questions</Text>
        </TouchableOpacity>
        
        <View style={styles.detailCard}>
          <Text style={styles.detailQuestion}>{selectedQuestion.question}</Text>
          
          <ScrollView style={styles.answerScrollView}>
            <Text style={styles.detailAnswer}>{selectedQuestion.fullAnswer}</Text>
          </ScrollView>
          
          <View style={styles.feedbackContainer}>
            <Text style={styles.feedbackQuestion}>Was this helpful?</Text>
            <View style={styles.feedbackButtons}>
              <TouchableOpacity style={styles.feedbackButton}>
                <Ionicons name="thumbs-up-outline" size={20} color={theme.colors.primary.main} />
                <Text style={styles.feedbackButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.feedbackButton}>
                <Ionicons name="thumbs-down-outline" size={20} color={theme.colors.primary.main} />
                <Text style={styles.feedbackButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
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
            style={[styles.sendButton, !userMessage.trim() && styles.sendButtonDisabled]} 
            onPress={handleSendMessage}
            disabled={!userMessage.trim()}
          >
            <Ionicons name="send" size={20} color={theme.colors.neutral.white} />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  };

  // Render question item
  const renderQuestionItem = (item) => (
    <TouchableOpacity 
      key={item.id}
      style={styles.questionCard}
      onPress={() => handleQuestionSelect(item)}
    >
      <Text style={styles.questionText}>{item.question}</Text>
      <Text style={styles.answerPreview}>{item.preview}</Text>
      <View style={styles.readMoreContainer}>
        <Text style={styles.readMoreText}>Read more</Text>
        <Ionicons name="chevron-forward" size={16} color={theme.colors.primary.main} />
      </View>
    </TouchableOpacity>
  );

  // Render main content
  const renderMainContent = () => {
    return (
      <View style={styles.mainContentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Ask Hatchling</Text>
        </View>
        
        {/* Search bar */}
        <View style={styles.searchBarContainer}>
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
        </View>
        
        {/* Categories */}
        <Text style={styles.sectionTitle}>Browse by Topic</Text>
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
              <Text style={[
                styles.categoryName,
                activeCategory === item.id && styles.categoryNameActive
              ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        {/* Content based on selection */}
        <ScrollView style={styles.questionsContainer} showsVerticalScrollIndicator={false}>
          {/* Search Results */}
          {showSearchResults && (
            <>
              <Text style={styles.sectionTitle}>
                Search Results for "{searchQuery}"
              </Text>
              {getFilteredQuestions().length > 0 ? (
                <View style={styles.questionsList}>
                  {getFilteredQuestions().map(item => renderQuestionItem(item))}
                </View>
              ) : (
                <View style={styles.noResultsContainer}>
                  <Text style={styles.noResultsText}>
                    No results found for "{searchQuery}"
                  </Text>
                  <TouchableOpacity 
                    style={styles.askDirectlyButton}
                    onPress={() => setUserMessage(searchQuery)}
                  >
                    <Text style={styles.askDirectlyButtonText}>
                      Ask this question directly
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </>
          )}
          
          {/* Category Questions */}
          {activeCategory && (
            <>
              <Text style={styles.sectionTitle}>
                {categories.find(c => c.id === activeCategory)?.name} Questions
              </Text>
              <View style={styles.questionsList}>
                {getQuestionsByCategory(activeCategory).map(item => renderQuestionItem(item))}
              </View>
            </>
          )}
          
          {/* Recent and Common questions - show only if not searching or filtering by category */}
          {!showSearchResults && !activeCategory && (
            <>
              <Text style={styles.sectionTitle}>Recent Questions</Text>
              <View style={styles.questionsList}>
                {recentQuestions.map(item => renderQuestionItem(item))}
              </View>
              
              <Text style={styles.sectionTitle}>Common Questions</Text>
              <View style={styles.questionsList}>
                {commonQuestions.map(item => renderQuestionItem(item))}
              </View>
              
              <View style={styles.askDirectlySection}>
                <Text style={styles.askDirectlySectionTitle}>
                  Don't see what you're looking for?
                </Text>
                <TouchableOpacity 
                  style={styles.askNewQuestionButton}
                  onPress={() => setUserMessage("I have a question about...")}
                >
                  <Ionicons 
                    name="chatbubble-ellipses-outline" 
                    size={20} 
                    color="#FFFFFF" 
                    style={styles.askNewQuestionIcon} 
                  />
                  <Text style={styles.askNewQuestionText}>
                    Ask a New Question
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </ScrollView>
      </View>
    );
  };

  return (
    <ScreenErrorWrapper screenName="Ask" navigation={navigation}>
      <BackgroundContainer>
        <SafeAreaView style={styles.container}>
          {selectedQuestion ? renderQuestionDetail() : renderMainContent()}
        </SafeAreaView>
      </BackgroundContainer>
    </ScreenErrorWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContentContainer: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 24,
    color: '#FFFFFF',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: 'SFProText-Regular',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchButton: {
    backgroundColor: theme.colors.primary.main,
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 20,
    color: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 12,
    marginTop: 8,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  categoryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryButtonActive: {
    backgroundColor: '#FFFFFF',
  },
  categoryIcon: {
    fontSize: 18,
    marginRight: 6,
  },
  categoryName: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
  categoryNameActive: {
    color: theme.colors.primary.main,
  },
  questionsContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  questionsList: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  questionCard: {
    backgroundColor: '#F8EFE0',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  questionText: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    color: '#004D4D',
    marginBottom: 8,
  },
  answerPreview: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    color: '#004D4D',
    opacity: 0.8,
    marginBottom: 12,
    lineHeight: 20,
  },
  readMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readMoreText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 14,
    color: theme.colors.primary.main,
    marginRight: 4,
  },
  noResultsContainer: {
    backgroundColor: '#F8EFE0',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  noResultsText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: '#004D4D',
    textAlign: 'center',
    marginBottom: 16,
  },
  askDirectlyButton: {
    backgroundColor: theme.colors.primary.main,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  askDirectlyButtonText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 14,
    color: '#FFFFFF',
  },
  askDirectlySection: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  askDirectlySectionTitle: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
  },
  askNewQuestionButton: {
    backgroundColor: theme.colors.primary.main,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  askNewQuestionIcon: {
    marginRight: 8,
  },
  askNewQuestionText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
  detailContainer: {
    flex: 1,
    padding: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButtonText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 8,
  },
  detailCard: {
    backgroundColor: '#F8EFE0',
    borderRadius: 20,
    padding: 20,
    flex: 1,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  detailQuestion: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 22,
    color: '#004D4D',
    marginBottom: 16,
    lineHeight: 28,
  },
  answerScrollView: {
    flex: 1,
  },
  detailAnswer: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    color: '#004D4D',
    lineHeight: 24,
  },
  feedbackContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 77, 77, 0.1)',
    paddingTop: 16,
  },
  feedbackQuestion: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: '#004D4D',
    marginBottom: 12,
    textAlign: 'center',
  },
  feedbackButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  feedbackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(74, 155, 155, 0.1)',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 8,
  },
  feedbackButtonText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 14,
    color: theme.colors.primary.main,
    marginLeft: 6,
  },
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  messageInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'SFProText-Regular',
    maxHeight: 100,
    paddingVertical: 8,
  },
  sendButton: {
    backgroundColor: theme.colors.primary.main,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  sendButtonDisabled: {
    backgroundColor: 'rgba(74, 155, 155, 0.5)',
  },
});

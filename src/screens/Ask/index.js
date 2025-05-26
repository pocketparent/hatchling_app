import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { AppContext } from '../../App';
import theme from '../../src/theme';

const AskScreen = () => {
  const { babyName, babyAge } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  
  // Calculate baby's age in months
  const ageInMonths = Math.floor(babyAge / 30);
  
  // Categories
  const categories = [
    { id: 'all', label: 'All', icon: 'apps-outline', color: theme.colors.primary.main },
    { id: 'sleep', label: 'Sleep', icon: 'moon-outline', color: theme.colors.content.sleep },
    { id: 'feeding', label: 'Feeding', icon: 'nutrition-outline', color: theme.colors.content.feeding },
    { id: 'development', label: 'Development', icon: 'trending-up-outline', color: theme.colors.content.development },
    { id: 'health', label: 'Health', icon: 'fitness-outline', color: theme.colors.content.health },
    { id: 'behavior', label: 'Behavior', icon: 'happy-outline', color: theme.colors.content.behavior }
  ];
  
  // Mock questions data
  const questions = [
    {
      id: 'q001',
      question: 'When should my baby start sleeping through the night?',
      answer: 'Most babies are developmentally capable of sleeping for longer stretches (6+ hours) around 4-6 months, though many continue to wake. "Sleeping through the night" is often defined as 6-8 hours, not necessarily 10-12 hours or matching adult sleep cycles.\n\nFactors affecting sleep consolidation include:\n• Physical development and weight gain\n• Feeding patterns and caloric needs\n• Individual temperament\n• Sleep associations and routines\n\nRemember that night wakings are biologically normal for babies and serve protective functions. If your current sleep situation works for your family, there's no need to change it based on external expectations.',
      category: 'sleep',
      ageRange: [0, 365]
    },
    {
      id: 'q002',
      question: 'How much tummy time should my 4-month-old get?',
      answer: 'At 4 months, aim for 20-30 minutes of total tummy time daily, broken into shorter sessions throughout the day (3-5 minutes each to start, gradually increasing as tolerated).\n\nQuality matters more than quantity. Watch for signs that your baby is engaging and building strength during tummy time:\n• Lifting head higher (working toward 90 degrees)\n• Pushing up on forearms or straightening arms\n• Looking around while maintaining position\n• Reaching for toys\n\nIf your baby dislikes tummy time, try these approaches:\n• Timing it after naps but before feeding\n• Placing baby on your chest while you're reclined\n• Using a rolled towel under the chest/armpits for support\n• Providing interesting toys or a mirror\n• Getting down on their level and engaging face-to-face',
      category: 'development',
      ageRange: [90, 180]
    },
    {
      id: 'q003',
      question: 'Is my baby getting enough breast milk?',
      answer: 'Without measuring bottle volumes, you can tell your breastfed baby is getting enough milk through these indicators:\n\nReliable signs of adequate intake:\n• 6+ wet diapers daily (clear or pale yellow urine)\n• Regular bowel movements (at least 3-4 per day in the first month, then may decrease)\n• Weight gain following their growth curve\n• Alert and content after most feedings\n• Meeting developmental milestones\n\nBreastfeeding patterns:\n• 8-12 feedings in 24 hours for newborns\n• You can hear swallowing during feeds\n• Baby's sucking pattern changes from quick sucks to deeper, rhythmic suck-swallow patterns\n• Breasts feel softer after feeding\n\nIf you're concerned about milk supply, consult with a lactation consultant before supplementing, as this can sometimes create a cycle that further reduces supply.',
      category: 'feeding',
      ageRange: [0, 365]
    },
    {
      id: 'q004',
      question: 'When should I worry about a fever?',
      answer: 'Fever guidelines by age:\n\n0-3 months: Contact doctor for any temperature of 100.4°F (38°C) or higher immediately, even if baby seems well otherwise.\n\n3-6 months: Call doctor for temperatures above 101°F (38.3°C), or for any fever lasting more than 24 hours.\n\n6-24 months: Call doctor for temperatures above 103°F (39.4°C), or for fevers lasting more than 2-3 days.\n\nRegardless of temperature, seek medical attention if your baby shows these signs:\n• Unusual lethargy or excessive irritability\n• Difficulty waking\n• Rash that doesn't fade when pressed\n• Difficulty breathing\n• Signs of dehydration (dry mouth, no tears, fewer wet diapers)\n• Persistent vomiting or diarrhea\n• Stiff neck or sensitivity to light\n\nRemember that fever itself isn't an illness but a sign that the body is fighting infection. How your baby acts often matters more than the number on the thermometer.',
      category: 'health',
      ageRange: [0, 730]
    },
    {
      id: 'q005',
      question: 'Why is my baby suddenly fussy at the breast?',
      answer: 'Several factors can cause temporary breast fussiness around 4 months:\n\n• Distraction: Increased awareness makes babies easily distracted during feeds. Try feeding in a quiet, dimly lit room.\n\n• Teething: Gum discomfort can make nursing uncomfortable. Try a cold teether before feeding or gentle gum massage.\n\n• Ear infection: Can cause pain when swallowing or lying in feeding positions. Check for other symptoms like ear tugging or fever.\n\n• Growth spurt: May cause temporary fussiness as baby demands more milk. Increase feeding frequency for 2-3 days to boost supply.\n\n• Flow preference: Some babies develop preference for faster bottle flow if combination feeding. Try paced bottle feeding techniques.\n\n• Milk composition changes: As your baby ages, milk composition naturally adjusts. This usually resolves within a few days.\n\nIf fussiness persists more than a week, is accompanied by poor weight gain, or baby refuses multiple feeds, consult a lactation specialist or pediatrician.',
      category: 'feeding',
      ageRange: [90, 180]
    }
  ];
  
  // Filter questions based on search and category
  const filteredQuestions = questions.filter(q => {
    const matchesSearch = searchQuery === '' || 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || q.category === selectedCategory;
    
    const matchesAge = q.ageRange[0] <= babyAge && q.ageRange[1] >= babyAge;
    
    return matchesSearch && matchesCategory && matchesAge;
  });
  
  // Toggle question expansion
  const toggleQuestion = (id) => {
    if (expandedQuestion === id) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(id);
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.backgroundElements}>
        {/* Decorative elements */}
        <View style={[styles.decorativeElement, { top: 50, left: 20 }]} />
        <View style={[styles.decorativeElement, { top: 120, right: 30 }]} />
        <View style={[styles.decorativeStar, { top: 80, right: 50 }]} />
        <View style={[styles.decorativeLeaf, { top: 100, right: 20 }]} />
      </View>
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ask Hatchling</Text>
        <Text style={styles.headerSubtitle}>Common questions for {babyName} at {ageInMonths} months</Text>
      </View>
      
      {/* Search bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={theme.colors.neutral.medium} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search questions..."
          placeholderTextColor={theme.colors.neutral.medium}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery !== '' && (
          <TouchableOpacity onPress={() => setSearchQuery('')} style={styles.clearButton}>
            <Ionicons name="close-circle" size={20} color={theme.colors.neutral.medium} />
          </TouchableOpacity>
        )}
      </View>
      
      {/* Categories */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && styles.categoryButtonActive,
              selectedCategory === category.id && { borderColor: category.color }
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <View style={[
              styles.categoryIcon,
              { backgroundColor: category.color + '20' }
            ]}>
              <Ionicons name={category.icon} size={20} color={category.color} />
            </View>
            <Text style={[
              styles.categoryText,
              selectedCategory === category.id && styles.categoryTextActive,
              selectedCategory === category.id && { color: category.color }
            ]}>{category.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      {/* Questions list */}
      <ScrollView style={styles.questionsContainer}>
        {filteredQuestions.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="search" size={40} color={theme.colors.neutral.medium} />
            <Text style={styles.emptyStateTitle}>No questions found</Text>
            <Text style={styles.emptyStateText}>Try adjusting your search or category filters</Text>
          </View>
        ) : (
          filteredQuestions.map(q => (
            <View key={q.id} style={styles.questionCard}>
              <TouchableOpacity 
                style={styles.questionHeader}
                onPress={() => toggleQuestion(q.id)}
              >
                <View style={[
                  styles.categoryDot,
                  { backgroundColor: categories.find(c => c.id === q.category)?.color }
                ]} />
                <Text style={styles.questionText}>{q.question}</Text>
                <Ionicons 
                  name={expandedQuestion === q.id ? "chevron-up" : "chevron-down"} 
                  size={20} 
                  color={theme.colors.neutral.dark} 
                />
              </TouchableOpacity>
              
              {expandedQuestion === q.id && (
                <View style={styles.answerContainer}>
                  <Text style={styles.answerText}>{q.answer}</Text>
                  
                  <View style={styles.answerActions}>
                    <TouchableOpacity style={styles.answerAction}>
                      <Ionicons name="bookmark-outline" size={20} color={theme.colors.primary.main} />
                      <Text style={styles.answerActionText}>Save</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.answerAction}>
                      <Ionicons name="share-outline" size={20} color={theme.colors.primary.main} />
                      <Text style={styles.answerActionText}>Share</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.answerAction}>
                      <Ionicons name="happy-outline" size={20} color={theme.colors.primary.main} />
                      <Text style={styles.answerActionText}>Helpful</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          ))
        )}
        
        {/* Ask your own question */}
        <View style={styles.askYourOwnContainer}>
          <Text style={styles.askYourOwnTitle}>Don't see your question?</Text>
          <TouchableOpacity style={styles.askYourOwnButton}>
            <Ionicons name="chatbubble-outline" size={20} color="#FFFFFF" />
            <Text style={styles.askYourOwnButtonText}>Ask a Question</Text>
          </TouchableOpacity>
        </View>
        
        {/* Spacing at bottom */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary.main,
  },
  backgroundElements: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  decorativeElement: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  decorativeStar: {
    position: 'absolute',
    width: 12,
    height: 12,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    transform: [{ rotate: '180deg' }],
  },
  decorativeLeaf: {
    position: 'absolute',
    width: 20,
    height: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    transform: [{ rotate: '45deg' }],
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.9,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    color: theme.colors.neutral.darker,
  },
  clearButton: {
    padding: 5,
  },
  categoriesContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  categoryButtonActive: {
    backgroundColor: '#FFFFFF',
  },
  categoryIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  categoryText: {
    color: theme.colors.neutral.dark,
    fontWeight: '500',
  },
  categoryTextActive: {
    fontWeight: '600',
  },
  questionsContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.neutral.dark,
    marginTop: 15,
    marginBottom: 5,
  },
  emptyStateText: {
    color: theme.colors.neutral.medium,
    textAlign: 'center',
  },
  questionCard: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
  },
  questionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  categoryDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  questionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.primary.dark,
    marginRight: 10,
  },
  answerContainer: {
    padding: 15,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral.lighter,
  },
  answerText: {
    fontSize: 15,
    lineHeight: 22,
    color: theme.colors.neutral.darker,
  },
  answerActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral.lighter,
  },
  answerAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  answerActionText: {
    marginLeft: 5,
    color: theme.colors.primary.main,
    fontWeight: '500',
  },
  askYourOwnContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  askYourOwnTitle: {
    fontSize: 16,
    color: theme.colors.neutral.dark,
    marginBottom: 10,
  },
  askYourOwnButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary.main,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
  },
  askYourOwnButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default AskScreen;

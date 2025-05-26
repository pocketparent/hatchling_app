import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { AppContext } from '../../../../App';

const HelpCenterScreen = ({ navigation }) => {
  const { currentTheme } = useContext(AppContext);
  
  // Use current theme based on dark mode
  const colors = currentTheme.colors;
  
  // FAQ data
  const faqs = [
    {
      id: '1',
      question: 'How do I track my baby\'s milestones?',
      answer: 'You can track your baby\'s milestones in the Journey tab. Select a developmental domain and check off milestones as your baby achieves them.'
    },
    {
      id: '2',
      question: 'How do I save an insight for later?',
      answer: 'On any insight card, tap the "Save" button at the bottom. You can find all saved insights in the Saved tab.'
    },
    {
      id: '3',
      question: 'Can I change my baby\'s information?',
      answer: 'Yes, you can update your baby\'s name and birthday in the Settings tab under the Profile section.'
    },
    {
      id: '4',
      question: 'How do I enable dark mode?',
      answer: 'Go to Settings and toggle the Dark Mode switch in the Appearance section.'
    },
    {
      id: '5',
      question: 'How do I backup my data?',
      answer: 'Go to Settings > Backup & Sync to configure automatic backups or manually backup your data.'
    }
  ];
  
  // Render FAQ item
  const renderFaqItem = ({ item }) => (
    <View style={[styles.faqItem, { borderBottomColor: colors.neutral.lighter }]}>
      <Text style={[styles.question, { color: colors.neutral.darkest }]}>{item.question}</Text>
      <Text style={[styles.answer, { color: colors.neutral.dark }]}>{item.answer}</Text>
    </View>
  );
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.neutral.white }]}>
      <View style={[styles.header, { borderBottomColor: colors.neutral.lighter }]}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.primary.main} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.neutral.darkest }]}>Help Center</Text>
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary.dark }]}>Frequently Asked Questions</Text>
          
          <FlatList
            data={faqs}
            renderItem={renderFaqItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>
        
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary.dark }]}>Get More Help</Text>
          
          <TouchableOpacity 
            style={[styles.helpButton, { backgroundColor: colors.primary.main }]}
            onPress={() => navigation.navigate('Contact')}
          >
            <Ionicons name="mail" size={20} color="#FFFFFF" style={styles.buttonIcon} />
            <Text style={styles.helpButtonText}>Contact Support</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.helpButton, { backgroundColor: colors.primary.light }]}
          >
            <Ionicons name="book" size={20} color="#FFFFFF" style={styles.buttonIcon} />
            <Text style={styles.helpButtonText}>View User Guide</Text>
          </TouchableOpacity>
        </View>
        
        {/* Spacing at bottom */}
        <View style={{ height: 40 }} />
      </ScrollView>
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
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  faqItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  answer: {
    fontSize: 14,
    lineHeight: 20,
  },
  helpButton: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonIcon: {
    marginRight: 10,
  },
  helpButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HelpCenterScreen;

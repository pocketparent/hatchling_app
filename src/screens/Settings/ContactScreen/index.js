import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext, useState } from 'react';
import { AppContext } from '../../../../App';

const ContactScreen = ({ navigation }) => {
  const { currentTheme } = useContext(AppContext);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  // Use current theme based on dark mode
  const colors = currentTheme.colors;
  
  const handleSend = () => {
    // In a real app, this would send the message to support
    alert('Message sent to support team!');
    navigation.goBack();
  };
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.neutral.white }]}>
      <View style={[styles.header, { borderBottomColor: colors.neutral.lighter }]}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.primary.main} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.neutral.darkest }]}>Contact Us</Text>
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView style={styles.content}>
        <Text style={[styles.label, { color: colors.neutral.dark }]}>Subject</Text>
        <TextInput
          style={[
            styles.input, 
            { 
              backgroundColor: colors.neutral.lightest,
              color: colors.neutral.darkest,
              borderColor: colors.neutral.lighter
            }
          ]}
          value={subject}
          onChangeText={setSubject}
          placeholder="Enter subject"
          placeholderTextColor={colors.neutral.medium}
        />
        
        <Text style={[styles.label, { color: colors.neutral.dark }]}>Message</Text>
        <TextInput
          style={[
            styles.messageInput, 
            { 
              backgroundColor: colors.neutral.lightest,
              color: colors.neutral.darkest,
              borderColor: colors.neutral.lighter
            }
          ]}
          value={message}
          onChangeText={setMessage}
          placeholder="How can we help you?"
          placeholderTextColor={colors.neutral.medium}
          multiline
          textAlignVertical="top"
        />
        
        <TouchableOpacity 
          style={[styles.sendButton, { backgroundColor: colors.primary.main }]}
          onPress={handleSend}
        >
          <Text style={styles.sendButtonText}>Send Message</Text>
        </TouchableOpacity>
        
        <View style={styles.contactInfo}>
          <Text style={[styles.contactTitle, { color: colors.primary.dark }]}>Other Ways to Reach Us</Text>
          
          <View style={styles.contactMethod}>
            <Ionicons name="mail-outline" size={24} color={colors.primary.main} style={styles.contactIcon} />
            <Text style={[styles.contactText, { color: colors.neutral.dark }]}>support@hatchlingapp.com</Text>
          </View>
          
          <View style={styles.contactMethod}>
            <Ionicons name="call-outline" size={24} color={colors.primary.main} style={styles.contactIcon} />
            <Text style={[styles.contactText, { color: colors.neutral.dark }]}>1-800-HATCHLING</Text>
          </View>
          
          <View style={styles.contactMethod}>
            <Ionicons name="time-outline" size={24} color={colors.primary.main} style={styles.contactIcon} />
            <Text style={[styles.contactText, { color: colors.neutral.dark }]}>Mon-Fri, 9am-5pm EST</Text>
          </View>
        </View>
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
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  messageInput: {
    height: 150,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingTop: 15,
    fontSize: 16,
    marginBottom: 30,
  },
  sendButton: {
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  contactInfo: {
    marginBottom: 40,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  contactMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactIcon: {
    marginRight: 15,
  },
  contactText: {
    fontSize: 16,
  },
});

export default ContactScreen;

import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { AppContext } from '../../../../App';

const AboutScreen = ({ navigation }) => {
  const { currentTheme } = useContext(AppContext);
  
  // Use current theme based on dark mode
  const colors = currentTheme.colors;
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.neutral.white }]}>
      <View style={[styles.header, { borderBottomColor: colors.neutral.lighter }]}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.primary.main} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.neutral.darkest }]}>About Hatchling</Text>
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={[styles.logoCircle, { backgroundColor: colors.primary.light }]}>
            <Text style={styles.logoText}>H</Text>
          </View>
          <Text style={[styles.appName, { color: colors.neutral.darkest }]}>Hatchling</Text>
          <Text style={[styles.version, { color: colors.neutral.medium }]}>Version 1.0.0</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary.dark }]}>Our Mission</Text>
          <Text style={[styles.paragraph, { color: colors.neutral.dark }]}>
            Hatchling is designed to support parents through their baby's developmental journey with timely, 
            handcrafted content that helps them understand what's happening with their little one.
          </Text>
          <Text style={[styles.paragraph, { color: colors.neutral.dark }]}>
            We believe in providing parents with the information they need, when they need it, 
            without tracking or collecting unnecessary data.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary.dark }]}>The Team</Text>
          <Text style={[styles.paragraph, { color: colors.neutral.dark }]}>
            Hatchling was created by a team of parents, pediatricians, and child development experts 
            who understand the joys and challenges of raising a child.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary.dark }]}>Acknowledgements</Text>
          <Text style={[styles.paragraph, { color: colors.neutral.dark }]}>
            We'd like to thank all the parents and experts who contributed their knowledge and 
            experiences to make Hatchling possible.
          </Text>
        </View>
        
        <View style={styles.linksSection}>
          <TouchableOpacity style={styles.link}>
            <Ionicons name="globe-outline" size={20} color={colors.primary.main} style={styles.linkIcon} />
            <Text style={[styles.linkText, { color: colors.primary.main }]}>Visit Our Website</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.link}>
            <Ionicons name="logo-instagram" size={20} color={colors.primary.main} style={styles.linkIcon} />
            <Text style={[styles.linkText, { color: colors.primary.main }]}>Follow Us on Instagram</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.link}>
            <Ionicons name="mail-outline" size={20} color={colors.primary.main} style={styles.linkIcon} />
            <Text style={[styles.linkText, { color: colors.primary.main }]}>Contact Us</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={[styles.copyright, { color: colors.neutral.medium }]}>
          © 2025 Hatchling. All rights reserved.
        </Text>
        
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
  logoContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  version: {
    fontSize: 16,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  linksSection: {
    marginVertical: 20,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  linkIcon: {
    marginRight: 10,
  },
  linkText: {
    fontSize: 16,
    fontWeight: '500',
  },
  copyright: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 20,
  },
});

export default AboutScreen;

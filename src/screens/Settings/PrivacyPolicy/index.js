import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenErrorWrapper } from '../../../components/error/ErrorComponents';

// Import UI components
import {
  Container,
  SafeContainer,
  ScrollContainer,
  Section,
  Row,
  H2,
  Body,
  AppHeader
} from '../../../components/ui';

/**
 * Privacy Policy Screen
 * 
 * Displays the app's privacy policy
 */
export default function PrivacyPolicyScreen({ navigation }) {
  return (
    <ScreenErrorWrapper screenName="PrivacyPolicy" navigation={navigation}>
      <Container>
        <SafeContainer>
          {/* Header with back button */}
          <Row style={styles.headerRow}>
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <H2 color="white">Privacy Policy</H2>
          </Row>
          
          <ScrollContainer contentContainerStyle={styles.scrollContent}>
            <Section style={styles.contentSection}>
              <Body style={styles.paragraph}>
                Last updated: May 15, 2025
              </Body>
              
              <Body style={styles.paragraph}>
                At Hatchling, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
              </Body>
              
              <Body style={styles.sectionHeading}>Information We Collect</Body>
              
              <Body style={styles.paragraph}>
                We collect information that you provide directly to us when you register for an account, create or modify your profile, set preferences, or make purchases through the app. This includes:
              </Body>
              
              <Body style={styles.listItem}>• Personal information such as your name and email address</Body>
              <Body style={styles.listItem}>• Profile information about your child, including name, birth date, and developmental milestones</Body>
              <Body style={styles.listItem}>• Content you provide through the app, such as saved activities and insights</Body>
              <Body style={styles.listItem}>• Transaction information when you make purchases</Body>
              
              <Body style={styles.sectionHeading}>How We Use Your Information</Body>
              
              <Body style={styles.paragraph}>
                We use the information we collect to:
              </Body>
              
              <Body style={styles.listItem}>• Provide, maintain, and improve our services</Body>
              <Body style={styles.listItem}>• Personalize your experience and deliver content relevant to your child's development</Body>
              <Body style={styles.listItem}>• Process transactions and send related information</Body>
              <Body style={styles.listItem}>• Send technical notices, updates, security alerts, and support messages</Body>
              <Body style={styles.listItem}>• Respond to your comments, questions, and requests</Body>
              
              <Body style={styles.sectionHeading}>Data Security</Body>
              
              <Body style={styles.paragraph}>
                We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
              </Body>
              
              <Body style={styles.sectionHeading}>Your Rights</Body>
              
              <Body style={styles.paragraph}>
                You have the right to access, correct, or delete your personal information. You can exercise these rights by accessing your account settings or contacting us directly.
              </Body>
              
              <Body style={styles.sectionHeading}>Changes to This Privacy Policy</Body>
              
              <Body style={styles.paragraph}>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </Body>
              
              <Body style={styles.sectionHeading}>Contact Us</Body>
              
              <Body style={styles.paragraph}>
                If you have any questions about this Privacy Policy, please contact us at privacy@hatchlingapp.com.
              </Body>
            </Section>
          </ScrollContainer>
        </SafeContainer>
      </Container>
    </ScreenErrorWrapper>
  );
}

const styles = {
  headerRow: {
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    marginRight: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingBottom: 100, // Extra padding for bottom tab bar
  },
  contentSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  paragraph: {
    marginBottom: 16,
  },
  sectionHeading: {
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 12,
  },
  listItem: {
    marginBottom: 8,
    paddingLeft: 16,
  }
};

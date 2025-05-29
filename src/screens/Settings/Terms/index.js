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
 * Terms of Service Screen
 * 
 * Displays the app's terms of service
 */
export default function TermsScreen({ navigation }) {
  return (
    <ScreenErrorWrapper screenName="Terms" navigation={navigation}>
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
            <H2 color="white">Terms of Service</H2>
          </Row>
          
          <ScrollContainer contentContainerStyle={styles.scrollContent}>
            <Section style={styles.contentSection}>
              <Body style={styles.paragraph}>
                Last updated: May 15, 2025
              </Body>
              
              <Body style={styles.paragraph}>
                Please read these Terms of Service carefully before using the Hatchling mobile application operated by Hatchling, Inc.
              </Body>
              
              <Body style={styles.sectionHeading}>1. Acceptance of Terms</Body>
              
              <Body style={styles.paragraph}>
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
              </Body>
              
              <Body style={styles.sectionHeading}>2. Description of Service</Body>
              
              <Body style={styles.paragraph}>
                Hatchling provides a platform for tracking child development milestones, accessing parenting resources, and receiving personalized insights based on your child's age and developmental stage.
              </Body>
              
              <Body style={styles.sectionHeading}>3. User Accounts</Body>
              
              <Body style={styles.paragraph}>
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
              </Body>
              
              <Body style={styles.paragraph}>
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
              </Body>
              
              <Body style={styles.sectionHeading}>4. Subscription and Billing</Body>
              
              <Body style={styles.paragraph}>
                Some features of the Service require a subscription. You will be billed in advance on a recurring basis, depending on the type of subscription plan you select.
              </Body>
              
              <Body style={styles.paragraph}>
                You may cancel your subscription at any time through your account settings or by contacting our customer support team. Refunds are subject to our refund policy.
              </Body>
              
              <Body style={styles.sectionHeading}>5. Content</Body>
              
              <Body style={styles.paragraph}>
                Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, or other material. You are responsible for the content you post to the Service.
              </Body>
              
              <Body style={styles.sectionHeading}>6. Intellectual Property</Body>
              
              <Body style={styles.paragraph}>
                The Service and its original content, features, and functionality are and will remain the exclusive property of Hatchling, Inc. and its licensors.
              </Body>
              
              <Body style={styles.sectionHeading}>7. Termination</Body>
              
              <Body style={styles.paragraph}>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </Body>
              
              <Body style={styles.sectionHeading}>8. Limitation of Liability</Body>
              
              <Body style={styles.paragraph}>
                In no event shall Hatchling, Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </Body>
              
              <Body style={styles.sectionHeading}>9. Changes</Body>
              
              <Body style={styles.paragraph}>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </Body>
              
              <Body style={styles.sectionHeading}>10. Contact Us</Body>
              
              <Body style={styles.paragraph}>
                If you have any questions about these Terms, please contact us at terms@hatchlingapp.com.
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

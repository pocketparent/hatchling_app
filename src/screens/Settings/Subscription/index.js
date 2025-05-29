import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenErrorWrapper } from '../../../components/error/ErrorComponents';

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
  SecondaryButton
} from '../../../components/ui';

/**
 * Subscription Screen
 * 
 * Allows users to view and manage their subscription
 */
export default function SubscriptionScreen({ navigation }) {
  // Mock subscription data
  const subscription = {
    type: 'Premium',
    status: 'Active',
    renewalDate: 'June 15, 2025',
    price: '$4.99/month'
  };

  // Handle subscription management
  const handleManageSubscription = () => {
    // In a real app, this would open subscription management
    console.log('Open subscription management');
  };

  return (
    <ScreenErrorWrapper screenName="Subscription" navigation={navigation}>
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
            <H2 color="white">Subscription</H2>
          </Row>
          
          <ScrollContainer contentContainerStyle={styles.scrollContent}>
            {/* Current plan */}
            <Card style={styles.planCard}>
              <View style={styles.planBadge}>
                <Caption color="white">CURRENT PLAN</Caption>
              </View>
              
              <H2 style={styles.planTitle}>{subscription.type}</H2>
              <Body style={styles.planPrice}>{subscription.price}</Body>
              
              <Row style={styles.statusRow}>
                <View style={[
                  styles.statusIndicator, 
                  { backgroundColor: subscription.status === 'Active' ? '#4CAF50' : '#FFA000' }
                ]} />
                <BodySmall>{subscription.status}</BodySmall>
                <Spacer size="md" horizontal />
                <BodySmall>Renews: {subscription.renewalDate}</BodySmall>
              </Row>
              
              <Spacer size="lg" />
              
              <SecondaryButton
                title="Manage Subscription"
                onPress={handleManageSubscription}
                style={styles.manageButton}
              />
            </Card>
            
            {/* Features */}
            <Section>
              <H3 color="white" style={styles.sectionTitle}>Premium Features</H3>
              
              <Card style={styles.featuresCard}>
                {[
                  { icon: 'checkmark-circle', text: 'Personalized development tracking' },
                  { icon: 'checkmark-circle', text: 'Unlimited saved activities and insights' },
                  { icon: 'checkmark-circle', text: 'Expert Q&A access' },
                  { icon: 'checkmark-circle', text: 'Ad-free experience' }
                ].map((feature, index) => (
                  <Row key={index} style={styles.featureRow}>
                    <Ionicons name={feature.icon} size={20} color="#2A9D8F" />
                    <Body style={styles.featureText}>{feature.text}</Body>
                  </Row>
                ))}
              </Card>
            </Section>
            
            {/* Help section */}
            <Section>
              <Card style={styles.helpCard}>
                <H3 style={styles.helpTitle}>Need Help?</H3>
                <Body style={styles.helpText}>
                  If you have any questions about your subscription or need assistance,
                  our support team is here to help.
                </Body>
                <SecondaryButton
                  title="Contact Support"
                  icon="mail-outline"
                  onPress={() => console.log('Contact support')}
                  style={styles.supportButton}
                />
              </Card>
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
  planCard: {
    padding: 24,
    marginBottom: 24,
    position: 'relative',
    alignItems: 'center',
  },
  planBadge: {
    position: 'absolute',
    top: 0,
    right: 24,
    backgroundColor: '#2A9D8F',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  planTitle: {
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  planPrice: {
    marginBottom: 16,
    textAlign: 'center',
  },
  statusRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  manageButton: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    marginBottom: 16,
    marginLeft: 8,
  },
  featuresCard: {
    padding: 20,
    marginBottom: 24,
  },
  featureRow: {
    alignItems: 'center',
    marginBottom: 16,
  },
  featureText: {
    marginLeft: 12,
  },
  helpCard: {
    padding: 20,
    marginBottom: 24,
    alignItems: 'center',
  },
  helpTitle: {
    marginBottom: 12,
    textAlign: 'center',
  },
  helpText: {
    textAlign: 'center',
    marginBottom: 16,
  },
  supportButton: {
    paddingHorizontal: 24,
  },
};

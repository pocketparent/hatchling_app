import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity,
  Modal
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';
import WeeklyCheckIn from '../../components/WeeklyCheckIn';

/**
 * CheckInModal Component
 * 
 * Modal for displaying the weekly check-in flow
 */
const CheckInModal = ({ visible, onClose }) => {
  if (!visible) return null;
  
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <WeeklyCheckIn onComplete={onClose} />
    </Modal>
  );
};

/**
 * Today Screen with Weekly Check-In Integration
 * 
 * Main landing screen showing daily insight card and weekly check-in
 * Non-tracking, content-first approach
 */
export default function TodayScreen() {
  const [showCheckIn, setShowCheckIn] = useState(false);
  
  // Mock function to determine if today is Friday (for weekly check-in)
  const isFriday = () => {
    const today = new Date();
    return today.getDay() === 5; // 0 is Sunday, 5 is Friday
  };
  
  // Handle check-in completion
  const handleCheckInComplete = () => {
    setShowCheckIn(false);
    // In a real app, this would save check-in data to Firestore
  };
  
  // Open check-in modal
  const handleStartCheckIn = () => {
    setShowCheckIn(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header with date */}
        <View style={styles.header}>
          <View>
            <Text style={styles.dateText}>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</Text>
            <Text style={styles.headerTitle}>Today</Text>
          </View>
        </View>
        
        {/* Weekly Check-In Card (shown only on Fridays or for demo) */}
        {(isFriday() || true) && ( // Always show for demo purposes
          <View style={styles.checkInCard}>
            <Text style={styles.checkInTitle}>Weekly Check-In</Text>
            <Text style={styles.checkInDescription}>
              A few quick questions to help personalize your experience.
            </Text>
            <TouchableOpacity 
              style={styles.checkInButton}
              onPress={handleStartCheckIn}
            >
              <Text style={styles.checkInButtonText}>Start Check-In</Text>
            </TouchableOpacity>
          </View>
        )}
        
        {/* Check-in modal */}
        <CheckInModal 
          visible={showCheckIn}
          onClose={handleCheckInComplete}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral.white,
  },
  scrollContent: {
    padding: theme.spacing.spacing.screenPadding,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.spacing.lg,
    marginTop: theme.spacing.spacing.md,
  },
  dateText: {
    ...theme.typography.textVariants.body2,
    color: theme.colors.neutral.medium,
    marginBottom: theme.spacing.spacing.xxs,
  },
  headerTitle: {
    ...theme.typography.textVariants.h2,
    color: theme.colors.neutral.darkest,
  },
  checkInCard: {
    backgroundColor: theme.colors.secondary.light,
    borderRadius: 16,
    padding: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.xl,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  checkInTitle: {
    ...theme.typography.textVariants.h4,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.sm,
  },
  checkInDescription: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
    marginBottom: theme.spacing.spacing.md,
  },
  checkInButton: {
    backgroundColor: theme.colors.secondary.main,
    borderRadius: 8,
    paddingVertical: theme.spacing.spacing.sm,
    paddingHorizontal: theme.spacing.spacing.md,
    alignSelf: 'flex-start',
  },
  checkInButtonText: {
    ...theme.typography.textVariants.button,
    color: theme.colors.neutral.white,
  },
});

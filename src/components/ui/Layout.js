/**
 * Hatchling App Layout Components
 * 
 * Reusable layout components with consistent styling across the app
 */
import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import theme from '../../theme';

// Container - Main app container with background color
export const Container = ({ 
  children, 
  style, 
  ...props 
}) => (
  <View style={[styles.container, style]} {...props}>
    <StatusBar style="light" />
    {children}
  </View>
);

// SafeContainer - Container with safe area insets
export const SafeContainer = ({ 
  children, 
  style, 
  ...props 
}) => (
  <Container style={style} {...props}>
    <SafeAreaView style={styles.safeArea}>
      {children}
    </SafeAreaView>
  </Container>
);

// ScrollContainer - Scrollable container
export const ScrollContainer = ({ 
  children, 
  contentContainerStyle,
  showsVerticalScrollIndicator = false,
  style, 
  ...props 
}) => (
  <ScrollView 
    style={[styles.scrollView, style]}
    contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
    showsVerticalScrollIndicator={showsVerticalScrollIndicator}
    {...props}
  >
    {children}
  </ScrollView>
);

// Section - Content section with consistent spacing
export const Section = ({ 
  children, 
  style, 
  ...props 
}) => (
  <View style={[styles.section, style]} {...props}>
    {children}
  </View>
);

// Row - Horizontal layout with items in a row
export const Row = ({ 
  children, 
  align = 'center',
  justify = 'flex-start',
  wrap = false,
  style, 
  ...props 
}) => {
  const alignItems = getAlignment(align);
  const justifyContent = getJustification(justify);
  
  return (
    <View 
      style={[
        styles.row, 
        { alignItems, justifyContent },
        wrap && styles.rowWrap,
        style
      ]} 
      {...props}
    >
      {children}
    </View>
  );
};

// Column - Vertical layout with items in a column
export const Column = ({ 
  children, 
  align = 'stretch',
  justify = 'flex-start',
  style, 
  ...props 
}) => {
  const alignItems = getAlignment(align);
  const justifyContent = getJustification(justify);
  
  return (
    <View 
      style={[
        styles.column, 
        { alignItems, justifyContent },
        style
      ]} 
      {...props}
    >
      {children}
    </View>
  );
};

// Spacer - Empty space with configurable size
export const Spacer = ({ 
  size = 'md',
  horizontal = false,
  style, 
  ...props 
}) => {
  const spacerSize = getSpacerSize(size);
  
  return (
    <View 
      style={[
        horizontal 
          ? { width: spacerSize, height: 1 } 
          : { height: spacerSize, width: 1 },
        style
      ]} 
      {...props}
    />
  );
};

// Divider - Horizontal line separator
export const Divider = ({ 
  style, 
  ...props 
}) => (
  <View style={[styles.divider, style]} {...props} />
);

// Helper function to get alignment value
const getAlignment = (align) => {
  switch (align) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'center':
      return 'center';
    case 'stretch':
      return 'stretch';
    case 'baseline':
      return 'baseline';
    default:
      return align;
  }
};

// Helper function to get justification value
const getJustification = (justify) => {
  switch (justify) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'center':
      return 'center';
    case 'between':
      return 'space-between';
    case 'around':
      return 'space-around';
    case 'evenly':
      return 'space-evenly';
    default:
      return justify;
  }
};

// Helper function to get spacer size
const getSpacerSize = (size) => {
  switch (size) {
    case 'xs':
      return theme.spacing.spacing.xs;
    case 'sm':
      return theme.spacing.spacing.sm;
    case 'md':
      return theme.spacing.spacing.md;
    case 'lg':
      return theme.spacing.spacing.lg;
    case 'xl':
      return theme.spacing.spacing.xl;
    case 'xxl':
      return theme.spacing.spacing.xxl;
    default:
      if (typeof size === 'number') {
        return size;
      }
      return theme.spacing.spacing.md;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100, // Extra padding for bottom tab bar
  },
  section: {
    marginBottom: theme.spacing.spacing.lg,
    paddingHorizontal: theme.spacing.spacing.screenPadding,
  },
  row: {
    flexDirection: 'row',
    marginBottom: theme.spacing.spacing.sm,
  },
  rowWrap: {
    flexWrap: 'wrap',
  },
  column: {
    flexDirection: 'column',
    marginBottom: theme.spacing.spacing.sm,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.neutral.lighter,
    marginVertical: theme.spacing.spacing.md,
  },
});

export default {
  Container,
  SafeContainer,
  ScrollContainer,
  Section,
  Row,
  Column,
  Spacer,
  Divider
};

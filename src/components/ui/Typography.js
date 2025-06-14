/**
 * Hatchling App Typography Components
 * 
 * Reusable text components with consistent styling across the app
 */
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../../theme';

// Heading 1 - Large titles for screen headers
export const H1 = ({ children, style, color = 'darkest', ...props }) => (
  <Text 
    style={[
      styles.h1, 
      { color: getColor(color) },
      style
    ]} 
    {...props}
  >
    {children}
  </Text>
);

// Heading 2 - Section titles
export const H2 = ({ children, style, color = 'darkest', ...props }) => (
  <Text 
    style={[
      styles.h2, 
      { color: getColor(color) },
      style
    ]} 
    {...props}
  >
    {children}
  </Text>
);

// Heading 3 - Card titles, smaller sections
export const H3 = ({ children, style, color = 'darkest', ...props }) => (
  <Text 
    style={[
      styles.h3, 
      { color: getColor(color) },
      style
    ]} 
    {...props}
  >
    {children}
  </Text>
);

// Body text - Primary content text
export const Body = ({ children, style, color = 'dark', ...props }) => (
  <Text 
    style={[
      styles.body, 
      { color: getColor(color) },
      style
    ]} 
    {...props}
  >
    {children}
  </Text>
);

// Body Small - Secondary content text
export const BodySmall = ({ children, style, color = 'dark', ...props }) => (
  <Text 
    style={[
      styles.bodySmall, 
      { color: getColor(color) },
      style
    ]} 
    {...props}
  >
    {children}
  </Text>
);

// Caption - Small text for labels, timestamps, etc.
export const Caption = ({ children, style, color = 'dark', ...props }) => (
  <Text 
    style={[
      styles.caption, 
      { color: getColor(color) },
      style
    ]} 
    {...props}
  >
    {children}
  </Text>
);

// Label - Used for form labels, section headers
export const Label = ({ children, style, color = 'dark', ...props }) => (
  <Text 
    style={[
      styles.label, 
      { color: getColor(color) },
      style
    ]} 
    {...props}
  >
    {children}
  </Text>
);

// Helper function to get color from theme
const getColor = (colorName) => {
  switch (colorName) {
    case 'white':
      return theme.colors.neutral.white;
    case 'light':
      return theme.colors.neutral.light;
    case 'medium':
      return theme.colors.neutral.dark; // Changed from medium to dark for better contrast
    case 'dark':
      return theme.colors.neutral.darkest;
    case 'darkest':
      return theme.colors.neutral.black;
    case 'primary':
      return theme.colors.primary.dark; // Changed from main to dark for better contrast
    case 'secondary':
      return theme.colors.secondary.dark; // Changed from main to dark for better contrast
    case 'error':
      return theme.colors.feedback.error;
    case 'success':
      return theme.colors.feedback.success;
    default:
      return theme.colors.neutral.darkest;
  }
};

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 32,
    lineHeight: 38,
    letterSpacing: 0.35,
  },
  h2: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0.35,
  },
  h3: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.35,
  },
  body: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  bodySmall: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  caption: {
    fontFamily: 'SFProText-Regular',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  label: {
    fontFamily: 'SFProText-Bold', // Changed from Medium to Bold for consistency
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
    textTransform: 'uppercase',
  },
});

export default {
  H1,
  H2,
  H3,
  Body,
  BodySmall,
  Caption,
  Label
};

import React from 'react';
import { View, StyleSheet, TextInput as RNTextInput } from 'react-native';
import theme from '../../../theme';
import { Body, BodySmall } from '../Typography';
import { Ionicons } from '@expo/vector-icons';

/**
 * TextInput Component
 * 
 * A reusable text input component with consistent styling
 * Used throughout the app for form inputs
 */
const TextInput = ({ 
  label,
  placeholder,
  value,
  onChangeText,
  icon,
  error,
  secureTextEntry = false,
  multiline = false,
  numberOfLines = 1,
  style,
  inputStyle
}) => {
  return (
    <View style={[styles.container, style]}>
      {label && (
        <BodySmall style={styles.label}>
          {label}
        </BodySmall>
      )}
      
      <View style={[
        styles.inputContainer,
        error && styles.inputContainerError,
        multiline && styles.inputContainerMultiline
      ]}>
        {icon && (
          <Ionicons 
            name={icon} 
            size={20} 
            color={theme.colors.neutral.medium} 
            style={styles.icon} 
          />
        )}
        
        <RNTextInput
          style={[
            styles.input,
            icon && styles.inputWithIcon,
            multiline && styles.inputMultiline,
            inputStyle
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.neutral.medium}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          numberOfLines={multiline ? numberOfLines : 1}
        />
      </View>
      
      {error && (
        <BodySmall style={styles.errorText}>
          {error}
        </BodySmall>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.spacing.md,
  },
  label: {
    marginBottom: theme.spacing.spacing.xs,
    color: theme.colors.neutral.dark,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.neutral.white,
    borderRadius: theme.spacing.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.neutral.light,
  },
  inputContainerError: {
    borderColor: theme.colors.feedback.error,
  },
  inputContainerMultiline: {
    alignItems: 'flex-start',
  },
  input: {
    flex: 1,
    paddingVertical: theme.spacing.spacing.md,
    paddingHorizontal: theme.spacing.spacing.md,
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    color: theme.colors.neutral.darkest,
  },
  inputWithIcon: {
    paddingLeft: 0,
  },
  inputMultiline: {
    textAlignVertical: 'top',
  },
  icon: {
    marginLeft: theme.spacing.spacing.md,
  },
  errorText: {
    color: theme.colors.feedback.error,
    marginTop: theme.spacing.spacing.xs,
  }
});

export default TextInput;

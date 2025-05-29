/**
 * Hatchling App Input Components
 * 
 * Reusable form input components with consistent styling across the app
 */
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';

// Text Input - Standard text input field
export const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  helper,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  disabled = false,
  style,
  inputStyle,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  return (
    <View style={[styles.inputContainer, style]}>
      {label && <Text style={styles.inputLabel}>{label}</Text>}
      
      <View style={[
        styles.inputWrapper,
        isFocused && styles.inputWrapperFocused,
        error && styles.inputWrapperError,
        disabled && styles.inputWrapperDisabled
      ]}>
        <TextInput
          style={[styles.input, inputStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.neutral.medium}
          secureTextEntry={isSecure}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          editable={!disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        
        {secureTextEntry && (
          <TouchableOpacity 
            style={styles.secureToggle}
            onPress={() => setIsSecure(!isSecure)}
          >
            <Ionicons 
              name={isSecure ? 'eye-outline' : 'eye-off-outline'} 
              size={20} 
              color={theme.colors.neutral.medium} 
            />
          </TouchableOpacity>
        )}
      </View>
      
      {(error || helper) && (
        <Text style={[
          styles.helperText,
          error && styles.errorText
        ]}>
          {error || helper}
        </Text>
      )}
    </View>
  );
};

// Checkbox - Toggle selection
export const Checkbox = ({
  label,
  checked,
  onToggle,
  disabled = false,
  style,
  ...props
}) => (
  <TouchableOpacity
    style={[styles.checkboxContainer, style]}
    onPress={onToggle}
    disabled={disabled}
    activeOpacity={0.8}
    {...props}
  >
    <View style={[
      styles.checkbox,
      checked && styles.checkboxChecked,
      disabled && styles.checkboxDisabled
    ]}>
      {checked && (
        <Ionicons name="checkmark" size={16} color="#FFFFFF" />
      )}
    </View>
    
    {label && (
      <Text style={[
        styles.checkboxLabel,
        disabled && styles.checkboxLabelDisabled
      ]}>
        {label}
      </Text>
    )}
  </TouchableOpacity>
);

// Toggle Switch - On/Off state
export const Toggle = ({
  label,
  value,
  onToggle,
  disabled = false,
  style,
  ...props
}) => (
  <TouchableOpacity
    style={[styles.toggleContainer, style]}
    onPress={onToggle}
    disabled={disabled}
    activeOpacity={0.8}
    {...props}
  >
    {label && (
      <Text style={[
        styles.toggleLabel,
        disabled && styles.toggleLabelDisabled
      ]}>
        {label}
      </Text>
    )}
    
    <View style={[
      styles.toggleTrack,
      value && styles.toggleTrackActive,
      disabled && styles.toggleTrackDisabled
    ]}>
      <View style={[
        styles.toggleThumb,
        value && styles.toggleThumbActive,
        disabled && styles.toggleThumbDisabled
      ]} />
    </View>
  </TouchableOpacity>
);

// Radio Button - Single selection from options
export const RadioButton = ({
  label,
  selected,
  onSelect,
  disabled = false,
  style,
  ...props
}) => (
  <TouchableOpacity
    style={[styles.radioContainer, style]}
    onPress={onSelect}
    disabled={disabled}
    activeOpacity={0.8}
    {...props}
  >
    <View style={[
      styles.radio,
      disabled && styles.radioDisabled
    ]}>
      {selected && (
        <View style={styles.radioSelected} />
      )}
    </View>
    
    {label && (
      <Text style={[
        styles.radioLabel,
        disabled && styles.radioLabelDisabled
      ]}>
        {label}
      </Text>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  // Text Input styles
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontFamily: 'SFProText-Medium',
    fontSize: 14,
    color: theme.colors.neutral.dark,
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.neutral.light,
    borderRadius: 12,
    backgroundColor: theme.colors.neutral.white,
    paddingHorizontal: 12,
  },
  inputWrapperFocused: {
    borderColor: theme.colors.primary.main,
  },
  inputWrapperError: {
    borderColor: theme.colors.feedback.error,
  },
  inputWrapperDisabled: {
    backgroundColor: theme.colors.neutral.lighter,
    borderColor: theme.colors.neutral.light,
  },
  input: {
    flex: 1,
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    color: theme.colors.neutral.darkest,
    paddingVertical: 12,
  },
  secureToggle: {
    padding: 8,
  },
  helperText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 12,
    color: theme.colors.neutral.medium,
    marginTop: 4,
  },
  errorText: {
    color: theme.colors.feedback.error,
  },
  
  // Checkbox styles
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: theme.colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: theme.colors.primary.main,
  },
  checkboxDisabled: {
    borderColor: theme.colors.neutral.medium,
    backgroundColor: theme.colors.neutral.lighter,
  },
  checkboxLabel: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    color: theme.colors.neutral.dark,
  },
  checkboxLabelDisabled: {
    color: theme.colors.neutral.medium,
  },
  
  // Toggle styles
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  toggleLabel: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    color: theme.colors.neutral.dark,
    flex: 1,
  },
  toggleLabelDisabled: {
    color: theme.colors.neutral.medium,
  },
  toggleTrack: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: theme.colors.neutral.light,
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  toggleTrackActive: {
    backgroundColor: theme.colors.primary.main,
  },
  toggleTrackDisabled: {
    backgroundColor: theme.colors.neutral.lighter,
  },
  toggleThumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: theme.colors.neutral.white,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  toggleThumbActive: {
    transform: [{ translateX: 20 }],
  },
  toggleThumbDisabled: {
    backgroundColor: theme.colors.neutral.lighter,
  },
  
  // Radio button styles
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  radioDisabled: {
    borderColor: theme.colors.neutral.medium,
  },
  radioSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.primary.main,
  },
  radioLabel: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    color: theme.colors.neutral.dark,
  },
  radioLabelDisabled: {
    color: theme.colors.neutral.medium,
  },
});

export default {
  Input,
  Checkbox,
  Toggle,
  RadioButton
};

import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import theme from '../../../theme';

/**
 * Container Component
 * 
 * A reusable layout component for screen containers
 * Used throughout the app for consistent layout
 */
const Container = ({ 
  children, 
  scrollable = true,
  safeArea = true,
  style 
}) => {
  const ContainerComponent = safeArea ? SafeAreaView : View;
  const ContentComponent = scrollable ? ScrollView : View;
  
  return (
    <ContainerComponent style={[styles.container, style]}>
      {scrollable ? (
        <ContentComponent 
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ContentComponent>
      ) : (
        <View style={styles.content}>
          {children}
        </View>
      )}
    </ContainerComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  }
});

export default Container;

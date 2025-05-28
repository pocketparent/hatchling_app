import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './src/theme/ThemeProvider';
import { AuthProvider } from './src/context/AuthContext';
import { OnboardingProvider } from './src/context/OnboardingContext';
import AppNavigation from './src/navigation/AppNavigation';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = React.useState(false);

  React.useEffect(() => {
    async function prepare() {
      try {
        // Load fonts
        await Font.loadAsync({
          'SFProDisplay-Regular': require('./assets/fonts/SFProDisplay-Regular.otf'),
          'SFProDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.otf'),
          'SFProText-Regular': require('./assets/fonts/SFProText-Regular.otf'),
          'SFProText-Medium': require('./assets/fonts/SF-Pro-Text-Medium.otf'),
          'SFProDisplay-Semibold': require('./assets/fonts/SF-Pro-Display-Semibold.otf'),
        });
      } catch (e) {
        console.warn('Font loading error:', e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="light" />
      <AuthProvider>
        <OnboardingProvider>
          <ThemeProvider>
            <AppNavigation />
          </ThemeProvider>
        </OnboardingProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

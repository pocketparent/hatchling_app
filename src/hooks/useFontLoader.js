import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

/**
 * useFontLoader Hook
 * 
 * Custom hook to load all required fonts for the app
 * Returns loading state and onLayoutRootView callback for App.js
 */
export default function useFontLoader() {
  const [fontsLoaded] = useFonts({
    // SF Pro Display family
    'SFProDisplay-Regular': require('../../assets/fonts/SF-Pro-Display-Regular.otf'),
    'SFProDisplay-Medium': require('../../assets/fonts/SF-Pro-Display-Medium.otf'),
    'SFProDisplay-Semibold': require('../../assets/fonts/SF-Pro-Display-Semibold.otf'),
    'SFProDisplay-Bold': require('../../assets/fonts/SF-Pro-Display-Bold.otf'),
    
    // SF Pro Text family
    'SFProText-Regular': require('../../assets/fonts/SF-Pro-Text-Regular.otf'),
    'SFProText-Medium': require('../../assets/fonts/SF-Pro-Text-Medium.otf'),
    'SFProText-Semibold': require('../../assets/fonts/SF-Pro-Text-Semibold.otf'),
    'SFProText-Bold': require('../../assets/fonts/SF-Pro-Text-Bold.otf'),
  });

  // Callback for when layout is ready
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // Hide splash screen once fonts are loaded
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Effect to handle font loading errors
  useEffect(() => {
    const timeout = setTimeout(() => {
      // If fonts don't load within 5 seconds, hide splash screen anyway
      if (!fontsLoaded) {
        console.warn('Fonts failed to load within timeout period');
        SplashScreen.hideAsync();
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [fontsLoaded]);

  return { fontsLoaded, onLayoutRootView };
}

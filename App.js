import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import AppNavigation from './src/navigation/AppNavigation';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'SFProDisplay-Regular': require('./assets/fonts/SFProDisplay-Regular.otf'),
          'SFProDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.otf'),
          'SFProText-Regular': require('./assets/fonts/SFProText-Regular.otf'),
        });
      } catch (e) {
        console.warn('Font loading error:', e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <AppNavigation />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

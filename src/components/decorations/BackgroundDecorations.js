import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

/**
 * BackgroundDecorations Component
 * 
 * Renders decorative elements for app backgrounds based on provided designs
 * Uses SVG paths to create exact replicas of the design elements
 */
export const BackgroundDecorations = () => {
  return (
    <View style={styles.container}>
      {/* Multi-leaf branch (top left) */}
      <View style={[styles.decoration, { top: '10%', left: '10%' }]}>
        <Svg width={60} height={80} viewBox="0 0 60 80" fill="none">
          <Path
            d="M30 80C30 80 28 65 28 60C28 55 30 50 35 45C40 40 45 40 45 35C45 30 40 25 35 25C30 25 25 30 25 35C25 40 30 45 30 50C30 55 25 60 20 60C15 60 10 55 10 50C10 45 15 40 20 40C25 40 30 35 30 30C30 25 25 20 20 20C15 20 10 25 10 30C10 35 15 40 15 45C15 50 10 55 5 55C0 55 0 45 5 40"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
            fill="rgba(255, 255, 255, 0.2)"
          />
        </Svg>
      </View>

      {/* Flower (top right) */}
      <View style={[styles.decoration, { top: '15%', right: '15%' }]}>
        <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
          <Path
            d="M20 10C22 7 25 5 28 7C31 9 31 13 28 16C25 19 20 20 20 20C20 20 25 21 28 24C31 27 31 31 28 33C25 35 22 33 20 30C18 33 15 35 12 33C9 31 9 27 12 24C15 21 20 20 20 20C20 20 15 19 12 16C9 13 9 9 12 7C15 5 18 7 20 10Z"
            fill="rgba(255, 255, 255, 0.2)"
          />
          <Path
            d="M20 17C21.6569 17 23 18.3431 23 20C23 21.6569 21.6569 23 20 23C18.3431 23 17 21.6569 17 20C17 18.3431 18.3431 17 20 17Z"
            fill="rgba(255, 255, 255, 0.3)"
          />
        </Svg>
      </View>

      {/* Berry branch (bottom left) */}
      <View style={[styles.decoration, { bottom: '25%', left: '15%' }]}>
        <Svg width={40} height={50} viewBox="0 0 40 50" fill="none">
          <Path
            d="M10 5C10 5 15 15 20 25C20 25 15 30 10 30C5 30 0 25 0 20C0 15 5 10 10 10"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
            fill="rgba(255, 255, 255, 0.2)"
          />
          <Path
            d="M10 10C13.3137 10 16 12.6863 16 16C16 19.3137 13.3137 22 10 22C6.68629 22 4 19.3137 4 16C4 12.6863 6.68629 10 10 10Z"
            fill="rgba(255, 255, 255, 0.2)"
          />
          <Path
            d="M20 25C23.3137 25 26 27.6863 26 31C26 34.3137 23.3137 37 20 37C16.6863 37 14 34.3137 14 31C14 27.6863 16.6863 25 20 25Z"
            fill="rgba(255, 255, 255, 0.2)"
          />
          <Path
            d="M30 15C33.3137 15 36 17.6863 36 21C36 24.3137 33.3137 27 30 27C26.6863 27 24 24.3137 24 21C24 17.6863 26.6863 15 30 15Z"
            fill="rgba(255, 255, 255, 0.2)"
          />
        </Svg>
      </View>

      {/* Small leaf branch (bottom right) */}
      <View style={[styles.decoration, { bottom: '20%', right: '10%' }]}>
        <Svg width={40} height={60} viewBox="0 0 40 60" fill="none">
          <Path
            d="M20 60C20 60 18 45 18 40C18 35 20 30 25 25C30 20 35 20 35 15"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
          />
          <Path
            d="M25 25C25 25 30 15 35 15C40 15 40 25 35 30C30 35 25 25 25 25Z"
            fill="rgba(255, 255, 255, 0.2)"
          />
          <Path
            d="M15 40C15 40 10 30 15 25C20 20 25 25 25 30C25 35 15 40 15 40Z"
            fill="rgba(255, 255, 255, 0.2)"
          />
        </Svg>
      </View>

      {/* Additional small dots for texture */}
      <View style={[styles.smallDot, { top: '30%', left: '30%' }]} />
      <View style={[styles.smallDot, { top: '50%', right: '25%' }]} />
      <View style={[styles.smallDot, { top: '70%', left: '40%' }]} />
      <View style={[styles.smallDot, { top: '20%', right: '40%' }]} />
      <View style={[styles.smallDot, { top: '80%', right: '20%' }]} />
      <View style={[styles.smallDot, { top: '60%', left: '20%' }]} />
      
      {/* Medium dots */}
      <View style={[styles.mediumDot, { top: '40%', left: '10%' }]} />
      <View style={[styles.mediumDot, { top: '25%', right: '30%' }]} />
      <View style={[styles.mediumDot, { top: '75%', right: '40%' }]} />
      <View style={[styles.mediumDot, { top: '55%', left: '35%' }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  decoration: {
    position: 'absolute',
  },
  smallDot: {
    position: 'absolute',
    width: 6,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3,
  },
  mediumDot: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
  },
});

export default BackgroundDecorations;

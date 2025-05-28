import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * BackgroundDecorations Component
 * 
 * Creates decorative elements for the app background using standard React Native View components
 * instead of SVG to avoid dependency issues.
 */
const BackgroundDecorations = () => {
  return (
    <View style={styles.container}>
      {/* Multi-leaf branch (top left) */}
      <View style={styles.multiLeafBranchContainer}>
        <View style={styles.leafStem} />
        <View style={styles.leafOne} />
        <View style={styles.leafTwo} />
        <View style={styles.leafThree} />
        <View style={styles.leafFour} />
      </View>

      {/* Flower (top right) */}
      <View style={styles.flowerContainer}>
        <View style={styles.flowerCenter} />
        <View style={styles.flowerPetalOne} />
        <View style={styles.flowerPetalTwo} />
        <View style={styles.flowerPetalThree} />
        <View style={styles.flowerPetalFour} />
        <View style={styles.flowerPetalFive} />
      </View>

      {/* Berry branch (bottom left) */}
      <View style={styles.berryBranchContainer}>
        <View style={styles.berryStem} />
        <View style={styles.berryOne} />
        <View style={styles.berryTwo} />
        <View style={styles.berryThree} />
      </View>

      {/* Small leaf branch (bottom right) */}
      <View style={styles.smallLeafBranchContainer}>
        <View style={styles.smallLeafStem} />
        <View style={styles.smallLeafOne} />
        <View style={styles.smallLeafTwo} />
      </View>

      {/* Additional decorative dots */}
      <View style={[styles.dot, styles.dotTopLeft]} />
      <View style={[styles.dot, styles.dotTopRight]} />
      <View style={[styles.dot, styles.dotMiddleLeft]} />
      <View style={[styles.dot, styles.dotMiddleRight]} />
      <View style={[styles.dot, styles.dotBottomLeft]} />
      <View style={[styles.dot, styles.dotBottomRight]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  
  // Multi-leaf branch (top left)
  multiLeafBranchContainer: {
    position: 'absolute',
    top: '5%',
    left: '10%',
    width: 80,
    height: 100,
  },
  leafStem: {
    position: 'absolute',
    width: 2,
    height: 60,
    backgroundColor: '#A5D6D2',
    left: 30,
    top: 20,
    transform: [{ rotate: '15deg' }],
  },
  leafOne: {
    position: 'absolute',
    width: 20,
    height: 35,
    backgroundColor: '#A5D6D2',
    borderRadius: 20,
    left: 15,
    top: 15,
    transform: [{ rotate: '-30deg' }],
  },
  leafTwo: {
    position: 'absolute',
    width: 20,
    height: 35,
    backgroundColor: '#A5D6D2',
    borderRadius: 20,
    left: 40,
    top: 25,
    transform: [{ rotate: '30deg' }],
  },
  leafThree: {
    position: 'absolute',
    width: 20,
    height: 35,
    backgroundColor: '#A5D6D2',
    borderRadius: 20,
    left: 15,
    top: 45,
    transform: [{ rotate: '-30deg' }],
  },
  leafFour: {
    position: 'absolute',
    width: 20,
    height: 35,
    backgroundColor: '#A5D6D2',
    borderRadius: 20,
    left: 40,
    top: 55,
    transform: [{ rotate: '30deg' }],
  },
  
  // Flower (top right)
  flowerContainer: {
    position: 'absolute',
    top: '8%',
    right: '15%',
    width: 50,
    height: 50,
  },
  flowerCenter: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    left: 20,
    top: 20,
  },
  flowerPetalOne: {
    position: 'absolute',
    width: 15,
    height: 15,
    backgroundColor: '#A5D6D2',
    borderRadius: 15,
    left: 17.5,
    top: 5,
  },
  flowerPetalTwo: {
    position: 'absolute',
    width: 15,
    height: 15,
    backgroundColor: '#A5D6D2',
    borderRadius: 15,
    left: 30,
    top: 17.5,
  },
  flowerPetalThree: {
    position: 'absolute',
    width: 15,
    height: 15,
    backgroundColor: '#A5D6D2',
    borderRadius: 15,
    left: 17.5,
    top: 30,
  },
  flowerPetalFour: {
    position: 'absolute',
    width: 15,
    height: 15,
    backgroundColor: '#A5D6D2',
    borderRadius: 15,
    left: 5,
    top: 17.5,
  },
  flowerPetalFive: {
    position: 'absolute',
    width: 15,
    height: 15,
    backgroundColor: '#A5D6D2',
    borderRadius: 15,
    left: 10,
    top: 10,
    transform: [{ rotate: '45deg' }],
  },
  
  // Berry branch (bottom left)
  berryBranchContainer: {
    position: 'absolute',
    bottom: '20%',
    left: '10%',
    width: 60,
    height: 70,
  },
  berryStem: {
    position: 'absolute',
    width: 2,
    height: 40,
    backgroundColor: '#A5D6D2',
    left: 20,
    top: 10,
    transform: [{ rotate: '30deg' }],
  },
  berryOne: {
    position: 'absolute',
    width: 15,
    height: 15,
    backgroundColor: '#A5D6D2',
    borderRadius: 10,
    left: 10,
    top: 5,
  },
  berryTwo: {
    position: 'absolute',
    width: 15,
    height: 15,
    backgroundColor: '#A5D6D2',
    borderRadius: 10,
    left: 25,
    top: 15,
  },
  berryThree: {
    position: 'absolute',
    width: 15,
    height: 15,
    backgroundColor: '#A5D6D2',
    borderRadius: 10,
    left: 35,
    top: 30,
  },
  
  // Small leaf branch (bottom right)
  smallLeafBranchContainer: {
    position: 'absolute',
    bottom: '15%',
    right: '15%',
    width: 60,
    height: 70,
  },
  smallLeafStem: {
    position: 'absolute',
    width: 2,
    height: 40,
    backgroundColor: '#A5D6D2',
    left: 20,
    top: 10,
    transform: [{ rotate: '-20deg' }],
  },
  smallLeafOne: {
    position: 'absolute',
    width: 18,
    height: 30,
    backgroundColor: '#A5D6D2',
    borderRadius: 15,
    left: 10,
    top: 15,
    transform: [{ rotate: '-30deg' }],
  },
  smallLeafTwo: {
    position: 'absolute',
    width: 18,
    height: 30,
    backgroundColor: '#A5D6D2',
    borderRadius: 15,
    left: 25,
    top: 30,
    transform: [{ rotate: '20deg' }],
  },
  
  // Decorative dots
  dot: {
    position: 'absolute',
    width: 8,
    height: 8,
    backgroundColor: '#A5D6D2',
    borderRadius: 4,
  },
  dotTopLeft: {
    top: '20%',
    left: '25%',
  },
  dotTopRight: {
    top: '15%',
    right: '30%',
  },
  dotMiddleLeft: {
    top: '45%',
    left: '15%',
  },
  dotMiddleRight: {
    top: '40%',
    right: '20%',
  },
  dotBottomLeft: {
    bottom: '30%',
    left: '30%',
  },
  dotBottomRight: {
    bottom: '25%',
    right: '25%',
  },
});

export default BackgroundDecorations;

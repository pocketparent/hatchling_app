/**
 * Typography Test Screen
 * 
 * This screen displays all typography variants defined in the theme
 * for visual validation of font loading and styling.
 */

import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../theme';
import { H1, H2, H3, H4, H5, Body, BodySmall, Caption } from '../../components/ui/Typography';
import BackButton from '../../components/ui/buttons/BackButton';
import Section from '../../components/ui/layout/Section';
import Card from '../../components/ui/cards/Card';
import Row from '../../components/ui/layout/Row';
import Column from '../../components/ui/layout/Column';
import Spacer from '../../components/ui/layout/Spacer';

const TypographyTest = ({ navigation }) => {
  // Sample text for testing
  const sampleText = "The quick brown fox jumps over the lazy dog";
  const pangrams = [
    "Pack my box with five dozen liquor jugs",
    "How vexingly quick daft zebras jump",
    "Sphinx of black quartz, judge my vow",
    "Amazingly few discotheques provide jukeboxes"
  ];

  // Font families used in the app
  const fontFamilies = [
    { name: 'SFProDisplay-Regular', label: 'SF Pro Display Regular' },
    { name: 'SFProDisplay-Medium', label: 'SF Pro Display Medium' },
    { name: 'SFProDisplay-Semibold', label: 'SF Pro Display Semibold' },
    { name: 'SFProDisplay-Bold', label: 'SF Pro Display Bold' },
    { name: 'SFProText-Regular', label: 'SF Pro Text Regular' },
    { name: 'SFProText-Medium', label: 'SF Pro Text Medium' },
    { name: 'SFProText-Semibold', label: 'SF Pro Text Semibold' },
    { name: 'SFProText-Bold', label: 'SF Pro Text Bold' },
  ];

  // Typography variants from theme
  const typographyVariants = [
    { name: 'H1', component: H1, description: 'Main headings' },
    { name: 'H2', component: H2, description: 'Section headings' },
    { name: 'H3', component: H3, description: 'Sub-section headings' },
    { name: 'H4', component: H4, description: 'Card titles' },
    { name: 'H5', component: H5, description: 'Small headings' },
    { name: 'Body', component: Body, description: 'Main body text' },
    { name: 'BodySmall', component: BodySmall, description: 'Secondary body text' },
    { name: 'Caption', component: Caption, description: 'Small captions and labels' },
  ];

  // Special text variants
  const specialVariants = [
    { name: 'Button Text', style: theme.typography.textVariants.button },
    { name: 'Overline', style: theme.typography.textVariants.overline },
    { name: 'Insight Title', style: theme.typography.textVariants.insightTitle },
    { name: 'Insight Body', style: theme.typography.textVariants.insightBody },
    { name: 'Milestone Title', style: theme.typography.textVariants.milestoneTitle },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Section>
          <BackButton onPress={() => navigation.goBack()} />
          <H1>Typography Test</H1>
          <Body>This screen displays all typography variants for validation.</Body>
        </Section>

        <Section>
          <H2>Standard Typography Variants</H2>
          <Card>
            {typographyVariants.map((variant, index) => {
              const Component = variant.component;
              return (
                <View key={index} style={styles.variantContainer}>
                  <Row>
                    <Column flex={1}>
                      <Caption style={styles.variantName}>{variant.name}</Caption>
                      <BodySmall style={styles.variantDescription}>{variant.description}</BodySmall>
                    </Column>
                  </Row>
                  <Component>{sampleText}</Component>
                  <Spacer size="md" />
                </View>
              );
            })}
          </Card>
        </Section>

        <Section>
          <H2>Special Typography Variants</H2>
          <Card>
            {specialVariants.map((variant, index) => (
              <View key={index} style={styles.variantContainer}>
                <Row>
                  <Column flex={1}>
                    <Caption style={styles.variantName}>{variant.name}</Caption>
                    <BodySmall style={styles.variantDescription}>
                      Font: {variant.style.fontFamily}, Size: {variant.style.fontSize}
                    </BodySmall>
                  </Column>
                </Row>
                <Body style={variant.style}>{sampleText}</Body>
                <Spacer size="md" />
              </View>
            ))}
          </Card>
        </Section>

        <Section>
          <H2>Font Families</H2>
          <Card>
            {fontFamilies.map((font, index) => (
              <View key={index} style={styles.variantContainer}>
                <Caption style={styles.variantName}>{font.label}</Caption>
                <Body style={{ fontFamily: font.name }}>{pangrams[index % pangrams.length]}</Body>
                <Spacer size="md" />
              </View>
            ))}
          </Card>
        </Section>

        <Section>
          <H2>Font Weights</H2>
          <Card>
            {['normal', '100', '200', '300', '400', '500', '600', '700', '800', '900'].map((weight, index) => (
              <View key={index} style={styles.variantContainer}>
                <Caption style={styles.variantName}>Weight: {weight}</Caption>
                <Body style={{ fontWeight: weight }}>{sampleText}</Body>
                <Spacer size="md" />
              </View>
            ))}
          </Card>
        </Section>

        <Section>
          <H2>Font Sizes</H2>
          <Card>
            {Object.entries(theme.typography.fontSizes).map(([name, size], index) => (
              <View key={index} style={styles.variantContainer}>
                <Caption style={styles.variantName}>{name}: {size}px</Caption>
                <Body style={{ fontSize: size }}>{sampleText}</Body>
                <Spacer size="md" />
              </View>
            ))}
          </Card>
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
  scrollContent: {
    paddingBottom: theme.spacing.spacing.xxl,
  },
  variantContainer: {
    marginBottom: theme.spacing.spacing.md,
  },
  variantName: {
    color: theme.colors.primary.dark,
    marginBottom: theme.spacing.spacing.xs,
  },
  variantDescription: {
    color: theme.colors.neutral.medium,
    marginBottom: theme.spacing.spacing.sm,
  },
});

export default TypographyTest;

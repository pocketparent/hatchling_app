import React from 'react';
import { View, StyleSheet } from 'react-native';
import { H1, H2, H3, Body, BodySmall, Caption } from './Typography';
import Row from './layout/Row';
import Column from './layout/Column';
import Spacer from './layout/Spacer';
import Section from './layout/Section';
import Container from './layout/Container';
import SafeContainer from './layout/SafeContainer';
import ScrollContainer from './layout/ScrollContainer';
import Card from './cards/Card';
import CardTitle from './cards/CardTitle';
import Button from './buttons/Button';
import BackButton from './buttons/BackButton';
import OptionButton from './buttons/OptionButton';
import IconButton from './buttons/IconButton';
import SecondaryButton from './buttons/SecondaryButton';
import PrimaryButton from './buttons/Button'; // Alias Button as PrimaryButton
import TextInput from './inputs/TextInput';
import ProgressBar from './progress/ProgressBar';
import ProgressIndicator from './progress/ProgressIndicator';
import DomainBadge from './badges/DomainBadge';
import CategoryPill from './filters/CategoryPill';
import DomainProgressCard from './cards/DomainProgressCard';

// Export all UI components for easy imports
export {
  // Typography
  H1,
  H2,
  H3,
  Body,
  BodySmall,
  Caption,
  
  // Layout
  Row,
  Column,
  Spacer,
  Section,
  Container,
  SafeContainer,
  ScrollContainer,
  
  // Cards
  Card,
  CardTitle,
  DomainProgressCard,
  
  // Buttons
  Button,
  PrimaryButton,
  SecondaryButton,
  BackButton,
  OptionButton,
  IconButton,
  
  // Inputs
  TextInput,
  
  // Progress
  ProgressBar,
  ProgressIndicator,
  
  // Badges
  DomainBadge,
  
  // Filters
  CategoryPill,
};

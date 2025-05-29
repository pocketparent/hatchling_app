/**
 * Hatchling App UI Components Index
 * 
 * Central export for all reusable UI components
 */
import Typography from './Typography';
import Buttons from './Buttons';
import Cards from './Cards';
import Inputs from './Inputs';
import AppHeader from './AppHeader';
import Layout from './Layout';

export {
  Typography,
  Buttons,
  Cards,
  Inputs,
  AppHeader,
  Layout
};

// Export individual components for easier imports
export const { H1, H2, H3, Body, BodySmall, Caption, Label } = Typography;
export const { PrimaryButton, SecondaryButton, TextButton, IconButton } = Buttons;
export const { Card, InteractiveCard, AccentCard, InteractiveAccentCard } = Cards;
export const { Input, Checkbox, Toggle, RadioButton } = Inputs;
export const { 
  Container, 
  SafeContainer, 
  ScrollContainer, 
  Section, 
  Row, 
  Column, 
  Spacer, 
  Divider 
} = Layout;

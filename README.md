# Hatchling App

Hatchling is a non-tracking, emotionally intelligent parenting app designed for the first year of a baby's life. Instead of charts or logging, it delivers timely, handcrafted content that helps parents understand what's happening with their baby.

## Philosophy

Hatchling is built around three core principles:
- Delivering insight without burden
- Offering reassurance instead of pressure
- Fostering connection over perfection

## Features

- **Daily Insight Engine**: One thoughtfully crafted insight card per day
- **Milestone Journey Navigator**: A scrollable, visual way to explore developmental phases
- **Weekly Check-In System**: A lightweight Friday ritual with quick prompts
- **Ask Hatchling**: Pre-written answers to common parenting questions
- **Saved Content System**: Storage for insights and milestone memories

## Getting Started

### Prerequisites

- Node.js (latest stable version)
- npm or yarn
- iOS Simulator (for iOS testing)
- Android Studio (for Android testing)

### Installation

1. Clone the repository
```bash
git clone https://github.com/pocketparent/hatchling_app.git
cd hatchling_app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Run on iOS simulator
```bash
npm run ios
```

5. Run on Android emulator
```bash
npm run android
```

## Project Structure

```
hatchling_app/
├── src/
│   ├── screens/         # Main app screens
│   │   ├── Today/       # Daily insight screen
│   │   ├── Journey/     # Milestone journey navigator
│   │   ├── Ask/         # Q&A system
│   │   ├── Saved/       # Saved content
│   │   └── Settings/    # App settings
│   ├── components/      # Reusable UI components
│   ├── navigation/      # Navigation configuration
│   ├── theme/           # Design system (colors, typography, spacing)
│   ├── utils/           # Utility functions
│   ├── contexts/        # React contexts
│   └── assets/          # Local assets
├── assets/              # Global assets (app icon, splash screen)
└── App.js               # Entry point
```

## Design System

The app uses a custom design system inspired by minimalist principles:

- **Colors**: Primary (greens), secondary (warm oranges), and neutral palettes
- **Typography**: Clear hierarchy with consistent text variants
- **Spacing**: 4px base unit for consistent visual rhythm

## Development Roadmap

- [x] Initial setup and foundational architecture
- [ ] Implement Daily Insight Engine with swipeable cards
- [ ] Build Milestone Journey Navigator with phase exploration
- [ ] Create Weekly Check-In system
- [ ] Develop Ask Hatchling Q&A functionality
- [ ] Implement Saved Content system with insights and milestone media

## License

This project is proprietary and confidential.

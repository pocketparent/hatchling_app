/**
 * Mock Check-In Data
 * 
 * Provides realistic content for the Weekly Check-In system
 * Structured as questions with possible responses
 */

export const mockCheckIns = [
  {
    id: 'checkin_1',
    title: 'Sleep Patterns',
    description: 'Let\'s understand how your baby is sleeping',
    questions: [
      {
        id: 'sleep_1',
        text: 'How is your baby sleeping at night?',
        type: 'multiple_choice',
        options: [
          { id: 'sleep_1_a', text: 'Sleeping in long stretches (4+ hours)' },
          { id: 'sleep_1_b', text: 'Waking every 2-3 hours' },
          { id: 'sleep_1_c', text: 'Waking hourly or more frequently' },
          { id: 'sleep_1_d', text: 'Varies significantly night to night' }
        ]
      },
      {
        id: 'sleep_2',
        text: 'Where is your baby primarily sleeping?',
        type: 'multiple_choice',
        options: [
          { id: 'sleep_2_a', text: 'Crib or bassinet in own room' },
          { id: 'sleep_2_b', text: 'Crib or bassinet in parents\' room' },
          { id: 'sleep_2_c', text: 'Co-sleeping with parent(s)' },
          { id: 'sleep_2_d', text: 'Combination of these options' }
        ]
      },
      {
        id: 'sleep_3',
        text: 'What\'s your biggest sleep challenge right now?',
        type: 'text_input'
      }
    ]
  },
  {
    id: 'checkin_2',
    title: 'Feeding Journey',
    description: 'Let\'s check in on how feeding is going',
    questions: [
      {
        id: 'feeding_1',
        text: 'How are you currently feeding your baby?',
        type: 'multiple_choice',
        options: [
          { id: 'feeding_1_a', text: 'Exclusively breastfeeding' },
          { id: 'feeding_1_b', text: 'Exclusively formula feeding' },
          { id: 'feeding_1_c', text: 'Combination feeding' },
          { id: 'feeding_1_d', text: 'Breastfeeding with solid foods' },
          { id: 'feeding_1_e', text: 'Formula with solid foods' }
        ]
      },
      {
        id: 'feeding_2',
        text: 'If offering solids, which foods has your baby tried?',
        type: 'multiple_select',
        options: [
          { id: 'feeding_2_a', text: 'Fruits' },
          { id: 'feeding_2_b', text: 'Vegetables' },
          { id: 'feeding_2_c', text: 'Grains' },
          { id: 'feeding_2_d', text: 'Proteins' },
          { id: 'feeding_2_e', text: 'Not offering solids yet' }
        ]
      },
      {
        id: 'feeding_3',
        text: 'What\'s your biggest feeding question right now?',
        type: 'text_input'
      }
    ]
  },
  {
    id: 'checkin_3',
    title: 'Developmental Milestones',
    description: 'Let\'s see what your baby is working on',
    questions: [
      {
        id: 'development_1',
        text: 'Which physical skills is your baby currently working on?',
        type: 'multiple_select',
        options: [
          { id: 'development_1_a', text: 'Head control' },
          { id: 'development_1_b', text: 'Rolling' },
          { id: 'development_1_c', text: 'Sitting' },
          { id: 'development_1_d', text: 'Crawling' },
          { id: 'development_1_e', text: 'Pulling to stand' },
          { id: 'development_1_f', text: 'Cruising' },
          { id: 'development_1_g', text: 'Walking' }
        ]
      },
      {
        id: 'development_2',
        text: 'Which sounds or words is your baby making?',
        type: 'multiple_select',
        options: [
          { id: 'development_2_a', text: 'Cooing (vowel sounds)' },
          { id: 'development_2_b', text: 'Babbling (consonant sounds)' },
          { id: 'development_2_c', text: 'Specific syllables (ba, da, ma)' },
          { id: 'development_2_d', text: 'First words' },
          { id: 'development_2_e', text: 'Multiple words' }
        ]
      },
      {
        id: 'development_3',
        text: 'What new skill are you most excited about?',
        type: 'text_input'
      }
    ]
  },
  {
    id: 'checkin_4',
    title: 'Parental Well-being',
    description: 'Let\'s check in on how you\'re doing',
    questions: [
      {
        id: 'parent_1',
        text: 'How would you rate your energy level this week?',
        type: 'scale',
        min: 1,
        max: 5,
        minLabel: 'Completely exhausted',
        maxLabel: 'Well rested'
      },
      {
        id: 'parent_2',
        text: 'Have you had any time for self-care this week?',
        type: 'multiple_choice',
        options: [
          { id: 'parent_2_a', text: 'Yes, regular moments' },
          { id: 'parent_2_b', text: 'A few brief moments' },
          { id: 'parent_2_c', text: 'Hardly any' },
          { id: 'parent_2_d', text: 'None at all' }
        ]
      },
      {
        id: 'parent_3',
        text: 'What would help you feel more supported right now?',
        type: 'text_input'
      }
    ]
  },
  {
    id: 'checkin_5',
    title: 'Daily Rhythms',
    description: 'Let\'s explore your daily patterns',
    questions: [
      {
        id: 'rhythm_1',
        text: 'Do you have a consistent daily routine?',
        type: 'multiple_choice',
        options: [
          { id: 'rhythm_1_a', text: 'Yes, very consistent' },
          { id: 'rhythm_1_b', text: 'Somewhat consistent' },
          { id: 'rhythm_1_c', text: 'Not very consistent' },
          { id: 'rhythm_1_d', text: 'No routine yet' }
        ]
      },
      {
        id: 'rhythm_2',
        text: 'Which part of the day feels most challenging?',
        type: 'multiple_choice',
        options: [
          { id: 'rhythm_2_a', text: 'Morning wake-up' },
          { id: 'rhythm_2_b', text: 'Midday/afternoon' },
          { id: 'rhythm_2_c', text: 'Evening/dinner time' },
          { id: 'rhythm_2_d', text: 'Bedtime routine' },
          { id: 'rhythm_2_e', text: 'Overnight' }
        ]
      },
      {
        id: 'rhythm_3',
        text: 'What\'s one thing you\'d like to change about your daily routine?',
        type: 'text_input'
      }
    ]
  }
];

export default mockCheckIns;

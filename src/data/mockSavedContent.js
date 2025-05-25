/**
 * Mock Saved Content Data
 * 
 * Provides realistic content for the Saved Content system
 * Includes saved insights, activities, and milestone media
 */

export const mockSavedContent = {
  insights: [
    {
      id: 'saved_insight_1',
      title: 'Managing Sleep Regressions',
      type: 'Daily Insight',
      date: '2025-05-20',
      icon: '🌙',
      color: '#FFCC80',
      content: {
        challenge: {
          title: "Why is my baby suddenly waking every hour?",
          content: "After weeks of longer stretches, your baby is suddenly waking frequently again. You're exhausted and wondering if something is wrong or if you've somehow created bad habits."
        },
        why: {
          title: "The 4-month sleep change is real",
          content: "Around 4 months, babies undergo a major brain development leap. Their sleep cycles mature to become more adult-like, with distinct light and deep sleep phases. This means they're more likely to wake between cycles instead of drifting seamlessly from one to the next."
        },
        try: {
          title: "Focus on the falling asleep process",
          content: "Help your baby practice falling asleep more independently at bedtime when sleep pressure is highest. Start putting them down drowsy but awake, and gradually reduce rocking or feeding to sleep. This skill will help them connect sleep cycles throughout the night."
        },
        reassurance: {
          title: "This is temporary, and you're doing great",
          content: "This regression is a sign of healthy brain development. It doesn't mean you've done anything wrong or that your baby will never sleep well again. Most babies adjust within 2-4 weeks, especially with consistent routines and gentle guidance."
        }
      }
    },
    {
      id: 'saved_insight_2',
      title: 'Strategies for Self-Soothing',
      type: 'Daily Insight',
      date: '2025-05-18',
      icon: '😊',
      color: '#FF8A65',
      content: {
        challenge: {
          title: "My baby seems to need constant help calming down",
          content: "Your baby gets upset easily and seems to rely completely on you to calm down. You're wondering if this is normal and if you should be teaching them to self-soothe."
        },
        why: {
          title: "Babies develop regulation skills gradually",
          content: "Self-soothing is a developmental skill that emerges over time, not something babies can learn through training. Young babies have immature nervous systems and literally need co-regulation from caregivers to manage their emotions and sensations."
        },
        try: {
          title: "Support rather than train",
          content: "Respond consistently to your baby's needs while gradually introducing gentle techniques like a lovey (for babies over 12 months), a consistent verbal cue like 'you're okay,' or a calming routine. These become tools they can eventually use independently."
        },
        reassurance: {
          title: "You're building a foundation for emotional regulation",
          content: "By responding to your baby's needs now, you're not creating bad habits—you're building trust and teaching them that emotions can be managed. This secure foundation actually leads to better self-regulation skills later in childhood."
        }
      }
    }
  ],
  activities: [
    {
      id: 'saved_activity_1',
      title: 'Singing Songs',
      type: 'Activity Suggestion',
      date: '2025-05-22',
      icon: '🎵',
      color: '#FFCC80',
      content: {
        description: "Singing to your baby is one of the most powerful ways to connect, regardless of your vocal abilities! Your baby loves your voice above all others.",
        benefits: [
          "Supports language development through rhythm and repetition",
          "Creates predictable patterns that help babies feel secure",
          "Introduces turn-taking when you pause for their response",
          "Can be used to establish routines (like a special bedtime song)"
        ],
        suggestions: [
          "Try songs with gentle movements like 'Row, Row, Row Your Boat'",
          "Make up simple songs about what you're doing together",
          "Use familiar melodies with new words about your baby",
          "Don't worry about perfection—enthusiasm matters more than pitch!"
        ]
      }
    },
    {
      id: 'saved_activity_2',
      title: 'Building with Blocks',
      type: 'Activity Suggestion',
      date: '2025-05-19',
      icon: '🧱',
      color: '#FF8A65',
      content: {
        description: "Block play is a foundational activity that grows with your child from simple exploration to complex construction. It supports multiple developmental domains simultaneously.",
        benefits: [
          "Develops fine motor skills and hand-eye coordination",
          "Introduces early math concepts like size, shape, and balance",
          "Encourages problem-solving and spatial reasoning",
          "Provides opportunities for imaginative play as skills develop"
        ],
        suggestions: [
          "For babies: Offer large, lightweight blocks for grasping and exploring",
          "For older babies: Demonstrate stacking 2-3 blocks, then let them try",
          "Narrate what's happening: 'You're stacking the red block on top!'",
          "Follow their lead rather than directing the play"
        ]
      }
    }
  ],
  milestoneMedia: [
    {
      id: 'media_1',
      type: 'image',
      date: '2025-05-15',
      title: 'First smile',
      description: 'Emma\'s first real social smile!',
      source: null // In a real app, this would be a URL or local file path
    },
    {
      id: 'media_2',
      type: 'image',
      date: '2025-05-10',
      title: 'Tummy time champion',
      description: 'Getting stronger every day',
      source: null
    },
    {
      id: 'media_3',
      type: 'image',
      date: '2025-05-05',
      title: 'Reaching for toys',
      description: 'First time grabbing the rattle',
      source: null
    },
    {
      id: 'media_4',
      type: 'video',
      date: '2025-04-28',
      title: 'Rolling over',
      description: 'First time rolling from back to tummy!',
      source: null,
      thumbnail: null
    }
  ]
};

export default mockSavedContent;

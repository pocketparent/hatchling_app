/**
 * Mock Insights Data
 * 
 * Provides realistic content for the Daily Insight Engine
 * Follows the Challenge/Why/Try/Reassurance panel structure
 */

export const mockInsights = [
  {
    id: '1',
    ageRange: { min: 90, max: 150 }, // 3-5 months
    tags: ['sleep', 'regression', 'development'],
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
  },
  {
    id: '2',
    ageRange: { min: 30, max: 90 }, // 1-3 months
    tags: ['feeding', 'breastfeeding', 'newborn'],
    challenge: {
      title: "My baby seems constantly hungry",
      content: "Your newborn wants to feed every 1-2 hours, day and night. Just when you think they're satisfied, they're rooting and fussing again. You're wondering if something is wrong with your milk supply."
    },
    why: {
      title: "Cluster feeding is normal and purposeful",
      content: "Frequent feeding is your baby's way of building your milk supply to meet their growing needs. Newborn stomachs are tiny (about the size of a cherry at day 1, a walnut at day 3, and an egg by day 10), so they need small, frequent meals."
    },
    try: {
      title: "Feed on demand and rest when possible",
      content: "Follow your baby's hunger cues rather than watching the clock. When cluster feeding is intense, create a comfortable station with water, snacks, and entertainment. Ask for help with household tasks so you can focus on feeding and resting."
    }
  },
  {
    id: '3',
    ageRange: { min: 180, max: 240 }, // 6-8 months
    tags: ['development', 'milestones', 'motor'],
    challenge: {
      title: "My baby won't sit still for anything",
      content: "Your once-content baby now squirms, twists, and fights being held in one position. Diaper changes have become wrestling matches, and even feeding sessions are punctuated with attempts to escape."
    },
    why: {
      title: "New motor skills create new priorities",
      content: "Around 6-8 months, babies discover the joy of movement. Their brains are wiring crucial connections for crawling, sitting independently, and eventually walking. This developmental drive is so strong that it can override other interests temporarily."
    },
    try: {
      title: "Build movement into your routines",
      content: "Rather than fighting the wiggles, incorporate them. Try diaper changes standing up (for pee), sing songs with movements during transitions, and accept that meals might be shorter and more active for a while. Create safe spaces where movement is unlimited."
    }
  },
  {
    id: '4',
    ageRange: { min: 270, max: 365 }, // 9-12 months
    tags: ['emotional', 'separation', 'development'],
    challenge: {
      title: "Sudden separation anxiety is exhausting us",
      content: "Your baby, who once happily played independently or went to others, now cries desperately when you leave the room. Bedtime has become harder, and you can't even use the bathroom in peace."
    },
    why: {
      title: "Object permanence is a cognitive milestone",
      content: "Around 9 months, babies develop 'object permanence' – understanding that things exist even when out of sight. This exciting cognitive leap has an emotional side effect: they now know you're somewhere else when they can't see you, but don't understand that you'll return."
    },
    try: {
      title: "Play peek-a-boo with purpose",
      content: "Games like peek-a-boo and hide-and-seek with toys help babies learn that disappearances are temporary. Practice short separations with clear goodbyes, and develop consistent departure routines. Avoid sneaking away, which can increase anxiety over time."
    },
    reassurance: {
      title: "This intense phase shows healthy attachment",
      content: "Strong separation anxiety is actually a sign of secure attachment. Your baby misses you because they love you and feel safe with you. This phase typically eases around 18 months as language develops and they better understand your comings and goings."
    }
  },
  {
    id: '5',
    ageRange: { min: 150, max: 210 }, // 5-7 months
    tags: ['feeding', 'solids', 'development'],
    challenge: {
      title: "My baby makes strange faces with every new food",
      content: "You've started introducing solids, but your baby grimaces, shivers, or looks disgusted with almost everything. You're worried they'll never enjoy food or get proper nutrition."
    },
    why: {
      title: "Taste development is a journey, not a destination",
      content: "Babies are born preferring sweet flavors (like breastmilk) and often react dramatically to new tastes and textures. These reactions are reflexive and don't necessarily mean dislike. Research shows it can take 15-20 exposures to a food before acceptance."
    },
    try: {
      title: "Focus on exposure, not consumption",
      content: "Keep mealtimes pressure-free by focusing on exploration rather than how much they eat. Model enjoying foods yourself, offer small amounts frequently, and remember that milk remains their primary nutrition source for the first year."
    }
  }
];

export default mockInsights;

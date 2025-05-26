/**
 * Mock Insights Data
 * 
 * This file contains mock data for the Daily Insight Engine
 * Each insight has multiple panels: Challenge, Why, Try, and Reassurance
 */

export const mockInsights = [
  {
    id: "insight_001",
    title: "Why Your Good Sleeper Suddenly Isn't",
    challenge: "Is Emma suddenly waking more frequently?",
    why: "Around 4 months, babies experience a significant change in sleep patterns called the \"4-month sleep regression.\" Their sleep cycles mature to be more like adult sleep, with distinct light and deep sleep phases. This means they're more likely to wake between cycles and have a harder time connecting sleep cycles without assistance.",
    try: "Try to put your baby down drowsy but awake to help them learn to fall asleep independently. Establish a consistent bedtime routine that signals it's time to sleep. Consider introducing a lovey or comfort object (if age-appropriate and safe). Remember that responding consistently helps build security.",
    reassurance: "This phase is temporary and completely normal. It doesn't mean you've done anything wrong or that your baby will always struggle with sleep. Most babies adjust to their new sleep patterns within 2-6 weeks. You're doing a great job supporting your baby through this developmental leap!",
    category: "sleep",
    ageRange: [90, 180] // 3-6 months in days
  },
  {
    id: "insight_002",
    title: "Understanding Babbling Development",
    challenge: "Has Emma started making more varied sounds?",
    why: "Around 4-6 months, babies begin experimenting with their voices in new ways. They discover they can control the sounds they make, leading to more varied vocalizations. This \"canonical babbling\" (consonant-vowel combinations like \"ba-ba\" or \"ma-ma\") is a crucial step toward language development.",
    try: "Respond to your baby's babbling as if you're having a conversation. This \"serve and return\" interaction teaches turn-taking and encourages more vocalization. Narrate your day to expose your baby to language. Try mimicking their sounds sometimes, which delights babies and encourages more experimentation.",
    reassurance: "Each baby develops language at their own pace. Some are more vocal than others from the start. What matters most is that your baby is gradually adding new sounds to their repertoire. Your attentive responses to their communication attempts are building the foundation for language development.",
    category: "development",
    ageRange: [120, 210] // 4-7 months in days
  },
  {
    id: "insight_003",
    title: "Introducing Solid Foods",
    challenge: "Wondering when and how to start solid foods?",
    why: "Around 6 months, babies develop the coordination to move food to the back of their mouths and swallow it. They can sit with support, have good head control, show interest in food, and their digestive systems are mature enough to handle simple solids. These are all signs of readiness for introducing complementary foods alongside milk.",
    try: "Start with single-ingredient foods without added sugar or salt. Iron-rich foods like iron-fortified cereals, pureed meat, or legumes are good first choices. Offer small amounts (1-2 teaspoons) once a day initially, gradually increasing as your baby shows interest. Always watch for allergic reactions when introducing new foods.",
    reassurance: "Whether you choose traditional spoon-feeding or baby-led weaning, remember that \"food before one is mostly for fun.\" Breast milk or formula remains the primary source of nutrition throughout the first year. There's no rush—follow your baby's cues and consult your pediatrician with any concerns.",
    category: "feeding",
    ageRange: [150, 240] // 5-8 months in days
  },
  {
    id: "insight_004",
    title: "Supporting Emotional Development",
    challenge: "Noticing your baby has stronger emotional reactions?",
    why: "Around 4-7 months, babies begin developing more complex emotions. They're becoming more aware of their surroundings and forming stronger attachments to caregivers. This can lead to separation anxiety, stranger anxiety, and more intense expressions of joy, frustration, or fear as they process these new emotional experiences.",
    try: "Validate your baby's feelings by acknowledging them: \"I see you're feeling upset.\" Maintain a calm presence during emotional moments. Play peek-a-boo to help teach object permanence (that things exist even when out of sight). Create predictable routines to help your baby feel secure and know what to expect.",
    reassurance: "These emotional developments are healthy signs of attachment and cognitive growth. Your consistent, loving responses help your baby learn that emotions are manageable and that they can count on you for support. This builds the foundation for emotional regulation and secure relationships.",
    category: "development",
    ageRange: [120, 210] // 4-7 months in days
  },
  {
    id: "insight_005",
    title: "Understanding Teething Discomfort",
    challenge: "Is Emma showing signs of teething discomfort?",
    why: "Teething typically begins around 4-7 months, though timing varies widely. As teeth push through the gums, babies may experience swelling, tenderness, and irritation. This can cause increased drooling, fussiness, disrupted sleep, and a desire to chew on things. Some babies show minimal discomfort, while others find it more challenging.",
    try: "Offer clean, cool (not frozen) teething toys or a cold washcloth to chew on. Gently massage your baby's gums with a clean finger. For babies eating solids, cold foods like refrigerated (not frozen) applesauce may provide relief. If needed, ask your pediatrician about appropriate pain relievers, but avoid teething gels with benzocaine.",
    reassurance: "While teething can be uncomfortable, it's a normal developmental process. Contrary to popular belief, teething doesn't cause high fevers, diarrhea, or severe illness—if these occur, contact your doctor as they likely indicate something else. Most babies adjust to the sensation after the first few teeth.",
    category: "health",
    ageRange: [120, 240] // 4-8 months in days
  }
];

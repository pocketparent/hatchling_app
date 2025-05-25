/**
 * Mock Ask Hatchling Data
 * 
 * Provides realistic content for the Ask Hatchling Q&A system
 * Organized by categories with questions and answers
 */

export const mockAskData = {
  categories: [
    { id: "cat_sleep", name: "Sleep", icon: "🌙" },
    { id: "cat_feeding", name: "Feeding", icon: "🍼" },
    { id: "cat_development", name: "Development", icon: "🧩" },
    { id: "cat_health", name: "Health", icon: "🩺" },
    { id: "cat_behavior", name: "Behavior", icon: "🧸" },
    { id: "cat_parenting", name: "Parenting", icon: "❤️" },
  ],
  questions: [
    {
      id: "q_sleep_1",
      category: "cat_sleep",
      question: "Why is my baby waking up every hour at night?",
      answer: "Around 4 months, babies\" sleep cycles mature, leading to more frequent waking between cycles. This is often called the 4-month sleep regression and is a sign of healthy brain development. Focus on helping your baby learn to fall asleep independently at bedtime, which can help them connect sleep cycles overnight. This phase is usually temporary, lasting 2-4 weeks.",
      tags: ["sleep regression", "4 months", "night waking"],
    },
    {
      id: "q_sleep_2",
      category: "cat_sleep",
      question: "How do I establish a good bedtime routine?",
      answer: "A consistent bedtime routine signals to your baby that sleep is coming. Aim for a calm sequence of activities like a warm bath, massage, putting on pajamas, reading a book, and a final feeding or song. Start the routine 30-60 minutes before your desired bedtime. Keep the lights dim and the environment quiet.",
      tags: ["bedtime routine", "sleep habits", "newborn"],
    },
    {
      id: "q_feeding_1",
      category: "cat_feeding",
      question: "How do I know if my baby is getting enough milk?",
      answer: "Look for signs of satisfaction after feeding (relaxed body, content), adequate wet diapers (5-6+ per day after the first week), consistent weight gain, and active feeding with audible swallowing. If you have concerns, consult your pediatrician or a lactation consultant.",
      tags: ["breastfeeding", "formula feeding", "milk supply", "newborn"],
    },
    {
      id: "q_feeding_2",
      category: "cat_feeding",
      question: "When should I start introducing solid foods?",
      answer: "Most experts recommend starting solids around 6 months, when your baby shows signs of readiness: good head control, ability to sit with support, loss of the tongue-thrust reflex, and interest in food. Start with single-ingredient purees or soft finger foods. Introduce new foods one at a time, waiting 2-3 days between each.",
      tags: ["solid foods", "starting solids", "6 months", "feeding milestones"],
    },
    {
      id: "q_development_1",
      category: "cat_development",
      question: "My baby isn\"t crawling yet, should I be worried?",
      answer: "Babies develop at their own pace! While many babies crawl between 7-10 months, some skip crawling altogether and go straight to pulling up and walking. Focus on providing plenty of tummy time and opportunities for free movement. If your baby isn\"t showing any signs of mobility by 12 months, discuss it with your pediatrician.",
      tags: ["crawling", "motor milestones", "developmental variation"],
    },
    {
      id: "q_health_1",
      category: "cat_health",
      question: "What\"s the best way to take my baby\"s temperature?",
      answer: "For infants under 3 months, a rectal temperature is most accurate. For older babies and toddlers, rectal, temporal artery (forehead), or tympanic (ear) thermometers are reliable options. Axillary (underarm) temperatures are less accurate but can be used for screening. Always use a digital thermometer and follow the manufacturer\"s instructions.",
      tags: ["fever", "temperature", "thermometer", "baby health"],
    },
    {
      id: "q_behavior_1",
      category: "cat_behavior",
      question: "Why does my baby cry when I leave the room?",
      answer: "This is likely separation anxiety, which often peaks between 8-18 months. It\"s a normal developmental stage where babies understand you exist even when out of sight (object permanence) but haven\"t yet grasped that you\"ll return. Create consistent goodbye routines, keep separations brief initially, and play peek-a-boo to reinforce your return.",
      tags: ["separation anxiety", "crying", "attachment", "8 months"],
    },
    {
      id: "q_parenting_1",
      category: "cat_parenting",
      question: "How can I cope with sleep deprivation?",
      answer: "Sleep deprivation is incredibly challenging. Prioritize sleep whenever possible: sleep when the baby sleeps, even for short naps. Ask for help from your partner, family, or friends. Lower your expectations for household chores. Stay hydrated and eat nourishing foods. If you\"re struggling significantly, talk to your doctor.",
      tags: ["sleep deprivation", "new parent", "self-care", "support"],
    },
  ],
};

export default mockAskData;

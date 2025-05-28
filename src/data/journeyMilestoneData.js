// Hatchling App - Journey Tab Mock Data
// Milestone-first structure with Phases → Domains → Milestones + Suggested Activities

const journeyMilestoneData = {
  "phases": [
    {
      "id": "phase_0_2m",
      "name": "0-2 Months",
      "description": "Newborn development focuses on basic reflexes and sensory awareness",
      "domains": [
        {
          "id": "physical_0_2m",
          "name": "Physical",
          "icon": "body-outline",
          "color": "#4A9B9B", // Teal
          "description": "Motor skills and physical development",
          "progress": 0, // Calculated based on observed milestones
          "milestones": [
            {
              "id": "physical_milestone_1",
              "title": "Lifts head briefly during tummy time",
              "description": "Your baby is beginning to develop neck strength by lifting their head momentarily while on their tummy. This is an important first step toward developing the strength needed for rolling over, sitting up, and eventually crawling.",
              "ageRange": "1-2 months",
              "observed": false, // Toggle state
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_1",
                  "title": "Supervised Tummy Time",
                  "description": "Place baby on their tummy for 1-2 minutes, 2-3 times daily while awake and supervised. Use a small rolled towel under their chest for support if needed.",
                  "completed": false
                },
                {
                  "id": "activity_2",
                  "title": "Chest-to-Chest Time",
                  "description": "Recline and place baby on your chest, encouraging them to lift their head to look at your face.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_2",
              "title": "Makes smoother movements with arms and legs",
              "description": "Your baby's movements are becoming less jerky and more fluid as their nervous system matures. This is a sign that their brain is developing better control over their body.",
              "ageRange": "0-2 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_3",
                  "title": "Gentle Stretches",
                  "description": "While changing diapers, gently move baby's arms and legs in a bicycle motion to help develop muscle awareness.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_3",
              "title": "Turns head toward sounds or voices",
              "description": "Your baby is developing the ability to locate sounds by turning their head toward familiar voices or interesting noises. This shows developing neck control and sensory awareness.",
              "ageRange": "1-2 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_4",
                  "title": "Sound Tracking",
                  "description": "While baby is alert, make gentle sounds from different directions and watch as they try to turn toward the sound.",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "cognitive_0_2m",
          "name": "Cognitive",
          "icon": "brain-outline",
          "color": "#F4A261", // Orange
          "description": "Learning, thinking, and problem-solving skills",
          "progress": 0,
          "milestones": [
            {
              "id": "cognitive_milestone_1",
              "title": "Follows objects with eyes",
              "description": "Your baby is developing visual tracking skills by following moving objects or faces with their eyes. This shows their brain is processing visual information and developing focus.",
              "ageRange": "0-2 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_5",
                  "title": "Visual Tracking Practice",
                  "description": "Hold a high-contrast toy about 8-12 inches from baby's face and slowly move it from side to side, allowing them to follow with their eyes.",
                  "completed": false
                }
              ]
            },
            {
              "id": "cognitive_milestone_2",
              "title": "Begins to recognize familiar faces",
              "description": "Your baby is starting to recognize and prefer familiar faces, especially parents and primary caregivers. This is an important cognitive and social development milestone.",
              "ageRange": "1-2 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_6",
                  "title": "Face Time",
                  "description": "Spend time face-to-face with your baby when they're alert, allowing them to study your features and expressions.",
                  "completed": false
                }
              ]
            },
            {
              "id": "cognitive_milestone_3",
              "title": "Shows interest in contrasting patterns",
              "description": "Your baby is attracted to high-contrast patterns and colors, which help stimulate visual development. This interest shows their brain is processing visual differences.",
              "ageRange": "0-2 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_7",
                  "title": "Contrast Cards",
                  "description": "Show baby simple black and white pattern cards, changing them every few days to maintain interest.",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "language_0_2m",
          "name": "Language",
          "icon": "chatbubble-outline",
          "color": "#E76F51", // Coral
          "description": "Communication and language development",
          "progress": 0,
          "milestones": [
            {
              "id": "language_milestone_1",
              "title": "Makes cooing sounds",
              "description": "Your baby is beginning to experiment with making vowel sounds like 'ooh' and 'aah'. These are the building blocks of speech and show their vocal development is progressing.",
              "ageRange": "1-2 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_8",
                  "title": "Conversation Time",
                  "description": "Talk to your baby throughout the day, pausing to give them a chance to 'respond' with their own sounds.",
                  "completed": false
                }
              ]
            },
            {
              "id": "language_milestone_2",
              "title": "Responds to voices by becoming quiet or smiling",
              "description": "Your baby recognizes and responds to human voices, especially familiar ones, by becoming alert, quieting down, or smiling. This shows they're processing language input.",
              "ageRange": "0-2 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_9",
                  "title": "Narrate Your Day",
                  "description": "Talk to your baby about what you're doing throughout the day, using a warm, engaging tone.",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "social_0_2m",
          "name": "Social",
          "icon": "people-outline",
          "color": "#2A9D8F", // Green
          "description": "Social and emotional development",
          "progress": 0,
          "milestones": [
            {
              "id": "social_milestone_1",
              "title": "Makes eye contact",
              "description": "Your baby is developing the ability to make and hold eye contact, which is fundamental for social connection and communication. This shows they're interested in human interaction.",
              "ageRange": "0-2 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_10",
                  "title": "Eye Contact Games",
                  "description": "Hold baby about 8-12 inches from your face during alert times and gently encourage eye contact.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_2",
              "title": "Begins to smile in response to faces",
              "description": "Your baby is developing social smiling - smiling in response to faces and voices rather than just randomly. This is an important social bonding milestone.",
              "ageRange": "1-2 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_11",
                  "title": "Smile Practice",
                  "description": "Smile at your baby when they're calm and alert, giving them time to respond with their own smile.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_3",
              "title": "Shows preference for familiar caregivers",
              "description": "Your baby is beginning to recognize and prefer their primary caregivers, which shows they're forming important attachment bonds.",
              "ageRange": "1-2 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_12",
                  "title": "Responsive Caregiving",
                  "description": "Respond consistently to your baby's cues for feeding, comfort, and interaction to build trust and security.",
                  "completed": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "phase_2_4m",
      "name": "2-4 Months",
      "description": "Baby becomes more alert, interactive, and begins to develop more control over their body",
      "domains": [
        {
          "id": "physical_2_4m",
          "name": "Physical",
          "icon": "body-outline",
          "color": "#4A9B9B", // Teal
          "description": "Motor skills and physical development",
          "progress": 0,
          "milestones": [
            {
              "id": "physical_milestone_4",
              "title": "Holds head steady when upright",
              "description": "Your baby can now hold their head steady with minimal wobbling when held upright or in a sitting position. This shows developing neck and upper body strength.",
              "ageRange": "2-4 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_13",
                  "title": "Supported Sitting",
                  "description": "With baby on your lap, provide gentle support at the chest/torso while they practice holding their head up.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_5",
              "title": "Pushes up on arms during tummy time",
              "description": "Your baby is developing arm strength by pushing up on their forearms or hands during tummy time, lifting their chest off the surface.",
              "ageRange": "3-4 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_14",
                  "title": "Extended Tummy Time",
                  "description": "Gradually increase tummy time to 5-10 minutes, placing toys just within reach to encourage pushing up.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_6",
              "title": "Brings hands to mouth",
              "description": "Your baby is developing hand-mouth coordination by deliberately bringing their hands to their mouth for exploration and self-soothing.",
              "ageRange": "2-3 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_15",
                  "title": "Hand Discovery",
                  "description": "Gently guide baby's hands to their mouth during calm, alert times to encourage this natural exploration.",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "cognitive_2_4m",
          "name": "Cognitive",
          "icon": "brain-outline",
          "color": "#F4A261", // Orange
          "description": "Learning, thinking, and problem-solving skills",
          "progress": 0,
          "milestones": [
            {
              "id": "cognitive_milestone_4",
              "title": "Follows moving objects across midline",
              "description": "Your baby can now track objects as they move across their field of vision, even past the midline of their body. This shows developing visual processing and attention.",
              "ageRange": "2-4 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_16",
                  "title": "Midline Tracking",
                  "description": "Move a colorful toy slowly from one side of baby's visual field to the other, crossing the midline of their body.",
                  "completed": false
                }
              ]
            },
            {
              "id": "cognitive_milestone_5",
              "title": "Shows boredom or fussiness when activity doesn't change",
              "description": "Your baby is showing more awareness of their environment by becoming fussy or bored when activities remain the same for too long. This shows cognitive development and a desire for stimulation.",
              "ageRange": "3-4 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_17",
                  "title": "Environment Changes",
                  "description": "Provide variety by changing baby's position, environment, or toys when they show signs of boredom.",
                  "completed": false
                }
              ]
            },
            {
              "id": "cognitive_milestone_6",
              "title": "Begins to anticipate routines",
              "description": "Your baby is developing memory and prediction skills by beginning to anticipate familiar routines, such as feeding or bath time.",
              "ageRange": "3-4 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_18",
                  "title": "Consistent Routines",
                  "description": "Establish simple, predictable routines for daily activities like feeding, naps, and bedtime.",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "language_2_4m",
          "name": "Language",
          "icon": "chatbubble-outline",
          "color": "#E76F51", // Coral
          "description": "Communication and language development",
          "progress": 0,
          "milestones": [
            {
              "id": "language_milestone_3",
              "title": "Coos and makes gurgling sounds",
              "description": "Your baby is experimenting with making different sounds, including cooing and gurgling. These are early forms of vocal play that will eventually lead to babbling and speech.",
              "ageRange": "2-4 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_19",
                  "title": "Sound Imitation",
                  "description": "When your baby makes sounds, imitate them back and wait for a response to create a 'conversation'.",
                  "completed": false
                }
              ]
            },
            {
              "id": "language_milestone_4",
              "title": "Turns toward familiar sounds",
              "description": "Your baby is developing the ability to recognize and locate familiar sounds, such as your voice or a favorite toy.",
              "ageRange": "2-4 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_20",
                  "title": "Name Recognition",
                  "description": "Use your baby's name frequently when talking to them to help them learn to recognize it.",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "social_2_4m",
          "name": "Social",
          "icon": "people-outline",
          "color": "#2A9D8F", // Green
          "description": "Social and emotional development",
          "progress": 0,
          "milestones": [
            {
              "id": "social_milestone_4",
              "title": "Smiles spontaneously, especially at people",
              "description": "Your baby is now smiling in response to your smiles and as a way to engage socially, not just as a reflex. This shows developing social awareness and enjoyment of interaction.",
              "ageRange": "2-3 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_21",
                  "title": "Mirror Play",
                  "description": "Hold baby in front of a mirror and point out their reflection, smiling and talking to encourage social interaction.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_5",
              "title": "Enjoys playing with people",
              "description": "Your baby is showing more interest in social play and interaction, responding with excitement to playful engagement.",
              "ageRange": "3-4 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_22",
                  "title": "Peek-a-Boo",
                  "description": "Play simple games like peek-a-boo to encourage social interaction and teach cause-and-effect.",
                  "completed": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "phase_4_6m",
      "name": "4-6 Months",
      "description": "Baby develops greater control over their body and begins to interact more with their environment",
      "domains": [
        {
          "id": "physical_4_6m",
          "name": "Physical",
          "icon": "body-outline",
          "color": "#4A9B9B", // Teal
          "description": "Motor skills and physical development",
          "progress": 0,
          "milestones": [
            {
              "id": "physical_milestone_7",
              "title": "Rolls over in both directions",
              "description": "Your baby can now roll from their back to their tummy and from their tummy to their back. This shows developing core strength and coordination.",
              "ageRange": "4-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_23",
                  "title": "Rolling Practice",
                  "description": "Place toys slightly out of reach to encourage rolling. Always supervise and ensure the surface is safe.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_8",
              "title": "Begins to sit with support",
              "description": "Your baby is developing the strength to sit upright when supported with pillows, cushions, or your hands.",
              "ageRange": "4-5 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_24",
                  "title": "Supported Sitting Practice",
                  "description": "Place baby in a seated position with pillows around for support, gradually reducing support as they gain strength.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_9",
              "title": "Reaches for and grasps objects",
              "description": "Your baby is developing hand-eye coordination by reaching for objects and grasping them, often bringing them to their mouth for exploration.",
              "ageRange": "4-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_25",
                  "title": "Reaching Games",
                  "description": "Hold toys at different positions within baby's reach to encourage reaching and grasping in various directions.",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "cognitive_4_6m",
          "name": "Cognitive",
          "icon": "brain-outline",
          "color": "#F4A261", // Orange
          "description": "Learning, thinking, and problem-solving skills",
          "progress": 0,
          "milestones": [
            {
              "id": "cognitive_milestone_7",
              "title": "Shows curiosity and tries to get objects out of reach",
              "description": "Your baby is showing problem-solving skills by trying different ways to reach objects that are just beyond their grasp.",
              "ageRange": "4-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_26",
                  "title": "Problem-Solving Play",
                  "description": "Place toys just slightly out of reach to encourage problem-solving and persistence.",
                  "completed": false
                }
              ]
            },
            {
              "id": "cognitive_milestone_8",
              "title": "Begins to understand object permanence",
              "description": "Your baby is starting to understand that objects continue to exist even when they can't be seen, a concept called object permanence.",
              "ageRange": "5-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_27",
                  "title": "Peek-a-Boo with Objects",
                  "description": "Partially hide a toy under a blanket, encouraging baby to find it.",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "language_4_6m",
          "name": "Language",
          "icon": "chatbubble-outline",
          "color": "#E76F51", // Coral
          "description": "Communication and language development",
          "progress": 0,
          "milestones": [
            {
              "id": "language_milestone_5",
              "title": "Begins to babble with consonant sounds",
              "description": "Your baby is starting to combine vowels with consonants in their vocalizations, such as 'ba', 'da', or 'ga'. This is an important step toward forming words.",
              "ageRange": "4-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_28",
                  "title": "Babble Back",
                  "description": "When your baby babbles, respond with similar sounds to encourage vocal play and turn-taking.",
                  "completed": false
                }
              ]
            },
            {
              "id": "language_milestone_6",
              "title": "Responds to their name",
              "description": "Your baby is beginning to recognize and respond to their own name by looking or turning when called.",
              "ageRange": "5-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_29",
                  "title": "Name Games",
                  "description": "Call your baby's name in different tones and from different positions to help them recognize it.",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "social_4_6m",
          "name": "Social",
          "icon": "people-outline",
          "color": "#2A9D8F", // Green
          "description": "Social and emotional development",
          "progress": 0,
          "milestones": [
            {
              "id": "social_milestone_6",
              "title": "Laughs out loud",
              "description": "Your baby is expressing joy through laughter, especially during playful interactions. This shows developing emotional expression and social connection.",
              "ageRange": "4-5 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_30",
                  "title": "Silly Sounds",
                  "description": "Make funny faces and silly sounds to encourage laughter and emotional expression.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_7",
              "title": "Shows interest in mirror images",
              "description": "Your baby is fascinated by their reflection in mirrors, though they don't yet understand it's them. This curiosity about faces supports social development.",
              "ageRange": "4-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_31",
                  "title": "Mirror Exploration",
                  "description": "Use an unbreakable mirror during play to let baby explore their reflection.",
                  "completed": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "phase_6_8m",
      "name": "6-8 Months",
      "description": "Baby becomes more mobile and begins to understand cause and effect relationships",
      "domains": [
        {
          "id": "physical_6_8m",
          "name": "Physical",
          "icon": "body-outline",
          "color": "#4A9B9B", // Teal
          "description": "Motor skills and physical development",
          "progress": 0,
          "milestones": [
            {
              "id": "physical_milestone_10",
              "title": "Sits without support",
              "description": "Your baby can now sit independently without needing pillows or your hands for support. This shows strong core muscles and balance.",
              "ageRange": "6-8 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_32",
                  "title": "Sitting Play",
                  "description": "Place toys around baby while they're sitting to encourage reaching in different directions while maintaining balance.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_11",
              "title": "Begins to crawl or scoot",
              "description": "Your baby is finding ways to move independently, whether by traditional crawling, army crawling, scooting, or rolling to get around.",
              "ageRange": "6-8 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_33",
                  "title": "Crawling Encouragement",
                  "description": "Place favorite toys just out of reach during tummy time to encourage forward movement.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_12",
              "title": "Transfers objects between hands",
              "description": "Your baby can now pass toys or objects from one hand to the other, showing improved hand coordination and bilateral skills.",
              "ageRange": "6-7 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_34",
                  "title": "Hand-to-Hand Play",
                  "description": "Offer toys that require two hands or can be passed between hands, like soft blocks or rings.",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "cognitive_6_8m",
          "name": "Cognitive",
          "icon": "brain-outline",
          "color": "#F4A261", // Orange
          "description": "Learning, thinking, and problem-solving skills",
          "progress": 0,
          "milestones": [
            {
              "id": "cognitive_milestone_9",
              "title": "Finds partially hidden objects",
              "description": "Your baby can now find objects that are partially hidden, showing improved object permanence and memory skills.",
              "ageRange": "6-8 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_35",
                  "title": "Hide and Seek",
                  "description": "Partially hide toys under blankets or behind cushions for baby to find.",
                  "completed": false
                }
              ]
            },
            {
              "id": "cognitive_milestone_10",
              "title": "Explores objects in different ways",
              "description": "Your baby investigates objects by shaking, banging, throwing, and mouthing them to learn about their properties.",
              "ageRange": "6-8 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_36",
                  "title": "Sensory Exploration",
                  "description": "Provide toys with different textures, sounds, and functions for baby to explore.",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "language_6_8m",
          "name": "Language",
          "icon": "chatbubble-outline",
          "color": "#E76F51", // Coral
          "description": "Communication and language development",
          "progress": 0,
          "milestones": [
            {
              "id": "language_milestone_7",
              "title": "Babbles chains of consonants",
              "description": "Your baby is stringing together multiple consonant-vowel combinations like 'ba-ba-ba' or 'da-da-da', practicing the rhythm and sounds of speech.",
              "ageRange": "6-8 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_37",
                  "title": "Babble Conversations",
                  "description": "Have 'conversations' with your baby, taking turns making sounds and waiting for their response.",
                  "completed": false
                }
              ]
            },
            {
              "id": "language_milestone_8",
              "title": "Responds to simple verbal requests",
              "description": "Your baby is beginning to understand simple instructions or questions, such as 'Where's the ball?' or 'Give me the toy.'",
              "ageRange": "7-8 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_38",
                  "title": "Simple Instructions",
                  "description": "Give simple, one-step instructions during play, like 'Give me the block' or 'Touch the ball.'",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "social_6_8m",
          "name": "Social",
          "icon": "people-outline",
          "color": "#2A9D8F", // Green
          "description": "Social and emotional development",
          "progress": 0,
          "milestones": [
            {
              "id": "social_milestone_8",
              "title": "Shows stranger anxiety",
              "description": "Your baby may become clingy or anxious around unfamiliar people, showing a healthy attachment to primary caregivers and awareness of strangers.",
              "ageRange": "6-8 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_39",
                  "title": "Gentle Introductions",
                  "description": "Introduce new people gradually while holding baby to provide security and comfort.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_9",
              "title": "Plays interactive games like peek-a-boo",
              "description": "Your baby enjoys social games and may even initiate them, showing understanding of turn-taking and social interaction.",
              "ageRange": "6-8 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_40",
                  "title": "Interactive Games",
                  "description": "Play games like peek-a-boo, pat-a-cake, and 'so big' to encourage social interaction and turn-taking.",
                  "completed": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "phase_8_10m",
      "name": "8-10 Months",
      "description": "Baby becomes increasingly mobile and develops more intentional communication",
      "domains": [
        {
          "id": "physical_8_10m",
          "name": "Physical",
          "icon": "body-outline",
          "color": "#4A9B9B", // Teal
          "description": "Motor skills and physical development",
          "progress": 0,
          "milestones": [
            {
              "id": "physical_milestone_13",
              "title": "Pulls to stand",
              "description": "Your baby can pull themselves up to a standing position using furniture for support, showing leg strength and coordination.",
              "ageRange": "8-10 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_41",
                  "title": "Standing Practice",
                  "description": "Place favorite toys on a low, stable surface to encourage pulling up to stand.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_14",
              "title": "Cruises while holding onto furniture",
              "description": "Your baby can move sideways while holding onto furniture, taking early steps toward independent walking.",
              "ageRange": "9-10 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_42",
                  "title": "Cruising Circuit",
                  "description": "Arrange furniture to create a 'cruising circuit' where baby can move from piece to piece safely.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_15",
              "title": "Uses pincer grasp",
              "description": "Your baby can pick up small objects using their thumb and forefinger, showing refined fine motor control.",
              "ageRange": "8-10 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_43",
                  "title": "Finger Food Practice",
                  "description": "Offer safe finger foods like small pieces of soft fruit or cereal to practice pincer grasp (always supervise).",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "cognitive_8_10m",
          "name": "Cognitive",
          "icon": "brain-outline",
          "color": "#F4A261", // Orange
          "description": "Learning, thinking, and problem-solving skills",
          "progress": 0,
          "milestones": [
            {
              "id": "cognitive_milestone_11",
              "title": "Finds hidden objects easily",
              "description": "Your baby can now find objects that are completely hidden, showing a solid understanding of object permanence.",
              "ageRange": "8-10 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_44",
                  "title": "Hide and Seek Games",
                  "description": "Hide toys completely under blankets or in containers and encourage baby to find them.",
                  "completed": false
                }
              ]
            },
            {
              "id": "cognitive_milestone_12",
              "title": "Understands cause and effect",
              "description": "Your baby experiments with actions to see what happens, like dropping food from the high chair or pressing buttons to make sounds.",
              "ageRange": "8-10 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_45",
                  "title": "Action-Reaction Toys",
                  "description": "Provide toys that respond to baby's actions, like push buttons that make sounds or pop-up toys.",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "language_8_10m",
          "name": "Language",
          "icon": "chatbubble-outline",
          "color": "#E76F51", // Coral
          "description": "Communication and language development",
          "progress": 0,
          "milestones": [
            {
              "id": "language_milestone_9",
              "title": "Understands 'no'",
              "description": "Your baby recognizes and often responds to the word 'no,' showing understanding of simple language and boundaries.",
              "ageRange": "8-9 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_46",
                  "title": "Positive Redirection",
                  "description": "Use 'no' sparingly and follow with redirection to appropriate activities.",
                  "completed": false
                }
              ]
            },
            {
              "id": "language_milestone_10",
              "title": "Makes specific sounds to get attention",
              "description": "Your baby uses specific sounds, gestures, or proto-words consistently to communicate needs or get your attention.",
              "ageRange": "9-10 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_47",
                  "title": "Responsive Communication",
                  "description": "Respond promptly to baby's communication attempts to encourage continued development.",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "social_8_10m",
          "name": "Social",
          "icon": "people-outline",
          "color": "#2A9D8F", // Green
          "description": "Social and emotional development",
          "progress": 0,
          "milestones": [
            {
              "id": "social_milestone_10",
              "title": "Shows separation anxiety",
              "description": "Your baby may become upset when you leave, showing a strong attachment and understanding that you continue to exist when out of sight.",
              "ageRange": "8-10 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_48",
                  "title": "Separation Practice",
                  "description": "Practice brief separations with a consistent goodbye routine to build security.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_11",
              "title": "Imitates gestures and actions",
              "description": "Your baby copies simple actions and gestures like clapping, waving, or shaking their head, showing social learning and imitation skills.",
              "ageRange": "8-10 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_49",
                  "title": "Gesture Games",
                  "description": "Play games that involve gestures like waving, clapping, or blowing kisses for baby to imitate.",
                  "completed": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "phase_10_12m",
      "name": "10-12 Months",
      "description": "Baby prepares for first steps and first words as they approach their first birthday",
      "domains": [
        {
          "id": "physical_10_12m",
          "name": "Physical",
          "icon": "body-outline",
          "color": "#4A9B9B", // Teal
          "description": "Motor skills and physical development",
          "progress": 0,
          "milestones": [
            {
              "id": "physical_milestone_16",
              "title": "Stands alone briefly",
              "description": "Your baby can stand without holding onto anything for a few moments, showing improved balance and leg strength.",
              "ageRange": "10-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_50",
                  "title": "Independent Standing",
                  "description": "Encourage brief moments of standing without support by holding toys at standing height.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_17",
              "title": "Takes first steps with support",
              "description": "Your baby may take a few steps while holding your hands or pushing a stable toy, preparing for independent walking.",
              "ageRange": "10-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_51",
                  "title": "Supported Walking",
                  "description": "Hold baby's hands while they practice taking steps, or provide a stable push toy.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_18",
              "title": "Drinks from a cup with help",
              "description": "Your baby can drink from a sippy cup or open cup with your assistance, showing improved oral motor control.",
              "ageRange": "10-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_52",
                  "title": "Cup Practice",
                  "description": "Offer small amounts of water in a sippy cup or open cup with your help during meals.",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "cognitive_10_12m",
          "name": "Cognitive",
          "icon": "brain-outline",
          "color": "#F4A261", // Orange
          "description": "Learning, thinking, and problem-solving skills",
          "progress": 0,
          "milestones": [
            {
              "id": "cognitive_milestone_13",
              "title": "Puts objects in containers and takes them out",
              "description": "Your baby enjoys filling and emptying containers, showing understanding of spatial relationships and object properties.",
              "ageRange": "10-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_53",
                  "title": "Fill and Dump",
                  "description": "Provide containers and objects for baby to practice putting in and taking out.",
                  "completed": false
                }
              ]
            },
            {
              "id": "cognitive_milestone_14",
              "title": "Follows simple directions with gestures",
              "description": "Your baby can follow simple one-step directions, especially when accompanied by gestures, showing language comprehension.",
              "ageRange": "10-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_54",
                  "title": "Simple Instructions",
                  "description": "Give simple directions like 'Give me the ball' or 'Put the block in the box' during play.",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "language_10_12m",
          "name": "Language",
          "icon": "chatbubble-outline",
          "color": "#E76F51", // Coral
          "description": "Communication and language development",
          "progress": 0,
          "milestones": [
            {
              "id": "language_milestone_11",
              "title": "Says first word",
              "description": "Your baby may say their first recognizable word, often 'mama' or 'dada' used specifically for the right person.",
              "ageRange": "10-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_55",
                  "title": "Word Association",
                  "description": "Clearly name familiar people and objects throughout the day to build vocabulary.",
                  "completed": false
                }
              ]
            },
            {
              "id": "language_milestone_12",
              "title": "Uses gestures like pointing or waving",
              "description": "Your baby communicates intentionally through gestures like pointing to request things or waving to greet people.",
              "ageRange": "10-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_56",
                  "title": "Gesture Games",
                  "description": "Model and encourage gestures like waving, pointing, and nodding/shaking head.",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "social_10_12m",
          "name": "Social",
          "icon": "people-outline",
          "color": "#2A9D8F", // Green
          "description": "Social and emotional development",
          "progress": 0,
          "milestones": [
            {
              "id": "social_milestone_12",
              "title": "Shows preferences for certain people and toys",
              "description": "Your baby clearly shows preferences for favorite people, toys, and activities, demonstrating developing personality and opinions.",
              "ageRange": "10-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_57",
                  "title": "Choice Offering",
                  "description": "Offer simple choices between two toys or foods to encourage expression of preferences.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_13",
              "title": "Tests parental responses to behavior",
              "description": "Your baby may test boundaries by doing things they've been told not to do while watching for your reaction.",
              "ageRange": "10-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_58",
                  "title": "Consistent Boundaries",
                  "description": "Respond consistently to boundary testing while offering appropriate alternatives.",
                  "completed": false
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default journeyMilestoneData;

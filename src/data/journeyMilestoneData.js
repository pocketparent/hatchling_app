// Hatchling App - Journey Tab Mock Data
// Milestone-first structure with Phases → Domains → Milestones + Suggested Activities

const journeyMilestoneData = {
  "phases": [
    {
      "id": "phase_0_2m",
      "name": "0-2 Months",
      "phaseName": "Newborn Discovery",
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
          "icon": "bulb-outline",
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
      "phaseName": "Social Awakening",
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
          "icon": "bulb-outline",
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
                  "description": "Establish simple, predictable routines for daily activities, using the same words or songs as cues.",
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
              "title": "Babbles with different sounds",
              "description": "Your baby is experimenting with a wider range of sounds, including consonants like 'b', 'p', and 'm'. This babbling is an important step toward speech development.",
              "ageRange": "3-4 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_19",
                  "title": "Sound Imitation",
                  "description": "When baby makes sounds, imitate them back and wait for a response, creating a back-and-forth 'conversation'.",
                  "completed": false
                }
              ]
            },
            {
              "id": "language_milestone_4",
              "title": "Laughs out loud",
              "description": "Your baby is developing the ability to laugh out loud in response to playful interactions. This is both a social and language milestone.",
              "ageRange": "3-4 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_20",
                  "title": "Playful Interactions",
                  "description": "Engage in gentle, playful activities like peek-a-boo or silly faces to encourage laughter.",
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
              "description": "Your baby now smiles readily and spontaneously, particularly at familiar faces. This shows developing social awareness and emotional expression.",
              "ageRange": "2-3 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_21",
                  "title": "Social Smiling",
                  "description": "Spend time face-to-face with your baby when they're in a good mood, smiling and talking to encourage social interaction.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_5",
              "title": "Enjoys social play",
              "description": "Your baby is showing more interest in interactive play with caregivers, responding with excitement to games and social interactions.",
              "ageRange": "3-4 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_22",
                  "title": "Interactive Games",
                  "description": "Play simple games like peek-a-boo or 'This Little Piggy' with your baby, watching for their enjoyment and engagement.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_6",
              "title": "May cry when play stops",
              "description": "Your baby may become upset when enjoyable social interactions end, showing their growing preference for social engagement.",
              "ageRange": "3-4 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_23",
                  "title": "Gentle Transitions",
                  "description": "When ending playtime, gradually wind down the activity and provide verbal cues about what's coming next.",
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
      "phaseName": "Active Explorer",
      "description": "Baby becomes more physically active and begins to interact with their environment in new ways",
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
              "description": "Your baby can now roll from tummy to back and back to tummy, showing increased strength and coordination.",
              "ageRange": "4-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_24",
                  "title": "Rolling Practice",
                  "description": "Place toys slightly out of reach during floor play to encourage rolling and reaching.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_8",
              "title": "Begins to sit with support",
              "description": "Your baby is developing the ability to sit upright when provided with support, showing increasing core strength.",
              "ageRange": "4-5 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_25",
                  "title": "Supported Sitting",
                  "description": "Place baby in a seated position with pillows around for support, gradually reducing support as they gain strength.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_9",
              "title": "Reaches for and grasps objects",
              "description": "Your baby is developing hand-eye coordination by reaching for and grasping objects with increasing accuracy.",
              "ageRange": "4-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_26",
                  "title": "Reaching Games",
                  "description": "Offer toys of different textures and sizes within reach, encouraging baby to grasp and explore them.",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "cognitive_4_6m",
          "name": "Cognitive",
          "icon": "bulb-outline",
          "color": "#F4A261", // Orange
          "description": "Learning, thinking, and problem-solving skills",
          "progress": 0,
          "milestones": [
            {
              "id": "cognitive_milestone_7",
              "title": "Shows curiosity about objects",
              "description": "Your baby examines objects closely, showing curiosity about how things work and what they can do with them.",
              "ageRange": "4-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_27",
                  "title": "Object Exploration",
                  "description": "Provide safe household objects of different textures, weights, and sounds for baby to explore.",
                  "completed": false
                }
              ]
            },
            {
              "id": "cognitive_milestone_8",
              "title": "Begins to understand object permanence",
              "description": "Your baby is beginning to understand that objects continue to exist even when they can't be seen, a concept called object permanence.",
              "ageRange": "5-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_28",
                  "title": "Peek-a-Boo",
                  "description": "Play peek-a-boo games, hiding your face behind your hands or a cloth and then reappearing.",
                  "completed": false
                }
              ]
            },
            {
              "id": "cognitive_milestone_9",
              "title": "Recognizes familiar objects and people at a distance",
              "description": "Your baby can now recognize familiar people and objects from across the room, showing improved visual processing and memory.",
              "ageRange": "4-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_29",
                  "title": "Distance Recognition",
                  "description": "When entering a room, pause at the doorway and see if baby recognizes you before approaching.",
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
              "title": "Responds to sounds by making sounds",
              "description": "Your baby is engaging in vocal turn-taking by responding to your voice or other sounds with their own vocalizations.",
              "ageRange": "4-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_30",
                  "title": "Sound Conversations",
                  "description": "Make a sound and then pause, giving baby time to respond with their own sound before you continue.",
                  "completed": false
                }
              ]
            },
            {
              "id": "language_milestone_6",
              "title": "Strings vowels together when babbling",
              "description": "Your baby's babbling is becoming more complex, with strings of vowel sounds like 'ah-eh-oh'.",
              "ageRange": "5-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_31",
                  "title": "Vowel Play",
                  "description": "Exaggerate vowel sounds during play and conversation, encouraging baby to imitate and experiment.",
                  "completed": false
                }
              ]
            },
            {
              "id": "language_milestone_7",
              "title": "Responds to own name",
              "description": "Your baby is beginning to recognize and respond to their own name by looking, smiling, or vocalizing when called.",
              "ageRange": "5-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_32",
                  "title": "Name Recognition",
                  "description": "Use baby's name frequently during the day, especially during positive interactions.",
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
              "id": "social_milestone_7",
              "title": "Knows familiar faces and begins to know if someone is a stranger",
              "description": "Your baby is developing stranger awareness, showing preference for familiar people and possibly anxiety around strangers.",
              "ageRange": "5-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_33",
                  "title": "Gentle Introductions",
                  "description": "Introduce new people gradually while holding baby, allowing them to observe from the safety of your arms.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_8",
              "title": "Likes to play with others, especially parents",
              "description": "Your baby shows increasing enjoyment of interactive play, particularly with parents and familiar caregivers.",
              "ageRange": "4-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_34",
                  "title": "Interactive Play",
                  "description": "Engage in face-to-face games like peek-a-boo, pat-a-cake, or gentle tickling games.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_9",
              "title": "Responds to others' emotions",
              "description": "Your baby is beginning to notice and respond to others' emotional expressions, showing early empathy development.",
              "ageRange": "5-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_35",
                  "title": "Emotion Mirroring",
                  "description": "Use exaggerated facial expressions during play, naming the emotions as you show them.",
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
      "phaseName": "Curious Investigator",
      "description": "Baby becomes increasingly mobile and curious about their surroundings",
      "domains": [
        {
          "id": "physical_6_8m",
          "name": "Physical",
          "icon": "body-outline",
          "color": "#4A9B9B",
          "description": "Motor skills and physical development",
          "progress": 0,
          "milestones": [
            {
              "id": "physical_milestone_10",
              "title": "Sits without support",
              "description": "Your baby can now sit independently without needing props or support, freeing their hands for play.",
              "ageRange": "6-8 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_36",
                  "title": "Sitting Play",
                  "description": "Place toys around baby while they're sitting to encourage reaching in different directions while maintaining balance.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_11",
              "title": "Begins to crawl or scoot",
              "description": "Your baby is finding ways to move independently, whether by traditional crawling, army crawling, or scooting on their bottom.",
              "ageRange": "6-8 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_37",
                  "title": "Crawling Encouragement",
                  "description": "Place favorite toys just out of reach during floor time to encourage movement.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_12",
              "title": "Transfers objects between hands",
              "description": "Your baby can now pass objects from one hand to the other, showing improved coordination and bilateral skills.",
              "ageRange": "6-7 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_38",
                  "title": "Hand-to-Hand Transfer",
                  "description": "Offer toys that require two hands to manipulate, encouraging baby to transfer between hands.",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "cognitive_6_8m",
          "name": "Cognitive",
          "icon": "bulb-outline",
          "color": "#F4A261",
          "description": "Learning, thinking, and problem-solving skills",
          "progress": 0,
          "milestones": [
            {
              "id": "cognitive_milestone_10",
              "title": "Finds partially hidden objects",
              "description": "Your baby can now find objects that are partially hidden, showing developing object permanence and memory.",
              "ageRange": "6-8 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_39",
                  "title": "Hide and Seek",
                  "description": "Partially hide a toy under a blanket while baby watches, encouraging them to find it.",
                  "completed": false
                }
              ]
            },
            {
              "id": "cognitive_milestone_11",
              "title": "Explores objects in different ways",
              "description": "Your baby investigates objects by shaking, banging, throwing, and mouthing them, learning about their properties.",
              "ageRange": "6-8 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_40",
                  "title": "Sensory Exploration",
                  "description": "Provide toys with different properties (soft, hard, noisy, textured) for baby to explore.",
                  "completed": false
                }
              ]
            },
            {
              "id": "cognitive_milestone_12",
              "title": "Looks for things that fall out of sight",
              "description": "Your baby will now look for objects that have completely disappeared from view, showing stronger object permanence.",
              "ageRange": "7-8 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_41",
                  "title": "Drop Games",
                  "description": "Play games where you drop a toy into a container and encourage baby to look for it.",
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
          "color": "#E76F51",
          "description": "Communication and language development",
          "progress": 0,
          "milestones": [
            {
              "id": "language_milestone_8",
              "title": "Babbles chains of consonants",
              "description": "Your baby's babbling now includes consonant sounds in patterns like 'ba-ba-ba' or 'ma-ma-ma'.",
              "ageRange": "6-8 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_42",
                  "title": "Consonant Play",
                  "description": "Repeat consonant-vowel combinations like 'ba-ba-ba' during play, encouraging baby to imitate.",
                  "completed": false
                }
              ]
            },
            {
              "id": "language_milestone_9",
              "title": "Responds to simple verbal requests",
              "description": "Your baby is beginning to understand simple instructions like 'come here' or 'give me'.",
              "ageRange": "7-8 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_43",
                  "title": "Simple Instructions",
                  "description": "Give baby simple, one-step instructions paired with gestures, praising attempts to respond.",
                  "completed": false
                }
              ]
            },
            {
              "id": "language_milestone_10",
              "title": "Uses gestures like waving or reaching to communicate",
              "description": "Your baby is using intentional gestures to communicate wants and needs, showing pre-verbal communication skills.",
              "ageRange": "7-8 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_44",
                  "title": "Gesture Games",
                  "description": "Wave 'hello' and 'goodbye' consistently, encouraging baby to imitate these gestures.",
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
          "color": "#2A9D8F",
          "description": "Social and emotional development",
          "progress": 0,
          "milestones": [
            {
              "id": "social_milestone_10",
              "title": "May show fear of strangers",
              "description": "Your baby may show anxiety or distress around unfamiliar people, a normal developmental phase called stranger anxiety.",
              "ageRange": "6-8 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_45",
                  "title": "Comfort and Reassurance",
                  "description": "When introducing new people, hold baby close and allow them to warm up gradually at their own pace.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_11",
              "title": "Shows preference for certain people and toys",
              "description": "Your baby is developing clear preferences for favorite people and toys, showing their developing sense of self.",
              "ageRange": "6-8 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_46",
                  "title": "Preference Observation",
                  "description": "Notice and respect baby's preferences while gently introducing new experiences.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_12",
              "title": "Shows more emotion and may cling to familiar adults",
              "description": "Your baby is expressing a wider range of emotions and may show separation anxiety when away from primary caregivers.",
              "ageRange": "7-8 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_47",
                  "title": "Separation Practice",
                  "description": "Practice brief separations with a consistent goodbye routine, returning promptly to build trust.",
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
      "phaseName": "Emerging Independence",
      "description": "Baby becomes more mobile and begins to assert independence",
      "domains": [
        {
          "id": "physical_8_10m",
          "name": "Physical",
          "icon": "body-outline",
          "color": "#4A9B9B",
          "description": "Motor skills and physical development",
          "progress": 0,
          "milestones": [
            {
              "id": "physical_milestone_13",
              "title": "Pulls to stand",
              "description": "Your baby can pull themselves up to a standing position using furniture or other support.",
              "ageRange": "8-10 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_48",
                  "title": "Standing Practice",
                  "description": "Place favorite toys on a low, stable surface to encourage pulling up to reach them.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_14",
              "title": "Gets into sitting position independently",
              "description": "Your baby can move from lying down to sitting up without help, showing increased core strength and coordination.",
              "ageRange": "8-9 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_49",
                  "title": "Position Changes",
                  "description": "Encourage baby to practice moving between positions during floor play.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_15",
              "title": "Crawls or cruises efficiently",
              "description": "Your baby moves with purpose, either crawling well or cruising along furniture to get to desired objects.",
              "ageRange": "8-10 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_50",
                  "title": "Cruising Course",
                  "description": "Arrange furniture to create a safe cruising path around the room.",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "cognitive_8_10m",
          "name": "Cognitive",
          "icon": "bulb-outline",
          "color": "#F4A261",
          "description": "Learning, thinking, and problem-solving skills",
          "progress": 0,
          "milestones": [
            {
              "id": "cognitive_milestone_13",
              "title": "Watches the path of falling objects",
              "description": "Your baby follows the trajectory of dropped objects with their eyes, showing understanding of object movement.",
              "ageRange": "8-9 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_51",
                  "title": "Drop and Watch",
                  "description": "Drop soft toys from different heights, encouraging baby to watch where they land.",
                  "completed": false
                }
              ]
            },
            {
              "id": "cognitive_milestone_14",
              "title": "Looks for hidden objects where they were last seen",
              "description": "Your baby will search for hidden objects in the last place they saw them, showing developing memory and object permanence.",
              "ageRange": "8-10 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_52",
                  "title": "Hide and Find",
                  "description": "Hide a toy under a blanket while baby watches, then hide it in a different place to see if they look in the first location.",
                  "completed": false
                }
              ]
            },
            {
              "id": "cognitive_milestone_15",
              "title": "Begins to use objects correctly",
              "description": "Your baby starts to use objects for their intended purpose, like drinking from a cup or brushing with a hairbrush.",
              "ageRange": "9-10 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_53",
                  "title": "Functional Play",
                  "description": "Demonstrate how to use everyday objects correctly, then give baby a chance to imitate.",
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
          "color": "#E76F51",
          "description": "Communication and language development",
          "progress": 0,
          "milestones": [
            {
              "id": "language_milestone_11",
              "title": "Understands 'no'",
              "description": "Your baby recognizes and often responds to the word 'no', showing understanding of simple language.",
              "ageRange": "8-9 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_54",
                  "title": "Consistent Communication",
                  "description": "Use 'no' consistently and sparingly for safety issues, pairing it with redirection to appropriate activities.",
                  "completed": false
                }
              ]
            },
            {
              "id": "language_milestone_12",
              "title": "Makes specific sounds to express meaning",
              "description": "Your baby uses consistent sounds to communicate specific needs or interests, showing intentional pre-verbal communication.",
              "ageRange": "8-10 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_55",
                  "title": "Sound Recognition",
                  "description": "Notice and respond to baby's consistent sounds, treating them as meaningful communication.",
                  "completed": false
                }
              ]
            },
            {
              "id": "language_milestone_13",
              "title": "Copies sounds and gestures of others",
              "description": "Your baby imitates sounds, words, and gestures they observe, showing social learning and communication development.",
              "ageRange": "9-10 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_56",
                  "title": "Imitation Games",
                  "description": "Make a sound or gesture and wait to see if baby imitates, then respond enthusiastically when they do.",
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
          "color": "#2A9D8F",
          "description": "Social and emotional development",
          "progress": 0,
          "milestones": [
            {
              "id": "social_milestone_13",
              "title": "May be fearful in some situations",
              "description": "Your baby may show fear in certain situations or around certain objects, showing developing awareness of potential dangers.",
              "ageRange": "8-10 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_57",
                  "title": "Gentle Exposure",
                  "description": "Gradually and gently expose baby to feared situations while providing reassurance and support.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_14",
              "title": "Shows separation anxiety",
              "description": "Your baby becomes upset when primary caregivers leave, showing healthy attachment and emotional development.",
              "ageRange": "8-10 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_58",
                  "title": "Goodbye Routine",
                  "description": "Create a consistent, brief goodbye routine that helps baby understand you will return.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_15",
              "title": "Plays interactive games like peek-a-boo",
              "description": "Your baby actively participates in social games like peek-a-boo, showing understanding of turn-taking and social rules.",
              "ageRange": "8-10 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_59",
                  "title": "Interactive Games",
                  "description": "Play turn-taking games like peek-a-boo, pat-a-cake, or roll-the-ball.",
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
      "phaseName": "Budding Communicator",
      "description": "Baby develops more intentional communication and prepares for first steps",
      "domains": [
        {
          "id": "physical_10_12m",
          "name": "Physical",
          "icon": "body-outline",
          "color": "#4A9B9B",
          "description": "Motor skills and physical development",
          "progress": 0,
          "milestones": [
            {
              "id": "physical_milestone_16",
              "title": "Stands alone momentarily",
              "description": "Your baby can briefly stand without support, showing developing balance and leg strength.",
              "ageRange": "10-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_60",
                  "title": "Independent Standing",
                  "description": "Encourage brief moments of standing without support during play.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_17",
              "title": "May take first steps",
              "description": "Your baby may begin taking their first independent steps, though walking typically develops between 9-15 months.",
              "ageRange": "11-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_61",
                  "title": "Walking Practice",
                  "description": "Hold baby's hands while they practice walking, gradually reducing support as they gain confidence.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_18",
              "title": "Uses pincer grasp",
              "description": "Your baby can pick up small objects using their thumb and forefinger, showing developing fine motor control.",
              "ageRange": "10-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_62",
                  "title": "Pincer Grasp Practice",
                  "description": "Offer small, safe foods like cereal pieces or small toys that require pincer grasp to pick up.",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "cognitive_10_12m",
          "name": "Cognitive",
          "icon": "bulb-outline",
          "color": "#F4A261",
          "description": "Learning, thinking, and problem-solving skills",
          "progress": 0,
          "milestones": [
            {
              "id": "cognitive_milestone_16",
              "title": "Finds hidden objects easily",
              "description": "Your baby can find objects hidden under multiple covers or in different locations, showing advanced object permanence.",
              "ageRange": "10-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_63",
                  "title": "Advanced Hide and Seek",
                  "description": "Hide toys under multiple layers or in new locations to challenge baby's searching skills.",
                  "completed": false
                }
              ]
            },
            {
              "id": "cognitive_milestone_17",
              "title": "Explores objects in many ways",
              "description": "Your baby investigates objects by shaking, banging, throwing, dropping, and examining them, showing curiosity and problem-solving.",
              "ageRange": "10-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_64",
                  "title": "Exploration Basket",
                  "description": "Create a basket of safe household objects with different properties for baby to explore.",
                  "completed": false
                }
              ]
            },
            {
              "id": "cognitive_milestone_18",
              "title": "Begins to use objects correctly",
              "description": "Your baby uses common objects for their intended purpose, like drinking from a cup, brushing hair, or talking on a toy phone.",
              "ageRange": "10-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_65",
                  "title": "Functional Play",
                  "description": "Provide toy versions of everyday objects and demonstrate their use, encouraging imitation.",
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
          "color": "#E76F51",
          "description": "Communication and language development",
          "progress": 0,
          "milestones": [
            {
              "id": "language_milestone_14",
              "title": "Responds to simple verbal requests",
              "description": "Your baby understands and responds to simple instructions like 'come here' or 'give me the toy'.",
              "ageRange": "10-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_66",
                  "title": "Simple Commands",
                  "description": "Give baby simple, one-step instructions throughout the day, praising their attempts to follow them.",
                  "completed": false
                }
              ]
            },
            {
              "id": "language_milestone_15",
              "title": "Uses simple gestures like shaking head for 'no'",
              "description": "Your baby uses meaningful gestures to communicate, showing intentional non-verbal communication.",
              "ageRange": "10-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_67",
                  "title": "Gesture Games",
                  "description": "Model and encourage simple gestures like nodding, shaking head, waving, or pointing.",
                  "completed": false
                }
              ]
            },
            {
              "id": "language_milestone_16",
              "title": "Says 'mama' and 'dada' with meaning",
              "description": "Your baby uses 'mama' and 'dada' to refer to specific parents, showing first true words.",
              "ageRange": "10-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_68",
                  "title": "Name Association",
                  "description": "Clearly label yourself and other family members by name during interactions.",
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
          "color": "#2A9D8F",
          "description": "Social and emotional development",
          "progress": 0,
          "milestones": [
            {
              "id": "social_milestone_16",
              "title": "Is shy or anxious with strangers",
              "description": "Your baby shows stranger anxiety, being cautious or upset around unfamiliar people.",
              "ageRange": "10-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_69",
                  "title": "Gradual Introductions",
                  "description": "Introduce new people slowly while holding baby, allowing them to warm up at their own pace.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_17",
              "title": "Cries when parent leaves",
              "description": "Your baby shows separation anxiety, becoming upset when primary caregivers leave.",
              "ageRange": "10-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_70",
                  "title": "Separation Practice",
                  "description": "Practice brief separations with a consistent goodbye routine, always returning as promised.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_18",
              "title": "Shows specific preferences for people",
              "description": "Your baby clearly shows preferences for certain familiar people, a sign of healthy attachment.",
              "ageRange": "10-12 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_71",
                  "title": "Special Time",
                  "description": "Ensure each caregiver has special one-on-one time with baby to build individual relationships.",
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

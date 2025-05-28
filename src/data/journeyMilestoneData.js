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
                  "description": "Establish simple, consistent routines for daily activities, using the same words or songs as cues.",
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
              "title": "Makes more varied sounds",
              "description": "Your baby is expanding their vocal repertoire with a greater variety of sounds, including consonant sounds like 'g' and 'k'. This shows developing speech abilities.",
              "ageRange": "2-4 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_19",
                  "title": "Sound Mirroring",
                  "description": "When baby makes sounds, repeat them back and wait for their response to create a 'conversation'.",
                  "completed": false
                }
              ]
            },
            {
              "id": "language_milestone_4",
              "title": "Laughs out loud",
              "description": "Your baby is developing the ability to laugh out loud, which is both a social and language milestone showing emotional expression and vocal control.",
              "ageRange": "3-4 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_20",
                  "title": "Gentle Play",
                  "description": "Try gentle, predictable games like peek-a-boo or soft tickling to encourage laughter.",
                  "completed": false
                }
              ]
            },
            {
              "id": "language_milestone_5",
              "title": "Begins to babble",
              "description": "Your baby is starting to experiment with combining consonant and vowel sounds (like 'gaga' or 'baba'). This babbling is an important precursor to forming words.",
              "ageRange": "3-4 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_21",
                  "title": "Babble Back",
                  "description": "When baby babbles, respond with similar sounds and then add new variations to expand their repertoire.",
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
              "description": "Your baby now smiles readily and spontaneously, particularly at familiar people. This shows developing social awareness and emotional expression.",
              "ageRange": "2-3 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_22",
                  "title": "Social Smiling",
                  "description": "Create opportunities for face-to-face interaction throughout the day to encourage social smiling.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_5",
              "title": "Enjoys social play",
              "description": "Your baby is showing interest and enjoyment in simple social games and interactions with caregivers. This shows developing social engagement.",
              "ageRange": "2-4 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_23",
                  "title": "Simple Games",
                  "description": "Play simple games like peek-a-boo or 'This Little Piggy' with gentle touch and animated expressions.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_6",
              "title": "Copies some movements and facial expressions",
              "description": "Your baby is beginning to imitate simple movements and expressions, such as opening their mouth when you do. This shows social learning and connection.",
              "ageRange": "3-4 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_24",
                  "title": "Imitation Games",
                  "description": "Make simple, exaggerated facial expressions like wide smiles or tongue sticking out, giving baby time to imitate.",
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
      "description": "Baby develops greater control over their body and begins more active exploration",
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
              "description": "Your baby can roll from tummy to back and back to tummy. This shows developing core strength and coordination, and is an important mobility milestone.",
              "ageRange": "4-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_25",
                  "title": "Rolling Practice",
                  "description": "Place toys slightly to the side during tummy time to encourage rolling. Ensure baby has safe, supervised space to practice rolling.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_8",
              "title": "Begins to sit with support",
              "description": "Your baby can sit with support from pillows, furniture, or caregivers. This shows developing core strength and balance.",
              "ageRange": "4-5 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_26",
                  "title": "Supported Sitting",
                  "description": "Place baby in a seated position with pillows around for support, gradually reducing support as they gain strength.",
                  "completed": false
                }
              ]
            },
            {
              "id": "physical_milestone_9",
              "title": "Reaches for and grasps objects",
              "description": "Your baby can intentionally reach for objects and grasp them, though their grasp is still developing. This shows hand-eye coordination and fine motor development.",
              "ageRange": "4-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_27",
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
          "icon": "brain-outline",
          "color": "#F4A261", // Orange
          "description": "Learning, thinking, and problem-solving skills",
          "progress": 0,
          "milestones": [
            {
              "id": "cognitive_milestone_7",
              "title": "Shows curiosity about objects",
              "description": "Your baby actively explores objects by looking at them closely, touching, and mouthing them. This shows developing curiosity and learning through sensory exploration.",
              "ageRange": "4-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_28",
                  "title": "Sensory Exploration",
                  "description": "Provide safe objects with different textures, sounds, and appearances for baby to explore with supervision.",
                  "completed": false
                }
              ]
            },
            {
              "id": "cognitive_milestone_8",
              "title": "Recognizes familiar people at a distance",
              "description": "Your baby can recognize familiar people from across the room, showing improved visual processing and memory.",
              "ageRange": "4-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_29",
                  "title": "Distance Recognition",
                  "description": "Have familiar people enter the room at a distance and observe if baby recognizes them before they come close.",
                  "completed": false
                }
              ]
            },
            {
              "id": "cognitive_milestone_9",
              "title": "Begins to understand object permanence",
              "description": "Your baby is beginning to understand that objects continue to exist even when they can't be seen. This is shown by looking for partially hidden objects.",
              "ageRange": "5-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_30",
                  "title": "Peek-a-Boo Objects",
                  "description": "Partially hide a favorite toy under a blanket while baby watches, encouraging them to find it.",
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
              "id": "language_milestone_6",
              "title": "Responds to sounds by making sounds",
              "description": "Your baby responds to sounds and voices by making their own vocalizations. This shows developing communication skills and turn-taking.",
              "ageRange": "4-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_31",
                  "title": "Sound Conversations",
                  "description": "Make different sounds and pause to give baby a chance to respond with their own sounds.",
                  "completed": false
                }
              ]
            },
            {
              "id": "language_milestone_7",
              "title": "Strings vowels together when babbling",
              "description": "Your baby's babbling now includes strings of vowel sounds (like 'ah-eh-oh'). This shows developing speech and vocal control.",
              "ageRange": "4-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_32",
                  "title": "Vowel Songs",
                  "description": "Sing simple songs emphasizing vowel sounds and encourage baby to join in with their own vocalizations.",
                  "completed": false
                }
              ]
            },
            {
              "id": "language_milestone_8",
              "title": "Responds to own name",
              "description": "Your baby shows recognition when their name is called by looking toward the speaker or smiling. This shows developing language comprehension.",
              "ageRange": "5-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_33",
                  "title": "Name Games",
                  "description": "Use baby's name frequently in conversation, songs, and games to reinforce recognition.",
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
              "title": "Recognizes and responds differently to strangers",
              "description": "Your baby shows awareness of unfamiliar people and may respond differently to them than to familiar caregivers. This shows developing social awareness.",
              "ageRange": "4-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_34",
                  "title": "Gentle Introductions",
                  "description": "Introduce new people gradually while holding baby, allowing them to observe from the safety of your arms.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_8",
              "title": "Shows enjoyment when interacting with others",
              "description": "Your baby clearly shows enjoyment during social interactions through smiling, laughing, and excited movements. This shows developing social engagement.",
              "ageRange": "4-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_35",
                  "title": "Interactive Play",
                  "description": "Engage in face-to-face play with animated expressions, songs, and gentle games that encourage social interaction.",
                  "completed": false
                }
              ]
            },
            {
              "id": "social_milestone_9",
              "title": "Responds to others' emotions",
              "description": "Your baby shows awareness of others' emotional states and may respond accordingly, such as becoming upset when others are upset. This shows developing empathy.",
              "ageRange": "5-6 months",
              "observed": false,
              "dateObserved": null,
              "suggestedActivities": [
                {
                  "id": "activity_36",
                  "title": "Emotion Naming",
                  "description": "Name your emotions as you express them naturally: 'I'm so happy to see you!' or 'I'm feeling tired today.'",
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

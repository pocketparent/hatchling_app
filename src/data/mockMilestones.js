/**
 * Mock Milestones Data
 * 
 * Provides realistic content for the Milestone Journey Navigator
 * Organized by age phases and developmental domains
 */

export const mockMilestones = {
  phases: [
    {
      id: 'phase_0_2',
      name: '0-2 months',
      ageRange: { min: 0, max: 60 }, // days
      description: "Your newborn is adjusting to the world outside the womb, developing basic reflexes, and beginning to recognize your face and voice.",
      domains: [
        {
          id: 'physical_0_2',
          name: 'Physical',
          milestones: [
            {
              id: 'physical_0_2_1',
              title: 'Lifts head briefly during tummy time',
              description: 'When placed on their tummy, your baby will try to lift their head for a few seconds at a time.',
              whatItLooksLike: 'During tummy time, your baby pushes up slightly with their arms and lifts their head momentarily, often wobbling as they build neck strength.',
              howToSupport: 'Provide supervised tummy time daily, starting with just 1-2 minutes and gradually increasing. Place a high-contrast toy in their line of sight for motivation.',
              nextMilestone: 'Will soon hold head up for longer periods during tummy time.'
            },
            {
              id: 'physical_0_2_2',
              title: 'Makes smoother movements with arms and legs',
              description: 'Your baby\'s movements become less jerky and more fluid as their nervous system develops.',
              whatItLooksLike: 'Your baby\'s arm and leg movements become more purposeful and less random. They may begin to bring hands toward midline or toward their face.',
              howToSupport: 'Give your baby freedom to move limbs in a safe space. Avoid restrictive clothing or swaddling during awake periods.',
              nextMilestone: 'Will begin reaching for objects intentionally.'
            }
          ]
        },
        {
          id: 'cognitive_0_2',
          name: 'Cognitive',
          milestones: [
            {
              id: 'cognitive_0_2_1',
              title: 'Focuses on faces',
              description: 'Your baby can focus on faces and high-contrast objects 8-12 inches away.',
              whatItLooksLike: 'Your baby\'s eyes lock onto your face when you hold them close. They may appear particularly interested in your eyes and mouth.',
              howToSupport: 'Hold your baby 8-12 inches from your face during interactions. Provide high-contrast black and white images for visual stimulation.',
              nextMilestone: 'Will begin to follow moving objects with their eyes.'
            },
            {
              id: 'cognitive_0_2_2',
              title: 'Recognizes familiar voices',
              description: 'Your baby shows preference for voices they heard frequently before birth, especially parents.',
              whatItLooksLike: 'Your baby may calm when hearing your voice or turn their head slightly toward familiar voices.',
              howToSupport: 'Talk, sing, and read to your baby frequently. Narrate what you\'re doing during daily routines.',
              nextMilestone: 'Will begin to turn head deliberately toward sounds.'
            }
          ]
        },
        {
          id: 'language_0_2',
          name: 'Language',
          milestones: [
            {
              id: 'language_0_2_1',
              title: 'Makes small throaty sounds',
              description: 'Your baby begins experimenting with their voice through small gurgles and coos.',
              whatItLooksLike: 'Your baby makes soft vowel sounds like "ah" and "oh," especially when content or during face-to-face interaction.',
              howToSupport: 'Respond to your baby\'s sounds with enthusiasm. Pause after your responses to give them a chance to "reply."',
              nextMilestone: 'Will develop more varied cooing sounds.'
            }
          ]
        },
        {
          id: 'social_0_2',
          name: 'Social & Emotional',
          milestones: [
            {
              id: 'social_0_2_1',
              title: 'Begins to smile socially',
              description: 'Around 6-8 weeks, your baby begins to smile in response to your voice or face.',
              whatItLooksLike: 'Your baby\'s first social smiles are different from reflex smiles - they happen during interaction and their eyes light up too.',
              howToSupport: 'Smile at your baby often. Respond with excitement when they smile to reinforce this important social behavior.',
              nextMilestone: 'Will smile more readily and begin to laugh.'
            },
            {
              id: 'social_0_2_2',
              title: 'Shows preference for primary caregivers',
              description: 'Your baby begins to recognize and prefer their primary caregivers.',
              whatItLooksLike: 'Your baby may be more easily soothed by familiar caregivers and show more animation when interacting with them.',
              howToSupport: 'Respond consistently to your baby\'s needs to build trust and security. Wear your baby in a carrier to promote bonding.',
              nextMilestone: 'Will develop stronger attachment to primary caregivers.'
            }
          ]
        }
      ],
      weeklyFocus: [
        {
          id: 'focus_0_2_1',
          week: 1,
          title: 'Welcome to the World',
          description: 'This week, focus on helping your newborn adjust to life outside the womb with gentle handling, skin-to-skin contact, and responding to their cues.',
          relatedDomain: 'social_0_2'
        },
        {
          id: 'focus_0_2_2',
          week: 2,
          title: 'Visual Development',
          description: 'Your baby\'s vision is still developing. This week, provide high-contrast images and faces within their focal range (8-12 inches).',
          relatedDomain: 'cognitive_0_2'
        }
      ]
    },
    {
      id: 'phase_2_4',
      name: '2-4 months',
      ageRange: { min: 61, max: 120 }, // days
      description: "Your baby is becoming more alert and interactive, developing better head control, and beginning to show their personality through smiles and coos.",
      domains: [
        {
          id: 'physical_2_4',
          name: 'Physical',
          milestones: [
            {
              id: 'physical_2_4_1',
              title: 'Holds head steady when upright',
              description: 'Your baby can now hold their head steady with minimal wobbling when held upright or in a sitting position.',
              whatItLooksLike: 'When you hold your baby upright against your chest or in a sitting position with support, their head stays steady and doesn\'t flop forward or to the side.',
              howToSupport: 'Continue tummy time daily. Hold your baby in supported sitting positions to help strengthen neck and core muscles.',
              nextMilestone: 'Will begin pushing up on arms during tummy time.'
            },
            {
              id: 'physical_2_4_2',
              title: 'Pushes down with legs when feet on solid surface',
              description: 'When held upright with feet touching a surface, your baby pushes down with their legs.',
              whatItLooksLike: 'When you hold your baby upright with their feet on your lap or another firm surface, they push down, briefly supporting some weight on their legs.',
              howToSupport: 'Hold your baby in a standing position on your lap for brief periods. This isn\'t "early walking practice" but helps develop leg strength.',
              nextMilestone: 'Will begin bearing more weight on legs and bouncing.'
            }
          ]
        },
        {
          id: 'cognitive_2_4',
          name: 'Cognitive',
          milestones: [
            {
              id: 'cognitive_2_4_1',
              title: 'Follows moving objects with eyes',
              description: 'Your baby can now track moving objects or people with their eyes from side to side.',
              whatItLooksLike: 'When you slowly move a toy or your face from one side to the other, your baby\'s eyes follow smoothly without losing track.',
              howToSupport: 'Slowly move high-contrast toys across their field of vision. Play simple tracking games by moving your face from side to side while talking.',
              nextMilestone: 'Will begin reaching for objects they see.'
            },
            {
              id: 'cognitive_2_4_2',
              title: 'Shows boredom or frustration',
              description: 'Your baby communicates when they\'re understimulated or overstimulated.',
              whatItLooksLike: 'Your baby may fuss, look away, or become fussy when an activity has gone on too long or isn\'t engaging enough.',
              howToSupport: 'Learn to read your baby\'s cues for engagement and disengagement. Change activities or offer quiet time when they show signs of boredom or overstimulation.',
              nextMilestone: 'Will show clearer preferences for certain activities and toys.'
            }
          ]
        },
        {
          id: 'language_2_4',
          name: 'Language',
          milestones: [
            {
              id: 'language_2_4_1',
              title: 'Coos and makes vowel sounds',
              description: 'Your baby experiments with making longer vowel sounds and cooing noises.',
              whatItLooksLike: 'Your baby makes sounds like "ooh," "aah," and "eee," often when in a good mood or during interactions.',
              howToSupport: 'Have "conversations" by taking turns making sounds. Repeat their sounds back to them and wait for their response.',
              nextMilestone: 'Will begin adding consonant sounds to create syllables like "ba" or "ga."'
            }
          ]
        },
        {
          id: 'social_2_4',
          name: 'Social & Emotional',
          milestones: [
            {
              id: 'social_2_4_1',
              title: 'Smiles and laughs',
              description: 'Your baby smiles readily in social interactions and may begin to laugh.',
              whatItLooksLike: 'Your baby smiles broadly when you talk to them and may begin making small laughing sounds in response to playful interactions.',
              howToSupport: 'Play gentle games like peek-a-boo. Make silly faces and sounds to encourage laughter.',
              nextMilestone: 'Will initiate social interaction by smiling to get your attention.'
            }
          ]
        }
      ],
      weeklyFocus: [
        {
          id: 'focus_2_4_1',
          week: 1,
          title: 'Tummy Time Champion',
          description: 'This week, focus on increasing tummy time duration to help develop neck, shoulder, and core strength needed for rolling and sitting.',
          relatedDomain: 'physical_2_4'
        },
        {
          id: 'focus_2_4_2',
          week: 2,
          title: 'Conversation Starter',
          description: 'Your baby is becoming more vocal! This week, focus on having back-and-forth "conversations" by responding to their coos and giving them time to "reply."',
          relatedDomain: 'language_2_4'
        }
      ]
    },
    {
      id: 'phase_4_6',
      name: '4-6 months',
      ageRange: { min: 121, max: 180 }, // days
      description: "Your baby is becoming more physically active, learning to roll and sit, showing interest in objects and food, and developing more complex vocalizations.",
      domains: [
        {
          id: 'physical_4_6',
          name: 'Physical',
          milestones: [
            {
              id: 'physical_4_6_1',
              title: 'Rolls from back to side',
              description: 'Your baby begins rolling from back to side, which is often a precursor to rolling completely over.',
              whatItLooksLike: 'When lying on their back, your baby twists their torso and hips, allowing them to roll partially to their side, though they may not go all the way over yet.',
              howToSupport: 'Give your baby plenty of free movement time on a flat, safe surface. Place toys slightly to the side to encourage twisting and reaching.',
              nextMilestone: 'Will roll completely from back to tummy and tummy to back.'
            },
            {
              id: 'physical_4_6_2',
              title: 'Sits with support',
              description: 'Your baby can sit when propped up or supported.',
              whatItLooksLike: 'When placed in a sitting position with support behind their lower back, your baby can maintain the position with good head control for several minutes.',
              howToSupport: 'Practice supported sitting daily. You can sit behind your baby or use pillows for support (always with supervision).',
              nextMilestone: 'Will sit independently without support.'
            }
          ]
        },
        {
          id: 'cognitive_4_6',
          name: 'Cognitive',
          milestones: [
            {
              id: 'cognitive_4_6_1',
              title: 'Reaches for objects',
              description: 'Your baby intentionally reaches for toys and objects that interest them.',
              whatItLooksLike: 'When you place a toy within reach, your baby extends their arms to grab it, though their aim may not be perfect yet.',
              howToSupport: 'Offer a variety of safe objects within reaching distance. Place toys just slightly out of reach to encourage stretching and movement.',
              nextMilestone: 'Will transfer objects from hand to hand.'
            },
            {
              id: 'cognitive_4_6_2',
              title: 'Shows interest in food',
              description: 'Your baby watches intently when others eat and may reach for food.',
              whatItLooksLike: 'Your baby follows your food with their eyes during meals and may open their mouth, reach toward your plate, or lean forward when you eat.',
              howToSupport: 'Include your baby at family mealtimes. Talk about the foods you\'re eating. Consult your pediatrician about readiness signs for starting solids.',
              nextMilestone: 'Will begin exploring first foods, usually around 6 months when developmentally ready.'
            }
          ]
        },
        {
          id: 'language_4_6',
          name: 'Language',
          milestones: [
            {
              id: 'language_4_6_1',
              title: 'Makes consonant sounds',
              description: 'Your baby adds consonants to their vocalizations, creating syllable-like sounds.',
              whatItLooksLike: 'Your baby makes sounds like "ba," "da," "ga," or "ma," often repeating them in strings like "babababa."',
              howToSupport: 'Repeat these consonant sounds back to your baby. Read books with simple, repetitive language patterns.',
              nextMilestone: 'Will begin stringing different syllables together in more complex babbling.'
            }
          ]
        },
        {
          id: 'social_4_6',
          name: 'Social & Emotional',
          milestones: [
            {
              id: 'social_4_6_1',
              title: 'Recognizes familiar people',
              description: 'Your baby clearly recognizes familiar caregivers and may show preference for certain people.',
              whatItLooksLike: 'Your baby lights up with a big smile when familiar people enter the room. They may show more excitement for certain family members.',
              howToSupport: 'Ensure your baby has regular contact with important people in their life. Play games that involve face recognition like peek-a-boo.',
              nextMilestone: 'Will begin showing stranger awareness or anxiety.'
            }
          ]
        }
      ],
      weeklyFocus: [
        {
          id: 'focus_4_6_1',
          week: 1,
          title: 'Rolling and Mobility',
          description: 'This week, focus on encouraging rolling by placing toys just out of reach to one side and helping your baby learn this important mobility skill.',
          relatedDomain: 'physical_4_6'
        },
        {
          id: 'focus_4_6_2',
          week: 2,
          title: 'Reach and Grasp',
          description: 'Your baby is developing hand-eye coordination! This week, offer various safe objects of different textures and sizes to encourage reaching and grasping.',
          relatedDomain: 'cognitive_4_6'
        }
      ]
    },
    {
      id: 'phase_6_8',
      name: '6-8 months',
      ageRange: { min: 181, max: 240 }, // days
      description: "Your baby is becoming more mobile, exploring solid foods, developing stronger social bonds, and understanding more about how the world works.",
      domains: [
        {
          id: 'physical_6_8',
          name: 'Physical',
          milestones: [
            {
              id: 'physical_6_8_1',
              title: 'Sits without support',
              description: 'Your baby can sit independently without needing to prop themselves up with their hands.',
              whatItLooksLike: 'When placed in a sitting position, your baby stays upright with good balance, freeing their hands for play.',
              howToSupport: 'Provide safe sitting opportunities with soft surfaces around them in case of toppling. Place toys within reach to encourage play while sitting.',
              nextMilestone: 'Will begin moving in and out of sitting position independently.'
            },
            {
              id: 'physical_6_8_2',
              title: 'Rocks on hands and knees',
              description: 'Your baby gets into a hands-and-knees position and rocks back and forth.',
              whatItLooksLike: 'Your baby pushes up onto hands and knees and makes rocking movements, preparing muscles for crawling.',
              howToSupport: 'Give plenty of free movement time on the floor. Place toys just out of reach to encourage movement.',
              nextMilestone: 'Will begin crawling or using another form of locomotion.'
            }
          ]
        },
        {
          id: 'cognitive_6_8',
          name: 'Cognitive',
          milestones: [
            {
              id: 'cognitive_6_8_1',
              title: 'Finds partially hidden objects',
              description: 'Your baby can find toys that are partially hidden under a blanket or behind another object.',
              whatItLooksLike: 'When you partially hide a toy under a cloth while they watch, your baby will reach for it and uncover it.',
              howToSupport: 'Play simple hiding games with favorite toys. Start with partially hiding objects, then gradually cover them completely.',
              nextMilestone: 'Will develop object permanence and find completely hidden objects.'
            },
            {
              id: 'cognitive_6_8_2',
              title: 'Explores objects thoroughly',
              description: 'Your baby investigates objects by turning them over, passing them between hands, and mouthing them.',
              whatItLooksLike: 'When given a new toy, your baby examines it from different angles, bangs it on surfaces to test cause and effect, and often brings it to their mouth.',
              howToSupport: 'Provide a variety of safe objects with different textures, sounds, and functions. Supervise closely as everything goes in the mouth at this age.',
              nextMilestone: 'Will begin using objects functionally (e.g., pushing buttons to make sounds).'
            }
          ]
        },
        {
          id: 'language_6_8',
          name: 'Language',
          milestones: [
            {
              id: 'language_6_8_1',
              title: 'Babbles with varied sounds',
              description: 'Your baby combines different consonants and vowels in more complex babbling.',
              whatItLooksLike: 'Your baby makes strings of different sounds like "ba-da-ga" or "ma-ba-da" that sound more like talking.',
              howToSupport: 'Respond to babbling as if having a conversation. Use real words and simple sentences when talking to your baby.',
              nextMilestone: 'Will begin using specific sounds consistently to communicate specific things.'
            }
          ]
        },
        {
          id: 'social_6_8',
          name: 'Social & Emotional',
          milestones: [
            {
              id: 'social_6_8_1',
              title: 'Shows stranger awareness',
              description: 'Your baby may become cautious around unfamiliar people.',
              whatItLooksLike: 'Your baby may stare at strangers, cling to familiar caregivers, or become quiet or fussy when approached by someone new.',
              howToSupport: 'Respect your baby\'s feelings by not forcing interactions. Hold them securely when meeting new people and allow them to warm up gradually.',
              nextMilestone: 'Will develop stronger attachment behaviors like separation anxiety.'
            }
          ]
        }
      ],
      weeklyFocus: [
        {
          id: 'focus_6_8_1',
          week: 1,
          title: 'Independent Sitting',
          description: 'This week, focus on helping your baby master independent sitting, which provides a new perspective on the world and frees hands for exploration.',
          relatedDomain: 'physical_6_8'
        },
        {
          id: 'focus_6_8_2',
          week: 2,
          title: 'Food Exploration',
          description: 'If your baby shows readiness signs and your pediatrician approves, this week focus on introducing first foods as a sensory and developmental experience.',
          relatedDomain: 'cognitive_6_8'
        }
      ]
    },
    {
      id: 'phase_8_10',
      name: '8-10 months',
      ageRange: { min: 241, max: 300 }, // days
      description: "Your baby is becoming increasingly mobile and independent, developing fine motor skills, understanding more language, and forming strong attachments.",
      domains: [
        {
          id: 'physical_8_10',
          name: 'Physical',
          milestones: [
            {
              id: 'physical_8_10_1',
              title: 'Crawls or moves in some way',
              description: 'Your baby has developed some form of mobility, whether traditional crawling, army crawling, scooting, or rolling to get around.',
              whatItLooksLike: 'Your baby can intentionally move from one place to another using their preferred method of locomotion.',
              howToSupport: 'Create safe spaces for exploration. Place toys at a distance to encourage movement. Ensure your home is thoroughly babyproofed.',
              nextMilestone: 'Will begin pulling to stand and cruising along furniture.'
            },
            {
              id: 'physical_8_10_2',
              title: 'Pulls to stand',
              description: 'Your baby uses furniture or people to pull themselves up to a standing position.',
              whatItLooksLike: 'Your baby grabs onto a low table, couch, or your legs and pulls themselves up to stand, though they may need help getting back down.',
              howToSupport: 'Provide stable furniture for pulling up. Show them how to bend their knees to sit back down. Stay nearby to prevent falls.',
              nextMilestone: 'Will begin cruising (walking while holding furniture).'
            }
          ]
        },
        {
          id: 'cognitive_8_10',
          name: 'Cognitive',
          milestones: [
            {
              id: 'cognitive_8_10_1',
              title: 'Finds hidden objects',
              description: 'Your baby can find objects that are completely hidden while they watch.',
              whatItLooksLike: 'When you hide a toy under a blanket while they watch, your baby will deliberately remove the blanket to find the toy.',
              howToSupport: 'Play hide-and-seek games with toys. Hide objects under blankets, in containers, or behind other objects while they watch.',
              nextMilestone: 'Will begin looking for objects in their usual locations even when not seeing them hidden.'
            },
            {
              id: 'cognitive_8_10_2',
              title: 'Uses objects correctly',
              description: 'Your baby begins to use familiar objects for their intended purpose.',
              whatItLooksLike: 'Your baby may try to brush their hair with a brush, drink from a cup, or talk on a toy phone.',
              howToSupport: 'Demonstrate how to use everyday objects. Provide child-safe versions of common items for pretend play.',
              nextMilestone: 'Will engage in more complex imitation and early pretend play.'
            }
          ]
        },
        {
          id: 'language_8_10',
          name: 'Language',
          milestones: [
            {
              id: 'language_8_10_1',
              title: 'Responds to simple verbal requests',
              description: 'Your baby understands and responds to simple instructions or questions.',
              whatItLooksLike: 'Your baby may look toward an object when you name it, wave when asked, or stop an activity briefly when you say "no."',
              howToSupport: 'Use clear, simple language when giving instructions. Pair words with gestures initially, then gradually use just words.',
              nextMilestone: 'Will understand more words and follow more complex instructions.'
            }
          ]
        },
        {
          id: 'social_8_10',
          name: 'Social & Emotional',
          milestones: [
            {
              id: 'social_8_10_1',
              title: 'Shows separation anxiety',
              description: 'Your baby becomes upset when separated from primary caregivers.',
              whatItLooksLike: 'Your baby may cry, cling, or reach for you when you leave or when handed to someone else, even someone familiar.',
              howToSupport: 'Create consistent goodbye routines. Keep separations brief initially. Reassure your baby that you will return. Never sneak away.',
              nextMilestone: 'Will develop strategies to cope with brief separations.'
            }
          ]
        }
      ],
      weeklyFocus: [
        {
          id: 'focus_8_10_1',
          week: 1,
          title: 'Crawling Adventures',
          description: 'This week, focus on creating safe spaces for crawling exploration and placing toys strategically to encourage movement and discovery.',
          relatedDomain: 'physical_8_10'
        },
        {
          id: 'focus_8_10_2',
          week: 2,
          title: 'Object Permanence',
          description: 'Your baby is developing object permanence! This week, play hiding games with toys to strengthen this important cognitive concept.',
          relatedDomain: 'cognitive_8_10'
        }
      ]
    },
    {
      id: 'phase_10_12',
      name: '10-12 months',
      ageRange: { min: 301, max: 365 }, // days
      description: "Your baby is preparing for first steps, developing early communication skills, engaging in simple pretend play, and showing a stronger sense of self.",
      domains: [
        {
          id: 'physical_10_12',
          name: 'Physical',
          milestones: [
            {
              id: 'physical_10_12_1',
              title: 'Cruises along furniture',
              description: 'Your baby walks while holding onto furniture for support.',
              whatItLooksLike: 'Your baby moves sideways or forward while holding onto the couch, coffee table, or other stable furniture.',
              howToSupport: 'Arrange furniture to create "cruising paths." Ensure furniture is stable and won\'t tip. Provide push toys for supported walking practice.',
              nextMilestone: 'Will take first independent steps.'
            },
            {
              id: 'physical_10_12_2',
              title: 'Develops pincer grasp',
              description: 'Your baby can pick up small objects using thumb and forefinger.',
              whatItLooksLike: 'Your baby precisely picks up small items like cereal pieces or small toys using their thumb and index finger rather than raking with their whole hand.',
              howToSupport: 'Offer safe opportunities to practice this skill with finger foods and small (but not chokable) objects. Always supervise closely.',
              nextMilestone: 'Will use pincer grasp with greater precision for self-feeding and play.'
            }
          ]
        },
        {
          id: 'cognitive_10_12',
          name: 'Cognitive',
          milestones: [
            {
              id: 'cognitive_10_12_1',
              title: 'Explores objects in different ways',
              description: 'Your baby investigates how objects work through trial and error.',
              whatItLooksLike: 'Your baby bangs objects together, drops them to watch them fall, puts them in containers and dumps them out, or nests them inside each other.',
              howToSupport: 'Provide toys that can be used in multiple ways: blocks, stacking cups, containers with lids. Demonstrate different ways to use objects.',
              nextMilestone: 'Will solve simple problems through experimentation.'
            },
            {
              id: 'cognitive_10_12_2',
              title: 'Shows early pretend play',
              description: 'Your baby begins simple pretend actions, often copying everyday activities.',
              whatItLooksLike: 'Your baby might pretend to drink from an empty cup, "talk" on a toy phone, or try to feed a doll or stuffed animal.',
              howToSupport: 'Provide props for pretend play based on familiar routines. Join in their pretend scenarios without directing them.',
              nextMilestone: 'Will engage in more complex pretend play sequences.'
            }
          ]
        },
        {
          id: 'language_10_12',
          name: 'Language',
          milestones: [
            {
              id: 'language_10_12_1',
              title: 'Says first word',
              description: 'Your baby uses a specific sound consistently to refer to a person, object, or situation.',
              whatItLooksLike: 'Your baby may say "mama" specifically for their mother, "dada" for their father, or use sounds like "ba" consistently for bottle or ball.',
              howToSupport: 'Respond enthusiastically to communication attempts. Label objects and people clearly and consistently. Read books daily.',
              nextMilestone: 'Will build vocabulary of several words.'
            }
          ]
        },
        {
          id: 'social_10_12',
          name: 'Social & Emotional',
          milestones: [
            {
              id: 'social_10_12_1',
              title: 'Shows preferences and independence',
              description: 'Your baby clearly communicates likes, dislikes, and desire to do things independently.',
              whatItLooksLike: 'Your baby may shake their head "no," push away unwanted foods, insist on holding their own spoon, or become frustrated when unable to do something themselves.',
              howToSupport: 'Offer limited, appropriate choices. Allow extra time for self-feeding and other independent attempts. Stay calm during protests and tantrums.',
              nextMilestone: 'Will assert independence more strongly as a toddler.'
            }
          ]
        }
      ],
      weeklyFocus: [
        {
          id: 'focus_10_12_1',
          week: 1,
          title: 'Pre-Walking Skills',
          description: 'This week, focus on supporting cruising and providing opportunities for supported standing and walking to build confidence and balance.',
          relatedDomain: 'physical_10_12'
        },
        {
          id: 'focus_10_12_2',
          week: 2,
          title: 'First Words',
          description: 'Your baby is on the cusp of verbal communication! This week, focus on labeling objects clearly and responding enthusiastically to any word-like sounds.',
          relatedDomain: 'language_10_12'
        }
      ]
    }
  ]
};

export default mockMilestones;

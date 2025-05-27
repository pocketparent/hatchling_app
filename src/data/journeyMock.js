/**
 * Mock data for the Journey screen
 * 
 * Contains developmental phases, domains, milestones, and activities
 * Structured to support the UI components and user interactions
 */

const journeyMock = {
  phases: [
    {
      id: "phase-0-3",
      label: "0–3 Months",
      description: "During this time, babies are developing their senses and beginning to discover the world around them.",
      domains: [
        {
          id: "domain-physical-0-3",
          name: "Physical",
          progress: 0.7,
          milestones: [
            { 
              id: "m-physical-0-3-1", 
              title: "Lifts head briefly", 
              description: "Baby can lift their head briefly when placed on their tummy.",
              observed: true 
            },
            { 
              id: "m-physical-0-3-2", 
              title: "Moves arms and legs", 
              description: "Baby moves arms and legs in smooth, rhythmic movements.",
              observed: true 
            },
            { 
              id: "m-physical-0-3-3", 
              title: "Brings hands to face", 
              description: "Baby can bring hands to face and mouth.",
              observed: false 
            }
          ],
          activities: [
            { 
              id: "a-physical-0-3-1", 
              title: "Tummy time", 
              description: "Place baby on their belly for short stretches to strengthen neck and shoulder muscles." 
            },
            { 
              id: "a-physical-0-3-2", 
              title: "Gentle stretches", 
              description: "Gently move baby's arms and legs in a bicycling motion to promote flexibility." 
            }
          ]
        },
        {
          id: "domain-cognitive-0-3",
          name: "Cognitive",
          progress: 0.5,
          milestones: [
            { 
              id: "m-cognitive-0-3-1", 
              title: "Watches faces intently", 
              description: "Baby watches faces with interest and follows moving objects with eyes.",
              observed: true 
            },
            { 
              id: "m-cognitive-0-3-2", 
              title: "Recognizes familiar objects", 
              description: "Baby begins to recognize familiar objects and people at a distance.",
              observed: false 
            }
          ],
          activities: [
            { 
              id: "a-cognitive-0-3-1", 
              title: "Black and white patterns", 
              description: "Show baby high-contrast black and white patterns to stimulate visual development." 
            },
            { 
              id: "a-cognitive-0-3-2", 
              title: "Mirror play", 
              description: "Let baby look at themselves in a baby-safe mirror to develop self-recognition." 
            }
          ]
        },
        {
          id: "domain-language-0-3",
          name: "Language",
          progress: 0.3,
          milestones: [
            { 
              id: "m-language-0-3-1", 
              title: "Makes cooing sounds", 
              description: "Baby begins to make cooing sounds in response to voices.",
              observed: true 
            },
            { 
              id: "m-language-0-3-2", 
              title: "Responds to sounds", 
              description: "Baby startles or turns head toward sudden sounds.",
              observed: false 
            }
          ],
          activities: [
            { 
              id: "a-language-0-3-1", 
              title: "Talk and sing", 
              description: "Talk and sing to your baby throughout the day, even during routine activities." 
            },
            { 
              id: "a-language-0-3-2", 
              title: "Read aloud", 
              description: "Read simple books with large pictures, even though baby won't understand the words yet." 
            }
          ]
        },
        {
          id: "domain-social-0-3",
          name: "Social/Emotional",
          progress: 0.6,
          milestones: [
            { 
              id: "m-social-0-3-1", 
              title: "Begins to smile", 
              description: "Baby begins to smile at people in response to their smiles.",
              observed: true 
            },
            { 
              id: "m-social-0-3-2", 
              title: "Self-soothes", 
              description: "Baby may bring hands to mouth to self-soothe.",
              observed: true 
            }
          ],
          activities: [
            { 
              id: "a-social-0-3-1", 
              title: "Skin-to-skin contact", 
              description: "Hold baby against your bare chest to promote bonding and emotional security." 
            },
            { 
              id: "a-social-0-3-2", 
              title: "Responsive caregiving", 
              description: "Respond promptly to baby's cries to build trust and security." 
            }
          ]
        }
      ]
    },
    {
      id: "phase-4-6",
      label: "4–6 Months",
      description: "During this time, many babies are learning to roll over, sit with support, and babble.",
      domains: [
        {
          id: "domain-physical-4-6",
          name: "Physical",
          progress: 0.5,
          milestones: [
            { 
              id: "m-physical-4-6-1", 
              title: "Rolls over", 
              description: "Baby can roll from tummy to back and possibly back to tummy.",
              observed: true 
            },
            { 
              id: "m-physical-4-6-2", 
              title: "Sits with support", 
              description: "Baby can sit with support or propped up.",
              observed: false 
            },
            { 
              id: "m-physical-4-6-3", 
              title: "Reaches for objects", 
              description: "Baby reaches for and grasps objects with both hands.",
              observed: false 
            }
          ],
          activities: [
            { 
              id: "a-physical-4-6-1", 
              title: "Supported sitting", 
              description: "Help baby practice sitting with support using pillows or your hands." 
            },
            { 
              id: "a-physical-4-6-2", 
              title: "Reaching games", 
              description: "Place toys just within reach to encourage baby to stretch and grasp." 
            }
          ]
        },
        {
          id: "domain-cognitive-4-6",
          name: "Cognitive",
          progress: 0.4,
          milestones: [
            { 
              id: "m-cognitive-4-6-1", 
              title: "Explores with hands and mouth", 
              description: "Baby explores objects by putting them in their mouth and manipulating them.",
              observed: true 
            },
            { 
              id: "m-cognitive-4-6-2", 
              title: "Shows curiosity", 
              description: "Baby shows curiosity about things and tries to get things that are out of reach.",
              observed: false 
            }
          ],
          activities: [
            { 
              id: "a-cognitive-4-6-1", 
              title: "Object permanence games", 
              description: "Play peek-a-boo to help baby understand that things exist even when hidden." 
            },
            { 
              id: "a-cognitive-4-6-2", 
              title: "Texture exploration", 
              description: "Provide toys with different textures for baby to explore with hands and mouth." 
            }
          ]
        },
        {
          id: "domain-language-4-6",
          name: "Language",
          progress: 0.3,
          milestones: [
            { 
              id: "m-language-4-6-1", 
              title: "Babbles chains of sounds", 
              description: "Baby strings vowels together and enjoys making sounds.",
              observed: false 
            },
            { 
              id: "m-language-4-6-2", 
              title: "Responds to name", 
              description: "Baby begins to respond when their name is called.",
              observed: true 
            }
          ],
          activities: [
            { 
              id: "a-language-4-6-1", 
              title: "Narrate your day", 
              description: "Talk to baby about what you're doing throughout the day to expose them to language." 
            },
            { 
              id: "a-language-4-6-2", 
              title: "Respond to babbling", 
              description: "When baby babbles, respond as if having a conversation to encourage communication." 
            }
          ]
        },
        {
          id: "domain-social-4-6",
          name: "Social/Emotional",
          progress: 0.6,
          milestones: [
            { 
              id: "m-social-4-6-1", 
              title: "Laughs out loud", 
              description: "Baby laughs out loud and enjoys social play.",
              observed: true 
            },
            { 
              id: "m-social-4-6-2", 
              title: "Recognizes familiar people", 
              description: "Baby recognizes familiar faces and may show anxiety around strangers.",
              observed: true 
            }
          ],
          activities: [
            { 
              id: "a-social-4-6-1", 
              title: "Social games", 
              description: "Play interactive games like peek-a-boo to encourage social development." 
            },
            { 
              id: "a-social-4-6-2", 
              title: "Mirror emotions", 
              description: "Mirror baby's facial expressions to help them learn about emotions." 
            }
          ]
        }
      ]
    },
    {
      id: "phase-7-9",
      label: "7–9 Months",
      description: "During this time, babies typically begin to crawl, understand simple words, and play interactive games.",
      domains: [
        {
          id: "domain-physical-7-9",
          name: "Physical",
          progress: 0.4,
          milestones: [
            { 
              id: "m-physical-7-9-1", 
              title: "Sits without support", 
              description: "Baby can sit steadily without support.",
              observed: false 
            },
            { 
              id: "m-physical-7-9-2", 
              title: "Crawls or scoots", 
              description: "Baby moves around by crawling, scooting, or rolling.",
              observed: false 
            }
          ],
          activities: [
            { 
              id: "a-physical-7-9-1", 
              title: "Crawling course", 
              description: "Create a simple obstacle course with pillows and toys to encourage crawling." 
            },
            { 
              id: "a-physical-7-9-2", 
              title: "Pull to stand", 
              description: "Place toys on low surfaces to encourage baby to pull themselves up to standing." 
            }
          ]
        },
        {
          id: "domain-cognitive-7-9",
          name: "Cognitive",
          progress: 0.3,
          milestones: [
            { 
              id: "m-cognitive-7-9-1", 
              title: "Finds hidden objects", 
              description: "Baby can find toys that are partially hidden.",
              observed: false 
            },
            { 
              id: "m-cognitive-7-9-2", 
              title: "Explores objects", 
              description: "Baby explores objects in different ways (shaking, banging, throwing).",
              observed: false 
            }
          ],
          activities: [
            { 
              id: "a-cognitive-7-9-1", 
              title: "Hide and seek", 
              description: "Hide toys under blankets and encourage baby to find them." 
            },
            { 
              id: "a-cognitive-7-9-2", 
              title: "Stacking and nesting", 
              description: "Provide cups or blocks that can be stacked or nested inside each other." 
            }
          ]
        },
        {
          id: "domain-language-7-9",
          name: "Language",
          progress: 0.2,
          milestones: [
            { 
              id: "m-language-7-9-1", 
              title: "Responds to simple words", 
              description: "Baby responds to simple verbal requests like 'come here'.",
              observed: false 
            },
            { 
              id: "m-language-7-9-2", 
              title: "Makes 'mama' or 'dada' sounds", 
              description: "Baby makes specific consonant-vowel combinations that sound like 'mama' or 'dada'.",
              observed: false 
            }
          ],
          activities: [
            { 
              id: "a-language-7-9-1", 
              title: "Name objects", 
              description: "Name objects as you give them to baby to build vocabulary." 
            },
            { 
              id: "a-language-7-9-2", 
              title: "Simple instructions", 
              description: "Give simple, one-step instructions like 'give me the ball' and celebrate when baby responds." 
            }
          ]
        },
        {
          id: "domain-social-7-9",
          name: "Social/Emotional",
          progress: 0.3,
          milestones: [
            { 
              id: "m-social-7-9-1", 
              title: "Shows stranger anxiety", 
              description: "Baby may become clingy with familiar adults and show anxiety around strangers.",
              observed: false 
            },
            { 
              id: "m-social-7-9-2", 
              title: "Plays interactive games", 
              description: "Baby enjoys interactive games like pat-a-cake and peek-a-boo.",
              observed: false 
            }
          ],
          activities: [
            { 
              id: "a-social-7-9-1", 
              title: "Gentle introductions", 
              description: "Introduce new people gradually while holding baby to help with stranger anxiety." 
            },
            { 
              id: "a-social-7-9-2", 
              title: "Interactive play", 
              description: "Play turn-taking games to develop social interaction skills." 
            }
          ]
        }
      ]
    },
    {
      id: "phase-10-12",
      label: "10–12 Months",
      description: "During this time, babies are often starting to stand, say their first words, and develop more independence.",
      domains: [
        {
          id: "domain-physical-10-12",
          name: "Physical",
          progress: 0.2,
          milestones: [
            { 
              id: "m-physical-10-12-1", 
              title: "Pulls to stand", 
              description: "Baby pulls to stand and may walk holding onto furniture.",
              observed: false 
            },
            { 
              id: "m-physical-10-12-2", 
              title: "Improved pincer grasp", 
              description: "Baby can pick up small objects using thumb and forefinger.",
              observed: false 
            }
          ],
          activities: [
            { 
              id: "a-physical-10-12-1", 
              title: "Cruising practice", 
              description: "Arrange furniture so baby can practice cruising (walking while holding onto furniture)." 
            },
            { 
              id: "a-physical-10-12-2", 
              title: "Finger foods", 
              description: "Offer small, safe finger foods to practice pincer grasp." 
            }
          ]
        },
        {
          id: "domain-cognitive-10-12",
          name: "Cognitive",
          progress: 0.2,
          milestones: [
            { 
              id: "m-cognitive-10-12-1", 
              title: "Explores objects thoroughly", 
              description: "Baby explores objects in detail, finding hidden features.",
              observed: false 
            },
            { 
              id: "m-cognitive-10-12-2", 
              title: "Follows simple directions", 
              description: "Baby can follow simple directions with gestures.",
              observed: false 
            }
          ],
          activities: [
            { 
              id: "a-cognitive-10-12-1", 
              title: "Simple puzzles", 
              description: "Introduce simple puzzles with large pieces that fit into matching spaces." 
            },
            { 
              id: "a-cognitive-10-12-2", 
              title: "Cause and effect toys", 
              description: "Provide toys that respond when baby performs an action (like pressing a button)." 
            }
          ]
        },
        {
          id: "domain-language-10-12",
          name: "Language",
          progress: 0.2,
          milestones: [
            { 
              id: "m-language-10-12-1", 
              title: "Says first word", 
              description: "Baby may say their first recognizable word.",
              observed: false 
            },
            { 
              id: "m-language-10-12-2", 
              title: "Uses gestures", 
              description: "Baby uses gestures like pointing or waving.",
              observed: false 
            }
          ],
          activities: [
            { 
              id: "a-language-10-12-1", 
              title: "Label everything", 
              description: "Label objects, people, and actions throughout the day to build vocabulary." 
            },
            { 
              id: "a-language-10-12-2", 
              title: "Gesture games", 
              description: "Play games that involve gestures like waving 'bye-bye' or pointing to body parts." 
            }
          ]
        },
        {
          id: "domain-social-10-12",
          name: "Social/Emotional",
          progress: 0.2,
          milestones: [
            { 
              id: "m-social-10-12-1", 
              title: "Shows preferences", 
              description: "Baby clearly shows preferences for certain people and toys.",
              observed: false 
            },
            { 
              id: "m-social-10-12-2", 
              title: "Tests reactions", 
              description: "Baby may test your reaction to their behavior.",
              observed: false 
            }
          ],
          activities: [
            { 
              id: "a-social-10-12-1", 
              title: "Playgroups", 
              description: "Arrange playdates with other babies to develop social skills." 
            },
            { 
              id: "a-social-10-12-2", 
              title: "Consistent boundaries", 
              description: "Begin setting simple, consistent boundaries to help baby understand expectations." 
            }
          ]
        }
      ]
    }
  ]
};

export default journeyMock;

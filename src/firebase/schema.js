/**
 * Firestore Schema Documentation for Hatchling App
 * 
 * This file documents the planned database structure for the Hatchling app.
 * It serves as a blueprint for future Firestore integration.
 * 
 * Note: This is documentation only and does not contain actual implementation.
 */

/**
 * Collection: users
 * Description: Stores user account information
 * 
 * Document ID: {userId} (Firebase Auth UID)
 * Fields:
 *   - email: string - User's email address
 *   - displayName: string - User's display name
 *   - photoURL: string (optional) - URL to user's profile photo
 *   - createdAt: timestamp - When the user account was created
 *   - lastLogin: timestamp - When the user last logged in
 *   - preferences: {
 *       - notifications: boolean - Whether user has enabled notifications
 *       - darkMode: boolean - Whether user prefers dark mode
 *       - contentTopics: array<string> - User's preferred content topics
 *     }
 */

/**
 * Collection: babies
 * Description: Stores information about babies/children
 * 
 * Document ID: {babyId} (auto-generated)
 * Fields:
 *   - name: string - Baby's name
 *   - birthDate: timestamp - Baby's date of birth
 *   - parentId: string - Reference to users/{userId}
 *   - gender: string (optional) - Baby's gender
 *   - photoURL: string (optional) - URL to baby's photo
 *   - createdAt: timestamp - When the baby profile was created
 *   - updatedAt: timestamp - When the baby profile was last updated
 */

/**
 * Collection: domains
 * Description: Stores development domains (e.g., Physical, Cognitive, Social)
 * 
 * Document ID: {domainId} (auto-generated)
 * Fields:
 *   - name: string - Domain name (e.g., "Physical Development")
 *   - description: string - Description of the domain
 *   - icon: string - Icon name for the domain
 *   - color: string - Color code for the domain
 *   - order: number - Display order
 */

/**
 * Collection: milestones
 * Description: Stores developmental milestones
 * 
 * Document ID: {milestoneId} (auto-generated)
 * Fields:
 *   - title: string - Milestone title
 *   - description: string - Detailed description
 *   - domainId: string - Reference to domains/{domainId}
 *   - ageRangeStart: number - Starting age in months
 *   - ageRangeEnd: number - Ending age in months
 *   - order: number - Display order within domain
 *   - createdAt: timestamp - When the milestone was created
 *   - updatedAt: timestamp - When the milestone was last updated
 */

/**
 * Collection: babyMilestones
 * Description: Tracks milestone progress for each baby
 * 
 * Document ID: {babyId}_{milestoneId}
 * Fields:
 *   - babyId: string - Reference to babies/{babyId}
 *   - milestoneId: string - Reference to milestones/{milestoneId}
 *   - completed: boolean - Whether milestone has been achieved
 *   - dateObserved: timestamp (optional) - When milestone was observed
 *   - notes: string (optional) - Parent's notes about the milestone
 *   - media: array<string> (optional) - URLs to photos/videos
 *   - updatedAt: timestamp - When the record was last updated
 */

/**
 * Collection: activities
 * Description: Stores developmental activities
 * 
 * Document ID: {activityId} (auto-generated)
 * Fields:
 *   - title: string - Activity title
 *   - description: string - Brief description
 *   - instructions: string - Detailed instructions
 *   - domainId: string - Reference to domains/{domainId}
 *   - milestoneId: string (optional) - Reference to milestones/{milestoneId}
 *   - ageRangeStart: number - Starting age in months
 *   - ageRangeEnd: number - Ending age in months
 *   - duration: number (optional) - Estimated duration in minutes
 *   - materials: array<string> (optional) - Required materials
 *   - imageURL: string (optional) - URL to activity image
 *   - createdAt: timestamp - When the activity was created
 *   - updatedAt: timestamp - When the activity was last updated
 */

/**
 * Collection: babyActivities
 * Description: Tracks activity completion for each baby
 * 
 * Document ID: {babyId}_{activityId}
 * Fields:
 *   - babyId: string - Reference to babies/{babyId}
 *   - activityId: string - Reference to activities/{activityId}
 *   - completed: boolean - Whether activity has been completed
 *   - dateCompleted: timestamp (optional) - When activity was completed
 *   - favorite: boolean - Whether activity is marked as favorite
 *   - notes: string (optional) - Parent's notes about the activity
 *   - media: array<string> (optional) - URLs to photos/videos
 *   - updatedAt: timestamp - When the record was last updated
 */

/**
 * Collection: insights
 * Description: Stores developmental insights and articles
 * 
 * Document ID: {insightId} (auto-generated)
 * Fields:
 *   - title: string - Insight title
 *   - summary: string - Brief summary
 *   - content: string - Full content (HTML or markdown)
 *   - category: string - Category (e.g., "Sleep", "Feeding", "Development")
 *   - tags: array<string> - Related tags
 *   - domainId: string (optional) - Reference to domains/{domainId}
 *   - ageRangeStart: number - Starting age in months
 *   - ageRangeEnd: number - Ending age in months
 *   - imageURL: string (optional) - URL to insight image
 *   - authorId: string (optional) - Reference to authors/{authorId}
 *   - publishedAt: timestamp - When the insight was published
 *   - updatedAt: timestamp - When the insight was last updated
 */

/**
 * Collection: savedInsights
 * Description: Tracks saved insights for each user
 * 
 * Document ID: {userId}_{insightId}
 * Fields:
 *   - userId: string - Reference to users/{userId}
 *   - insightId: string - Reference to insights/{insightId}
 *   - savedAt: timestamp - When the insight was saved
 *   - notes: string (optional) - User's notes about the insight
 */

/**
 * Collection: checkIns
 * Description: Stores daily/weekly check-in data
 * 
 * Document ID: {babyId}_{date} (YYYY-MM-DD format)
 * Fields:
 *   - babyId: string - Reference to babies/{babyId}
 *   - date: timestamp - Check-in date
 *   - mood: string - Baby's mood (e.g., "Happy", "Fussy")
 *   - sleep: {
 *       - quality: string - Sleep quality
 *       - duration: number - Sleep duration in hours
 *       - notes: string (optional) - Notes about sleep
 *     }
 *   - feeding: {
 *       - type: string - Feeding type (e.g., "Breast", "Bottle", "Solids")
 *       - frequency: number - Number of feedings
 *       - notes: string (optional) - Notes about feeding
 *     }
 *   - development: {
 *       - observations: string (optional) - Development observations
 *       - newSkills: array<string> (optional) - New skills observed
 *     }
 *   - health: {
 *       - concerns: string (optional) - Health concerns
 *       - symptoms: array<string> (optional) - Symptoms observed
 *     }
 *   - notes: string (optional) - General notes for the day
 *   - createdAt: timestamp - When the check-in was created
 *   - updatedAt: timestamp - When the check-in was last updated
 */

/**
 * Collection: questions
 * Description: Stores user questions for the Ask/Chat feature
 * 
 * Document ID: {questionId} (auto-generated)
 * Fields:
 *   - userId: string - Reference to users/{userId}
 *   - babyId: string - Reference to babies/{babyId}
 *   - text: string - Question text
 *   - category: string - Question category
 *   - status: string - Status (e.g., "Pending", "Answered")
 *   - createdAt: timestamp - When the question was asked
 */

/**
 * Collection: answers
 * Description: Stores answers to user questions
 * 
 * Document ID: {answerId} (auto-generated)
 * Fields:
 *   - questionId: string - Reference to questions/{questionId}
 *   - text: string - Answer text
 *   - source: string - Source of the answer (e.g., "AI", "Expert")
 *   - expertId: string (optional) - Reference to experts/{expertId}
 *   - helpful: boolean (optional) - Whether user marked as helpful
 *   - createdAt: timestamp - When the answer was provided
 */

/**
 * Collection: notifications
 * Description: Stores user notifications
 * 
 * Document ID: {notificationId} (auto-generated)
 * Fields:
 *   - userId: string - Reference to users/{userId}
 *   - type: string - Notification type
 *   - title: string - Notification title
 *   - message: string - Notification message
 *   - read: boolean - Whether notification has been read
 *   - data: object - Additional data related to notification
 *   - createdAt: timestamp - When the notification was created
 */

/**
 * Relationships and Access Patterns:
 * 
 * 1. User -> Babies: One-to-many
 *    - Query: Get all babies for a user
 *    - Collection: babies
 *    - Where: parentId == userId
 * 
 * 2. Baby -> Milestones: Many-to-many
 *    - Query: Get all milestones for a baby
 *    - Collection: babyMilestones
 *    - Where: babyId == babyId
 *    - Join: milestones collection
 * 
 * 3. Baby -> Activities: Many-to-many
 *    - Query: Get all activities for a baby
 *    - Collection: babyActivities
 *    - Where: babyId == babyId
 *    - Join: activities collection
 * 
 * 4. Domain -> Milestones: One-to-many
 *    - Query: Get all milestones for a domain
 *    - Collection: milestones
 *    - Where: domainId == domainId
 * 
 * 5. Domain -> Activities: One-to-many
 *    - Query: Get all activities for a domain
 *    - Collection: activities
 *    - Where: domainId == domainId
 * 
 * 6. User -> Saved Insights: Many-to-many
 *    - Query: Get all saved insights for a user
 *    - Collection: savedInsights
 *    - Where: userId == userId
 *    - Join: insights collection
 * 
 * 7. Baby -> Check-ins: One-to-many
 *    - Query: Get all check-ins for a baby
 *    - Collection: checkIns
 *    - Where: babyId == babyId
 * 
 * 8. User -> Questions: One-to-many
 *    - Query: Get all questions for a user
 *    - Collection: questions
 *    - Where: userId == userId
 * 
 * 9. Question -> Answers: One-to-many
 *    - Query: Get all answers for a question
 *    - Collection: answers
 *    - Where: questionId == questionId
 */

/**
 * Security Rules Considerations:
 * 
 * 1. Users can only read/write their own user document
 * 2. Users can only read/write babies they created
 * 3. Users can only read/write babyMilestones and babyActivities for their babies
 * 4. Users can only read/write checkIns for their babies
 * 5. Users can only read/write their own questions and savedInsights
 * 6. All users can read domains, milestones, activities, and insights
 * 7. Only admins can write to domains, milestones, activities, and insights
 */

/**
 * Indexing Considerations:
 * 
 * 1. babyMilestones: [babyId, completed]
 * 2. babyActivities: [babyId, completed]
 * 3. babyActivities: [babyId, favorite]
 * 4. milestones: [domainId, ageRangeStart, ageRangeEnd]
 * 5. activities: [domainId, ageRangeStart, ageRangeEnd]
 * 6. insights: [category, ageRangeStart, ageRangeEnd]
 * 7. insights: [tags, ageRangeStart, ageRangeEnd]
 * 8. checkIns: [babyId, date]
 * 9. questions: [userId, status]
 * 10. answers: [questionId, createdAt]
 */

// This is a documentation-only file and does not export anything

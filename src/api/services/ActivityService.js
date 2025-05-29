/**
 * ActivityService
 * 
 * Service for activity-related operations
 * Provides methods for activity management that will be implemented with Firestore in the future
 */

import BaseService from './BaseService';

class ActivityService extends BaseService {
  constructor() {
    super('activities');
  }

  /**
   * Get activities for a specific domain
   * @param {string} domainId - Domain ID
   * @returns {Promise<Array>} - Array of activities for the domain
   */
  async getActivitiesByDomain(domainId) {
    console.log(`[Mock] Getting activities for domain ${domainId}`);
    // This would query Firestore for activities where domainId matches
    return this._getMockDataList().filter(activity => activity.domainId === domainId);
  }

  /**
   * Get activities for a specific milestone
   * @param {string} milestoneId - Milestone ID
   * @returns {Promise<Array>} - Array of activities for the milestone
   */
  async getActivitiesByMilestone(milestoneId) {
    console.log(`[Mock] Getting activities for milestone ${milestoneId}`);
    // This would query Firestore for activities where milestoneId matches
    return this._getMockDataList().filter(activity => activity.milestoneId === milestoneId);
  }

  /**
   * Get activities for a specific age range
   * @param {number} ageInMonths - Age in months
   * @returns {Promise<Array>} - Array of activities for the age range
   */
  async getActivitiesByAge(ageInMonths) {
    console.log(`[Mock] Getting activities for age ${ageInMonths} months`);
    // This would query Firestore for activities where ageRangeStart <= ageInMonths <= ageRangeEnd
    return this._getMockDataList().filter(
      activity => activity.ageRangeStart <= ageInMonths && activity.ageRangeEnd >= ageInMonths
    );
  }

  /**
   * Get activities for today's recommendations
   * @param {number} ageInMonths - Age in months
   * @param {Array} completedActivityIds - IDs of already completed activities
   * @returns {Promise<Array>} - Array of recommended activities
   */
  async getTodayRecommendations(ageInMonths, completedActivityIds = []) {
    console.log(`[Mock] Getting today's recommendations for age ${ageInMonths} months`);
    // This would query Firestore for age-appropriate activities not yet completed
    const ageAppropriate = this._getMockDataList().filter(
      activity => activity.ageRangeStart <= ageInMonths && 
                  activity.ageRangeEnd >= ageInMonths &&
                  !completedActivityIds.includes(activity.id)
    );
    
    // Randomly select a subset of activities (max 3)
    const shuffled = [...ageAppropriate].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }

  /**
   * Get mock data for a single activity
   * @param {string} id - Activity ID
   * @returns {Object|null} - Mock activity data or null
   * @protected
   */
  _getMockData(id) {
    // Mock activity data
    const mockActivities = {
      'activity-1': {
        id: 'activity-1',
        title: 'Tummy Time Play',
        description: 'Place baby on their tummy to strengthen neck and shoulder muscles.',
        instructions: 'Place baby on their tummy on a firm, flat surface. Put toys within reach to encourage movement. Start with short sessions (3-5 minutes) and gradually increase time as baby gets stronger. Always supervise tummy time.',
        domainId: 'domain-1', // Physical Development
        milestoneId: 'milestone-1', // Lifts head during tummy time
        ageRangeStart: 1,
        ageRangeEnd: 3,
        duration: 5,
        materials: ['Blanket', 'Colorful toys'],
        imageURL: null,
        createdAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      },
      'activity-2': {
        id: 'activity-2',
        title: 'Rolling Practice',
        description: 'Help baby practice rolling from tummy to back.',
        instructions: 'Place baby on their tummy. Hold a toy to one side to encourage them to reach and shift weight. Gently guide their hips if needed to help them roll. Celebrate when they roll!',
        domainId: 'domain-1', // Physical Development
        milestoneId: 'milestone-2', // Rolls from tummy to back
        ageRangeStart: 3,
        ageRangeEnd: 5,
        duration: 10,
        materials: ['Blanket', 'Toy'],
        imageURL: null,
        createdAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      },
      'activity-3': {
        id: 'activity-3',
        title: 'Sound Discovery',
        description: 'Introduce different sounds to stimulate hearing and attention.',
        instructions: 'Gather items that make different sounds (rattle, bell, crinkly paper). Make sounds on one side of baby, then the other. Watch how they respond and turn toward sounds. Name the sounds they hear.',
        domainId: 'domain-2', // Cognitive Development
        milestoneId: 'milestone-3', // Responds to sounds
        ageRangeStart: 1,
        ageRangeEnd: 3,
        duration: 5,
        materials: ['Rattle', 'Bell', 'Crinkly paper'],
        imageURL: null,
        createdAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      },
      'activity-4': {
        id: 'activity-4',
        title: 'Mirror Play',
        description: 'Use a mirror to encourage social interaction and self-recognition.',
        instructions: 'Hold baby in front of a baby-safe mirror. Point to their reflection and yours. Smile and talk to the baby in the mirror. Watch how they respond to the reflections.',
        domainId: 'domain-3', // Social & Emotional
        milestoneId: 'milestone-4', // Smiles at people
        ageRangeStart: 2,
        ageRangeEnd: 4,
        duration: 5,
        materials: ['Baby-safe mirror'],
        imageURL: null,
        createdAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      },
      'activity-5': {
        id: 'activity-5',
        title: 'Talking Time',
        description: 'Talk to baby to encourage language development.',
        instructions: 'Hold baby in a comfortable position where they can see your face. Talk about what you\'re doing, what they\'re seeing, or sing a gentle song. Pause to give them a chance to respond with coos or sounds.',
        domainId: 'domain-4', // Language & Communication
        milestoneId: 'milestone-5', // Makes cooing sounds
        ageRangeStart: 2,
        ageRangeEnd: 4,
        duration: 10,
        materials: [],
        imageURL: null,
        createdAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      }
    };

    return mockActivities[id] || null;
  }

  /**
   * Get mock data list of activities
   * @param {Object} options - Query options
   * @returns {Array} - Array of mock activities
   * @protected
   */
  _getMockDataList(options = {}) {
    // Return all mock activities as an array
    return Object.values(this._getMockActivities());
  }

  /**
   * Get all mock activities
   * @returns {Object} - Object with activity IDs as keys and activity data as values
   * @private
   */
  _getMockActivities() {
    return {
      'activity-1': {
        id: 'activity-1',
        title: 'Tummy Time Play',
        description: 'Place baby on their tummy to strengthen neck and shoulder muscles.',
        instructions: 'Place baby on their tummy on a firm, flat surface. Put toys within reach to encourage movement. Start with short sessions (3-5 minutes) and gradually increase time as baby gets stronger. Always supervise tummy time.',
        domainId: 'domain-1', // Physical Development
        milestoneId: 'milestone-1', // Lifts head during tummy time
        ageRangeStart: 1,
        ageRangeEnd: 3,
        duration: 5,
        materials: ['Blanket', 'Colorful toys'],
        imageURL: null,
        createdAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      },
      'activity-2': {
        id: 'activity-2',
        title: 'Rolling Practice',
        description: 'Help baby practice rolling from tummy to back.',
        instructions: 'Place baby on their tummy. Hold a toy to one side to encourage them to reach and shift weight. Gently guide their hips if needed to help them roll. Celebrate when they roll!',
        domainId: 'domain-1', // Physical Development
        milestoneId: 'milestone-2', // Rolls from tummy to back
        ageRangeStart: 3,
        ageRangeEnd: 5,
        duration: 10,
        materials: ['Blanket', 'Toy'],
        imageURL: null,
        createdAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      },
      'activity-3': {
        id: 'activity-3',
        title: 'Sound Discovery',
        description: 'Introduce different sounds to stimulate hearing and attention.',
        instructions: 'Gather items that make different sounds (rattle, bell, crinkly paper). Make sounds on one side of baby, then the other. Watch how they respond and turn toward sounds. Name the sounds they hear.',
        domainId: 'domain-2', // Cognitive Development
        milestoneId: 'milestone-3', // Responds to sounds
        ageRangeStart: 1,
        ageRangeEnd: 3,
        duration: 5,
        materials: ['Rattle', 'Bell', 'Crinkly paper'],
        imageURL: null,
        createdAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      },
      'activity-4': {
        id: 'activity-4',
        title: 'Mirror Play',
        description: 'Use a mirror to encourage social interaction and self-recognition.',
        instructions: 'Hold baby in front of a baby-safe mirror. Point to their reflection and yours. Smile and talk to the baby in the mirror. Watch how they respond to the reflections.',
        domainId: 'domain-3', // Social & Emotional
        milestoneId: 'milestone-4', // Smiles at people
        ageRangeStart: 2,
        ageRangeEnd: 4,
        duration: 5,
        materials: ['Baby-safe mirror'],
        imageURL: null,
        createdAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      },
      'activity-5': {
        id: 'activity-5',
        title: 'Talking Time',
        description: 'Talk to baby to encourage language development.',
        instructions: 'Hold baby in a comfortable position where they can see your face. Talk about what you\'re doing, what they\'re seeing, or sing a gentle song. Pause to give them a chance to respond with coos or sounds.',
        domainId: 'domain-4', // Language & Communication
        milestoneId: 'milestone-5', // Makes cooing sounds
        ageRangeStart: 2,
        ageRangeEnd: 4,
        duration: 10,
        materials: [],
        imageURL: null,
        createdAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      }
    };
  }
}

export default new ActivityService();

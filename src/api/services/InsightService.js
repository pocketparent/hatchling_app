/**
 * InsightService
 * 
 * Service for insight-related operations
 * Provides methods for insight management that will be implemented with Firestore in the future
 */

import BaseService from './BaseService';

class InsightService extends BaseService {
  constructor() {
    super('insights');
  }

  /**
   * Get insights by category
   * @param {string} category - Insight category
   * @returns {Promise<Array>} - Array of insights for the category
   */
  async getInsightsByCategory(category) {
    console.log(`[Mock] Getting insights for category ${category}`);
    // This would query Firestore for insights where category matches
    return this._getMockDataList().filter(insight => insight.category === category);
  }

  /**
   * Get insights by tags
   * @param {Array<string>} tags - Array of tags
   * @returns {Promise<Array>} - Array of insights with matching tags
   */
  async getInsightsByTags(tags) {
    console.log(`[Mock] Getting insights for tags ${tags.join(', ')}`);
    // This would query Firestore for insights where tags array contains any of the provided tags
    return this._getMockDataList().filter(insight => 
      insight.tags.some(tag => tags.includes(tag))
    );
  }

  /**
   * Get insights for a specific age range
   * @param {number} ageInMonths - Age in months
   * @returns {Promise<Array>} - Array of insights for the age range
   */
  async getInsightsByAge(ageInMonths) {
    console.log(`[Mock] Getting insights for age ${ageInMonths} months`);
    // This would query Firestore for insights where ageRangeStart <= ageInMonths <= ageRangeEnd
    return this._getMockDataList().filter(
      insight => insight.ageRangeStart <= ageInMonths && insight.ageRangeEnd >= ageInMonths
    );
  }

  /**
   * Get saved insights for a user
   * @param {string} userId - User ID
   * @returns {Promise<Array>} - Array of saved insights
   */
  async getSavedInsights(userId) {
    console.log(`[Mock] Getting saved insights for user ${userId}`);
    // This would query Firestore for savedInsights where userId matches
    // and then get the corresponding insights
    const savedInsightIds = ['insight-1', 'insight-3']; // Mock saved insight IDs
    return this._getMockDataList().filter(insight => savedInsightIds.includes(insight.id));
  }

  /**
   * Save an insight for a user
   * @param {string} userId - User ID
   * @param {string} insightId - Insight ID
   * @returns {Promise<boolean>} - Success status
   */
  async saveInsight(userId, insightId) {
    console.log(`[Mock] Saving insight ${insightId} for user ${userId}`);
    // This would create a document in the savedInsights collection
    return true;
  }

  /**
   * Unsave an insight for a user
   * @param {string} userId - User ID
   * @param {string} insightId - Insight ID
   * @returns {Promise<boolean>} - Success status
   */
  async unsaveInsight(userId, insightId) {
    console.log(`[Mock] Unsaving insight ${insightId} for user ${userId}`);
    // This would delete a document from the savedInsights collection
    return true;
  }

  /**
   * Get mock data for a single insight
   * @param {string} id - Insight ID
   * @returns {Object|null} - Mock insight data or null
   * @protected
   */
  _getMockData(id) {
    // Mock insight data
    const mockInsights = {
      'insight-1': {
        id: 'insight-1',
        title: 'Understanding Tummy Time',
        summary: 'Why tummy time is essential for your baby\'s development.',
        content: 'Tummy time is an essential activity for your baby\'s physical development. It helps strengthen neck, shoulder, and back muscles, which are crucial for later motor skills like rolling over, sitting up, and crawling. Start with short sessions (3-5 minutes) several times a day, and gradually increase as your baby gets stronger and more comfortable. Always supervise tummy time and make it fun with toys and interaction.',
        category: 'Development',
        tags: ['physical development', 'tummy time', 'motor skills'],
        domainId: 'domain-1', // Physical Development
        ageRangeStart: 0,
        ageRangeEnd: 6,
        imageURL: null,
        authorId: 'expert-1',
        publishedAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      },
      'insight-2': {
        id: 'insight-2',
        title: 'Baby Sleep Basics',
        summary: 'Understanding your baby\'s sleep patterns and needs.',
        content: 'Newborns sleep 14-17 hours per day, but only in short 2-3 hour stretches. By 3-4 months, many babies begin to develop more regular sleep patterns. Create a consistent bedtime routine to signal sleep time. A dark, quiet environment helps babies sleep better. Remember that every baby is different, and sleep patterns can vary widely. Always place babies on their backs to sleep to reduce the risk of SIDS.',
        category: 'Sleep',
        tags: ['sleep', 'bedtime routine', 'newborn care'],
        domainId: null,
        ageRangeStart: 0,
        ageRangeEnd: 12,
        imageURL: null,
        authorId: 'expert-2',
        publishedAt: '2024-12-05T00:00:00.000Z',
        updatedAt: '2024-12-05T00:00:00.000Z'
      },
      'insight-3': {
        id: 'insight-3',
        title: 'Responsive Parenting',
        summary: 'How responding to your baby builds secure attachment.',
        content: 'Responsive parenting means consistently responding to your baby\'s needs with warmth and sensitivity. When you respond to your baby\'s cries, smiles, and coos, you\'re building trust and security. This secure attachment is the foundation for healthy social and emotional development. Contrary to some beliefs, you cannot spoil a baby by responding to their needs. In fact, babies whose needs are consistently met cry less overall and develop greater independence as they grow.',
        category: 'Parenting',
        tags: ['attachment', 'emotional development', 'responsive parenting'],
        domainId: 'domain-3', // Social & Emotional
        ageRangeStart: 0,
        ageRangeEnd: 12,
        imageURL: null,
        authorId: 'expert-1',
        publishedAt: '2024-12-10T00:00:00.000Z',
        updatedAt: '2024-12-10T00:00:00.000Z'
      },
      'insight-4': {
        id: 'insight-4',
        title: 'Baby\'s First Foods',
        summary: 'Introduction to solid foods and feeding milestones.',
        content: 'Most babies are ready to start solid foods around 6 months of age. Signs of readiness include sitting with support, good head control, showing interest in food, and loss of the tongue-thrust reflex. Start with single-ingredient purees and gradually introduce new foods every 3-5 days to watch for allergic reactions. Iron-rich foods like iron-fortified cereals, pureed meats, or beans are good first foods. Always supervise feeding and watch for signs that your baby is full.',
        category: 'Feeding',
        tags: ['solid foods', 'nutrition', 'feeding'],
        domainId: null,
        ageRangeStart: 4,
        ageRangeEnd: 12,
        imageURL: null,
        authorId: 'expert-3',
        publishedAt: '2024-12-15T00:00:00.000Z',
        updatedAt: '2024-12-15T00:00:00.000Z'
      },
      'insight-5': {
        id: 'insight-5',
        title: 'Language Development: First Sounds to First Words',
        summary: 'How your baby develops communication skills.',
        content: 'Language development begins with cooing and babbling in the first few months. Around 6-8 months, babies begin to experiment with sounds and may repeat syllables like "ba-ba" or "ma-ma." First words typically emerge around 12 months. You can support language development by talking to your baby throughout the day, reading books, singing songs, and responding to their vocalizations. Remember that receptive language (understanding) develops before expressive language (speaking).',
        category: 'Development',
        tags: ['language development', 'communication', 'milestones'],
        domainId: 'domain-4', // Language & Communication
        ageRangeStart: 0,
        ageRangeEnd: 12,
        imageURL: null,
        authorId: 'expert-2',
        publishedAt: '2024-12-20T00:00:00.000Z',
        updatedAt: '2024-12-20T00:00:00.000Z'
      }
    };

    return mockInsights[id] || null;
  }

  /**
   * Get mock data list of insights
   * @param {Object} options - Query options
   * @returns {Array} - Array of mock insights
   * @protected
   */
  _getMockDataList(options = {}) {
    // Return all mock insights as an array
    return Object.values(this._getMockInsights());
  }

  /**
   * Get all mock insights
   * @returns {Object} - Object with insight IDs as keys and insight data as values
   * @private
   */
  _getMockInsights() {
    return {
      'insight-1': {
        id: 'insight-1',
        title: 'Understanding Tummy Time',
        summary: 'Why tummy time is essential for your baby\'s development.',
        content: 'Tummy time is an essential activity for your baby\'s physical development. It helps strengthen neck, shoulder, and back muscles, which are crucial for later motor skills like rolling over, sitting up, and crawling. Start with short sessions (3-5 minutes) several times a day, and gradually increase as your baby gets stronger and more comfortable. Always supervise tummy time and make it fun with toys and interaction.',
        category: 'Development',
        tags: ['physical development', 'tummy time', 'motor skills'],
        domainId: 'domain-1', // Physical Development
        ageRangeStart: 0,
        ageRangeEnd: 6,
        imageURL: null,
        authorId: 'expert-1',
        publishedAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      },
      'insight-2': {
        id: 'insight-2',
        title: 'Baby Sleep Basics',
        summary: 'Understanding your baby\'s sleep patterns and needs.',
        content: 'Newborns sleep 14-17 hours per day, but only in short 2-3 hour stretches. By 3-4 months, many babies begin to develop more regular sleep patterns. Create a consistent bedtime routine to signal sleep time. A dark, quiet environment helps babies sleep better. Remember that every baby is different, and sleep patterns can vary widely. Always place babies on their backs to sleep to reduce the risk of SIDS.',
        category: 'Sleep',
        tags: ['sleep', 'bedtime routine', 'newborn care'],
        domainId: null,
        ageRangeStart: 0,
        ageRangeEnd: 12,
        imageURL: null,
        authorId: 'expert-2',
        publishedAt: '2024-12-05T00:00:00.000Z',
        updatedAt: '2024-12-05T00:00:00.000Z'
      },
      'insight-3': {
        id: 'insight-3',
        title: 'Responsive Parenting',
        summary: 'How responding to your baby builds secure attachment.',
        content: 'Responsive parenting means consistently responding to your baby\'s needs with warmth and sensitivity. When you respond to your baby\'s cries, smiles, and coos, you\'re building trust and security. This secure attachment is the foundation for healthy social and emotional development. Contrary to some beliefs, you cannot spoil a baby by responding to their needs. In fact, babies whose needs are consistently met cry less overall and develop greater independence as they grow.',
        category: 'Parenting',
        tags: ['attachment', 'emotional development', 'responsive parenting'],
        domainId: 'domain-3', // Social & Emotional
        ageRangeStart: 0,
        ageRangeEnd: 12,
        imageURL: null,
        authorId: 'expert-1',
        publishedAt: '2024-12-10T00:00:00.000Z',
        updatedAt: '2024-12-10T00:00:00.000Z'
      },
      'insight-4': {
        id: 'insight-4',
        title: 'Baby\'s First Foods',
        summary: 'Introduction to solid foods and feeding milestones.',
        content: 'Most babies are ready to start solid foods around 6 months of age. Signs of readiness include sitting with support, good head control, showing interest in food, and loss of the tongue-thrust reflex. Start with single-ingredient purees and gradually introduce new foods every 3-5 days to watch for allergic reactions. Iron-rich foods like iron-fortified cereals, pureed meats, or beans are good first foods. Always supervise feeding and watch for signs that your baby is full.',
        category: 'Feeding',
        tags: ['solid foods', 'nutrition', 'feeding'],
        domainId: null,
        ageRangeStart: 4,
        ageRangeEnd: 12,
        imageURL: null,
        authorId: 'expert-3',
        publishedAt: '2024-12-15T00:00:00.000Z',
        updatedAt: '2024-12-15T00:00:00.000Z'
      },
      'insight-5': {
        id: 'insight-5',
        title: 'Language Development: First Sounds to First Words',
        summary: 'How your baby develops communication skills.',
        content: 'Language development begins with cooing and babbling in the first few months. Around 6-8 months, babies begin to experiment with sounds and may repeat syllables like "ba-ba" or "ma-ma." First words typically emerge around 12 months. You can support language development by talking to your baby throughout the day, reading books, singing songs, and responding to their vocalizations. Remember that receptive language (understanding) develops before expressive language (speaking).',
        category: 'Development',
        tags: ['language development', 'communication', 'milestones'],
        domainId: 'domain-4', // Language & Communication
        ageRangeStart: 0,
        ageRangeEnd: 12,
        imageURL: null,
        authorId: 'expert-2',
        publishedAt: '2024-12-20T00:00:00.000Z',
        updatedAt: '2024-12-20T00:00:00.000Z'
      }
    };
  }
}

export default new InsightService();

/**
 * MilestoneService
 * 
 * Service for milestone-related operations
 * Provides methods for milestone management that will be implemented with Firestore in the future
 */

import BaseService from './BaseService';

class MilestoneService extends BaseService {
  constructor() {
    super('milestones');
  }

  /**
   * Get milestones for a specific domain
   * @param {string} domainId - Domain ID
   * @returns {Promise<Array>} - Array of milestones for the domain
   */
  async getMilestonesByDomain(domainId) {
    console.log(`[Mock] Getting milestones for domain ${domainId}`);
    // This would query Firestore for milestones where domainId matches
    return this._getMockDataList().filter(milestone => milestone.domainId === domainId);
  }

  /**
   * Get milestones for a specific age range
   * @param {number} ageInMonths - Age in months
   * @returns {Promise<Array>} - Array of milestones for the age range
   */
  async getMilestonesByAge(ageInMonths) {
    console.log(`[Mock] Getting milestones for age ${ageInMonths} months`);
    // This would query Firestore for milestones where ageRangeStart <= ageInMonths <= ageRangeEnd
    return this._getMockDataList().filter(
      milestone => milestone.ageRangeStart <= ageInMonths && milestone.ageRangeEnd >= ageInMonths
    );
  }

  /**
   * Get milestones for a specific domain and age range
   * @param {string} domainId - Domain ID
   * @param {number} ageInMonths - Age in months
   * @returns {Promise<Array>} - Array of milestones for the domain and age range
   */
  async getMilestonesByDomainAndAge(domainId, ageInMonths) {
    console.log(`[Mock] Getting milestones for domain ${domainId} and age ${ageInMonths} months`);
    // This would query Firestore for milestones where domainId matches and ageRangeStart <= ageInMonths <= ageRangeEnd
    return this._getMockDataList().filter(
      milestone => milestone.domainId === domainId && 
                  milestone.ageRangeStart <= ageInMonths && 
                  milestone.ageRangeEnd >= ageInMonths
    );
  }

  /**
   * Get mock data for a single milestone
   * @param {string} id - Milestone ID
   * @returns {Object|null} - Mock milestone data or null
   * @protected
   */
  _getMockData(id) {
    // Mock milestone data
    const mockMilestones = {
      'milestone-1': {
        id: 'milestone-1',
        title: 'Lifts head during tummy time',
        description: 'Baby can lift and hold their head up briefly during supervised tummy time.',
        domainId: 'domain-1', // Physical Development
        ageRangeStart: 1,
        ageRangeEnd: 3,
        order: 1,
        createdAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      },
      'milestone-2': {
        id: 'milestone-2',
        title: 'Rolls from tummy to back',
        description: 'Baby can roll from their tummy to their back.',
        domainId: 'domain-1', // Physical Development
        ageRangeStart: 3,
        ageRangeEnd: 5,
        order: 2,
        createdAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      },
      'milestone-3': {
        id: 'milestone-3',
        title: 'Responds to sounds',
        description: 'Baby turns head toward sounds and voices.',
        domainId: 'domain-2', // Cognitive Development
        ageRangeStart: 1,
        ageRangeEnd: 3,
        order: 1,
        createdAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      },
      'milestone-4': {
        id: 'milestone-4',
        title: 'Smiles at people',
        description: 'Baby smiles in response to seeing familiar faces.',
        domainId: 'domain-3', // Social & Emotional
        ageRangeStart: 2,
        ageRangeEnd: 4,
        order: 1,
        createdAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      },
      'milestone-5': {
        id: 'milestone-5',
        title: 'Makes cooing sounds',
        description: 'Baby makes vowel sounds like "ah" and "oh".',
        domainId: 'domain-4', // Language & Communication
        ageRangeStart: 2,
        ageRangeEnd: 4,
        order: 1,
        createdAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      }
    };

    return mockMilestones[id] || null;
  }

  /**
   * Get mock data list of milestones
   * @param {Object} options - Query options
   * @returns {Array} - Array of mock milestones
   * @protected
   */
  _getMockDataList(options = {}) {
    // Return all mock milestones as an array
    return Object.values(this._getMockMilestones());
  }

  /**
   * Get all mock milestones
   * @returns {Object} - Object with milestone IDs as keys and milestone data as values
   * @private
   */
  _getMockMilestones() {
    return {
      'milestone-1': {
        id: 'milestone-1',
        title: 'Lifts head during tummy time',
        description: 'Baby can lift and hold their head up briefly during supervised tummy time.',
        domainId: 'domain-1', // Physical Development
        ageRangeStart: 1,
        ageRangeEnd: 3,
        order: 1,
        createdAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      },
      'milestone-2': {
        id: 'milestone-2',
        title: 'Rolls from tummy to back',
        description: 'Baby can roll from their tummy to their back.',
        domainId: 'domain-1', // Physical Development
        ageRangeStart: 3,
        ageRangeEnd: 5,
        order: 2,
        createdAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      },
      'milestone-3': {
        id: 'milestone-3',
        title: 'Responds to sounds',
        description: 'Baby turns head toward sounds and voices.',
        domainId: 'domain-2', // Cognitive Development
        ageRangeStart: 1,
        ageRangeEnd: 3,
        order: 1,
        createdAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      },
      'milestone-4': {
        id: 'milestone-4',
        title: 'Smiles at people',
        description: 'Baby smiles in response to seeing familiar faces.',
        domainId: 'domain-3', // Social & Emotional
        ageRangeStart: 2,
        ageRangeEnd: 4,
        order: 1,
        createdAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      },
      'milestone-5': {
        id: 'milestone-5',
        title: 'Makes cooing sounds',
        description: 'Baby makes vowel sounds like "ah" and "oh".',
        domainId: 'domain-4', // Language & Communication
        ageRangeStart: 2,
        ageRangeEnd: 4,
        order: 1,
        createdAt: '2024-12-01T00:00:00.000Z',
        updatedAt: '2024-12-01T00:00:00.000Z'
      }
    };
  }
}

export default new MilestoneService();

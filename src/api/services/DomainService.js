/**
 * DomainService
 * 
 * Service for development domain-related operations
 * Provides methods for domain management that will be implemented with Firestore in the future
 */

import BaseService from './BaseService';

class DomainService extends BaseService {
  constructor() {
    super('domains');
  }

  /**
   * Get domains sorted by display order
   * @returns {Promise<Array>} - Array of domains sorted by order
   */
  async getDomainsByOrder() {
    console.log('[Mock] Getting domains by order');
    // This would query Firestore for domains ordered by the order field
    const domains = this._getMockDataList();
    return domains.sort((a, b) => a.order - b.order);
  }

  /**
   * Get mock data for a single domain
   * @param {string} id - Domain ID
   * @returns {Object|null} - Mock domain data or null
   * @protected
   */
  _getMockData(id) {
    // Mock domain data
    const mockDomains = {
      'domain-1': {
        id: 'domain-1',
        name: 'Physical Development',
        description: 'Motor skills, coordination, and physical growth',
        icon: 'body-outline',
        color: '#4CAF50', // Green
        order: 1
      },
      'domain-2': {
        id: 'domain-2',
        name: 'Cognitive Development',
        description: 'Learning, thinking, problem-solving, and memory',
        icon: 'brain-outline',
        color: '#2196F3', // Blue
        order: 2
      },
      'domain-3': {
        id: 'domain-3',
        name: 'Social & Emotional',
        description: 'Relationships, feelings, and social interactions',
        icon: 'heart-outline',
        color: '#E91E63', // Pink
        order: 3
      },
      'domain-4': {
        id: 'domain-4',
        name: 'Language & Communication',
        description: 'Speaking, listening, and understanding language',
        icon: 'chatbubbles-outline',
        color: '#FF9800', // Orange
        order: 4
      }
    };

    return mockDomains[id] || null;
  }

  /**
   * Get mock data list of domains
   * @param {Object} options - Query options
   * @returns {Array} - Array of mock domains
   * @protected
   */
  _getMockDataList(options = {}) {
    // Return all mock domains as an array
    return Object.values(this._getMockDomains());
  }

  /**
   * Get all mock domains
   * @returns {Object} - Object with domain IDs as keys and domain data as values
   * @private
   */
  _getMockDomains() {
    return {
      'domain-1': {
        id: 'domain-1',
        name: 'Physical Development',
        description: 'Motor skills, coordination, and physical growth',
        icon: 'body-outline',
        color: '#4CAF50', // Green
        order: 1
      },
      'domain-2': {
        id: 'domain-2',
        name: 'Cognitive Development',
        description: 'Learning, thinking, problem-solving, and memory',
        icon: 'brain-outline',
        color: '#2196F3', // Blue
        order: 2
      },
      'domain-3': {
        id: 'domain-3',
        name: 'Social & Emotional',
        description: 'Relationships, feelings, and social interactions',
        icon: 'heart-outline',
        color: '#E91E63', // Pink
        order: 3
      },
      'domain-4': {
        id: 'domain-4',
        name: 'Language & Communication',
        description: 'Speaking, listening, and understanding language',
        icon: 'chatbubbles-outline',
        color: '#FF9800', // Orange
        order: 4
      }
    };
  }
}

export default new DomainService();

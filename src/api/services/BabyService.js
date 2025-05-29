/**
 * BabyService
 * 
 * Service for baby-related operations
 * Provides methods for baby profile management that will be implemented with Firestore in the future
 */

import BaseService from './BaseService';

class BabyService extends BaseService {
  constructor() {
    super('babies');
  }

  /**
   * Get babies for a specific parent
   * @param {string} parentId - Parent user ID
   * @returns {Promise<Array>} - Array of baby profiles
   */
  async getBabiesByParent(parentId) {
    console.log(`[Mock] Getting babies for parent ${parentId}`);
    // This would query Firestore for babies where parentId matches
    return this._getMockDataList().filter(baby => baby.parentId === parentId);
  }

  /**
   * Get current baby profile (the active baby in the app)
   * @returns {Promise<Object|null>} - Current baby data or null if not set
   */
  async getCurrentBaby() {
    console.log('[Mock] Getting current baby');
    // This would get the currently selected baby from local storage or context
    return this._getMockData('baby-1');
  }

  /**
   * Calculate baby's age in months
   * @param {string} babyId - Baby ID
   * @returns {Promise<number>} - Age in months
   */
  async getBabyAgeInMonths(babyId) {
    console.log(`[Mock] Calculating age for baby ${babyId}`);
    const baby = this._getMockData(babyId);
    if (!baby) return 0;
    
    const birthDate = new Date(baby.birthDate);
    const now = new Date();
    const diffTime = Math.abs(now - birthDate);
    const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44));
    
    return diffMonths;
  }

  /**
   * Get mock data for a single baby
   * @param {string} id - Baby ID
   * @returns {Object|null} - Mock baby data or null
   * @protected
   */
  _getMockData(id) {
    // Mock baby data
    const mockBabies = {
      'baby-1': {
        id: 'baby-1',
        name: 'Emma',
        birthDate: '2025-01-15T00:00:00.000Z',
        parentId: 'current-user',
        gender: 'female',
        photoURL: null,
        createdAt: '2025-01-16T00:00:00.000Z',
        updatedAt: '2025-05-20T00:00:00.000Z'
      },
      'baby-2': {
        id: 'baby-2',
        name: 'Noah',
        birthDate: '2024-11-10T00:00:00.000Z',
        parentId: 'current-user',
        gender: 'male',
        photoURL: null,
        createdAt: '2024-11-12T00:00:00.000Z',
        updatedAt: '2025-05-15T00:00:00.000Z'
      },
      'baby-3': {
        id: 'baby-3',
        name: 'Olivia',
        birthDate: '2024-08-22T00:00:00.000Z',
        parentId: 'user-1',
        gender: 'female',
        photoURL: null,
        createdAt: '2024-08-25T00:00:00.000Z',
        updatedAt: '2025-04-30T00:00:00.000Z'
      }
    };

    return mockBabies[id] || null;
  }

  /**
   * Get mock data list of babies
   * @param {Object} options - Query options
   * @returns {Array} - Array of mock babies
   * @protected
   */
  _getMockDataList(options = {}) {
    // Return all mock babies as an array
    return Object.values(this._getMockBabies());
  }

  /**
   * Get all mock babies
   * @returns {Object} - Object with baby IDs as keys and baby data as values
   * @private
   */
  _getMockBabies() {
    return {
      'baby-1': {
        id: 'baby-1',
        name: 'Emma',
        birthDate: '2025-01-15T00:00:00.000Z',
        parentId: 'current-user',
        gender: 'female',
        photoURL: null,
        createdAt: '2025-01-16T00:00:00.000Z',
        updatedAt: '2025-05-20T00:00:00.000Z'
      },
      'baby-2': {
        id: 'baby-2',
        name: 'Noah',
        birthDate: '2024-11-10T00:00:00.000Z',
        parentId: 'current-user',
        gender: 'male',
        photoURL: null,
        createdAt: '2024-11-12T00:00:00.000Z',
        updatedAt: '2025-05-15T00:00:00.000Z'
      },
      'baby-3': {
        id: 'baby-3',
        name: 'Olivia',
        birthDate: '2024-08-22T00:00:00.000Z',
        parentId: 'user-1',
        gender: 'female',
        photoURL: null,
        createdAt: '2024-08-25T00:00:00.000Z',
        updatedAt: '2025-04-30T00:00:00.000Z'
      }
    };
  }
}

export default new BabyService();

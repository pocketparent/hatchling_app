/**
 * UserService
 * 
 * Service for user-related operations
 * Provides methods for user management that will be implemented with Firestore in the future
 */

import BaseService from './BaseService';

class UserService extends BaseService {
  constructor() {
    super('users');
  }

  /**
   * Get current user data
   * @returns {Promise<Object|null>} - Current user data or null if not authenticated
   */
  async getCurrentUser() {
    console.log('[Mock] Getting current user');
    // This would check authentication state and get user data from Firestore
    return this._getMockData('current-user');
  }

  /**
   * Update user profile
   * @param {string} userId - User ID
   * @param {Object} profileData - Profile data to update
   * @returns {Promise<boolean>} - Success status
   */
  async updateProfile(userId, profileData) {
    console.log(`[Mock] Updating profile for user ${userId}:`, profileData);
    // This would update the user document in Firestore
    return true;
  }

  /**
   * Update user preferences
   * @param {string} userId - User ID
   * @param {Object} preferences - User preferences
   * @returns {Promise<boolean>} - Success status
   */
  async updatePreferences(userId, preferences) {
    console.log(`[Mock] Updating preferences for user ${userId}:`, preferences);
    // This would update the preferences field in the user document
    return true;
  }

  /**
   * Get mock data for a single user
   * @param {string} id - User ID
   * @returns {Object|null} - Mock user data or null
   * @protected
   */
  _getMockData(id) {
    // Mock user data
    const mockUsers = {
      'current-user': {
        id: 'current-user',
        email: 'parent@example.com',
        displayName: 'Alex Parent',
        photoURL: null,
        createdAt: new Date('2025-01-15').toISOString(),
        lastLogin: new Date().toISOString(),
        preferences: {
          notifications: true,
          darkMode: false,
          contentTopics: ['sleep', 'development', 'feeding']
        }
      },
      'user-1': {
        id: 'user-1',
        email: 'test@example.com',
        displayName: 'Test User',
        photoURL: null,
        createdAt: new Date('2025-02-10').toISOString(),
        lastLogin: new Date('2025-05-20').toISOString(),
        preferences: {
          notifications: true,
          darkMode: true,
          contentTopics: ['development']
        }
      }
    };

    return mockUsers[id] || null;
  }

  /**
   * Get mock data list of users
   * @param {Object} options - Query options
   * @returns {Array} - Array of mock users
   * @protected
   */
  _getMockDataList(options = {}) {
    // Return all mock users as an array
    return Object.values(this._getMockUsers());
  }

  /**
   * Get all mock users
   * @returns {Object} - Object with user IDs as keys and user data as values
   * @private
   */
  _getMockUsers() {
    return {
      'current-user': {
        id: 'current-user',
        email: 'parent@example.com',
        displayName: 'Alex Parent',
        photoURL: null,
        createdAt: new Date('2025-01-15').toISOString(),
        lastLogin: new Date().toISOString(),
        preferences: {
          notifications: true,
          darkMode: false,
          contentTopics: ['sleep', 'development', 'feeding']
        }
      },
      'user-1': {
        id: 'user-1',
        email: 'test@example.com',
        displayName: 'Test User',
        photoURL: null,
        createdAt: new Date('2025-02-10').toISOString(),
        lastLogin: new Date('2025-05-20').toISOString(),
        preferences: {
          notifications: true,
          darkMode: true,
          contentTopics: ['development']
        }
      }
    };
  }
}

export default new UserService();

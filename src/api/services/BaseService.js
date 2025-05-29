/**
 * BaseService
 * 
 * Base class for all API services with common functionality
 * Provides methods that will be implemented with Firestore in the future
 */

class BaseService {
  constructor(collectionName) {
    this.collectionName = collectionName;
  }

  /**
   * Get a document by ID
   * @param {string} id - Document ID
   * @returns {Promise<Object|null>} - Document data or null if not found
   */
  async getById(id) {
    console.log(`[Mock] Getting ${this.collectionName} with ID: ${id}`);
    // This would be implemented with Firestore in the future
    // For now, return mock data if available
    return this._getMockData(id);
  }

  /**
   * Get all documents in the collection
   * @param {Object} options - Query options (limit, orderBy, filters)
   * @returns {Promise<Array>} - Array of documents
   */
  async getAll(options = {}) {
    console.log(`[Mock] Getting all ${this.collectionName} with options:`, options);
    // This would be implemented with Firestore in the future
    // For now, return mock data
    return this._getMockDataList(options);
  }

  /**
   * Create a new document
   * @param {Object} data - Document data
   * @param {string} id - Optional document ID (if not provided, one will be generated)
   * @returns {Promise<string>} - ID of the created document
   */
  async create(data, id = null) {
    console.log(`[Mock] Creating ${this.collectionName}:`, data);
    // This would be implemented with Firestore in the future
    // For now, just return a mock ID
    return id || `mock-${this.collectionName}-${Date.now()}`;
  }

  /**
   * Update an existing document
   * @param {string} id - Document ID
   * @param {Object} data - Document data to update
   * @returns {Promise<boolean>} - Success status
   */
  async update(id, data) {
    console.log(`[Mock] Updating ${this.collectionName} with ID: ${id}`, data);
    // This would be implemented with Firestore in the future
    return true;
  }

  /**
   * Delete a document
   * @param {string} id - Document ID
   * @returns {Promise<boolean>} - Success status
   */
  async delete(id) {
    console.log(`[Mock] Deleting ${this.collectionName} with ID: ${id}`);
    // This would be implemented with Firestore in the future
    return true;
  }

  /**
   * Query documents with filters
   * @param {Object} filters - Query filters
   * @param {Object} options - Query options (limit, orderBy)
   * @returns {Promise<Array>} - Array of documents
   */
  async query(filters, options = {}) {
    console.log(`[Mock] Querying ${this.collectionName} with filters:`, filters, "options:", options);
    // This would be implemented with Firestore in the future
    // For now, return filtered mock data
    return this._getMockDataList(options);
  }

  /**
   * Get mock data for a single document
   * @param {string} id - Document ID
   * @returns {Object|null} - Mock document data or null
   * @protected
   */
  _getMockData(id) {
    // To be overridden by subclasses
    return null;
  }

  /**
   * Get mock data list
   * @param {Object} options - Query options
   * @returns {Array} - Array of mock documents
   * @protected
   */
  _getMockDataList(options = {}) {
    // To be overridden by subclasses
    return [];
  }
}

export default BaseService;

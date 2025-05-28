/**
 * Hatchling App Environment Configuration
 * 
 * Provides environment-specific configuration for the app
 * Handles API URLs and other environment variables
 */

// Default configuration for development
const defaultConfig = {
  API_BASE_URL: 'https://api.hatchling.app',
  ENVIRONMENT: 'development',
  VERSION: '1.0.0',
  ENABLE_LOGGING: true,
};

// Load environment variables from Expo Constants or process.env
const getEnvironmentVariables = () => {
  try {
    // In a real app with Expo, we would use Constants.manifest.extra
    // For now, we'll use a mock implementation
    return {
      API_BASE_URL: process.env.REACT_APP_API_BASE_URL || defaultConfig.API_BASE_URL,
      ENVIRONMENT: process.env.REACT_APP_ENVIRONMENT || defaultConfig.ENVIRONMENT,
      VERSION: process.env.REACT_APP_VERSION || defaultConfig.VERSION,
      ENABLE_LOGGING: process.env.REACT_APP_ENABLE_LOGGING === 'true' || defaultConfig.ENABLE_LOGGING,
    };
  } catch (error) {
    console.warn('Error loading environment variables:', error);
    return defaultConfig;
  }
};

// Export configuration
const config = getEnvironmentVariables();

export default config;

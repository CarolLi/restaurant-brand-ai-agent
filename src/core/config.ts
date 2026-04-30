import dotenv from 'dotenv';

dotenv.config();

export const config = {
  // Server
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  logLevel: process.env.LOG_LEVEL || 'info',

  // OpenAI
  openai: {
    apiKey: process.env.OPENAI_API_KEY || '',
    model: process.env.OPENAI_MODEL || 'gpt-4',
  },

  // Database
  database: {
    url: process.env.DATABASE_URL || '',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    name: process.env.DB_NAME || 'restaurant_agent',
  },

  // Redis
  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379'),
  },

  // Cache
  cache: {
    enabled: process.env.CACHE_ENABLED === 'true',
    ttl: parseInt(process.env.CACHE_TTL || '3600'),
  },

  // POS Integration
  pos: {
    apiUrl: process.env.POS_API_URL || '',
    apiKey: process.env.POS_API_KEY || '',
    secret: process.env.POS_SECRET || '',
  },

  // CRM Integration
  crm: {
    apiUrl: process.env.CRM_API_URL || '',
    apiKey: process.env.CRM_API_KEY || '',
  },

  // Features
  features: {
    realTimeSync: process.env.ENABLE_REAL_TIME_SYNC === 'true',
    predictions: process.env.ENABLE_PREDICTIONS === 'true',
  },
};

export default {
  port: process.env.PORT || 3000,

  /**
   * Rest API config
   */
  api: {
    prefix: "/api",
  },

  /**
   * Switch routes on/off
   */
  routes: {
    default: true,
    user: true,
  },

  /**
   * MongoDB config
   */

  mongo: {
    protocol: process.env.MONGO_PROTOCOL,
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PASSWORD,
    database: process.env.MONGO_DATABASE,
    url: process.env.MONGO_URL,
  },
};

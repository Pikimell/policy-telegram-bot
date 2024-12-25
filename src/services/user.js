import { UserCollection } from '../db/models/user.js';

const userService = {
  /**
   * Створити нового користувача
   * @param {Object} userData - Дані користувача
   * @returns {Promise<Object>} - Створений користувач
   */
  async createUser(userData) {
    try {
      const newUser = new UserCollection(userData);
      return await newUser.save();
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  /**
   * Знайти користувача за userId
   * @param {String} userId - Ідентифікатор користувача
   * @returns {Promise<Object|null>} - Знайдений користувач або null
   */
  async findUserById(userId) {
    try {
      return await UserCollection.findOne({ userId });
    } catch (error) {
      console.error('Error finding user by ID:', error);
      throw error;
    }
  },

  /**
   * Оновити дані користувача
   * @param {String} userId - Ідентифікатор користувача
   * @param {Object} updateData - Дані для оновлення
   * @returns {Promise<Object|null>} - Оновлений користувач або null
   */
  async updateUser(userId, updateData) {
    try {
      return await UserCollection.findOneAndUpdate({ userId }, updateData, {
        new: true,
      });
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  /**
   * Видалити користувача за userId
   * @param {String} userId - Ідентифікатор користувача
   * @returns {Promise<Object|null>} - Видалений користувач або null
   */
  async deleteUser(userId) {
    try {
      return await UserCollection.findOneAndDelete({ userId });
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  },

  /**
   * Отримати всіх користувачів
   * @param {Object} filters - Обєкт з параметрами пошуку
   * @returns {Promise<Array>} - Масив користувачів
   */
  async getAllUsers(filters) {
    try {
      return await UserCollection.find(filters);
    } catch (error) {
      console.error('Error getting all users:', error);
      throw error;
    }
  },

  /**
   * Перевірити, чи існує користувач за userId
   * @param {String} userId - Ідентифікатор користувача
   * @returns {Promise<Boolean>} - true, якщо користувач існує; інакше false
   */
  async userExists(userId) {
    try {
      const user = await UserCollection.findOne({ userId });
      return !!user;
    } catch (error) {
      console.error('Error checking if user exists:', error);
      throw error;
    }
  },

  /**
   * Додати запит до історії користувача
   * @param {String} userId - Ідентифікатор користувача
   * @param {String} query - Запит для додавання
   * @returns {Promise<Object|null>} - Оновлений користувач або null
   */
  async addQueryToUser(userId, query) {
    try {
      return await UserCollection.findOneAndUpdate(
        { userId },
        { $push: { queries: query } },
        { new: true },
      );
    } catch (error) {
      console.error('Error adding query to user:', error);
      throw error;
    }
  },
};

export default userService;

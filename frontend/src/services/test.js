const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const test = {
  async test() {
    try {
      const response = await fetch(`${API_BASE_URL}/test`);
      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  async testConnection() {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
};

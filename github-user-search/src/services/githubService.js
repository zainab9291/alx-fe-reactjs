import axios from "axios";

export const fetchUserData = async (query) => {
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items; // بيرجع Array من اليوزرز
  } catch (error) {
    return [];
  }
};
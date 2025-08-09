// src/services/githubService.js
export const fetchAdvancedUsers = async (username, location, minRepos) => {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;

    const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error("Failed to fetch users");

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
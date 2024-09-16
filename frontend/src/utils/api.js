import axios from "axios";

export const postData = async (url, data, headers = {}) => {
  try {
    const response = await axios.post(url, data, {
      headers: {
        ...headers,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Server responded with an error:", error.response.data);
      console.error("Status code:", error.response.status);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error in request setup:", error.message);
    }
    throw error;
  }
};
export const putData = async (url, data, headers = {}) => {
  try {
    const response = await axios.put(url, data, {
      headers: {
        ...headers,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Server responded with an error:", error.response.data);
      console.error("Status code:", error.response.status);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error in request setup:", error.message);
    }
    throw error;
  }
};
export const getData = async (url, headers = {}) => {
  try {
    const response = await axios.get(url, {
      headers: {
        ...headers,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Server responded with an error:", error.response.data);
      console.error("Status code:", error.response.status);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error in request setup:", error.message);
    }
    throw error;
  }
};

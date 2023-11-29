const API_BASE_URL = "https://nevadacms.onrender.com/api";
// Получение вопросов:
export const fetchFaq = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/questions`);
    const result = await response.json();
    // console.log("questions:", result.data);
    return result.data;
  } catch (error) {
    console.error("Error fetching FAQ:", error.message);
    throw error;
  }
};
// Получение контактов:
export const fetchContacts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/company-contact`);
    const result = await response.json();
    // console.log("contacts:", result.data.attributes);
    return result.data.attributes;
  } catch (error) {
    console.error("Error fetching contacts:", error.message);
    throw error;
  }
};
// Получение цен на продукты:
export const fetchPriceProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/price-products`);
    const result = await response.json();
    // console.log("price-products:", result.data);
    return result.data;
  } catch (error) {
    console.error("Error fetching price products:", error.message);
    throw error;
  }
};
// Получение цен на контейнеры:

export const fetchPriceContainers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/price-containers`);
    const result = await response.json();
    console.log("price-containers:", result.data);
    return result.data;
  } catch (error) {
    console.error("Error fetching price containers:", error.message);
    throw error;
  }
};

// Получение цен на упаковку:
export const fetchPricePackings = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/price-packings`);
    const result = await response.json();
    console.log("price-packings:", result.data);
    return result.data;
  } catch (error) {
    console.error("Error fetching price packings:", error.message);
    throw error;
  }
};

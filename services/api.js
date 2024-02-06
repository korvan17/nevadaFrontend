const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}api`;

export const fetchFaq = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/questions`);
    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error("Error fetching FAQ:", error.message);
    throw error;
  }
};

export const fetchContacts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/company-contact`);
    const result = await response.json();

    return result.data.attributes;
  } catch (error) {
    console.error("Error fetching contacts:", error.message);
    throw error;
  }
};

export const fetchPriceProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/price-products`);
    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error("Error fetching price products:", error.message);
    throw error;
  }
};

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

export const fetchPricePackings = async () => {
  try {
    const pageSize = 100;
    const response = await fetch(`${API_BASE_URL}/price-packings`);
    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error("Error fetching price packings:", error.message);
    throw error;
  }
};

export const fetchOrders = async (accessToken) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/orders?populate=products.feature&pagination[pageSize]=${100}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `HTTP error ${response.status}: ${await response.text()}`
      );
    }

    const data = await response.json();
    return data.resData;
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    throw error;
  }
};

export const fetchAllOrders = async (accessToken) => {
  try {
    const pageSize = 100;
    let allOrders = [];
    let page = 1;

    while (true) {
      const response = await fetch(
        `${API_BASE_URL}/orders?populate=products.feature&pagination[pageSize]=${pageSize}&pagination[page]=${page}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `HTTP error ${response.status}: ${await response.text()}`
        );
      }

      const data = await response.json();
      const ordersOnPage = data.resData;

      if (ordersOnPage.length === 0) {
        break;
      }

      allOrders = allOrders.concat(ordersOnPage);
      page++;
    }

    return allOrders;
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    throw error;
  }
};

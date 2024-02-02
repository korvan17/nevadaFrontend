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
    const pageSize = 100;
    const response = await fetch(`${API_BASE_URL}/price-packings`);
    const result = await response.json();
    // console.log("price-packings:", result.data);
    return result.data;
  } catch (error) {
    console.error("Error fetching price packings:", error.message);
    throw error;
  }
};

// Получение ордеров:

export const fetchOrders = async (accessToken) => {
  try {
    const response = await fetch(
      `https://nevadacms.onrender.com/api/orders?populate=products.feature&pagination[pageSize]=${100}`,
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
    return data.resData; // Ensure this matches the actual key in the JSON response
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    throw error;
  }
};

// Получение получение много ордеров:
// export const fetchAllOrders = async (accessToken) => {
//   try {
//     const pageSize = 100; // Размер страницы
//     let allOrders = [];
//     let page = 1;

//     while (true) {
//       const response = await fetch(
//         `https://nevadacms.onrender.com/api/orders?populate=products.feature&pagination[pageSize]=${pageSize}&pagination[page]=${page}`,
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error(
//           `HTTP error ${response.status}: ${await response.text()}`
//         );
//       }

//       const data = await response.json();
//       const ordersOnPage = data.resData;

//       if (ordersOnPage.length === 0) {
//         // Если на странице нет заказов, то завершаем цикл
//         break;
//       }

//       allOrders = allOrders.concat(ordersOnPage); // Объединяем текущие заказы с предыдущими
//       page++; // Увеличиваем номер страницы для следующего запроса
//     }

//     return allOrders;
//   } catch (error) {
//     console.error("Error fetching orders:", error.message);
//     throw error;
//   }
// };

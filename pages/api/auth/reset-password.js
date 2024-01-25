"use client";
import axios from "axios";
export default async function resetPassword(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Метод не дозволений." });
  }

  try {
    const { code, password, passwordConfirmation } = req.body;

    // Перевірте, що пароль і підтвердження паролю співпадають
    if (password !== passwordConfirmation) {
      return res.status(400).json({ message: "Паролі не співпадають." });
    }

    // Тут додайте логіку для виклику API вашої CMS для скидання пароля
    const response = await axios.post(
      "https://nevadacms.onrender.com/api/auth/reset-password",
      {
        code,
        password,
        passwordConfirmation,
      }
    );

    // Перевірка відповіді від CMS
    if (response.data) {
      // Скидання пароля було успішним
      return res.status(200).json({ message: "Пароль було скинуто." });
    } else {
      // Щось пішло не так
      return res.status(500).json({ message: "Помилка скидання пароля." });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

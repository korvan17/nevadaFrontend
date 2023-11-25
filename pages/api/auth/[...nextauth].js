// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "john.doe@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await axios.post(
            "https://nevadacms.onrender.com/api/auth/local",
            {
              identifier: credentials.email,
              password: credentials.password,
            }
          );
          // Обработка ответа от вашего API.
          if (res.data) {
            // Возвращаем пользовательские данные из ответа API.
            return res.data;
          } else {
            // Возвращаем null, если аутентификация не удалась.
            return null;
          }
        } catch (e) {
          // Обработка ошибки и возврат null, если аутентификация не удалась.
          console.error("Error during authorization:", e);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // ...остальные настройки NextAuth
});

// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
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

          const user = res.data;

          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (e) {
          if (e.response) {
            console.error("Error during authorization:", e.response.data);
          } else if (e.request) {
            console.error("No response received:", e.request);
          } else {
            console.error("Error setting up request:", e.message);
          }
          return null;
        }
      },
    }),
  ],
  // ...rest of your NextAuth config
});

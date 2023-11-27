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
          type: "text",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Authorize function called", credentials);
        try {
          const res = await axios.post(
            "https://nevadacms.onrender.com/api/auth/local",
            {
              identifier: credentials.email,
              password: credentials.password,
            }
          );
          console.log("API Response:", res.data);
          const user = res.data;

          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (e) {
          console.error(e);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        console.log("JWT Token:", user.jwt);
        return {
          accessToken: user.token,
          ...token,
        };
      }
      console.log("JWT Token:", user.token);
      return token;
    },
    async session({ session, token }) {
      console.log("Session Token:", token.accessToken);
      session.accessToken = token.accessToken;
      return session;
    },
  },
  // Другие настройки...
});

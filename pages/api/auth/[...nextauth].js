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

          if (res.data) {
            return { ...res.data.user, jwt: res.data.jwt };
          }
        } catch (e) {
          console.error(e);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {
          ...user,
        };
      }
      return token;
    },

    session: async ({ session, token }) => {
      if (token.user) {
        session.user = token.user;
      }
      return session;
    },
  },
  // Другие настройки...
  secret: process.env.NEXTAUTH_SECRET,
});

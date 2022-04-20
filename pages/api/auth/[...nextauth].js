import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    pages: {
        signIn: "/login"
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials, req) => {
                console.log(credentials, "check")
                // database look up
                if (credentials.username === "nikhil@gmail.com" && credentials.password === "123456") {
                    return {
                        name: "nikhil"
                    }
                }
                else {
                    return null
                }
            },
        }),
    ],

    callbacks: {
        jwt: ({ token, user }) => {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        session: ({ session, token }) => {
            if (token) {
                session.id = token.id;
            }
            return session;
        },
    },
    secret: "thisistopsecret",
});
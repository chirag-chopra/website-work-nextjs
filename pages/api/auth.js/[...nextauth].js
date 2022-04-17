import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    // pages: {
    //     signIn: "/auth/signin",
    //     signOut: "/auth/signout",
    //     error: "/auth/error",
    //     verifyRequest: "/auth/verify-request",
    // },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials, req) => {
                // database look up
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
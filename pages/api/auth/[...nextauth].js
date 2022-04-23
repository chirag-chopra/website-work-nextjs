import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios"

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
                try {

                    console.log(credentials, "check")

                    let body = {
                        email: credentials.username,
                        password: credentials.password
                    }
                    const res = await axios.post("http://localhost:3000/api/auth/user-signin", body)
                    console.log("Api Check", res.data)
                    if (res.data.success == true) {
                        return res.data
                    }
                }
                catch (error) {
                    throw new Error(error.response.data.message)
                }
            },
        }),
    ],

    callbacks: {
        jwt: ({ token, user }) => {
            console.log(user, "token")
            if (user) {
                token.id = user.token;
            }
            return token;
        },
        session: ({ session, token }) => {
            console.log(session, "Session")
            if (token) {
                session.id = token.id;
            }
            return session;
        },

    },
    secret: "thisistopsecret",
});
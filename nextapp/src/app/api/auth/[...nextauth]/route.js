import { connectToDatabase } from "@/app/lib/db";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "@/app/lib/auth";

export const authOptions = {
    pages: {
        signIn: '/signin',
    },
    providers: [
        CredentialsProvider({
            session: {
                strategy: 'jwt' 
            },
           
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                console.log('credentials',credentials)
                const client = await connectToDatabase();

                const userCollection = client.db().collection('user');
                const user = await userCollection.findOne({email: credentials.email})
                console.log('user', user.password)
                if(user) {
                    const isValid = await verifyPassword(credentials.password,user.password);
                    console.log('isValid', isValid)
                    if(isValid) {
                            return {email: user.email}
                        }
                }
                // client.close();
                return null;

            }
        })
    ]
};

export const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
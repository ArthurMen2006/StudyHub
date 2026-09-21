import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GithubStrategy } from "passport-github2";
import { PrismaClient } from "../../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv"


dotenv.config()

const adapter = new PrismaPg({connectionString: process.env.DATABASE_URL})
const prisma = new PrismaClient({adapter});

passport.use(
   new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL: process.env.GOOGLE_CALLBACK_ULR!,
    },
    async (acessToken, refreshToken, profile, done) =>{
        try {
            let user = await prisma.user.findUnique({
                where: {providerId:profile.id}
            })
            if(!user){
                user = await prisma.user.create({
                    data: {
                        name: profile.displayName,
                        email: profile.emails?.[0]?.value ?? "",
                        provider: "google",
                        providerId: profile.id,
                        avatarUrl: profile.photos?.[0]?.value?? null,
                    }
                })
            }
            return done (null, user)
        } catch (error) {
            return done (error as Error);
        }
    }
   )
)

passport.use(
   new GithubStrategy(
    {
        clientID: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        callbackURL: process.env.GITHUB_CALLBACK_ULR!,
    },
    async (acessToken, refreshToken, params, profile, done) =>{
        try {
            let user = await prisma.user.findUnique({
                where: {providerId:profile.id}
            })
            if(!user){
                user = await prisma.user.create({
                    data: {
                        name: profile.displayName || profile.username,
                        email: profile.emails?.[0]?.value ?? "",
                        provider: "github",
                        providerId: profile.id,
                        avatarUrl: profile.photos?.[0]?.value?? null,
                    }
                })
            }
            return done (null, user)
        } catch (error) {
            return done (error as Error);
        }
    }
   )
)

export default passport
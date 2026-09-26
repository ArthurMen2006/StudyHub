import { Router } from "express";
import passport from "passport";
import "../config/passport";
import  Jwt  from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()

const router = Router();

router.get("/google", passport.authenticate("google",{scope: ["profile", "email"]}));
router.get("/google/callback", passport.authenticate("google", {session: false, failureRedirect: "/login" }), (req, res) => {
   const user = req.user as {id: string};

   const token = Jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET!,
    {expiresIn: "7d"}
   );

    res.json({token});

});
router.get("/github", passport.authenticate("github",{scope: ["profile", "email"]}))
router.get("/github/callback", passport.authenticate("github", {session: false, failureRedirect:"/login"}),(req,res) =>{
   const user = req.user as {id: string};

   const token = Jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET!,
    {expiresIn: "7d"}
   );

   res.json({token});

});

export default router;
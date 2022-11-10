import { Router } from "express";
import drinksRoute from "./drinks.route.js"

const router = Router()

router.use("/drinks", drinksRoute)

export default router
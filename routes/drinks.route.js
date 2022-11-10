import { Router } from "express"
import drinksController from "../controllers/drinks.controllers.js"

const router = Router()

router.get("/", drinksController.getDrinks)
router.get("/:drinkId", drinksController.getDrinksById)
router.get("/in-stock", drinksController.getDrinksStock)
router.post("/", drinksController.addDrink)
router.patch("/:drikId", drinksController.updateDrink)
router.delete("/:drikId", drinksController.delDrink)

export default router
import { Router } from "express";
import { listAllGalaxiesController } from "./useCase/Galaxy";
import { createTravelerController } from "./useCase/Traveler";
import { authController } from "./useCase/Auth";
import { AuthMiddleware } from "./middleware/auth.middleware";

const router = Router()

router.get('/', (req, res) => res.status(200).send())

router.post('/login', (req, res) => authController.handle(req, res))

router.post('/traveler/create', (req, res) => createTravelerController.handle(req, res))
router.get('/galaxy', AuthMiddleware, (req, res) => listAllGalaxiesController.handle(req, res))

export { router }
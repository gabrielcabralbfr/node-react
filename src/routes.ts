import { Router } from "express";
import { listAllGalaxiesController } from "./useCase/Galaxy";
import { createTravelerController } from "./useCase/Traveler";
import { authController } from "./useCase/Auth";
import { AuthMiddleware } from "./middleware/auth.middleware";
import { joinVideoConferenceController } from "./useCase/VideoConference";

const router = Router()

router.get('/', (req, res) => res.status(200).send())

router.get('/galaxy', AuthMiddleware, (req, res) => listAllGalaxiesController.handle(req, res))
router.post('/auth', (req, res) => authController.handle(req, res))
router.post('/traveler/create', (req, res) => createTravelerController.handle(req, res))
router.post('/planet/meeting/join', (req, res) => joinVideoConferenceController.handle(req, res))

export { router }
import { Router } from "express";
import { getRepository, createConnection } from "typeorm";
import { Traveler } from "./entity/Traveler";

const router = Router()
createConnection().then(async connection => {
    const travelerRepository = connection.getRepository(Traveler);

    router.get('/', (req, res) => res.status(200).send())
    router.get('/travelers', async (req, res) => {
        const travelers = await travelerRepository.find()
        res.json(travelers)
    })
    router.post('/traveler/create', async (req, res) => {
        const data = req.body
        const traveler = await travelerRepository.create(data)
        res.send(await travelerRepository.save(traveler))
    })
})
export { router }
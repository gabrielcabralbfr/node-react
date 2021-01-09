import { Request, Response } from "express";
import { AuthUseCase } from "./auth.usecase";
import * as jwt from 'jsonwebtoken'
import { Auth } from "../../entity/Auth";

export class AuthController {
    /**
     *
     */
    constructor(private useCase: AuthUseCase) { }
    async handle(req: Request, res: Response) {
        try {
            const [traveler] = await this.useCase.execute(req.body)
            if (!traveler) res.status(401).json({ message: 'E-mail or password incorrect' })
            const token = Auth.getInstance().generateToken({ traveler })
            return res.status(200).json({ token })
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: error.message || 'Auth failed' })
        }
    }

}
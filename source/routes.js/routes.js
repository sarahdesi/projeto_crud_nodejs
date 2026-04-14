import { Router } from "express";
import { getUsers, creatUser, deleteUser, patchUser } from "../controllers/UserController.js";

const routes = Router()

routes.get('/users', getUsers)
routes.post('/users', creatUser)
routes.delete('/users/:id', deleteUser)
routes.patch('/users/:id', patchUser)

export default routes
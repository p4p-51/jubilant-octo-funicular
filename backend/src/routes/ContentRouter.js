import Router from 'express'
import {ContentController} from "../controllers/Content";

const contentRouter = Router()
const contentController = new ContentController()

contentRouter.get('/', contentController.getAllContent)

export default contentRouter


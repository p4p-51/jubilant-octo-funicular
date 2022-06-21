import {Request, Response} from 'express'

class UserController {
    async get(req, res){
        res.send({"asdf": "sadf"})
    }
}

export {UserController}
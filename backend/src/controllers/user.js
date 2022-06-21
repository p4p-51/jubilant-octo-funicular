import {Request, Response} from 'express'

class UserController {
    async basic(req, res){
        res.send({"asdf": "sadf"})
    }
}

export {UserController}
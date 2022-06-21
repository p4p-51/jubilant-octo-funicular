class UserController {
    async get(req, res){
        res.send(200, {"hello": "world"})
    }
}

export {UserController}
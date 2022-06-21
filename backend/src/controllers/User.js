class UserController {
    getUser = async (req, res) => {
        const user = {
            "userName": req.params.userId,
            "avatar": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
            "progress": {
                "module": "self-intro",
                "stage": 2
            }
        }
        res.status(200).json(user)
    }
}

export {UserController}
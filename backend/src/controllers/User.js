class UserController {
    getUser = async (req, res) => {
        const user = {
            "userName": "dli515",
            "avatar": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
            "progress": {
                "module": "self-intro",
                "stage": 2
            }
        }
        res.send(200, user)
    }
}

export {UserController}
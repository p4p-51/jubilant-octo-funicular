class UserController {
  GetUser = async (req, res) => {
    const user = {
      userName: req.params.userId,
      avatar:
        'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      progress: {
        module: 'self-intro',
        stage: 2,
      },
    };
    res.status(200).json(user);
  };

  CompleteStage = async (req, res) => {
    const next = {
      module: 'asdf',
      stage: 1,
    };

    res.status(200).send({ success: true, nextStage: next });
  };
  PostIntro = async (req, res) => {
    res.status(200).send({ success: true });
  };
}

export { UserController };

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

  GetIntro = async (req, res) => {
    const body = {
      body: 'my intro',
      attributes: ['name', 'education'],
    };

    res.status(200).send(body);
  };

  GetStats = async (req, res) => {
    const body = {
      accuracy: {
        before: 90,
        after: 100,
      },
      numExperiences: 4,
      numQuestionsAnswered: 16,
      completedModules: [
        'Self Introduction',
        'Thinking of Experiences',
        'Organising Situations',
        'Mannerisms',
      ],
    };
    res.status(200).send(body);
  };
}

export { UserController };

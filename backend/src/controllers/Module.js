class ModuleController {
  CompleteStage = async (req, res) => {};
  SubmitFeedback = async (req, res) => {
    const feedback = {
      module: 'self-intro',
      stage: 2,
    };

    res.status(200).send({ success: true, nextStage: feedback });
  };
  SubmitQuiz = async (req, res) => {
    res.status(200).send({ success: true });
  };
}

export { ModuleController };

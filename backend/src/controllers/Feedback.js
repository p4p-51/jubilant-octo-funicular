class FeedbackController {
  SubmitFeedback = async (req, res) => {
    const feedback = {
      module: 'asdf',
      stage: 1,
    };

    res.status(200).send({ success: true, nextStage: feedback });
  };
}

export { FeedbackController };
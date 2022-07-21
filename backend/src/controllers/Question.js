class QuestionController {
  GetQuestionsWithExperiences = async (req, res) => {
    const questionsWithExperiences = [
      {
        _id: 'question-1',
        questionText: 'Tell me about a time when you salami steak',
        experiences: [
          {
            _id: 'exp-1',
            name: 'I volunteered for charity',
          },
          {
            _id: 'exp-2',
            name: 'Summer camp tramping',
          },
        ],
      },
      {
        _id: 'question-2',
        questionText: 'Tell me about a time when you experienced a conflict',
        experiences: [
          {
            _id: 'exp-2',
            name: 'Summer camp tramping',
          },
          {
            _id: 'exp-3',
            name: 'ENGGEN 115 group project',
          },
        ],
      },
    ];

    res.send(200, questionsWithExperiences);
  };

  GetQuestionsWithResponses = async (req, res) => {
    const questionsWithResponses = [
      {
        experience: {
          _id: 'exp_id_1',
          name: 'ENGGEN115',
          labels: [],
        },
        answer: {
          s: 'Situation text',
          t: 'Task text',
          a: 'answer text',
          r: 'result text',
        },
      },
    ];

    res.status(200).send(questionsWithResponses);
  };

  Answer = async (req, res) => {
    res.status(200).send({ success: true });
  };
}

export { QuestionController };
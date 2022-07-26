import { BaseController } from "./BaseController";

class ExperienceController extends BaseController{
  GetAllExperiences = async (req, res) => {
    const experiences = [
      {
        _id: 'situation-1',
        name: 'ENGGEN 115 Group Project',
        labels: [
          {
            _id: 'label-1',
            labelString: 'I experienced a conflict',
          },
          {
            _id: 'label-2',
            labelString: 'I demonstrated leadership',
          },
        ],
      },
      {
        _id: 'situation-2',
        name: 'Summer Camp at Teapot Valley',
        labels: [
          {
            _id: 'label-3',
            labelString: 'I experienced a failure',
          },
          {
            _id: 'label-1',
            labelString: 'I experienced a conflict',
          },
        ],
      },
    ];
    res.status(200).send(experiences);
  };

  AddExperience = async (req, res) => {
    res.status(200).send({ success: true });
  };
}

export { ExperienceController };

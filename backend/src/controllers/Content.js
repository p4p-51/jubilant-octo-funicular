class ContentController {
    GetAllContent = async(req, res) => {
        const content = [{
            "moduleId": "SOMEID",
            "moduleName": "self-into",
            "length": 2,
            "stages": [
                {
                    "name": "quiz 1",
                    "id": "s1"
                },
                {
                    "name": "lecture",
                    "id": "s2"
                },
            ]
        }, {
            "moduleId": "SOMEID2",
            "moduleName": "situations",
            "length": 2,
            "stages": [
                {
                    "name": "quiz 1",
                    "id": "1"
                },
                {
                    "name": "lecture",
                    "id": "2"
                }]
        }]

        res.send(200, content)
    }

    GetModuleStage = async (req, res) => {
        const stage = {
            "subtitle": "This is a sub",
            "description": "desc",
            "sections": [
                {
                    "heading": "Providing basics",
                    "subtitle": "this  is also a sub",
                    "type": "text",
                    "data": {
                        "sectionTitle": "hi",
                        "content": "blahahahadfdashfhsdf"
                    }
                }
            ]
        };
        res.status(200).send(stage);
    }
}

export {ContentController}

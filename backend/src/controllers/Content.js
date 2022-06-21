class ContentController {
    getAllContent = async(req, res) => {
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
                    "id": "asdf2"
                },
                {
                    "name": "lecture",
                    "id": "sadf2"
                }]
        }]

        res.send(200, content)
    }
}

export {ContentController}

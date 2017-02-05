import unirest = require('unirest');

let msg = {
    "msgId": 17,
    "msgAuth": {
        "user": "nechor",
        "pass": "1qaz",
        "session": "123"
    },
    msgBody: {
        "deviceId": "1234",
        "deviceType": "thermometer",
        "readings": [
            {
                "time": "2017-01-01 00:00",
                "reading": {
                    "temperature": 12,
                    "unitCode": "C"
                }
            },
            {
                "time": "2017-01-01 01:00",
                "reading": {
                    "temperature": 13,
                    "unitCode": "C"
                }
            }
        ]
    }
}

console.log("-----------------------------------");

unirest.post('http://localhost:3000/postreadings')
    .headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
    .send(msg)
    .end(function(response) {
        console.log(response.body);
    });

import { ReadingsMsg } from "../messages/message";

export function postReadings(req, res) {
    let rm = new ReadingsMsg(req.body);
    res.send(rm);
}

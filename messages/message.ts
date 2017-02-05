interface IMsgAuth {
    user: string;
    pass: string;
    session: string;
};

interface IMsg {
    msgId: number;
    msgAuth: IMsgAuth;
    msgBody: Object;
}

export class Msg implements IMsg {
    msgId: number = 0;
    msgAuth: IMsgAuth;
    msgBody: Object;
}

export class ReadingsMsg implements IMsg {
    constructor(msg: IMsg) {
        this.msgId = msg.msgId;
        this.msgAuth = msg.msgAuth;
        this.msgBody = msg.msgBody;
    }
    msgId: number;
    msgAuth: IMsgAuth;
    msgBody: Object;
}

interface IMsgAuth {
    user: string;
    pass: string;
    session: string;
};

interface IMsg {
    msgId: number;
    msgAuth: IMsgAuth;
    msgBody: Object;
    isRecognized(): boolean;
    getRecognizedError(): string;
}

export class Msg implements IMsg {
    constructor(msg: IMsg) {
        if (!msg.msgId) {
            this._recognized = false;
            this._recognizedError = "No message ID. "
        }

        if (this.isRecognized()) {
            this.msgId = msg.msgId;
            this.msgAuth = msg.msgAuth;
            this.msgBody = msg.msgBody;
        }
        else {
            console.log(this.getRecognizedError());
        }
    }

    msgId: number;
    msgAuth: IMsgAuth;
    msgBody: Object;

    protected _recognized: boolean = true;
    protected _recognizedError: string = "";
    isRecognized(): boolean {
        return this._recognized;
    }
    getRecognizedError(): string {
        return this._recognizedError;
    };
}

export class ReadingsMsg extends Msg {
    constructor(msg: IMsg) {
        super(msg);
    }
}

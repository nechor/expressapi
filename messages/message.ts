interface IMsgAuth {
    user: string;
    pass: string;
    session: string;
};

interface IMsg {
    msgId: number;
    msgAuth: IMsgAuth;
    msgBody: Object;
    isconfirmed(): boolean;
    getconfirmedError(): string;
}

class Msg implements IMsg {
    constructor(msg: IMsg) {
        if (!msg.msgId) {
            this._confirmed = false;
            this._confirmedError = "No message ID. "
        }

        if (this.isconfirmed()) {
            this.msgId = msg.msgId;
            this.msgAuth = msg.msgAuth;
            this.msgBody = msg.msgBody;
        }
        else {
            console.log(this.getconfirmedError());
        }
    }

    msgId: number;
    msgAuth: IMsgAuth;
    msgBody: Object;

    protected _confirmed: boolean = true;
    protected _confirmedError: string = "";
    isconfirmed(): boolean {
        return this._confirmed;
    }
    getconfirmedError(): string {
        return this._confirmedError;
    };
}

export class ReadingsMsg extends Msg {
    constructor(msg: IMsg) {
        super(msg);
    }
}

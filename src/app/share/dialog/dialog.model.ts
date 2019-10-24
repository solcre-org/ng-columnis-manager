export class DialogModel {
    constructor(
        public title?: string,
        public message?: string,
        public confirmCallback?: Function
    ) { }

    public doConfirm() {
        if (this.confirmCallback) {
            this.confirmCallback();
        }
    }
}
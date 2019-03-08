
// Класс наблюдателя, который при обновлении рассылает инфу подписчикам
export default class Commander {
    private subscribers: [];
    private instance: Commander;
    private name: string;

    private constructor(_name: string = "defaultCommander") {
        this.name = _name;
    }

    public getInstance() {
        if (this.instance == null) {
            this.instance = new Commander()
        }
        return this.instance;
    }

    public scream() {
        alert('Scream of ' + this.name);
    }

}

export default class Resources {
    private monsterRes: string;
    private robotRes: string;
    private adoptedRobotRes: string;
    private runRes: string;
    private swimRes: string;
    private flyRes: string;
    private rideRes: string;

    private constructor() {
        this.monsterRes = './img/monster.jpg';
        this.robotRes = './img/robot.jpg';
        this.adoptedRobotRes = './img/adaptedRobot.png';
        this.runRes  = './img/run.gif';
        this.swimRes = './img/swim.gif';
        this.flyRes = './img/fly.gif';
        this.rideRes = './img/ride.gif';
    }

    public static getInstace() {
        return new Resources();
    }

    get getMonsterRes() {
        return this.monsterRes;
    }

    get getRobotRes() {
        return this.robotRes;
    }

    get getAdaptedRobotRes() {
        return this.adoptedRobotRes;
    }

    get getRunRes() {
        return this.runRes;
    }

    get getSwimRes() {
        return this.swimRes;
    }

    get getFlyRes() {
        return this.flyRes;
    }

    get getRideRes() {
        return this.rideRes;
    }
}
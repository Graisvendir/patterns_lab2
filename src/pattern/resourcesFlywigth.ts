
export default class Resources {
    private monsterRes: string;
    private robotRes: string;
    private adoptedRobotRes: string;
    private runRes: string;
    private swimRes: string;
    private flyRes: string;
    private rideRes: string;

    public constructor() {
        this.monsterRes = './img/monster.jpg';
        this.robotRes = './img/robot.jpg';
        this.adoptedRobotRes = './img/adaptedRobot.png';
        this.runRes  = './img/run.gif';
        this.swimRes = './img/swim.gif';
        this.flyRes = './img/fly.gif';
        this.rideRes = './img/ride.gif';
    }

    public get getMonsterRes() {
        return this.monsterRes;
    }

    public get getRobotRes() {
        return this.robotRes;
    }

    public get getAdaptedRobotRes() {
        return this.adoptedRobotRes;
    }

    public get getRunRes() {
        return this.runRes;
    }

    public get getSwimRes() {
        return this.swimRes;
    }

    public get getFlyRes() {
        return this.flyRes;
    }

    public get getRideRes() {
        return this.rideRes;
    }
}
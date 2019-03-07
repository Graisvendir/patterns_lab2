import Robot from "../../../model/creatures/robot";

export default interface IBuilder {
    reset(): Robot;
    buildRide(): Robot;
}

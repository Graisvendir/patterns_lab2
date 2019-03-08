import Robot from "../../creatures/robot";

export default interface IBuilder {
    reset(): Robot;
    buildRide(): Robot;
}

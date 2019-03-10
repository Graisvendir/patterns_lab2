import Publisher from "./Publisher";

export default interface ISubscriber {
    update(_newCommander: Publisher): void;
}

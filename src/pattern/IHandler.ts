export default interface IHandler {
    setNext(_next: IHandler): void;
    handle(): void;
}

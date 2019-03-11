import Publisher from "../pattern/observer/Publisher";

/**
 * Класс наблюдателя, который при обновлении рассылает инфу подписчикам
 * в данном случае рассылает свое новое имя
 */
export default class Commander extends Publisher {

    public static getInstance() {
        if (Commander.instance == null) {
            Commander.instance = new Commander();
        }
        return Commander.instance;
    }
    private static instance: Commander;

    private constructor(_name: string = "defaultCommander") {
        super(_name);
    }

}

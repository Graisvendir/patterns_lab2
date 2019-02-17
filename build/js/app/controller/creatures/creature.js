"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defense_1 = require("../properties/defense");
const Constants = require("../../constants");
const Interface = require("../interfaces/interface");
class Creature {
    constructor(_name, _id, _movements, _weapons, _armor = new defense_1.Defense(10)) {
        this.countOfNotNullProperties = 1;
        this.name = _name;
        this.id = _id;
        if (_movements === undefined) {
            this.setDefaultMovements();
        }
        else {
            this.movements = _movements;
            for (let key of this.movements.values()) {
                if (key !== null) {
                    this.countOfNotNullProperties++;
                }
            }
        }
        if (_weapons === undefined) {
            this.setDefaultWeapons();
        }
        else {
            this.weapons = _weapons;
            for (let key of this.weapons.values()) {
                if (key !== null) {
                    this.countOfNotNullProperties++;
                }
            }
        }
        this.armor = _armor;
        this.iAlive();
    }
    //--------------------------Getters-----------------------------//
    get getName() {
        return this.name;
    }
    get getMovements() {
        return this.movements;
    }
    get getWeapons() {
        return this.weapons;
    }
    get getArmor() {
        return this.armor;
    }
    get getStatus() {
        return this.Status;
    }
    get getCountOfNotNullProps() {
        return this.countOfNotNullProperties;
    }
    get getId() {
        return this.id;
    }
    //---------------------------Setters-------------------------------//
    // need for construct default creature
    /**
     * create movements of creature then it's construct
     */
    setDefaultMovements() {
        this.movements = Constants.createDefaultMovements();
    }
    /**
     * create weapons of creature then it's construct
     */
    setDefaultWeapons() {
        this.weapons = Constants.createDefaultWeapons();
    }
    //----------------------------Show Properties----------------------//
    showProp(_prop) {
        if (_prop !== null) {
            console.log(_prop.output());
        }
    }
    showProperties() {
        console.log(this.name + ' properties:');
        for (let key of this.movements.values()) {
            this.showProp(key);
        }
        for (let key of this.weapons.values()) {
            this.showProp(key);
        }
        this.showProp(this.armor);
    }
    showStatus() {
        console.log(this.name + ' is ' + this.Status);
    }
    //-------------Summ of properties---------------//
    // need for battle
    complexWeapon() {
        let attack = 0;
        for (let key of this.weapons.values()) {
            if (key)
                attack += key.getValue;
        }
        return attack;
    }
    complexSpeed() {
        let speed = 0;
        for (let key of this.movements.values()) {
            if (key)
                speed += key.getValue;
        }
        return speed;
    }
    complexArmor() {
        return this.armor.getValue;
    }
    //---------------Change Status--------------------//
    iAlive() {
        this.Status = Constants.ALIVE;
        this.showStatus();
    }
    iDead() {
        this.Status = Constants.DEAD;
        this.showStatus();
    }
    iFeeding() {
        this.Status = Constants.FEEDING;
        this.showStatus();
    }
    iEscape() {
        this.Status = Constants.ESCAPE;
        this.showStatus();
    }
    //------------------Upgrade Properties--------------------//
    upgradeExistingMovement(_movement) {
        let value = this.movements.get(_movement.getLabel).getValue + _movement.getValue;
        _movement.setValue = value;
        this.movements.set(_movement.getLabel, _movement);
    }
    updateMovements(_movement) {
        if (this.movements.get(_movement.getLabel) === null) {
            this.movements.set(_movement.getLabel, _movement);
            this.countOfNotNullProperties++;
        }
        else {
            if (_movement)
                this.upgradeExistingMovement(_movement);
        }
    }
    upgradeExistingWeapon(_weapon) {
        let value = this.weapons.get(_weapon.getLabel).getValue + _weapon.getValue;
        _weapon.setValue = value;
        this.weapons.set(_weapon.getLabel, _weapon);
    }
    updateWeapons(_weapon) {
        if (this.weapons.get(_weapon.getLabel) === null) {
            this.weapons.set(_weapon.getLabel, _weapon);
            this.countOfNotNullProperties++;
        }
        else {
            if (_weapon)
                this.upgradeExistingWeapon(_weapon);
        }
    }
    updateArmor(_armor) {
        let value = this.armor.getValue + _armor.getValue;
        this.armor.setValue = value;
    }
    //-------------------------Take Property From Target------------------------//
    /**
     * search property with number _cycle.random
     * @param _cycle { {number, number} } have random number and iterator
     * @param _mapProps { Map<string, Property> } have map of creature props
     */
    updateSomeProperty(_property) {
        switch (_property.getLabel) {
            case Constants.RUN:
                this.updateMovements(_property);
                break;
            case Constants.FLY:
                this.updateMovements(_property);
                break;
            case Constants.SWIM:
                this.updateMovements(_property);
                break;
            case Constants.CLAWS:
                this.updateWeapons(_property);
                break;
            case Constants.FANGS:
                this.updateWeapons(_property);
                break;
            case Constants.SPIT:
                this.updateWeapons(_property);
                break;
            case Constants.ARMOR:
                this.updateArmor(_property);
                break;
        }
    }
    /**
     * take property after battle
     * @param _creature { Creature }
     */
    takePropertyFrom(_creature) {
        let date = Math.random();
        let count = _creature.getCountOfNotNullProps;
        let random = Math.round((date * 1000) % count);
        console.log(random);
        let updProp = Interface.getPropertyFromCreatureByIndex(random, _creature);
        this.updateSomeProperty(updProp);
        console.log('	' + this.name + ' take property: ' + updProp.getLabel);
        return true;
    }
}
exports.default = Creature;
//# sourceMappingURL=creature.js.map
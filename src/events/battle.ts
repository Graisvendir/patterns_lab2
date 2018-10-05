import Creature from '../creatures/creature';
import * as Constants from '../constants';

function canAttackerClaimTarget(_attacker: Creature, _target: Creature): boolean {
    if (_attacker.complexSpeed() > _target.complexSpeed())
        return true;
    return false;
}

function attackerKillTarget(_attacker: Creature, _target: Creature) {
    console.log('    ' + _attacker.getName + ' win ');
    _attacker.iFeeding();
    _target.iDead();
    _attacker.takePropertyFrom(_target);
}

function targetKillAttacker(_attacker: Creature, _target: Creature) {
    console.log('    ' + _target.getName + ' win ');
    _attacker.iDead();
    _target.iFeeding();
    _target.takePropertyFrom(_attacker)
}

/**
 * main battle function, check attackers power and target armor
 * @param {Creature} _attacker
 * @param {Creature} _target
 * @returns {boolean} true if _attacker win battle, else false
 */
function battle(_attacker: Creature, _target: Creature): boolean {
    //if i can destroy _attacker monster
    if (_target.complexArmor() < _attacker.complexWeapon()) {
        console.log('   ' + _attacker.getName + ' pierce armor of ' + _target.getName);
        attackerKillTarget(_attacker, _target);
        return true; 
    }
    //if i cant destroy, check, if he can destroy me
    if (_target.complexWeapon() > _attacker.complexArmor()) {
        //if he can
        console.log('   ' + _attacker.getName + ' dont pierce armor of ' + _target.getName);
        console.log('   ' + _target.getName + ' is counter-attack!');
        targetKillAttacker(_attacker, _target);
        return false;
    }
    console.log('   No one can pierce armor. They run away!');
    _attacker.iEscape();
    return false;
}

/**
 * proxy, initiate battle, check what _target is alive
 * @param {Creature} _attacker  Creature, what attack target
 * @param {Creature} _target    Creature, what will attacked
 */
export function attack(_attacker: Creature, _target: Creature) {
    if (canAttackerClaimTarget(_attacker, _target)) {
        if (_target.getStatus !== Constants.DEAD) {
            console.log('START BATTLE: ' + _attacker.getName + ' VS ' + _target.getName);
            battle(_attacker, _target);
        } else {
            console.log(_attacker.getName + ' cant attack ' + _target.getName);
            console.log(_target.getName + ' is dead!');
        }
    } else {
        _target.iEscape();
        console.log(_target.getName + ' excape from ' + _attacker.getName);
    }
}

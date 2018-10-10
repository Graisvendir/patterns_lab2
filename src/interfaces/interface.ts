import Creature from '../creatures/creature';
import Monster from '../creatures/monster';
import { Property } from '../properties/property'
import { Iterator } from './iterator';
import { Composite } from './composite';

export function getPropertyFromCreatureByIndex(index: number, _creature: Creature): Property {
    let iter: Iterator = new Iterator(_creature);
    while (iter.getIndex !== index) {
        iter.Next();
    }
    return iter.Current();
}
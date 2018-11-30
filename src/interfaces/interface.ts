import Creature from '../creatures/creature';
import { Property } from '../properties/property'
import { Iterator } from './iterator';

export function getPropertyFromCreatureByIndex(index: number, _creature: Creature): Property {
    let iter: Iterator = new Iterator(_creature);
    while (iter.getCurrent !== index) {
        iter.Next();
    }
    return iter.Current();
}

export function deleteCreature(event: Event) {
    let creatureId = (<HTMLButtonElement>event.target).parentElement.id;
    console.log(creatureId);
    document.getElementById(creatureId).remove();
    let id = parseInt(creatureId);
}
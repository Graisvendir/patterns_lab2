import { mainComposite } from "../main";

export function buttonFightClick(event: Event) {
    let creatureId = (<HTMLButtonElement>event.target).parentElement.id;
    console.log(creatureId);
    document.getElementById(creatureId).remove();
    let id = parseInt(creatureId);
    clearBoard();
    fillTargetBoard(id);
}

function clearBoard() {
    document.getElementById('fightBoard').innerHTML = '';
}

function fillTargetBoard(_id: number) {
    let content = document.getElementById('content').childNodes;
    let fightBoard = document.getElementById('fightBoard');
    for (let i = 0; i < content.length; i++) {
        if (parseInt((<HTMLElement>content.item(i)).id) != _id) {
            let clonedNode = content.item(i).cloneNode(true);
            fightBoard.appendChild(clonedNode);
        }

    }
}
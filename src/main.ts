import { Composite } from "./controller/pattern/composite";
import { addCreature } from "./view/addCreature";

export let mainComposite: Composite; 
document.getElementById('addCreature').onclick = addCreature;
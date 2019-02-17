import { Composite } from "./controller/pattern/composite";
import { addCreature } from "./view/addCreture";

export let mainComposite: Composite; 
document.getElementById('addCreature').onclick = addCreature;
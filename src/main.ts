import { Composite } from "./controller/pattern/composite";
import { addCreature } from "./view/addCreature";

export let mainComposite: Composite = new Composite('zoo', []); 
document.getElementById('addCreature').onclick = addCreature;
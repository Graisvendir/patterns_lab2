import Monster from '../creatures/monster'
import Properties from '../properties/property'
import Composite from '../interfaces/composite'

let composite = new Composite('creatures', [])

function addCreature(_creature) {
    addCard(_creature.getName(), _creature.get)
}



/*
<div class="card" style="width: 18rem;">
    <div style="background-color: grey; height: 100px;"></div>
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>

 */
function addCard(_name, _props) {
    let elem = document.getElementById('content').value;
    elem.innerHTML += '<div class="card" id="' + composite.getCreatures.length + '" style="width: 18rem;">\n' +
        '    <div style="background-color: grey; height: 100px;"></div>\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + _name + '</h5>\n' +
        '<ul class="list-group list-group-flush">' +
        '<li class="list-group-item">Cras justo odio</li>' +
        '<li class="list-group-item">Dapibus ac facilisis in</li>' +
        '<li class="list-group-item">Vestibulum at eros</li>' +
        '</ul>' +
        '        <a href="#" class="btn btn-primary">Go somewhere</a>\n' +
        '    </div>\n' +
        '</div>'
}


import { appState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";

// NOTE functions on the outside of the class are PRIVATE, meaning the user cannot access them
function _drawPlayers() {
  let players = appState.players
  let template = ''
  players.forEach(p => template += p.Template)
  document.getElementById('players').innerHTML = template
}


export class PlayersController {
  // place calls you want to run on load in the controller constructor
  constructor() {
    // NOTE for demonstration purposed
    // new Player('Mick', 0)
    // new Player('Jeffe', -10)
    // this.drawPlayers()
    _drawPlayers()
  }


  scorePoint(name) {
    console.log(name, 'scoring point');
    playersService.scorePoint(name)
    _drawPlayers()
    // this.drawPlayers()
  }

  drawPlayers() {
    let players = appState.players
    let template = ''
    players.forEach(p => {
      template += `
      <div class="col-md-6 text-center p-2 bg-light elevation-2">
        <h3>${p.name}</h3>
        <h3 class="text-warning">${p.score}</h3>
        <button class="btn btn-primary w-100" onclick="app.playersController.scorePoint('${p.name}')">+</button>
      </div>
      `
    })
    document.getElementById('players').innerHTML = template
  }
}
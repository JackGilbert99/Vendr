import { appState } from "../AppState.js";


class PlayersService {

  scorePoint(name) {
    console.log(name, 'score point service');
    let player = appState.players.find(p => p.name == name)
    console.log(player);
    player.scorePoint()
  }

}

// NOTE export services as consts so they are now un-changeable
export const playersService = new PlayersService()
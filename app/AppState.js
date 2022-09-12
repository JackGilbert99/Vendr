import { Player } from "./Models/Player.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"


class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', Value)


  // NOTE this type line just adds funtionality to vs code, telling it only Players can exist in that array
  /** @type {import('./Models/Player').Player[]} */
  players = [new Player('Rice Krispy Treat', 0, 'https://www.quill.com/is/image/Quill/s1203845_s7?$img400$'), new Player('Famous Amos', 0, 'https://www.quill.com/is/image/Quill/sp55184039_s7?$img400$'), new Player('Cheez it Snapd', 0, 'https://www.quill.com/is/image/Quill/sp52041826_s7?$img400$'), new Player('Snack Pack', 0, 'https://www.quill.com/is/image/Quill/m001889198_s7?$img400$'), new Player('Takis', 0, 'https://www.quill.com/is/image/Quill/sp168852264_s7?$img400$'), new Player('Pop-tarts', 0, 'https://www.quill.com/is/image/Quill/sp55184239_s7?$img400$')]



}



export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
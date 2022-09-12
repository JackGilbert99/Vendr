import { PlayersController } from "./Controllers/PlayersController.js";

class App {
  // NOTE comment out values controller once you have one of your onw
  // valuesController = new ValuesController();

  playersController = new PlayersController()
}

window["app"] = new App();
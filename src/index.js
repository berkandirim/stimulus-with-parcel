import 'babel-core/register'
import 'babel-polyfill'

import { Application } from "stimulus"
import './../styles/index.scss'

// import controllers
import HelloController from "./controllers/hello_controller"
import PlanetController from "./controllers/planet_controller"

const application = Application.start()

// register controllers
application.register("hello", HelloController)
application.register("planet", PlanetController)
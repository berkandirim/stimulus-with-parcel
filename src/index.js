import { Application } from "stimulus"
import './../styles/index.scss'

// import controllers
import HelloController from "./controllers/hello_controller"
import RefreshableController from "./controllers/refreshable_controller"

const application = Application.start()

// register controllers
application.register("hello", HelloController)
application.register("refreshable", RefreshableController)
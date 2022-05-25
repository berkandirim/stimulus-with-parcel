import '@babel/register';
import '@babel/polyfill';

import { Application } from 'stimulus';
import 'chota/dist/chota.css';
import './../styles/index.scss';

// import controllers
import HelloController from './controllers/hello_controller';
import PlanetController from './controllers/planet_controller';

const application = Application.start();

// register controllers
application.register('hello', HelloController);
application.register('planet', PlanetController);

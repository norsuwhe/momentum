import { BackgroundSlider } from './components/backgroundSlider/backgroundSlider.js';
import { Greeting } from './components/greeting/greeting.js';
import { Quote } from './components/quote/quote.js';
import { Time } from './components/time/time.js';
import { Weather } from './components/weather/weather.js';
import './style.scss';


const time = new Time();
const weather = new Weather();
const quote = new Quote();
const greeting = new Greeting();
const backgroundSlider = new BackgroundSlider();
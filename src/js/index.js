import '../css/index.css';
import { hachathonDate, startTiming } from './appConfig';

const nowTimeSeconds = parseInt(new Date().getTime() / 1000, 10);

const start = hachathonDate;
start.setHours(parseInt(startTiming.hour, 10));
start.setMinutes(parseInt(startTiming.minute, 10));
start.setSeconds(0, 0);

const startTimeSeconds = parseInt(start.getTime() / 1000, 10);
let timeDistance = startTimeSeconds - nowTimeSeconds;

const leftDays = Math.floor(timeDistance / 60 / 60 / 24);
timeDistance -= leftDays * 24 * 60 * 60;

const leftHours = Math.floor(timeDistance / 60 / 60);
timeDistance -= leftHours * 60 * 60;

const leftMinutes = Math.floor(timeDistance / 60);
timeDistance -= leftMinutes * 60;

console.log(`Days: ${leftDays} / Hours: ${leftHours} / Minutes: ${leftMinutes} / Seconds: ${timeDistance}`);

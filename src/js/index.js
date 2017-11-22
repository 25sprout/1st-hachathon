import TypeWriting from 'typewriting';
import palette from '../../config/palette.json';

import '../css/common.css';
import '../css/index.css';
import '../css/confused-typing.css';
import { hachathonDate, startTiming, catTypeing } from './appConfig';

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

/**
 * init typing animation
 */
/* eslint-disable no-new */
new TypeWriting({
/* eslint-enable no-new */
	targetElement: document.querySelector('.confused-typing'),
	inputString: catTypeing,
	typingInterval: 50,
	blinkInterval: '1s',
	cursorColor: palette.darkBlack,
});

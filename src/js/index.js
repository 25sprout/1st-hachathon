import TypeWriting from 'typewriting';
import palette from '../../config/palette.json';

import '../css/common.css';
import '../css/index.css';
import '../css/confuseing-typing.css';
import '../css/banner-section.css';
import '../css/countdown-timer.css';
import { catTyping } from './appConfig';
import countdown from './countdown';
import updateTime from './updateTime';

const reversedCatTyping = [...catTyping].reverse().join('');

/**
 * first shot
 */
updateTime(countdown());

/**
 * execute it every second
 */
setInterval(() => {
	updateTime(countdown());
}, 1000);

const comingAgain = (typeObject, inputString) => {
	document.body.classList.add('invert');

	setTimeout(() => {
		document.body.classList.remove('invert');
		typeObject.rewrite(inputString, () => {
			comingAgain(typeObject, inputString === catTyping ? reversedCatTyping : catTyping);
		});
	}, 1000);
};

/**
 * init typing animation
 */
const typeWriting = new TypeWriting({
	targetElement: document.querySelector('.confuseing-typing'),
	inputString: catTyping,
	typingInterval: 50,
	blinkInterval: '1s',
	cursorColor: palette.darkBlack,
}, () => {
	comingAgain(typeWriting, reversedCatTyping);
});

import TypeWriting from 'typewriting';
import palette from '../../config/palette.json';

import '../css/common.css';
import '../css/index.css';
import '../css/confused-typing.css';
import '../css/banner-section.css';
import '../css/countdown-timer.css';
import { catTypeing } from './appConfig';
import countdown from './countdown';
import updateTime from './updateTime';

const reversedCatTyping = [...catTypeing].reverse().join('');

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
			comingAgain(typeObject, inputString === catTypeing ? reversedCatTyping : catTypeing);
		});
	}, 1000);
};

/**
 * init typing animation
 */
const typeWriting = new TypeWriting({
	targetElement: document.querySelector('.confused-typing'),
	inputString: catTypeing,
	typingInterval: 50,
	blinkInterval: '1s',
	cursorColor: palette.darkBlack,
}, () => {
	comingAgain(typeWriting, reversedCatTyping);
});

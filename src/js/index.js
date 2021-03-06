import TypeWriting from 'typewriting';
import palette from '../../config/palette.json';

import '../css/common.css';
import '../css/index.css';
import '../css/confuseing-typing.css';
import '../css/banner-section.css';
import '../css/countdown-timer.css';
import '../css/team-wrapper.css';
import '../css/team-section.css';
import '../css/member-sticker.css';
import '../css/footer-block.css';
import { catTyping } from './appConfig';
import countdown from './countdown';
import updateTime from './updateTime';
import appendImageToTeam from './appendImageToTeam';
import wineImage from '../images/wine.png';
import tangImage from '../images/mad-tang.png';

const reversedCatTyping = [...catTyping].reverse().join('');

/**
 * first shot
 */
const outcome = countdown();

if (outcome) {
	updateTime(outcome);

	/**
	 * execute it every second
	 */
	setInterval(() => {
		updateTime(countdown());
	}, 1000);
} else {
	/**
	 * oops! hackathon is over
	 */
	const $timer = document.querySelector('.countdown-timer');

	$timer.querySelector('.days > .value').innerText = 'XX';
	$timer.querySelector('.hours > .value').innerText = 'XX';
	$timer.querySelector('.minutes > .value').innerText = 'XX';
	$timer.querySelector('.seconds > .value').innerText = 'XX';
}

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
	typingInterval: 20,
	blinkInterval: '1s',
	cursorColor: palette.darkBlack,
}, () => {
	comingAgain(typeWriting, reversedCatTyping);
});

/**
 * add wine image
 */
if (window.screen.width > 480) {
	appendImageToTeam(wineImage, 'wine');
}

/**
 * add tang image
 */
appendImageToTeam(tangImage, 'tang');

/**
 * hackathon date
 */
const hachathonDate = new Date(2017, 10, 28);

export const startTiming = hachathonDate;
startTiming.setHours(11);
startTiming.setMinutes(0);
startTiming.setSeconds(0, 0);

export const deadlineTiming = hachathonDate;
deadlineTiming.setHours(17);
deadlineTiming.setMinutes(0);
deadlineTiming.setSeconds(0, 0);

/* eslint-disable max-len */
const defaultTypingText = 'aljjjgaaaaaaaaaaaaaaaaaaaaaaam,32;iop9gy7uk/lm;\\\\\\\\\\\\\\\\\\\\\\\\\\aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaayyyyyyyy................s@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ioooooooooooooooooooooooooooooooooooooifffffffffffffffffffffffffffffffo23orl;wef;p34io3m23ihcdusihcowefdfnbdjewd';
/* eslint-enable max-len */

const textWidth = 48;
const textHeight = 92;

const totalTextNumber = Math.floor(window.innerWidth / textWidth) *
	(
		window.innerHeight % textHeight === 0 ?
			window.innerHeight / textHeight
			:
			Math.floor(window.innerHeight / textHeight) + 1
	);

export const catTyping = totalTextNumber < defaultTypingText.length ?
	defaultTypingText.substr(0, totalTextNumber)
	:
	`${defaultTypingText}${'y'.repeat(totalTextNumber - defaultTypingText.length)}`;

export const timer = {
	days: 0,
	hours: 0,
	minutes: 0,
};

export default 'CONFIG';

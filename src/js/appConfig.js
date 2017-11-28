/**
 * hackathon date
 */
const hachathonDate = new Date(2017, 10, 28);

export const startTiming = new Date(hachathonDate.valueOf());
startTiming.setHours(11);
startTiming.setMinutes(0);
startTiming.setSeconds(0, 0);

export const deadlineTiming = new Date(hachathonDate.valueOf());
deadlineTiming.setHours(17);
deadlineTiming.setMinutes(30);
deadlineTiming.setSeconds(0, 0);

/* eslint-disable max-len */
const defaultTypingText = 'aljjjgaaaaaaaaaaaaaaaaaaaaaaam,32;iop9gy7uk/lm;\\\\\\\\\\\\\\\\\\\\\\\\\\aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaayyyyyyyy................s@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ioooooooooooooooooooooooooooooooooooooifffffffffffffffffffffffffffffffo23orl;wef;p34io3m23ihcdusihcowefdfnbdjewd';
/* eslint-enable max-len */

const textWidth = 48;
const textHeight = 92;

const totalTextNumber = Math.floor(window.screen.width / textWidth) *
	(
		window.screen.height % textHeight === 0 ?
			window.screen.height / textHeight
			:
			Math.floor(window.screen.height / textHeight) + 1
	);

export const catTyping = totalTextNumber < defaultTypingText.length ?
	defaultTypingText.substr(0, totalTextNumber)
	:
	`${defaultTypingText}${'v8,f'.repeat((totalTextNumber - defaultTypingText.length) / 4)}`;

export const timer = {
	days: null,
	hours: null,
	minutes: null,
};

export default 'CONFIG';

import { timer } from './appConfig';

const formatNumber = (number) => number < 10 ? `0${number}` : number;

const updateTime = (timeObject) => {
	const timeSelector = document.querySelector('.countdown-timer');

	if (timeObject.days !== timer.days) {
		timer.days = timeObject.days;
		timeSelector.querySelector('.days > .value').innerText = formatNumber(timeObject.days);
	}

	if (timeObject.hours !== timer.hours) {
		timer.hours = timeObject.hours;
		timeSelector.querySelector('.hours > .value').innerText = formatNumber(timeObject.hours);
	}

	if (timeObject.minutes !== timer.minutes) {
		timer.minutes = timeObject.minutes;
		timeSelector.querySelector('.minutes > .value').innerText = formatNumber(timeObject.minutes);
	}

	/**
	 * second always changes
	 */
	timeSelector.querySelector('.seconds > .value').innerText = formatNumber(timeObject.seconds);
};

export default updateTime;

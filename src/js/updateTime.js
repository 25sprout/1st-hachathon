import { timer } from './appConfig';

const $timer = document.querySelector('.countdown-timer');

const $day = $timer.querySelector('.days > .value');
const $hour = $timer.querySelector('.hours > .value');
const $minute = $timer.querySelector('.minutes > .value');
const $second = $timer.querySelector('.seconds > .value');

const formatNumber = (number) => number < 10 ? `0${number}` : number;

const updateTime = (timeObject) => {
	if (timeObject.days !== timer.days) {
		timer.days = timeObject.days;
		$day.innerText = formatNumber(timeObject.days);
	}

	if (timeObject.hours !== timer.hours) {
		timer.hours = timeObject.hours;
		$hour.innerText = formatNumber(timeObject.hours);
	}

	if (timeObject.minutes !== timer.minutes) {
		timer.minutes = timeObject.minutes;
		$minute.innerText = formatNumber(timeObject.minutes);
	}

	/**
	 * second always changes
	 */
	$second.innerText = formatNumber(timeObject.seconds);
};

export default updateTime;

const formatNumber = (number) => number < 10 ? `0${number}` : number;

const updateTime = (time) => {
	const timeSelector = document.querySelector('.countdown-timer');

	timeSelector.querySelector('.days > .value').innerText = formatNumber(time.days);
	timeSelector.querySelector('.hours > .value').innerText = formatNumber(time.hours);
	timeSelector.querySelector('.minutes > .value').innerText = formatNumber(time.minutes);
	timeSelector.querySelector('.seconds > .value').innerText = formatNumber(time.seconds);
};

export default updateTime;

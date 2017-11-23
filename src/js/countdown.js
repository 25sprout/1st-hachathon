import { startTiming } from './appConfig';

const countdown = () => {
	/**
	 * current time (in seconds)
	 */
	const nowTimeSeconds = parseInt(new Date().getTime() / 1000, 10);

	let timeDistance = (startTiming.getTime() / 1000) - nowTimeSeconds;

	const leftDays = Math.floor(timeDistance / 60 / 60 / 24);
	timeDistance -= leftDays * 24 * 60 * 60;

	const leftHours = Math.floor(timeDistance / 60 / 60);
	timeDistance -= leftHours * 60 * 60;

	const leftMinutes = Math.floor(timeDistance / 60);
	timeDistance -= leftMinutes * 60;

	return {
		days: leftDays,
		hours: leftHours,
		minutes: leftMinutes,
		seconds: timeDistance,
	};
};

export default countdown;

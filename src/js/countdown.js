import { startTiming, deadlineTiming } from './appConfig';

/**
 * calculate the left time before beginning / ending of hachathon
 */
const beforeTiming = (now, timing) => {
	let timeDistance = timing - now;

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

const countdown = () => {
	/**
	 * current time (in seconds)
	 */
	const nowTimeSeconds = parseInt(new Date().getTime() / 1000, 10);
	const startTimeSeconds = startTiming.getTime() / 1000;

	if (nowTimeSeconds < startTimeSeconds) {
		return beforeTiming(nowTimeSeconds, startTimeSeconds);
	}

	const deadTimeSeconds = deadlineTiming.getTime() / 1000;

	if (nowTimeSeconds < deadTimeSeconds) {
		return beforeTiming(nowTimeSeconds, deadTimeSeconds);
	}

	return false;
};

export default countdown;

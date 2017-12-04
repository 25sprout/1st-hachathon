const $teamWrapper = document.querySelector('.team-wrapper');

/**
 * return a team randomly
 */
const randomTeam = () => $teamWrapper.childNodes[
	Math.floor($teamWrapper.childElementCount * Math.random())
];

const appendImageToTeam = (image, className = '') => {
	/**
	 * create an image tag
	 */
	const imgTag = document.createElement('img');
	imgTag.setAttribute('src', image);
	imgTag.classList.add(className);

	const $selectedTeam = randomTeam();

	$selectedTeam.insertBefore(
		imgTag,
		$selectedTeam.querySelector('.description'),
	);
};

export default appendImageToTeam;

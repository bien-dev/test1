function toggle(id) {
	const dropDown = document.getElementById(id);
	dropDown.classList.toggle('none');

	document.body.addEventListener(
		'click',
		() => {
			if (!dropDown.classList.contains('none')) {
				dropDown.classList.add('none');
			}
		},
		true
	);
}

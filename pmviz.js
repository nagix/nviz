document.head.insertAdjacentHTML('beforeend', `<style>
	html, body, #container {
		width: 100%;
		height: 100%;
		margin: 0;
	}
</style>`);
window.onload = () => {
	const container = document.createElement('div');
	container.id = 'container';
	document.body.appendChild(container);

	if (window.pm && window.pm.getResponse) {
		window.pm.getResponse((err, response) => {
			container.innerText = response.body;
		});
	}
};

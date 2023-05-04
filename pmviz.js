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

	if (window.pm && window.pm.getData) {
		window.pm.getData((err, value) => {
			container.innerText = JSON.stringify(value.data);
		});
	}
};

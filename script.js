const scroll = document.querySelector('.navTop');
const more = document.querySelector('.moree');
const drop = document.querySelector('.dropdown');

scroll.addEventListener('click', () => {
	document.documentElement.scrollTop = '0';
	return;
});

drop.addEventListener('mouseover', () => {
	more.style.display = 'block';
	return;
});

drop.addEventListener('mouseout', () => {
	more.style.display = 'none';
	return;
});

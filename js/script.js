const menu = document.querySelector('.header__nav')
const menuBtn = document.querySelector('.burger')
const overlay = document.querySelector('.overlay')

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
		overlay.classList.toggle('open')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('header__nav')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
			overlay.classList.remove('open')
		}
	})

	menu.querySelectorAll('.nav__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
			overlay.classList.remove('open')
		})
	})
}

// ----------------------------------------------ЗАПУСК ВИДЕО-------------------------------------------------------------------------------
const play = document.querySelector('.story__play');
const video = document.querySelector('.story__video video');

play.addEventListener('click', () => {
	video.play();
	video.setAttribute('controls', 'controls');
	play.classList.add('story__play--hidden');
})
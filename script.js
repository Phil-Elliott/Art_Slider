const left = document.querySelector('#left')
const right = document.querySelector('#right')
const pic = document.querySelector('.pic')

num = 0

left.addEventListener('click', () => {
	if (num > 1) {
		num--
		setImage()
	} else {
		num = 8
		setImage()
	}
})

right.addEventListener('click', () => {
	if (num < 8) {
		num++
		setImage()
	} else {
		num = 1
		setImage()
	}
})

function setImage() {
	url = `url(art${num}.jpg)`
	pic.style.backgroundImage = url;
}





// pic.style.backgroundImage = "url(art[num].jpg)";
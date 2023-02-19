const accordion = document.getElementsByClassName('item__dropmenu');

for (i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener('click', function () {
		this.classList.toggle('active')
	})
}

const select = document.querySelectorAll('select');
const selectArray = Array.from(select);
selectArray.map((item) => {
	item.addEventListener('change', () => changeURLLanguage(item.value));
})
const allLang = ['ua', 'en']

function changeURLLanguage(lang) {
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}

function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.substr(1);
	console.log(hash);

	if (!allLang.includes(hash)) {
		location.href = window.location.pathname + '#en';
		location.reload();
	}
	
	selectArray.map((item) => {
		item.value = hash;
	})

	for (let key in langArr) {
		let elem = document.querySelector('.lng-' + key);
		if (elem) {
			elem.innerHTML = langArr[key][hash];
		}
	}
}
changeLanguage();
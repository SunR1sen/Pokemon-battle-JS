const $btn = document.getElementById('btn-kick');
const $clawBtn = document.getElementById('btn-claw');

const character = {
	name: 'Pikachu',
	defaultHP: 100,
	damageHP: 100,
	elHP: document.getElementById('health-character'),
	progressHP: document.getElementById('progressbar-character'),
	renderHP: renderHP,
	changeHP: changeHP,
	renderHPLife: renderHPLife,
	renderProgressBar: renderProgressBar,
}

const enemy = {
	name: 'Charmander',
	defaultHP: 100,
	damageHP: 100,
	elHP: document.getElementById('health-enemy'),
	progressHP: document.getElementById('progressbar-enemy'),
	renderHP: renderHP,
	changeHP: changeHP,
	renderHPLife: renderHPLife,
	renderProgressBar: renderProgressBar,
}

$btn.addEventListener('click', () => {
	character.changeHP(random(20))
	enemy.changeHP(random(20))
})

$clawBtn.addEventListener('click', () => {
	enemy.changeHP(random(20))
})

function init() {
	console.log('Start game!');
	character.renderHP();
	enemy.renderHP();
}



function renderHPLife() {
	this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressBar() {
	this.progressHP.style.width = this.damageHP / this.defaultHP * 100 + '%';
}

function renderHP() {
	this.renderHPLife();
	this.renderProgressBar();
}

function writeLog(log) {
	const div = document.querySelector('#logs');
	let p = document.createElement('p');
	p.innerText = log;
	div.insertBefore(p, div.children[0]);
}

function changeHP(count) {
	const {name, damageHP, defaultHP} = this;
	const log = this === enemy ? generateLog(this, character, count, damageHP, defaultHP) : generateLog(this, enemy, count, damageHP, defaultHP);
	console.log(log);
	writeLog(log);

	this.damageHP -= count;

	if (this.damageHP <= 0) {
		this.damageHP = 0;
		alert('Бедный ' + name + ' проиграл!')
		$btn.disabled = true;
		$clawBtn.disabled = true;
	}

	this.renderHP();
}


function random(max) {
	return Math.ceil(Math.random() * max);
}

function generateLog(firstPerson, secondPerson, count, damageHP, defaultHP) {
	if ( damageHP - count <= 0 ) {
		damageHP = 0;
	} else {
		damageHP -= count;
	}



	const logs = [
		`${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. ${count} [${damageHP}/${defaultHP}]`,
		`${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. ${count} [${damageHP}/${defaultHP}]`,
		`${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. ${count} [${damageHP}/${defaultHP}]`,
		`${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. ${count} [${damageHP}/${defaultHP}]`,
		`${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${count} [${damageHP}/${defaultHP}]`,
		`${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. ${count} [${damageHP}/${defaultHP}]`,
		`${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. ${count} [${damageHP}/${defaultHP}]`,
		`${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. ${count} [${damageHP}/${defaultHP}]`,
		`${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. ${count} [${damageHP}/${defaultHP}]`,
		`${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. ${count} [${damageHP}/${defaultHP}]`
	];

	return logs[random(logs.length - 1)];


}

init();





















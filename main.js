const $btn = document.getElementById('btn-kick');
const $clawBtn = document.getElementById('btn-claw');
const btnKickLeft = document.querySelector('#btn-kick-left');
const btnClawLeft = document.querySelector('#btn-claw-left');

let counterLeftKick = makeLeftCounter(8, btnKickLeft);
let counterLeftClaw = makeLeftCounter(6, btnClawLeft);

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
	if (counterLeftKick() === 0) $btn.disabled = true;
	character.changeHP(random(5, 10))
	enemy.changeHP(random(5, 10))

})

$clawBtn.addEventListener('click', () => {
	if (counterLeftClaw() === 0) $clawBtn.disabled = true;
	enemy.changeHP(random(5, 10))
});



function makeLeftCounter(count = 6, el) {
	el.innerText = count;
  return function () {
		el.innerText = --count;
		// count--;
    return count;
  };
}

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
	const {name} = this;
	const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
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




function random(min, max) {
	let num = max - min;
	return Math.ceil((Math.random() * num) + min);
}

function generateLog(firstPerson, secondPerson, count) {
	

	const logs = [
		`${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. ${count} [${firstPerson.damageHP - count}/${firstPerson.defaultHP}]`,
		`${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. ${count} [${firstPerson.damageHP - count}/${firstPerson.defaultHP}]`,
		`${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. ${count} [${firstPerson.damageHP - count}/${firstPerson.defaultHP}]`,
		`${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. ${count} [${firstPerson.damageHP - count}/${firstPerson.defaultHP}]`,
		`${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${count} [${firstPerson.damageHP - count}/${firstPerson.defaultHP}]`,
		`${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. ${count} [${firstPerson.damageHP - count}/${firstPerson.defaultHP}]`,
		`${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. ${count} [${firstPerson.damageHP - count}/${firstPerson.defaultHP}]`,
		`${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. ${count} [${firstPerson.damageHP - count}/${firstPerson.defaultHP}]`,
		`${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. ${count} [${firstPerson.damageHP - count}/${firstPerson.defaultHP}]`,
		`${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. ${count} [${firstPerson.damageHP - count}/${firstPerson.defaultHP}]`
	];

	return logs[random(0,logs.length - 1)];


}

init();





















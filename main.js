import Pokemon from './pokemon.js';
import { random, makeLeftCounter, writeLog, generateLog } from './utils.js';

const player1 = new Pokemon({
	name: 'Pikachu',
	hp: 500,
	type: 'electric',
	selectors: 'character',
});

const player2 = new Pokemon({
	name: 'Charmander',
	hp: 450,
	type: 'fire',
	selectors: 'enemy',
});

const $btn = document.querySelector('#btn-kick');
const $clawBtn = document.querySelector('#btn-claw');
const btnKickLeft = document.querySelector('#btn-kick-left');
const btnClawLeft = document.querySelector('#btn-claw-left');
const counterLeftKick = makeLeftCounter(15, btnKickLeft);
const counterLeftClaw = makeLeftCounter(10, btnClawLeft);

$btn.addEventListener('click', () => {
	if (counterLeftKick() === 0) $btn.disabled = true;
	player1.changeHP(random(20, 100), function(count) {
		writeLog(generateLog(player1, player2, count));
	});
	player2.changeHP(random(20, 30), function(count) {
		writeLog(generateLog(player2, player1, count));
	});

	if (player1.hp.current <= 0 || player2.hp.current <= 0) {
		$btn.disabled = true;
		$clawBtn.disabled = true;
	}
});

$clawBtn.addEventListener('click', () => {
	if (counterLeftClaw() === 0) $clawBtn.disabled = true;
	player2.changeHP(random(100, 150), function(count) {
		writeLog(generateLog(player2, player1, count));
	})

	if (player2.hp.current <= 0) {
		$btn.disabled = true;
		$clawBtn.disabled = true;
	}
});

function init() {
	console.log('Start game!');
}

init();





















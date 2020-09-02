import Pokemon from './pokemon.js';
import { random, makeLeftCounter, writeLog, generateLog } from './utils.js';
import { pokemons } from './pokemons.js';


let pokemon1 = pokemons[random(0, pokemons.length - 1)];
let pokemon2 = pokemons[random(0, pokemons.length - 1)];


const player1 = new Pokemon({
	...pokemon1,
	selectors: 'player1',
});

const player2 = new Pokemon({
	...pokemon2,
	selectors: 'player2',
});



const $control = document.querySelector('.control');
const allButtons = document.querySelectorAll('.control .button');

player1.attacks.forEach( item => {
	const $btn = document.createElement('button');
	$btn.classList.add('button');
	$btn.innerText = item.name;
	$control.appendChild($btn);

	const btnCount = makeLeftCounter(item.maxCount, $btn)

	$btn.addEventListener('click', () => {
		btnCount();
		let myDamage = random(item.minDamage, item.maxDamage);
		let enemyDamage = random(player2.attacks[0].minDamage, player2.attacks[0].maxDamage);
		player2.changeHP(myDamage);
		writeLog(generateLog(player2, player1, myDamage));
		player1.changeHP(enemyDamage);
		writeLog(generateLog(player1, player2, enemyDamage));
	});

})


function init() {
	console.log('Start game!');
}

init();





















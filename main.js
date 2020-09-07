import Pokemon from './pokemon.js';
import { random, makeLeftCounter, writeLog, generateLog, endGame } from './utils.js';
// import { pokemons } from './pokemons.js';




class Game {
	getPokemons = async () => {
		const response = await fetch('https://reactmarathon-api.netlify.app/api/pokemons');
		const body = await response.json();
		return body;
	}

	begin = () => {
		const btn = document.createElement('button');
		btn.classList.add('button');
		btn.innerText = 'Начать игру';
		document.querySelector('.control').appendChild(btn);
		btn.addEventListener('click', () => {
			this.start();
			btn.remove();
		})
	}

	getDamage = async (player1ID, attackID, player2ID) => {
		const response = fetch(`https://reactmarathon-api.netlify.app/api/fight?player1id=${player1ID}&attackId=${attackID}&player2id=1`);
		const damage = (await response).json();
		return damage;
	}

	start = async () => {
		const pokemons = await this.getPokemons();

		let pokemon1 = pokemons[random(pokemons.length - 1)];
		let pokemon2 = pokemons[random(pokemons.length - 1)];

		let player1 = new Pokemon({
			...pokemon1,
			selectors: 'player1',
		});

		let player2 = new Pokemon({
			...pokemon2,
			selectors: 'player2',
		});

		const $control = document.querySelector('.control');

		player1.attacks.forEach(item => {
			const $btn = document.createElement('button');
			$btn.classList.add('button');
			$btn.innerText = item.name;
			$control.appendChild($btn);

			const btnCount = makeLeftCounter(item.maxCount, $btn)

			$btn.addEventListener('click', async () => {
				let damage = await this.getDamage(pokemon1.id, item.id, pokemon2.id);
				console.log(damage);
				
				btnCount();
				let myDamage = damage.kick.plyaer1;
				let enemyDamage = damage.kick.player2;
				player2.changeHP(myDamage);
				writeLog(generateLog(player2, player1, myDamage));
				player1.changeHP(enemyDamage);
				writeLog(generateLog(player1, player2, enemyDamage));

				if (player2.hp.current <= 0) {
					pokemon2 = pokemons[random(pokemons.length - 1)];
					player2 = new Pokemon({
						...pokemon2,
						selectors: 'player2',
					});
				}

				endGame(player1, $control);

			});
		})
	}
}

const game = new Game();
game.begin();






// function spawnEnemy(player2) {
// 	if (player2.hp.current <= 0) {
// 		pokemon2 = pokemons[random(0, pokemons.length - 1)];
// 		player2 = new Pokemon({
// 			...pokemon2,
// 			selectors: 'player2',
// 		});
// 	}
// }


function init() {
	console.log('Start game!');
}

init();





















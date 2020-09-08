import Pokemon from './pokemon.js';
import { random, makeLeftCounter, writeLog, generateLog } from './utils.js';




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
		const response = fetch(`https://reactmarathon-api.netlify.app/api/fight?player1id=${player1ID}&attackId=${attackID}&player2id=${player2ID}`);
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
				
				btnCount();
				let myDamage = damage.kick.player1;
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

				this.endGame(player1, $control);

			});
		})
	}

	endGame = (player1, $control) => {
		if (player1.hp.current <= 0) {
			const allButtons = document.querySelectorAll('.control .button');
			allButtons.forEach( item => item.remove());
	
			let restartBtn = document.createElement('button');
			restartBtn.classList.add('button');
			restartBtn.innerText = 'Restart?';
			$control.appendChild(restartBtn);
			restartBtn.addEventListener('click', () => {
				this.start();
				restartBtn.remove();
			})
		}
	}
}

const game = new Game();
game.begin();



function init() {
	console.log('Start game!');
}

init();





















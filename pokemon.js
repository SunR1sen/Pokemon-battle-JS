class Selectors {
	constructor(name) {
		this.elHP = document.getElementById(`health-${name}`);
		this.elProgressBar = document.getElementById(`progressbar-${name}`);
		this.charName = document.getElementById(`name-${name}`);
		this.charImg = document.getElementById(`img-${name}`);
		this.lvl = document.querySelector('#myLvl');
	}

}

class Pokemon extends Selectors {
	constructor({ name, hp, type, selectors, attacks = [], img }) {
		super(selectors);

		this.name = name;
		this.hp = {
			current: hp,
			total: hp,
		};
		this.type = type;
		this.attacks = attacks;
		this.img = img;

		this.renderHP();
		this.renderPokemon();
	}

	renderPokemon = () => {
		this.charName.innerText = this.name;
		this.charImg.src = this.img;
	}


	renderHPLife = () => {
		const { elHP, hp: { current, total } } = this;

		elHP.innerText = current + ' / ' + total;
	}

	renderProgressBar = () => {
		const { elProgressBar, hp: { current, total } } = this;

		elProgressBar.style.width = current / total * 100 + '%';
	}

	renderHP = () => {
		this.renderHPLife();
		this.renderProgressBar();
		
		if (this.hp.current > 60) {
			this.elProgressBar.classList.remove('low');
			this.elProgressBar.classList.remove('critical');
		}	else if (this.hp.current <= 60 && this.hp.current >= 20) {
			this.elProgressBar.classList.add('low');
		} else if (this.hp.current < 20) {
			this.elProgressBar.classList.remove('low');
			this.elProgressBar.classList.add('critical');
		} 
	}

	changeHP = (count, cb) => {
		this.hp.current -= count;
		

		if (this.hp.current <= 0) {
			this.hp.current = 0;
			alert(`${this.name} проиграл!`)
		}

		this.renderHP();
		cb && cb(count);
	}

}

export default Pokemon;
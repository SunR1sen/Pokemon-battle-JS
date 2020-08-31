class Selectors {
	constructor(name) {
		this.elHP = document.getElementById(`health-${name}`);
		this.elProgressBar = document.getElementById(`progressbar-${name}`);
	}
}

class Pokemon extends Selectors {
	constructor({ name, hp, type, selectors}) {
		super(selectors);

		this.name = name;
		this.hp = {
			current: hp,
			total: hp,
		};
		this.type = type;

		this.renderHP();
	}

	renderHPLife = () => {
		const { elHP, hp:{ current, total } } = this;

		elHP.innerText = current + ' / ' + total;
	}
	
	renderProgressBar = () => {
		const { elProgressBar, hp:{ current, total } } = this;

		elProgressBar.style.width = current / total * 100 + '%';
	}
	
	renderHP = () => {
		this.renderHPLife();
		this.renderProgressBar();
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
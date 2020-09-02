export function random(min, max) {
	let num = max - min;
	return Math.ceil((Math.random() * num) + min);
}

export function makeLeftCounter(count = 6, el) {
	let inner = el.innerText;
	el.innerText = `${inner} (${count})`;
  return function () {
		count--;
		if (count == 0) {
			el.disabled = true;
		}
		el.innerText =`${inner} (${count})`;
    return count;
  };
}

export function writeLog(log) {
	const div = document.querySelector('#logs');
	let p = document.createElement('p');
	p.innerText = log;
	div.insertBefore(p, div.children[0]);
}

export function generateLog(firstPerson, secondPerson, count) {

	const logs = [
		`${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. ${count} [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
		`${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. ${count} [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
		`${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. ${count} [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
		`${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. ${count} [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
		`${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${count} [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
		`${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. ${count} [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
		`${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. ${count} [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
		`${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. ${count} [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
		`${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. ${count} [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
		`${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. ${count} [${firstPerson.hp.current}/${firstPerson.hp.total}]`
	];

	return logs[random(0,logs.length - 1)];
}



const $btn = document.getElementById('btn-kick');
const $clawBtn = document.getElementById('btn-claw');

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-character'),
  progressHP: document.getElementById('progressbar-character'),
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-enemy'),
  progressHP: document.getElementById('progressbar-enemy'),
}

$btn.addEventListener('click', () => {
  changeHP(random(20), character)
  changeHP(random(20), enemy)
})

$clawBtn.addEventListener('click', () => {
  changeHP(random(20), enemy)
})

function init() {
  console.log('Start game!');
  renderHP(character);
  renderHP(enemy);
}



function renderHPLife(person) {
  person.elHP.innerText = person.damageHP + ' / ' + character.defaultHP;
}

function renderProgressBar(person) {
  person.progressHP.style.width = person.damageHP + '%';
}

function renderHP(person) {
  renderHPLife(person);
  renderProgressBar(person);
}

function changeHP(count, person) {
  if ( person.damageHP < count ) {
    person.damageHP = 0;
    alert('Бедный ' + person.name + ' проиграл!')
    $btn.disabled = true;
    $clawBtn.disabled = true;
  } else {
    person.damageHP -= count;
  }
  renderHP(person);
}

function attack(count, person) {

}

function random(max) {
  return Math.ceil(Math.random() * max);
}

init();



















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
  this.progressHP.style.width = this.damageHP + '%';
}

function renderHP() {
  this.renderHPLife();
  this.renderProgressBar();
}

function changeHP(count) {
  if ( this.damageHP < count ) {
    this.damageHP = 0;
    alert('Бедный ' + this.name + ' проиграл!')
    $btn.disabled = true;
    $clawBtn.disabled = true;
  } else {
    this.damageHP -= count;
  }
  this.renderHP();
}


function random(max) {
  return Math.ceil(Math.random() * max);
}

init();



















const character = {
  name: "Invisible Forest Entity",
  class: "Forest Creature",
  level: 1,
  health: 100,
  attacked() {
    this.health = Math.max(0, this.health - 20);
    return this.health === 0 ? "invisible forest entity died" : `${this.name} takes damage.`;
  },
  levelUp() {
    this.level += 1;
    return `${this.name} leveled up!`;
  }
};

const nameElement = document.querySelector("#characterName");
const classElement = document.querySelector("#characterClass");
const levelElement = document.querySelector("#characterLevel");
const healthElement = document.querySelector("#characterHealth");
const statusElement = document.querySelector("#statusMessage");
const attackButton = document.querySelector("#attackBtn");
const levelUpButton = document.querySelector("#levelUpBtn");

function renderCharacter() {
  nameElement.textContent = character.name;
  classElement.textContent = character.class;
  levelElement.textContent = character.level;
  healthElement.textContent = character.health;
  attackButton.disabled = character.health === 0;
}

attackButton.addEventListener("click", function () {
  const message = character.attacked();
  renderCharacter();
  statusElement.textContent = message;

  if (character.health === 0) {
    requestAnimationFrame(() => {
      alert(message);
    });
  }
});

levelUpButton.addEventListener("click", function () {
  const message = character.levelUp();
  statusElement.textContent = message;
  renderCharacter();
});

renderCharacter();

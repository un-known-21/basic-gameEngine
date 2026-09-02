/* --------------------
 [ Monster Database ] |
-------------------- */

const monsters = {
  slime : {
    type: "slime",

    sx:0,
    sy:0,

    x: 8,
    y: 8,

    width: 32,
    height: 32,

    level: 1,
    hp: 30,
    maxHp: 30,
    attack: 3,
    defense: 0,
    speed: 500,

    aggroRange: 4,
    attackRange: 1,
    attackCooldown: 1000,

    expReward: 5,
    goldReward: 3,

    alive: true
  },

};

const mapMonsters = {
  store : [],
  town: [
    monsters.slime
  ],
  path: []
};


/* ----------------------
 [ Monster Interaction] |
---------------------- */

let lastMonsterMove = 0;
let lastMonsterAttack = 0;

let monsterTarget = null;
let combatTarget = null;

const combatState = {

  active: false

};

function findMonster() {

  const dx =
  Math.abs(player.x - monsters.slime.x);

  const dy =
  Math.abs(player.y - monsters.slime.y);

  return dx + dy === 1;
}

function updateMonster() {

  if(!monsters.slime.alive) {
    return;
  }

  const now = Date.now();

  if(
    now - lastMonsterMove <
    monsters.slime.speed
  ) {
    return;
  }

  lastMonsterMove = now;

  const dx =
  player.x - monsters.slime.x;

  const dy =
  player.y - monsters.slime.y;

  const distance =
  Math.abs(dx) + Math.abs(dy);

  if(distance <= monsters.slime.attackRange) {

    const now = Date.now();

    if(
      now - lastMonsterAttack >=
      monsters.slime.attackCooldown
    ) {

      lastMonsterAttack = now;

      player.hp -= monsters.slime.attack;
      console.log("Slime attacked!", player.hp);

      if(player.hp < 0) {
        player.hp = 0;

        console.log("You Died!")
      }
      
    }

    return;
  }

  if(distance > monsters.slime.aggroRange) {
    return;
  }

  if(Math.abs(dx) > Math.abs(dy)) {

    if(dx > 0) {
      monsters.slime.x++;
    } else {
      monsters.slime.x--;
    }

  } else {

    if(dy > 0) {
      monsters.slime.y++;
    } else {
      monsters.slime.y--;
    }

  }

}

/* ---------------------------
 [ Monster OverHead Display] |
--------------------------- */

function drawCombatUI() {

  const offsetX =
  (canvas.width - map[0].length * TILE) / 2;

  const offsetY =
  (canvas.height - map.length * TILE) / 2;

  const monsterScreenX =
  combatTarget.x * TILE + offsetX;

  const monsterScreenY =
  combatTarget.y * TILE + offsetY;

  ctx.fillStyle = "rgba(0,0,0,0.9)";

  ctx.fillRect(
    monsterScreenX - 20,
    monsterScreenY - 12,
    40,
    10
  );

  const hpPercent =
  combatTarget.hp /
  combatTarget.maxHp;

  ctx.fillStyle = "white";

  ctx.font = "8px monospace";

  ctx.fillText(
    "Lv." + combatTarget.level,
    monsterScreenX - 1,
    monsterScreenY - 5
  );
  
  
  ctx.fillStyle = "red";

  ctx.fillRect(
    monsterScreenX - 20,
    monsterScreenY - 4,
    40 * hpPercent,
    4
  );

  ctx.strokeStyle = "black";

  ctx.strokeRect(
    monsterScreenX - 20,
    monsterScreenY - 4,
    40,
    4
  );
}
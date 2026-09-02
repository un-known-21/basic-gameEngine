/* ----------------------
 [ Player Information ] |
---------------------- */

const player = {
  // Position
  x: 12,
  y: 14,

  dir: "down",
  frame: 0,

  // Currency
  gold: 1000,

  // Stats
  level: 1,

  hp: 100,
  maxHp: 100,

  exp: 0,
  maxExp: 100,

  attack: 5,
  defense: 5,

  // Inventory
  inventory: [],

  // Equipment
  weapon: null,
  armor: null
};

let lastPlayerAttack = 0;

/* --------------
  [ Inventory ] | 
-------------- */

const inventoryMenu = {

  active: false,

  selected: 0

};

function drawInventoryMenu() {
  const itemCounts = {};
  
  for(const item of player.inventory) {

    if(itemCounts[item.name]) {

      itemCounts[item.name]++;

    } else {

      itemCounts[item.name] = 1;

    }
  }

  const inventoryItems = Object.entries(itemCounts);

  ctx.fillStyle =
  "rgba(0,0,0,0.9)";

  ctx.fillRect(
    20,
    20,
    215,
    150
  );

  ctx.strokeStyle = "white";

  ctx.strokeRect(
    20,
    20,
    215,
    150
  );

  ctx.fillStyle = "white";

  ctx.font = "12px monospace";

  ctx.fillText(
    "Inventory",
    30,
    40
  );

  for(let i = 0; i < inventoryItems.length; i++) {
    let text = inventoryItems[i][0] + " (" + inventoryItems[i][1] + ")";

    if(i === inventoryMenu.selected) {
      text = "> " + text;
    };
    
    ctx.fillText(
      text,
      30,
      65 + i * 20
    );

  }
}

/* ----------------
 [ Player Stats ] |
---------------- */

const statsMenu = {

  active: false

};

function drawStatsMenu() {

  ctx.fillStyle =
  "rgba(0,0,0,0.9)";

  ctx.fillRect(
    20,
    20,
    215,
    150
  );

  ctx.strokeStyle =
  "white";

  ctx.strokeRect(
    20,
    20,
    215,
    150
  );

  ctx.fillStyle =
  "white";

  ctx.font =
  "12px monospace";

  ctx.fillText(
    "Character",
    30,
    40
  );

  ctx.fillText(
    "Level: " + player.level,
    30,
    65
  );

  ctx.fillText(
    "HP: " +
    player.hp +
    "/" +
    player.maxHp,
    30,
    85
  );

  ctx.fillText(
    "EXP: " +
    player.exp +
    "/" +
    player.maxExp,
    30,
    105
  );

  ctx.fillText(
    "Attack: " +
    player.attack,
    30,
    125
  );

  ctx.fillText(
    "Defense: " +
    player.defense,
    30,
    145
  );
}

/* ---------------------------
 [ Player OverHead Display ] |
--------------------------- */

function drawPlayerUI() {

  const hpPercent =
  player.hp / player.maxHp;

  ctx.fillStyle = "rgba(0,0,0,0.8)";

  ctx.fillRect(
    10,
    10,
    120,
    35
  );

  ctx.fillStyle = "white";
  ctx.font = "10px monospace";

  ctx.fillText(
    "Lv." + player.level,
    15,
    22
  );

  ctx.fillStyle = "red";

  ctx.fillRect(
    15,
    28,
    100 * hpPercent,
    8
  );
  

  ctx.strokeStyle = "black";

  ctx.strokeRect(
    15,
    28,
    100,
    8
  );

  ctx.fillStyle = "white";

  ctx.fillText(
    player.hp + "/" + player.maxHp,
    45,
    25
  );
}

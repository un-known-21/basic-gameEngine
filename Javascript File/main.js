const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const TILE = 16;

/* --------------
 [ Asset Files ] |
--------------- */

const playerImg = new Image();
playerImg.src = "Assets/Player_Image.png";

const tileset = new Image();
tileset.src = "Assets/Coloured_Tileset.png";
 
const shopImg = new Image();
shopImg.src = "Assets/Shop.png";

const treeImg = new Image();
treeImg.src = "Assets/oak_tree.png";

const signImg = new Image();
signImg.src = "Assets/sign_board.png";

const furnitureImg = new Image();
furnitureImg.src = "Assets/furniture.png";

const shopkeeperImg = new Image();
shopkeeperImg.src = "Assets/shopkeeper.png";

const weaponImg = new Image();
weaponImg.src = "Assets/weapons.png";

const monsterImg = new Image();
monsterImg.src = "Assets/monsters.png";

/* ----------------
  [ Load System ] |
---------------- */

let loaded = 0;
function checkLoad() {
  loaded++;
  if (loaded === 2) draw();
}

tileset.onload = checkLoad;
playerImg.onload = checkLoad;


/* --------------
  [ Game Loop ] |
-------------- */

function gameLoop() {

  draw();

  requestAnimationFrame(gameLoop);

};

/* --------------------
  [ Dialogue System ] |
-------------------- */

let message = "";
let dialogueIndex = 0;
const dialogueBox = {
  active: false,
  text: "",
  portrait: null
};

function showDialogue(text, portrait = null) {

  dialogueBox.active = true;

  dialogueBox.text = text;

  dialogueBox.portrait = portrait;

  draw();

  setTimeout(() => {

    dialogueBox.active = false;

    gameLoop();

  }, 2500);
}

/* -------------------------
  [ DialogueBox Rendering] |
------------------------- */

function drawDialogueBox() {

  // background
  ctx.fillStyle = "rgba(0,0,0,0.8)";

   ctx.fillRect(
      1,  // Background-box left(increase) & right(Decrease) direction
      canvas.height - 51,
      canvas.width - 2,
      50
   );

   // border
   ctx.strokeStyle = "white";

   ctx.strokeRect(
      1,
      canvas.height - 51,
      canvas.width - 2,
      50
   );

   // text
   ctx.fillStyle = "white";
   ctx.font = "15px comic sans ms";

   ctx.fillText(
      dialogueBox.text,
      5,
      canvas.height - 32
   );

   // portrait
   if(dialogueBox.portrait) {
      ctx.drawImage(
         dialogueBox.portrait,
         canvas.width - 80,
         canvas.height - 80,
         80,
         80
      );
   }
}

/* ----------------------
 [ Interaction System ] |
---------------------- */

let interactTarget = null;
function findInteractable() {

  interactTarget = null;

  const objects = mapObjects[currentMap] || [];

  objects.forEach(obj => {

    if(obj.type !== "shopkeeper") return;

    const dx = Math.abs(player.x - obj.x);
    const dy = Math.abs(player.y - obj.y);

    if(dx <= 1 && dy <= 4) {
      interactTarget = obj;
    }

  });

}

/* --------------
  [ Collision ] |
--------------- */

function objectCollision(newX, newY) {

  const objects = mapObjects[currentMap] || [];

  const playerPixelX = newX * TILE;
  const playerPixelY = newY * TILE;

  for(const obj of objects) {

    if(!obj.collision) continue;

    const colX = obj.x * TILE + obj.collision.x;
    const colY = obj.y * TILE + obj.collision.y;

    if(
      playerPixelX < colX + obj.collision.width &&
      playerPixelX + TILE > colX &&
      playerPixelY < colY + obj.collision.height &&
      playerPixelY + TILE > colY
    ) {
      return true;
    }
  }

  return false;
}

/* ------------------
  [ Draw Function ] |
------------------ */

function draw() {
  const offsetX = (canvas.width - map[0].length * TILE) / 2;
  const offsetY = (canvas.height - map.length * TILE) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // MAP
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      drawTile(map[y][x], x + offsetX / TILE, y + offsetY / TILE);
    }
  }

  drawObjects(offsetX, offsetY);

  // PLAYER SPRITE
  let sx = 0;
  let sy = 0;

  if (player.dir === "down") { sx = 0; sy = 0; }
  if (player.dir === "left") { sx = 16; sy = 0; }
  if (player.dir === "right") { sx = 0; sy = 0; }
  if (player.dir === "up") { sx = 0; sy = 0; }

  ctx.drawImage(
  playerImg,
  sx, sy, 16, 16,
  player.x * TILE + offsetX,
  player.y * TILE + offsetY,
  TILE,
  TILE
  );

  if(player.weapon) {

    ctx.drawImage(
      weaponImg,

      player.weapon.sx,
      player.weapon.sy,

      16,
      16,

      player.x * TILE + offsetX + 4,
      player.y * TILE + offsetY - 2,

      16,
      16
    );

  }
  
  updateMonster();

  if(monsters.slime.alive) {
    ctx.drawImage(
    monsterImg,

    monsters.slime.sx,
    monsters.slime.sy,

    16,
    16,

    monsters.slime.x * TILE + offsetX,
    monsters.slime.y * TILE + offsetY,

    16,
    16
    );
    
    if(combatState.active && combatTarget) {

      drawCombatUI();
    }

    if(combatTarget && combatTarget.hp <= 0) {

      combatTarget.alive = false;

      combatState.active = false;

      player.exp += monsters.slime.expReward;
      player.gold += monsters.slime.goldReward;

      showDialogue(
        combatTarget.type +
        " defeated! +" +
        monsters.slime.expReward +
        " EXP"
      );

    }
  }
  
  if(player.exp >= player.maxExp) {

    player.level++;

    player.exp -= player.maxExp;

    player.maxExp += 50;

    player.maxHp += 10;

    player.hp =
    player.maxHp;

    player.attack += 1;

    player.defense += 1;

    showDialogue(
      "Level Up! Lv." +
      player.level
    );

  }

  drawFrontObjects(offsetX, offsetY);
  findInteractable();

  if(player.hp < player.maxHp) {
    drawPlayerUI();
  }

  // MESSAGE
  if(dialogueBox.active) {
   drawDialogueBox();
  }
  if(shopMenu.active) {
   drawShopMenu();
  }

  if(inventoryMenu.active) {
    drawInventoryMenu();
  }
  if(statsMenu.active) {
    drawStatsMenu();
  }
}

/* ---------------------------
  [ KeyDownInput Functions ] |
--------------------------- */

window.addEventListener("keydown", (e) => {
  if(e.key.toLowerCase() === "i") {

    inventoryMenu.active =
    !inventoryMenu.active;

    statsMenu.active =
    false;

    gameLoop();

    return;
  }
  if(e.key.toLowerCase() === "c") {

    statsMenu.active =
    !statsMenu.active;

    inventoryMenu.active =
    false;

    gameLoop();
    return;
  }
  
  if(inventoryMenu.active) {
    if(e.key === "ArrowDown") {

      inventoryMenu.selected++;

      if(
        inventoryMenu.selected >=
        player.inventory.length
      ) {
        inventoryMenu.selected = 0;
      }

      return;
    }

    if(e.key === "ArrowUp") {

      inventoryMenu.selected--;

      if(
        inventoryMenu.selected < 0
      ) {
        inventoryMenu.selected =
        player.inventory.length - 1;
      }

      return;
    }

    if(e.key === "Enter") {

      const selectedItem =
      player.inventory[inventoryMenu.selected];

      if(selectedItem.attack) {

        player.weapon = selectedItem;

        player.attack = 5 + selectedItem.attack;

        console.log(
          selectedItem.name + " equipped!"
        );
        
      }
      gameLoop();
      return;
    }
  }
  
  if(e.code === "Space") {

    console.log(player.weapon);
    const now = Date.now();
    
    const attackSpeed =
    player.weapon
    ? player.weapon.attackSpeed
    : 300;

    if(
      now - lastPlayerAttack <
      attackSpeed
    ){
      return;
    }

    lastPlayerAttack = now;

    const distance =
    Math.abs(player.x - monsters.slime.x) +
    Math.abs(player.y - monsters.slime.y);

    if(distance > 1) {
      return;
    }
    combatTarget = monsters.slime;
    combatState.active = true;

    if(combatState.active) {

      combatTarget.hp -= player.attack;

      if(combatTarget.hp < 0) {
        combatTarget.hp = 0;
      }

      return;
    }
  }

  if(shopMenu.active) {
    if(e.key === "Enter") {

      const choice = shopMenu.options[shopMenu.selected];

      // --- [WEAPONS] --- //
      if(choice === "Weapons") {
        shopMenu.page = "weapons";

        shopMenu.selected = 0;

        shopMenu.options = [
          "Iron Sword",
          "Steel Sword",
          "Back"
        ];

        gameLoop();

        return;

      }
      if(choice === "Iron Sword") {

        if(player.gold >= 50) {
          player.gold -= 50;
          player.inventory.push(
            items.weapons[1]
          );
          console.log("You have purchased an ", items.weapons[1]);


        } else {
          console.log("not enough gold")
        }
      }
      if(choice === "Steel Sword") {

        if(player.gold >= 100) {
          player.gold -= 100;
          player.inventory.push(
            items.weapons[2]
          );
          console.log("You have purchased an ", items.weapons[2]);

        } else {
          console.log("not enough gold")
        }
      }

      // -- [POTIONS] -- //
      if(choice === "Potions") {
        shopMenu.page = "potions";
        shopMenu.selected = 0;
        shopMenu.options = [
          "Health Potion",
          "Exp Potion",
          "Back"
        ];

        gameLoop();
        return;
      } 

      if(choice === "Leave") {

        shopMenu.active = false;
        shopMenu.page = "main";
        shopMenu.selected = 0;

        gameLoop();
        return;
      }

      if(choice === "Back") {
        shopMenu.page = "main";
        shopMenu.selected = 0;
        shopMenu.options = [
          "Weapons",
          "Potions",
          "Leave"
        ];
      }

    }

    if(e.key === "ArrowUp") {

      shopMenu.selected--;

      if(shopMenu.selected < 0) {
        shopMenu.selected = shopMenu.options.length - 1;
      }

      gameLoop();
      return;
    }

    if(e.key === "ArrowDown") {

      shopMenu.selected++;

      if(shopMenu.selected >= shopMenu.options.length) {
        shopMenu.selected = 0;
      }

      gameLoop();
      return;
    }

  }

  if(e.key.toLowerCase() === "enter") {

    if(interactTarget) {
      
      showDialogue(
      interactTarget.dialogue[dialogueIndex],
      shopkeeperImg
      );
      if(interactTarget.dialogue[dialogueIndex] === "SHOP") {

        dialogueBox.active = false;
        shopMenu.active = true;
        gameLoop();

        return;

      }

    }

    if(interactTarget) {

      dialogueIndex++;

      if(dialogueIndex >= interactTarget.dialogue.length) {
        dialogueIndex = 0;
      }

    }

    return;
  }
  
  let newX = player.x;
  let newY = player.y;

  if (e.key === "ArrowUp") {
    newY--;
    player.dir = "up";
  }
  if (e.key === "ArrowDown") {
    newY++;
    player.dir = "down";
  }
  if (e.key === "ArrowLeft") {
    newX--;
    player.dir = "left";
  }
  if (e.key === "ArrowRight") {
    newX++;
    player.dir = "right";
  }

  if (map[newY] && map[newY][newX] !== undefined) {
    const tile = tileTypes[map[newY][newX]];

    if (tile.walkable && !objectCollision(newX, newY)) {
      player.x = newX;
      player.y = newY;
      findInteractable();

      if (tile.message) showDialogue(tile.message, playerImg);

      // MAP TRANSITIONS
      if (currentMap === "store" && player.x === 15 && player.y === 10) {
        loadMap("town", 0, 9);
        return;
      }

      if (currentMap === "town" && player.x === 0 && player.y === 9) {
        loadMap("store", 15, 10);
        return;
      }

      if (currentMap === "town" && player.x === 9 && player.y === 9) {
        loadMap("path", 0, 9);
        return;
      }

      if (currentMap === "path" && player.x === 0 && player.y === 9) {
        loadMap("town", 9, 9);
        return;
      }

      if (currentMap === "store" && player.x === 12 && player.y === 4) {
        loadMap("shop", 12, 15);
        return;
      }

      if (currentMap === "shop" && player.x === 12  && player.y === 15) {
        loadMap("store", 12, 4);
        return;
      }

    } else {
      showDialogue(tile.message);
    }
  }

  gameLoop();
});

// let loaded = 0;
// function checkLoad() {
//   loaded++;

//   if(loaded === 4) {
//     draw();
//   }
// }

// tileset.onload = checkLoad;
// playerImg.onload = checkLoad;
// shopImg.onload = checkLoad;
// treeImg.onload = checkLoad;
// signImg.onload = checkLoad;
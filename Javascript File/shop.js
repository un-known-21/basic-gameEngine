/* -------------
 [ Shop Items ] |
-------------- */

const items = {
  weapons: [
    {
      name: "Stick",
      price: 0,
      attack: 2,

      sx: 16,
      sy: 0,

      attackSpeed: 500
    },
    {
      name: "Iron Sword",
      price: 50,
      attack: 15,

      sx: 0,
      sy: 0,

      attackSpeed: 1000
    },
    {
      name: "Steel Sword",
      price: 100,
      attack: 25,

      sx: 32,
      sy: 0,

      attackSpeed: 800
    }
  ],
  potions: [
    {
      name: "Health Potion",
      price: 20,
      heal: 50
    },
    {
      name: "Experience Potion",
      price: 20,
      restore: 25
    }
  ]
};

/* -------------
 [ Shop Menu ] |
------------- */

const shopMenu = {

  active: false,

  selected: 0,

  page: "main",

  options: [
    "Weapons",
    "Potions",
    "Leave"
  ]

};

function drawShopMenu() {
  ctx.fillStyle = "rgba(0,0,0,0.9)";

  ctx.fillRect(
    1,
    155,
    254,
    100
  );

  ctx.strokeStyle = "white";

  ctx.strokeRect(
    1,
    155,
    254,
    100
  );

  ctx.fillStyle = "white";
  ctx.font = "12px comic sans ms";

  ctx.fillText(
    "What would you like to buy?",
    10,
    170
  );
  ctx.font = "10px monospace";

  for(let i = 0; i < shopMenu.options.length; i++) {

    let text = shopMenu.options[i];

    if(i === shopMenu.selected) {
      text = "> " + text;
    }

    ctx.fillText(
      text,
      40,
      190 + i * 20
    );

  }

}
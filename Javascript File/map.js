/* -----------------
  [ Base Tileset ] |
------------------ */

const tileTypes = {

  // '4×4' Road transition set

   0: { name: "road_upper_right_corner", walkable: true, sx: 0, sy: 0 },
   1: { name: "road_mid_left", walkable: true, sx: 16, sy: 0 },
   2: { name: "road_inner-top_right_corner_grass", walkable: true, sx: 32, sy: 0 },
   3: { name: "road_mid_upper", walkable: true, sx: 48, sy: 0 },
   4: { name: "road_diagonal(↘)", walkable: true, sx: 0, sy: 16 },
   5: { name: "road_inner-top_left_corner_grass", walkable: true, sx: 16, sy: 16 },
   6: { name: "road_full", walkable: true, sx: 32, sy: 16 },
   7: { name: "road_inner-bottom_right_corner_grass", walkable: true, sx: 48, sy: 16 },
   8: { name: "road_lower_left_corner", walkable: true, sx: 0, sy: 32 },
   9: { name: "road_mid_lower", walkable: true, sx: 16, sy: 32 },
  10: { name: "road_inner-bottom_left_corner_grass", walkable: true, sx: 32, sy: 32 },
  11: { name: "road_mid_right", walkable: true, sx: 48, sy: 32 },
  12: { name: "grass_full", walkable: true, sx: 0, sy: 48 },
  13: { name: "road_upper_left_corner", walkable: true, sx: 16, sy: 48 },
  14: { name: "road_diagonal(↙)", walkable: true, sx: 32, sy: 48 },
  15: { name: "road_lower_right_corner", walkable: true, sx: 48, sy: 48 },

  // '4x4' Water transition set

  16: { name: "water_upper_right_corner", walkable: false, sx: 64, sy: 0, message: "Not today!"},
  17: { name: "water_mid_left", walkable: true, sx: 80, sy: 0 },
  18: { name: "water_inner-top_right_corner_grass", walkable: true, sx: 96, sy: 0 },
  19: { name: "water_mid_upper", walkable: false, sx: 112, sy: 0, message: "I didn't get animated for this.." },
  20: { name: "water_diagonal(↘)", walkable: true, sx: 64, sy: 16 },
  21: { name: "water_inner-top_left_corner_grass", walkable: true, sx: 80, sy: 16 },
  22: { name: "water_full", walkable: true, sx: 96, sy: 16 },
  23: { name: "water_inner-bottom_right_corner_grass", walkable: true, sx: 112, sy: 16 },
  24: { name: "water_lower_left_corner", walkable: true, sx: 64, sy: 32 },
  25: { name: "water_mid_lower", walkable: true, sx: 80, sy: 32 },
  26: { name: "water_inner-bottom_left_corner_grass", walkable: true, sx: 96, sy: 32 },
  27: { name: "water_mid_right", walkable: false, sx: 112, sy: 32, message: "Yup! it's water🌊"},
  28: { name: "grass-variation_flowers_full", walkable: true, sx: 64, sy: 48 },
  29: { name: "water_upper_left_corner", walkable: true, sx: 80, sy: 48 },
  30: { name: "water_diagonal(↙)", walkable: true, sx: 96, sy: 48 },
  31: { name: "water_lower_right_corner", walkable: true, sx: 112, sy: 48 },
  32: { name: "water_mid_right-alternate_variation", walkable: false, sx: 128, sy: 0, message: "I can't swim." },
  33: { name: "water_mid_left-alternate_variation", walkable: true, sx: 128, sy: 16 },

  // Wooden-floor basic tileset

  34: { name: "floor_variant_1", walkable: true, sx: 144, sy: 0 },
  35: { name: "floor_variant_2", walkable: true, sx: 144, sy: 16 },
  36: { name: "floor_variant_3", walkable: true, sx: 144, sy: 32 },
  37: { name: "floor_variant_4", walkable: true, sx: 144, sy: 48 },
  38: { name: "floor_variant_5", walkable: true, sx: 144, sy: 64 },
  39: { name: "floor_variant_6", walkable: true, sx: 144, sy: 80 },
  
  // Shop-wall

  40: { name: "shop-wall_corner_left_part-1 ↑", walkable: false, sx: 160, sy: 0 },
  41: { name: "shop-wall_corner_left_part-2 ↑", walkable: false, sx: 176, sy: 0 },
  42: { name: "shop-wall_corner_left_part-3 ↓", walkable: false, sx: 160, sy: 16 },
  43: { name: "shop-wall_corner_left_part-4 ↓", walkable: false, sx: 176, sy: 16 },
  44: { name: "shop-wall_upper_mid ↑", walkable: false, sx: 192, sy: 0 },
  45: { name: "shop-wall_full", walkable: false, sx: 192, sy: 16 },
  46: { name: "shop-wall_corner_right_part-1 ↑", walkable: false, sx: 208, sy: 0 },
  47: { name: "shop-wall_corner_right_part-2 ↑", walkable: false, sx: 224, sy: 0 },
  48: { name: "shop-wall_corner_right_part-3 ↓", walkable: false, sx: 208, sy: 16 },
  49: { name: "shop-wall_corner_right_part-4 ↓", walkable: false, sx: 224, sy: 16 },
  50: { name: "shop-wall_base-corner_left_part-1 ↑", walkable: false, sx: 160, sy: 32 },
  51: { name: "shop-wall_base-corner_left_part-2 ↑", walkable: false, sx: 176, sy: 32 },
  52: { name: "shop-wall_base-corner_left_part-3 ↓", walkable: false, sx: 160, sy: 48 },
  53: { name: "shop-wall_base-corner_left_part-4 ↓", walkable: false, sx: 176, sy: 48 },
  54: { name: "shop-wall_mid_base ↑", walkable: false, sx: 192, sy: 32 },
  55: { name: "shop-wall_mid_base ↓", walkable: false, sx: 192, sy: 48 },
  56: { name: "shop-wall_base-corner_right_part-1 ↑", walkable: false, sx: 208, sy: 32 },
  57: { name: "shop-wall_base-corner_right_part-2 ↑", walkable: false, sx: 224, sy: 32 },
  58: { name: "shop-wall_base-corner_right_part-3 ↓", walkable: false, sx: 208, sy: 48 },
  59: { name: "shop-wall_base-corner_right_part-4 ↓", walkable: false, sx: 224, sy: 48 },

  // Shop Wall Corners

  60: { name: "shop-wall_side_mid_left_variant-1", walkable: false, sx: 64, sy: 64 },
  61: { name: "shop-wall_side_mid_left_variant-2", walkable: false, sx: 80, sy: 64 },
  62: { name: "shop-wall_side_mid_right_variant-2", walkable: false, sx: 96, sy: 64 },
  63: { name: "shop-wall_side_mid_right_variant-1", walkable: false, sx: 112, sy: 64 },
  64: { name: "shop-wall_side_mid_left_variant-3", walkable: false, sx: 64, sy: 80 },
  65: { name: "shop-wall_inner-bottom_left_corner", walkable: false, sx: 80, sy: 80 },
  66: { name: "shop-wall_inner-bottom_right_corner", walkable: false, sx: 96, sy: 80 },
  67: { name: "shop-wall_side_mid_right_variant-3", walkable: false, sx: 112, sy: 80 },
  68: { name: "shop-wall_side_mid_left_variant-4", walkable: false, sx: 64, sy: 96 },
  69: { name: "shop-wall_inner-top_right_corner", walkable: false, sx: 80, sy: 96 },
  70: { name: "shop-wall_inner-top_left_corner", walkable: false, sx: 96, sy: 96 },
  71: { name: "shop-wall_side_mid_right_variant-4", walkable: false, sx: 112, sy: 96 },
  72: { name: "shop-wall_lower_left_corner", walkable: false, sx: 64, sy: 112 },
  73: { name: "shop-wall_lower_mid_variant-1", walkable: false, sx: 80, sy: 112 },
  74: { name: "shop-wall_lower_mid_variant-2", walkable: false, sx: 96, sy: 112 },
  75: { name: "shop-wall_lower_right_corner", walkable: false, sx: 112, sy: 112 },
  76: { name: "shop-wall_side_mid_left_variant-5", walkable: false, sx: 128, sy: 64 },
  77: { name: "shop-wall_side_mid_left_variant-6", walkable: false, sx: 128, sy: 80 },
  78: { name: "shop-wall_side_mid_right_variant-5", walkable: false, sx: 128, sy: 96 },
  79: { name: "shop-wall_side_mid_right_variant-6", walkable: false, sx: 128, sy: 112 },

  // Blank Tile
  99: { name: "blank-screen", walkable: false, sx:0, sy: 144}

};

/* ---------------
  [ Map Matrix ] |
---------------- */

let maps = {

  store: [
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,1,6,11,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,1,6,11,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,1,6,11,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,1,6,11,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,1,6,11,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,1,6,2,3,3],
    [19,19,16,12,12,12,12,12,12,12,12,1,6,6,6,6],
    [22,22,27,12,12,12,12,12,12,12,12,8,9,9,9,9],
    [22,22,32,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [22,22,27,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [22,22,32,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [22,22,27,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [22,22,32,12,12,12,12,12,12,12,12,12,12,12,12,12],
  ],

  shop: [
    [99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],
    [99,40,41,44,44,44,44,44,44,44,44,44,44,46,47,99],
    [99,42,43,45,45,45,45,45,45,45,45,45,45,48,49,99],
    [99,50,51,54,54,54,54,54,54,54,54,54,54,56,57,99],
    [99,52,53,55,55,55,55,55,55,55,55,55,55,58,59,99],
    [99,60,34,34,34,34,34,34,34,34,34,34,34,34,63,99],
    [99,61,35,35,35,35,35,35,35,35,35,35,35,35,62,99],
    [99,64,36,36,36,36,36,36,36,36,36,36,36,36,67,99],
    [99,68,37,37,37,37,37,37,37,37,37,37,37,37,71,99],
    [99,76,38,38,38,38,38,38,38,38,38,38,38,38,78,99],
    [99,77,39,39,39,39,39,39,39,39,39,39,39,39,79,99],
    [99,61,35,35,35,35,35,35,35,35,35,35,35,35,62,99],
    [99,64,36,36,36,36,36,36,36,36,36,36,36,36,67,99],
    [99,68,37,37,37,37,37,37,37,37,37,37,37,37,71,99],
    [99,72,73,73,73,73,73,73,73,73,66,38,38,65,75,99],
    [99,99,99,99,99,99,99,99,99,99,77,39,39,79,99,99]  
  ],

  town: [
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
    [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12]
  ],

  path: [
    [12,12,12,12,1,6,11,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,1,6,11,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,1,6,11,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,1,6,11,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,1,6,11,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,1,6,11,12,12,12,12,12,12,12,12,12],
    [3,3,3,3,5,6,2,3,3,3,3,3,3,3,3,3],
    [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
    [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12]
  ]
};

let currentMap = "town";
let map = maps[currentMap];

/* ----------------
  [ Map Switch ] |
----------------*/

function loadMap(name, spawnX, spawnY) {
  currentMap = name;
  map = maps[currentMap];

  player.x = spawnX;
  player.y = spawnY;

  showDialogue("Entered " + name, playerImg);
  gameLoop();
}

/* -------------------------
  [ TileSet Draw Function ] |
------------------------- */

function drawTile(type, x, y) {

  const tile = tileTypes[type];

  ctx.drawImage(
    tileset,
    tile.sx,
    tile.sy,
    16,
    16,
    x * TILE,
    y * TILE,
    TILE,
    TILE
  );
}

/* -------------------------
  [ Map Oriented Objects ] |
------------------------- */

const mapObjects = {

  store: [

    {
      type: "shop",

      x: 5,
      y: 0,

      width: 160,
      height: 80,
      shadow: true,

      collision: {
        x: 5,
        y: 5,
        width: 144,
        height: 48
      }
    },

    {
      type: "oak-tree",

      x: 2,
      y: -2,

      width: 96,
      height: 112,
      shadow: true,

      collision: {
        x: 5,
        y: 4,
        width: 16,
        height: 16
      }
    },

    {
      type: "oak-tree",

      x: 12.5,
      y: -2,

      width: 96,
      height: 112,
      shadow: true,

      collision: {
        x: 5,
        y: 4,
        width: 16,
        height: 16
      }

    },

    {
      type: "sign-board",
      sx:0,
      sy:0,
      x:13.75,
      y:7.25,
      width: 32,
      height: 32,
      shadow: true
    },

  ],

  shop : [
    {
      type: "counter",
      sx:0,
      sy:0,
      frontLayer: true,
      x:2.5,
      y:4.5,
      width: 112,
      height: 45,
      shadow: true,

      collision: {
        x: 3,
        y: 4,
        width: 96,
        height: 22
      }
    },
    {
      type: "shopkeeper",

      x: 5,
      y: 3.5,

      width:48,
      height:48,

      dialogue: [
        "Welcome traveler!",
        "SHOP"
      ],

      shadow: true
    },

  ]
};

/* ---------------------
  [ Object Rendering ] |
--------------------- */

// Front Objects
function drawFrontObjects(offsetX, offsetY) {

  const objects = mapObjects[currentMap] || [];

  objects.forEach(obj => {

    if(!obj.frontLayer) return;

    if(obj.type === "counter") {

      ctx.drawImage(
        furnitureImg,
        obj.sx,
        obj.sy,
        144,
        64,
        obj.x * TILE + offsetX,
        obj.y * TILE + offsetY,
        obj.width,
        obj.height
      );

    }

  });

}

// Background Objects
function drawObjects(offsetX, offsetY) {

  const objects = mapObjects[currentMap] || [];

  objects.forEach(obj => {

    if(obj.frontLayer) return;
    let img;

    // OBJECT TYPE
    if(obj.type === "shop") {
      img = shopImg;
    }

    if(obj.type === "oak-tree") {
      img = treeImg;
    }
    
    if(obj.type === "sign-board") {
      img = signImg;
    }
    if(obj.type === "shopkeeper") {
      img = shopkeeperImg;
    }
    if(obj.type === "counter") {
      img = furnitureImg;
    }
  
    // -- [ Object Shadow] -- //
    if(obj.shadow) {

      ctx.save();

      // shadow transparency
      ctx.globalAlpha = 0.25;

      // move shadow
      ctx.translate(
        obj.x * TILE + offsetX - -5,
        obj.y * TILE + offsetY + 18
      );

      // angle
      // ctx.rotate(-0.3);

      // stretch shadow
      ctx.scale(1.02, 0.75);

      // darken image
      ctx.filter = "brightness(0)";

      // draw shadow copy
      ctx.drawImage(
        img,
        0,
        0,
        obj.width,
        obj.height
      );

      ctx.restore();
    }

    if(obj.type === "sign-board") {

    ctx.drawImage(
      signImg,
      obj.sx,
      obj.sy,
      32,
      32,
      obj.x * TILE + offsetX,
      obj.y * TILE + offsetY,
      obj.width,
      obj.height
    );

    }
    else if(obj.type === "counter") {

      ctx.drawImage(
        furnitureImg,
        obj.sx,
        obj.sy,
        144,
        64,
        obj.x * TILE + offsetX,
        obj.y * TILE + offsetY,
        obj.width,
        obj.height
      );

    }
    else {

      ctx.drawImage(
        img,
        obj.x * TILE + offsetX,
        obj.y * TILE + offsetY,
        obj.width,
        obj.height
      );

    }

  });

}
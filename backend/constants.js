export const CELL_TYPES = {
  LAWN: 'L',
  SAND: 'S',
  TREE: 'T',
  ROCK: 'R',
  WATER: 'W',
};

export const SOLID_WALL_TYPES = [CELL_TYPES.TREE, CELL_TYPES.ROCK];

export const NOT_WALKABLE_TYPES = [...SOLID_WALL_TYPES, CELL_TYPES.WATER];

export const EXECUTION_LIMIT = 300;

export const DIRECTIONS = {
  UP: { x: -1, y: 0 },
  DOWN: { x: 1, y: 0 },
  LEFT: { x: 0, y: -1 },
  RIGHT: { x: 0, y: 1 }
};

export const COMMAND_NAMES = {
  MOVE_UP: 'move_up',
  MOVE_DOWN: 'move_down',
  MOVE_LEFT: 'move_left',
  MOVE_RIGHT: 'move_right',

  ATTACK: 'attack',
  SWITCH: 'switch',
  FIND_NEAREST_ENEMY: 'find_nearest_enemy',
  HAS_ENEMY_AROUND: 'has_enemy_around',

  ENEMY_MOVE: 'enemy_move',
  ENEMY_ATTACK: 'enemy_attack',

  FIREBALL_UP: 'fireball_up',
  FIREBALL_DOWN: 'fireball_down',
  FIREBALL_LEFT: 'fireball_left',
  FIREBALL_RIGHT: 'fireball_right',
  HERO_ENTERED_WIZARD_ZONE: 'hero_entered_wizard_zone',
};
export type Point = {
  x: number;
  y: number;
};

export type CellType = 'L' | 'S' | 'T' | 'R' | 'W';

export type Enemy = Point & {
  alive: boolean;
  name: string;
  big?: boolean;
  moveFinish?: Point;
  hidden?: boolean;
  isWizard?: boolean;
  zone?: Point & { width: number; height: number };
};

export type Gem = Point & {
  taken?: boolean;
};

export type Lever = Point & {
  name: string;
  activatesId: string;
  enabled: boolean;
  hidden?: boolean;
};

export type Bridge = {
  id: string;
  vertical: boolean;
  start: Point;
  end: Point;
  activated: boolean;
  hidden?: boolean;
};

export type Goal = {
  type:
    | 'finish'
    | 'gems'
    | 'lines'
    | 'lever'
    | 'enemies'
    | 'big_enemy_bridge'
    | 'var bridges';
  name: string;
  required: boolean;
  heroText?: string;
  linesCount?: number;
  leverName?: string;
  enemyName?: string;
};

export type Level = {
  height: number;
  width: number;
  grid: CellType[][];
  hero: Point;
  finish: Point;
  gems: Gem[];
  enemies: Enemy[];
  goals: Goal[];
  levers: Lever[];
  bridges: Bridge[];
  onlyVariablesInAttack?: boolean;
  onlyVariablesInSwitch?: boolean;
  fireballCount?: number;
  isWhileTrue?: boolean;
  startCode?: string;
};

export type GameplayError = {
  type: string;
  name?: string;
  wallPosition?: Point;
};

export type GameplayCommandPosition = {
  line: number;
  column: number;
};

export type GameplayCommand = {
  name: string;
  start: GameplayCommandPosition;
  end: GameplayCommandPosition;
};

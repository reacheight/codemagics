import type { Point } from './types/game.js';

export const calculateCodeLines = (userCode: string) =>
  userCode
    .split(/\r\n|\r|\n/)
    .filter((s) => !s.trim().startsWith('#'))
    .filter((s) => /\S/.test(s)).length;

export const arePointsEqual = (first: Point, second: Point) =>
  first.x === second.x && first.y === second.y;

export const getDistance = (first: Point, second: Point) =>
  Math.abs(first.x - second.x) + Math.abs(first.y - second.y);

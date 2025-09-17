export const levels = {
  ['forest']: {
    [1]: {
      height: 3,
      width: 5,
      grid: [
        ["L","L","T","L","L",],
        ["S","S","S","T","T",],
        ["R","S","S","S","S",],
      ],
      hero: { x: 1, y: 0 },
      finish: { x: 2, y: 4 },
      gems: [
        { x: 1, y: 2 },
      ],
      enemies: [],
      goals: [
        { type: 'finish', name: 'Добраться до финиша', heroText: 'Помоги мне добраться до финиша', required: true },
        { type: 'gems', name: 'Подобрать алмаз', heroText: 'Было бы неплохо подобрать алмаз по пути', required: false },
      ],
      levers: [],
      bridges: [],
    },
  
    [2]: {
      height: 4,
      width: 4,
      grid: [
        ["T","S","T","L",],
        ["L","S","L","R",],
        ["L","S","S","S",],
        ["L","L","L","S",],
      ],
      hero: { x: 1, y: 2 },
      finish: { x: 3, y: 3 },
      gems: [
        { x: 1, y: 0 },
        { x: 3, y: 0 },
      ],
      enemies: [],
      goals: [
        { type: 'finish', name: 'Добраться до финиша', heroText: 'Мне нужно дойти до финиша', required: true },
        { type: 'gems', name: 'Собрать алмазы', heroText: 'Давай соберем все алмазы', required: false },
      ],
      levers: [],
      bridges: [],
    },
  
    [3]: {
      height: 5,
      width: 7,
      grid: [
        ["T","L","S","L","R","T","R",],
        ["L","L","S","L","L","L","L",],
        ["L","L","S","S","S","S","S",],
        ["W","L","R","W","W","L","L",],
        ["W","W","W","W","W","W","T",],
      ],
      hero: { x: 2, y: 0 },
      finish: { x: 2, y: 6 },
      gems: [ { x: 2, y: 3 }],
      enemies: [],
  
      goals: [
        { type: 'finish', name: 'Добраться до финиша', heroText: 'Проведи меня до финиша', required: true },
        { type: 'lines', name: 'Использовать 1 строчку кода', heroText: 'Ты должен использовать только 1 строчку кода', linesCount: 1, required: true },
        { type: 'gems', name: 'Подобрать алмаз', heroText: 'Давай подберем алмаз', required: false },
      ],
      levers: [],
      bridges: [],
    },
  
    [4]: {
      height: 5,
      width: 8,
      grid: [
        ["L","L","L","L","R","T","S","T"],
        ["S","S","S","L","R","L","S","L"],
        ["T","L","S","L","R","S","S","L"],
        ["L","T","S","S","S","S","L","L"],
        ["L","L","L","L","L","S","S","L"],
      ],
      hero: { x: 0, y: 0 },
      finish: { x: 0, y: 6 },
      gems: [
        { x: 0, y: 3 },
        { x: 4, y: 3 },
        { x: 1, y: 7 },
      ],
      enemies: [],
      goals: [
        { type: 'finish', name: 'Добраться до финиша', heroText: 'Мне нужно дойти до финиша', required: true },
        { type: 'gems', name: 'Собрать алмазы', heroText: 'Давай соберем все алмазы', required: false },
      ],
      levers: [],
      bridges: [],
    },

    [5]: {
      height: 7,
      width: 8,
      grid: [
        ["S","S","T","L","W","W","T","T"],
        ["L","S","S","L","W","W","L","L"],
        ["L","L","S","L","W","W","L","L"],
        ["L","L","S","L","S","S","S","L"],
        ["R","R","S","R","L","L","S","S"],
        ["L","S","S","L","T","L","S","R"],
        ["L","S","L","L","L","T","S","L"],
      ],
      hero: { x: 0, y: 0 },
      finish: { x: 6, y: 1 },
      gems: [
        { x: 1, y: 7 },
        { x: 6, y: 6 },
        { x: 3, y: 0 },
        { x: 6, y: 4 },
      ],
      enemies: [],
      goals: [
        { type: 'finish', name: 'Добраться до финиша', heroText: 'Помоги мне добраться до финиша', required: true },
        { type: 'lines', name: 'Использовать не более 10 строк', heroText: 'Ты должен использовать максимум 10 строчек кода', linesCount: 10, required: true },
        { type: 'gems', name: 'Собрать алмазы', heroText: 'Давай соберем все алмазы', required: false },
      ],
      levers: [],
      bridges: [],
    },

    [6]: {
      height: 4,
      width: 9,
      grid: [
        ["T","L","T","W","W","W","R","T","L",],
        ["S","S","L","W","W","W","L","S","T",],
        ["L","S","S","W","W","W","S","S","S",],
        ["L","R","L","W","W","W","L","S","L",],
      ],
      hero: { x: 2, y: 0 },
      finish: { x: 2, y: 8 },
      gems: [
        { x: 1, y: 6 },
      ],
      enemies: [],
      goals: [
        { type: 'finish', name: 'Добраться до финиша на другом берегу', heroText: 'Мне надо как-то перебраться через реку.\nМожет, этот рычаг мне поможет?', required: true },
        { type: 'gems', name: 'Подобрать алмаз', heroText: 'Было бы неплохо подобрать алмаз по пути', required: false },
      ],
      levers: [
        { x: 3, y: 2, name: "Мост", activatesId: "bridge", enabled: false }
      ],
      bridges: [
        {
          id: "bridge",
          vertical: false,
          start: { x: 2, y: 3 },
          end: { x: 2, y: 5 },
          activated: false,
        },
      ],
    },

    [7]: {
      height: 6,
      width: 9,
      grid: [
        ["T","T","L","W","W","W","L","L","R",],
        ["L","S","S","W","W","W","S","S","S",],
        ["W","W","W","W","W","W","W","W","W",],
        ["W","W","W","W","W","W","W","W","W",],
        ["L","S","S","W","W","W","S","S","S",],
        ["L","R","L","W","W","W","L","R","L",],
      ],
      hero: { x: 4, y: 8 },
      finish: { x: 1, y: 8 },
      gems: [
        { x: 1, y: 7 }, { x: 1, y: 0 }
      ],
      enemies: [],
      goals: [
        { type: 'finish', name: 'Добраться до финиша', heroText: 'Проведи меня по мостам', required: true },
        { type: 'lines', name: 'Использовать не более 8 строчек кода', heroText: 'Тебе надо уложиться в 8 строчек кода', linesCount: 8, required: true },
        { type: 'gems', name: 'Подобрать алмаз', heroText: 'Сможем собрать все алмазы?', required: false },
      ],
      levers: [
        { x: 5, y: 6, name: "Мост1", activatesId: "bridge1", enabled: false },
        { x: 4, y: 0, name: "Мост2", activatesId: "bridge2", enabled: true },
        { x: 0, y: 2, name: "Мост3", activatesId: "bridge3", enabled: false },
      ],
      bridges: [
        {
          id: "bridge1",
          vertical: false,
          start: { x: 4, y: 3 },
          end: { x: 4, y: 5 },
          activated: false,
        },
        {
          id: "bridge2",
          vertical: true,
          start: { x: 2, y: 1 },
          end: { x: 3, y: 1 },
          activated: true,
        },
        {
          id: "bridge3",
          vertical: false,
          start: { x: 1, y: 3 },
          end: { x: 1, y: 5 },
          activated: false,
        },
      ],
    },
  
    [8]: {
      height: 7,
      width: 9,
      grid: [
        ["L","L","R","W","W","W","T","S","T",],
        ["S","S","S","W","W","W","S","S","L",],
        ["L","S","L","W","W","W","R","L","L",],
        ["W","W","W","W","W","W","W","W","W",],
        ["W","W","W","W","W","W","W","W","W",],
        ["S","L","S","S","L","S","S","R","L",],
        ["T","L","L","S","S","S","L","L","S",],
      ],
      hero: { x: 1, y: 0 },
      finish: { x: 6, y: 8 },
      gems: [
        { x: 1, y: 7 },
        { x: 5, y: 4 },
      ],
      enemies: [],
      goals: [
        { type: 'finish', name: 'Добраться до финиша на другом берегу', heroText: 'Мне надо как-то перебраться через реку.\nМожет, этот рычаг мне поможет?', required: true },
        { type: 'gems', name: 'Подобрать алмаз', heroText: 'Было бы неплохо подобрать алмаз по пути', required: false },
      ],
      levers: [
        { x: 2, y: 2, name: "Мост1", activatesId: "bridge1", enabled: false },
        { x: 1, y: 8, name: "Мост2", activatesId: "bridge2", enabled: false },
      ],
      bridges: [
        {
          id: "bridge1",
          vertical: false,
          start: { x: 1, y: 3 },
          end: { x: 1, y: 5 },
          activated: false,
          hidden: true
        },
        {
          id: "bridge2",
          vertical: true,
          start: { x: 3, y: 1 },
          end: { x: 4, y: 1 },
          activated: false,
          hidden: true
        },
      ],
    },

    [9]: {
      height: 9,
      width: 5,
      grid: [
        ["R","T","S","T","R"],
        ["L","L","S","S","L"],
        ["W","W","W","W","W"],
        ["W","W","W","W","W"],
        ["W","W","W","W","W"],
        ["W","W","W","W","W"],
        ["R","S","S","L","L"],
        ["S","S","L","L","L"],
        ["L","L","L","L","T"],
      ],
      hero: { x: 0, y: 2 },
      finish: { x: 8, y: 2 },
      gems: [
        { x: 6, y: 2 },
        { x: 7, y: 2 },
      ],
      enemies: [],
      goals: [
        { type: 'finish', name: 'Добраться до финиша на другом берегу', heroText: 'На том берегу много алмазов, давай перейдём на него', required: true },
        { type: 'lever', leverName: "Секретный", name: 'Найти название рычага и переключить его', heroText: 'Для этого надо выяснить название рычага,\nкоторый откроет мне мост', required: true },
        { type: 'gems', name: 'Подобрать все алмазы', required: true },
      ],
      levers: [
        { x: 1, y: 1, name: "Секретный", activatesId: "bridge1", enabled: false, hidden: true },
      ],
      bridges: [
        {
          id: "bridge1",
          vertical: true,
          start: { x: 2, y: 2 },
          end: { x: 5, y: 2 },
          activated: false,
        },
      ],
    },
  
    [10]: {
      height: 5,
      width: 8,
      grid: [
        ["T","L","L","L","L","L","L","L",],
        ["S","S","R","L","L","L","W","W",],
        ["L","S","L","T","W","W","W","W",],
        ["T","S","S","L","R","W","W","L",],
        ["L","L","S","S","S","S","S","S",],
      ],
      hero: { x: 0, y: 7 },
      finish: { x: 4, y: 7 },
      gems: [
        { x: 4, y: 0 },
      ],
      enemies: [
        { x: 0, y: 1, alive: true, name: "John" },
        { x: 4, y: 5, alive: true, name: "Greg" },
      ],
      goals: [
        { type: 'finish', name: 'Добраться до финиша', heroText: 'Проведи меня до финиша', required: true },
        { type: 'enemies', name: 'Победить всех врагов', heroText: 'Дорогу преградили враги, надо их уничтожить', required: true },
        { type: 'gems', name: 'Подобрать алмаз', heroText: 'Было бы неплохо подобрать алмаз по пути', required: false },
      ],
      levers: [],
      bridges: [],
    },

    [11]: {
      height: 6,
      width: 13,
      grid: [
        ["T","T","T","W","W","W","W","W","W","W","T","T","T",],
        ["L","S","S","W","W","W","W","W","W","W","S","S","L",],
        ["L","S","L","W","W","W","S","W","W","W","L","S","L",],
        ["L","S","L","W","W","R","S","R","W","W","L","S","L",],
        ["L","S","L","W","W","L","S","L","W","W","L","S","L",],
        ["R","S","R","W","W","T","S","L","W","W","R","S","R",],
      ],
      hero: { x: 1, y: 11 },
      finish: { x: 5, y: 1 },
      gems: [
        { x: 1, y: 1 },
        { x: 5, y: 6 },
      ],
      enemies: [
        { x: 1, y: 3, alive: true, name: "Alog" },
        { x: 1, y: 5, alive: true, name: "Bran" },
        { x: 1, y: 7, alive: true, name: "Cerk" },
        { x: 1, y: 9, alive: true, name: "Dunrum" },
      ],
      goals: [
        { type: 'finish', name: 'Добраться до финиша', heroText: null, required: true },
        { type: 'enemies', name: 'Победить всех врагов', heroText: 'Надо уничтожить всех врагов.\nМы можем сделать это как-то быстрее?', required: true },
        { type: 'lines', linesCount: 9, name: 'Использовать не больше 9 строк', heroText: null, required: true },
        { type: 'gems', name: 'Подобрать все алмазы', heroText: 'Попробуем достать все алмазы?', required: false },
      ],  
      levers: [
        { x: 5, y: 11, activatesId: 'bridge1', name: "Мост1", enabled: true },
      ],
      bridges: [
        {
          id: "bridge1",
          vertical: false,
          start: { x: 1, y: 3 },
          end: { x: 1, y: 9 },
          activated: true,
        },
      ],
    },
  
    [12]: {
      height: 5,
      width: 13,
      grid: [
        ["R","R","R","W","W","S","L","T","W","W","R","R","R",],
        ["L","S","L","W","W","S","L","L","W","W","L","L","L",],
        ["T","S","L","W","W","S","L","L","W","W","T","L","L",],
        ["L","S","S","W","W","S","S","S","W","W","S","S","S",],
        ["L","L","L","W","W","L","L","L","W","W","L","L","L",],
      ],
      hero: { x: 0, y: 5 },
      finish: { x: 3, y: 12 },
      gems: [
        { x: 1, y: 1 },
        { x: 3, y: 11 },
      ],
      enemies: [
        { x: 3, y: 2, alive: true, name: "Brad" },
        { x: 3, y: 10, alive: true, name: "Bobby" },
      ],
      goals: [
        { type: 'finish', name: 'Добраться до финиша', heroText: 'Помоги мне добраться на другой берег', required: true },
        { type: 'gems', name: 'Подобрать все алмазы', heroText: 'Попробуем достать все алмазы?', required: false },
      ],  
      levers: [
        { x: 4, y: 5, activatesId: 'bridge1', name: "Мост1", enabled: false },
        { x: 2, y: 7, activatesId: 'bridge2', name: "Мост2", enabled: false },
      ],
      bridges: [
        {
          id: "bridge1",
          vertical: false,
          start: { x: 3, y: 3 },
          end: { x: 3, y: 4 },
          activated: false,
        },
        {
          id: "bridge2",
          vertical: false,
          start: { x: 3, y: 8 },
          end: { x: 3, y: 9 },
          activated: false,
        },
      ],
    },

    [13]: {
      height: 7,
      width: 9,
      grid: [
        ["T","T","T","L","R","S","L","W","T",],
        ["R","L","S","S","S","S","L","W","W",],
        ["W","W","W","W","W","W","W","W","W",],
        ["W","W","W","W","W","W","W","W","W",],
        ["R","L","S","L","L","L","L","S","W",],
        ["W","L","S","L","L","R","L","S","L",],
        ["W","W","S","S","S","S","S","S","T",],
      ],
      hero: { x: 4, y: 7 },
      finish: { x: 1, y: 6 },
      gems: [
        { x: 6, y: 7 }, { x: 1, y: 1 },
      ],
      enemies: [
        { x: 1, y: 5, alive: true, name: "BigBoy", big: true, moveFinish: { x: 4, y: 2 } },
      ],
      goals: [
        { type: 'finish', name: 'Добраться до финиша', heroText: null, required: true },
        { type: 'big_enemy_bridge', bridgeName: "bridge1", enemyName: "BigBoy", name: 'Не дать огромному рыцарю перейти мост', heroText: 'Нам не справиться с этим огромным рыцарем,\nнельзя пропустить его на наш берег!', required: true },
        { type: 'gems', name: 'Подобрать алмазы', heroText: null, required: false },
      ],
      levers: [
        { x: 4, y: 1, name: "Мост1", activatesId: "bridge1", enabled: true },
      ],
      bridges: [
        {
          id: "bridge1",
          vertical: true,
          start: { x: 2, y: 2 },
          end: { x: 3, y: 2 },
          activated: true,
        },
      ],
    },

    [14]: {
      height: 8,
      width: 3,
      grid: [
        ["R","S","R",],
        ["L","S","L",],
        ["S","S","L",],
        ["L","S","L",],
        ["L","S","S",],
        ["L","S","R",],
        ["S","S","L",],
        ["L","S","L",],
      ],
      hero: { x: 0, y: 1 },
      finish: { x: 7, y: 1 },
      gems: [
        { x: 2, y: 1 }, { x: 4, y: 1 }, { x: 6, y: 1 },
      ],
      enemies: [
        { x: 2, y: 0, alive: true, name: "Brad" },
        { x: 4, y: 2, alive: true, name: "Bobby" },
        { x: 6, y: 0, alive: true, name: "Greg" },
      ],
      goals: [
        { type: 'finish', name: 'Добраться до финиша', heroText: 'Мне нужно дойти до финиша', required: true },
        { type: 'enemies', name: 'Победить всех врагов, используя переменные', heroText: 'И победить всех врагов по пути, используя переменные', required: true },
        { type: 'gems', name: 'Подобрать алмаз', heroText: 'Как удобно лежат алмазы, давай их соберем', required: false },
      ],  
      levers: [],
      bridges: [],
      onlyVariablesInAttack: true,
    },

    [15]: {
      height: 8,
      width: 8,
      grid: [
        ["R","S","R","W","W","T","S","T",],
        ["S","S","L","W","W","L","S","S",],
        ["L","L","L","W","W","L","S","L",],
        ["W","W","W","W","W","W","W","W",],
        ["W","W","W","W","W","W","W","W",],
        ["L","S","L","W","W","L","S","S",],
        ["L","S","S","T","T","L","L","S",],
        ["R","L","S","S","L","L","L","R",],
      ],
      hero: { x: 0, y: 6 },
      finish: { x: 0, y: 1 },
      gems: [
        { x: 7, y: 4 },
      ],
      enemies: [
        { x: 7, y: 5, alive: true, name: "Tav" },
        { x: 2, y: 1, alive: true, name: "Liam" },
      ],
      goals: [
        { type: 'finish', name: 'Добраться до финиша', heroText: null, required: true },
        { type: 'var bridges', name: 'Открыть мосты, используя переменные', heroText: '', required: true },
        { type: 'enemies', name: 'Победить всех врагов, используя переменные', heroText: 'Помоги мне одолеть всех врагов и добраться\nдо финиша по мостам, используя переменные', required: true },
        { type: 'gems', name: 'Подобрать алмаз', heroText: 'Как удобно лежат алмазы, давай их соберем', required: false },
      ],  
      levers: [
        { x: 2, y: 7, name: "Мост1", activatesId: "bridge1", enabled: false },
        { x: 5, y: 0, name: "Мост2", activatesId: "bridge2", enabled: false },
      ],
      bridges: [
        {
          id: "bridge1",
          vertical: true,
          start: { x: 3, y: 6 },
          end: { x: 4, y: 6 },
          activated: false,
        },
        {
          id: "bridge2",
          vertical: true,
          start: { x: 3, y: 1 },
          end: { x: 4, y: 1 },
          activated: false,
        },
      ],
      onlyVariablesInAttack: true,
      onlyVariablesInSwitch: true,
    },
  
    [16]: {
      height: 7,
      width: 8,
      grid: [
        ["T","S","T","L","L","L","S","L",],
        ["W","S","S","S","S","S","S","L",],
        ["W","W","L","S","L","L","S","L",],
        ["W","W","W","W","W","R","S","L",],
        ["W","W","W","W","W","L","S","R",],
        ["W","W","W","W","W","T","S","L",],
        ["W","L","L","L","L","L","S","S",],
      ],
      hero: { x: 1, y: 2 },
      finish: { x: 6, y: 1 },
      gems: [
        { x: 1, y: 6 }, { x: 6, y: 7 },
      ],
      enemies: [
        { x: 1, y: 7, alive: true, name: "Hidden1", hidden: true },
        { x: 6, y: 5, alive: true, name: "Hidden2", hidden: true },
        { x: 6, y: 2, alive: true, name: "Hidden3", hidden: true },
      ],
      goals: [
        { type: 'finish', name: 'Добраться до финиша', heroText: 'Нужно пробраться к финишу через этих безымянных врагов', required: true },
        { type: 'enemies', name: 'Победить всех врагов', heroText: 'Давай разузнаем их имена и прогоним отсюда', required: true },
        { type: 'gems', name: 'Собрать все алмазы', heroText: 'Алмазы всегда пригодятся, давай соберем их', required: false },
      ],  
      levers: [],
      bridges: [],
      onlyVariablesInAttack: true,
    },

    [17]: {
      height: 7,
      width: 8,
      grid: [
        ["L","S","L","L","W","W","L","L",],
        ["S","S","L","W","W","T","L","L",],
        ["R","W","W","W","W","L","L","L",],
        ["W","W","W","W","W","L","S","S",],
        ["W","L","L","T","W","L","S","R",],
        ["L","S","S","L","L","S","S","W",],
        ["T","S","R","L","L","S","W","W",],
      ],
      hero: { x: 5, y: 6 },
      finish: { x: 0, y: 6 },
      gems: [
      ],
      enemies: [
        { x: 1, y: 1, alive: true, name: "wizard1", hidden: true, isWizard: true, zone: { x: 1, y: 5, width: 3, height: 3 } },
        { x: 1, y: 6, alive: true, name: "hidden1", hidden: true },
      ],
      goals: [
        { type: 'finish', name: 'Добраться до финиша', heroText: 'Давай поджарим этого волшебника\nи освободим себе путь', required: true },
      ],  
      levers: [
      ],
      bridges: [
      ],
      onlyVariablesInAttack: true,
      fireballCount: 1,
    },

    [18]: {
      height: 8,
      width: 9,
      grid: [
        ["R","S","R","L","W","W","L","L","L",],
        ["L","S","L","W","W","W","W","L","W",],
        ["L","S","W","W","W","W","W","W","W",],
        ["T","S","T","W","W","W","W","W","W",],
        ["L","S","S","W","W","W","S","S","L",],
        ["R","L","R","W","W","W","W","R","L",],
        ["W","L","W","W","W","W","W","W","T",],
        ["W","L","W","W","W","W","W","W","L",],
      ],
      hero: { x: 4, y: 7 },
      finish: { x: 0, y: 1 },
      gems: [
        { x: 6, y: 1 }, { x: 0, y: 7 }
      ],
      enemies: [
        { x: 1, y: 7, alive: true, name: "Hidden1", hidden: true },
        { x: 5, y: 1, alive: true, name: "Hidden2", hidden: true },
        { x: 3, y: 1, alive: true, name: "Hidden3", hidden: true },
        { x: 1, y: 1, alive: true, name: "wizard1", hidden: true, isWizard: true, zone: { x: 3, y: 3, width: 3, height: 3 } },
        { x: 7, y: 8, alive: true, name: "wizard2", hidden: true, isWizard: true, zone: { x: 1, y: 0, width: 3, height: 2 } },
      ],
      goals: [
        { type: 'finish', name: 'Добраться до финиша', heroText: 'Надо узнать имена этих рыцарей,\nчтобы их прогнать', required: true },
        { type: 'enemies', name: 'Победить всех врагов', heroText: 'А также избавиться от этих волшебников', required: true },
        { type: 'gems', name: 'Собрать все алмазы', heroText: null, required: false },
      ],  
      levers: [
        { x: 4, y: 8, name: "Мост1", activatesId: "bridge1", enabled: false },
        { x: 0, y: 6, name: "ИспользуйМеняСУмом", activatesId: "bridge2", enabled: false, hidden: true },
      ],
      bridges: [
        {
          id: "bridge1",
          vertical: true,
          start: { x: 2, y: 7 },
          end: { x: 3, y: 7 },
          activated: false,
        },
        {
          id: "bridge2",
          vertical: false,
          start: { x: 4, y: 3 },
          end: { x: 4, y: 5 },
          activated: false,
        },
      ],
      onlyVariablesInAttack: true,
      fireballCount: 2,
    },

    [19]: {
      height: 5,
      width: 9,
      grid: [
        ["L","W","W","W","W","W","W","W","W"],
        ["S","S","S","W","W","R","L","T","L"],
        ["L","L","S","S","S","L","L","L","T"],
        ["T","L","L","L","S","S","S","L","L"],
        ["R","L","R","L","L","L","S","S","S"],
      ],
      hero: { x: 0, y: 0 },
      finish: { x: 4, y: 8 },
      gems: [
        { x: 3, y: 5 },
        { x: 1, y: 2 },
      ],
      enemies: [],
      levers: [],
      bridges: [],
      goals: [
        { type: 'finish', name: 'Добраться до финиша', heroText: 'Проведи меня до финиша, используя цикл', required: true },
        { type: 'gems', name: 'Собрать все алмазы', required: true },
        { type: 'lines', name: 'Использовать не более 3 строк кода', heroText: 'Уложись в 3 строчки кода!', linesCount: 3, required: true },
      ],
      isWhileTrue: true,
    },

    [20]: {
      height: 9,
      width: 5,
      grid: [
        ["S","S","S","S","S"],
        ["S","W","W","W","W"],
        ["S","L","L","L","L"],
        ["S","R","W","W","L"],
        ["S","L","L","L","L"],
        ["S","L","T","L","L"],
        ["S","L","L","L","L"],
        ["S","T","L","W","W"],
        ["S","S","S","S","L"],
      ],
      hero: { x: 8, y: 4 },
      finish: { x: 0, y: 4 },
      gems: [
        { x: 6, y: 4 },
        { x: 2, y: 4 },
        { x: 4, y: 4 },
      ],
      enemies: [],
      levers: [],
      bridges: [],
      goals: [
        { type: 'finish', name: 'Добраться до финиша', required: true },
        { type: 'gems', name: 'Собрать все алмазы', heroText: 'Алмазы всегда пригодятся, давай соберем их', required: true },
        { type: 'lines', name: 'Использовать не более 4 строк кода', heroText: 'Снова используй цикл и уложись в 4 строчки кода', linesCount: 4, required: true },
      ],
      isWhileTrue: true,
    },

    [21]: {
      height: 9,
      width: 9,
      grid: [
        ["W","W","L","L","R","W","W","W","W"],
        ["W","L","L","L","L","W","W","W","W"],
        ["W","W","W","L","L","W","W","W","W"],
        ["W","W","T","L","L","W","W","W","W"],
        ["W","L","L","L","L","W","W","S","L"],
        ["W","W","W","W","W","W","W","S","L"],
        ["T","L","L","W","W","W","L","S","L"],
        ["L","S","S","W","W","W","S","S","L"],
        ["L","L","L","W","W","W","L","L","T"],
      ],
      hero: { x: 7, y: 7 },
      finish: { x: 1, y: 1 },
      gems: [
        { x: 7, y: 1 },
      ],
      enemies: [
        { x: 4, y: 6, alive: true, name: "Hidden1", hidden: true },
        { x: 1, y: 3, alive: true, name: "Hidden2", hidden: true },
        { x: 4, y: 1, alive: true, name: "wizard1", hidden: true, isWizard: true, zone: { x: 0, y: 2, width: 6, height: 6 } },
      ],
      levers: [
        { x: 8, y: 7, activatesId: 'bridge1', name: "Мост1", enabled: false },
      ],
      bridges: [
        {
          id: "bridge1",
          vertical: false,
          start: { x: 7, y: 3 },
          end: { x: 7, y: 5 },
          activated: false,
        },
        {
          id: "bridge2",
          vertical: false,
          start: { x: 4, y: 5 },
          end: { x: 4, y: 6 },
          activated: true,
        }
      ],
      goals: [
        { type: 'finish', name: 'Добраться до финиша', required: true },
        { type: 'gems', name: 'Подобрать алмаз', heroText: 'Давай сначала очистим себе путь', required: false },
        { type: 'lines', name: 'Использовать не более 9 строк кода', heroText: 'А потом дойдём до финиша, используя цикл', linesCount: 9, required: true },
      ],
      isWhileTrue: true,
      fireballCount: 1,
    },

    [22]: {
      height: 9,
      width: 9,
      grid: [
        ["L","L","T","L","W","W","W","W","W"],
        ["S","L","L","L","L","W","W","W","W"],
        ["S","S","S","L","L","R","W","W","W"],
        ["W","L","S","T","L","L","L","W","W"],
        ["W","W","S","S","S","L","L","T","W"],
        ["W","W","W","L","S","L","L","L","R"],
        ["W","W","W","L","S","S","S","L","L"],
        ["W","W","L","L","L","L","S","L","L"],
        ["W","L","L","T","L","L","S","S","S"],
      ],
      hero: { x: 0, y: 0 },
      finish: { x: 8, y: 8 },
      gems: [
      ],
      enemies: [
        { x: 2, y: 1, alive: true, name: "Hidden1", hidden: true },
        { x: 6, y: 5, alive: true, name: "Hidden2", hidden: true },
      ],
      levers: [
      ],
      bridges: [
      ],
      goals: [
        { type: 'finish', name: 'Добраться до финиша', required: true },
        { type: 'lines', name: 'Использовать не более 7 строк кода', linesCount: 7, required: true },
      ],
      isWhileTrue: true,
    },

    [23]: {
      height: 6,
      width: 13,
      grid: [
        ["L","W","T","W","W","L","R","S","T","S","W","W","W"],
        ["S","W","S","S","L","L","L","S","L","S","S","S","S"],
        ["S","W","S","L","L","L","L","S","L","L","L","L","L"],
        ["S","S","S","L","L","L","L","S","S","S","L","L","L"],
        ["S","W","R","L","T","W","L","L","L","S","L","R","L"],
        ["S","W","W","L","W","W","L","R","T","S","W","W","L"]
      ],
      hero: { x: 1, y: 0 },
      finish: { x: 1, y: 12 },
      gems: [
        { x: 5, y: 0 },
        { x: 5, y: 3 },
        { x: 5, y: 6 },
        { x: 5, y: 9 },
      ],
      enemies: [
        { x: 2, y: 2, alive: true, name: "Hidden1", hidden: true },
        { x: 2, y: 5, alive: true, name: "Hidden2", hidden: true },
        { x: 2, y: 11, alive: true, name: "Hidden3", hidden: true },
      ],
      levers: [
      ],
      bridges: [
      ],
      goals: [
        { type: 'finish', name: 'Добраться до финиша', required: true },
        { type: 'lines', name: 'Использовать не более 9 строк кода', linesCount: 9, required: true },
        { type: 'gems', name: 'Собрать все алмазы', heroText: 'Сможем захватит с собой все алмазы?', required: false },
      ],
      isWhileTrue: true,
    },
  },
  ['demo']: {
    [0]: {
      height: 4,
      width: 4,
      grid: [
        ["L","L","L","L"],
        ["L","L","L","L"],
        ["L","L","L","L"],
        ["L","L","L","L"],
      ],
      hero: { x: 0, y: 0 },
      finish: { x: 0, y: 0 },
      gems: [
        { x: 3, y: 3 },
      ],
      enemies: [],
      goals: [],
      levers: [],
      bridges: [],
      startCode: 'hero.move_right()',
    },
    [1]: {
      height: 4,
      width: 4,
      grid: [
        ["L","L","L","L"],
        ["L","L","L","L"],
        ["L","L","L","L"],
        ["L","L","L","L"],
      ],
      hero: { x: 3, y: 3 },
      finish: { x: 0, y: 0 },
      gems: [
        { x: 2, y: 0 },
      ],
      enemies: [],
      goals: [],
      levers: [],
      bridges: [],
      startCode: 'hero.move_left()',
    },
    [2]: {
      height: 4,
      width: 4,
      grid: [
        ["L","L","L","L"],
        ["L","L","L","L"],
        ["L","L","L","L"],
        ["L","L","L","L"],
      ],
      hero: { x: 2, y: 0 },
      finish: { x: 0, y: 0 },
      gems: [
        { x: 0, y: 3 },
      ],
      enemies: [],
      goals: [],
      levers: [],
      bridges: [],
      startCode: 'hero.move_up()',
    },
    [3]: {
      height: 4,
      width: 4,
      grid: [
        ["L","L","L","L"],
        ["L","L","L","L"],
        ["L","L","L","L"],
        ["L","L","L","L"],
      ],
      hero: { x: 0, y: 3 },
      finish: { x: 0, y: 0 },
      gems: [
        { x: 3, y: 1 },
      ],
      enemies: [],
      goals: [],
      levers: [],
      bridges: [],
      startCode: 'hero.move_down()',
    },
    [4]: {
      height: 4,
      width: 4,
      grid: [
        ["L","L","L","L"],
        ["L","L","L","L"],
        ["L","L","L","L"],
        ["L","L","L","L"],
      ],
      hero: { x: 3, y: 1 },
      finish: { x: 0, y: 0 },
      gems: [
        { x: 0, y: 0 },
      ],
      enemies: [],
      goals: [],
      levers: [],
      bridges: [],
      startCode: 'hero.move_left()',
    },
  }
}
interface CodeError {
  message: string;
  line: number;
}

export default class CodeAnalyzer {
  analyze(
    rawCode: string,
    onlyVariablesInAttack: boolean,
    onlyVariablesInSwitch: boolean,
  ): CodeError[] {
    const lines = rawCode.split(/\r\n|\r|\n/);
    for (let i = 0; i < lines.length; i++) {
      const lineCode = lines[i];

      const noParenthesisMatch = lineCode.match(/(hero\.[^\d\W]\w*)$/i);
      if (noParenthesisMatch) {
        return [
          {
            message: `Чтобы вызвать \`${noParenthesisMatch[0]}\`, нужно добавить \`()\`.`,
            line: i + 1,
          },
        ];
      }

      const dashMatch = lineCode.match(
        /(hero.move-down)|(hero.move-up)|(hero.move-left)|(hero.move-right)|(find-nearest-enemy)|(has-enemy-around)|(fireball-up)|(fireball-down)|(fireball-left)|(fireball-right)/,
      );
      if (dashMatch) {
        return [
          {
            message: `В методе \`${dashMatch[0]}\` должно быть \`_\` вместо \`-\`.`,
            line: i + 1,
          },
        ];
      }

      if (onlyVariablesInAttack) {
        const notVariableInAttackMatch = lineCode.match(
          /hero.attack\((".*")\)/,
        );
        if (notVariableInAttackMatch) {
          return [
            {
              message: `Используй имя переменной, например \`enemy1\`, вместо строки \`${notVariableInAttackMatch[1]}\`.`,
              line: i + 1,
            },
          ];
        }
      }

      if (onlyVariablesInSwitch) {
        const notVariableInSwitchMatch = lineCode.match(
          /hero.switch\((".*")\)/,
        );
        if (notVariableInSwitchMatch) {
          return [
            {
              message: `Используй имя переменной, например \`Мост1\`, вместо строки \`${notVariableInSwitchMatch[1]}\`.`,
              line: i + 1,
            },
          ];
        }
      }

      const methodWithoutArgumentsMatch = lineCode.match(
        /hero\.(switch|attack)\(\s*\)/,
      );
      if (methodWithoutArgumentsMatch) {
        const methodName = methodWithoutArgumentsMatch[1];
        return [
          {
            message: `Метод \`hero.${methodName}()\` требует аргумент.`,
            line: i + 1,
          },
        ];
      }
    }

    return [];
  }
}

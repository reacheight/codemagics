export default class ErrorMessageMapper {
  static map(esperMessage: string) {
    if (
      esperMessage.startsWith('Unmatched `(`') ||
      esperMessage.startsWith('Unclosed `(` in function arguments')
    )
      return 'Нет закрывающей скобки `)`.';

    if (
      esperMessage ===
      'Empty if statement. Put 4 spaces in front of statements inside the if statement.'
    )
      return 'Пустая конструкция `if`. Ты забыл 4 пробела перед выражением?';

    if (
      esperMessage ===
      'Empty while statement. Put 4 spaces in front of statements inside the while statement.'
    )
      return 'Пустая конструкция `while`. Ты забыл 4 пробела перед выражением?';

    if (
      esperMessage ===
      'Unterminated string. Add a matching `"` at the end of your string.'
    )
      return 'Нет закрывающей кавычки `"` в строке.';

    if (
      esperMessage ===
      'Unexpected token: expected T_NAME but found T_DOT while parsing trailer'
    )
      return 'Ты поставил точку `.` после ещё одной точки `.`';

    if (
      esperMessage ===
      'Unexpected token: expected T_NAME but found T_NAME while parsing trailer'
    )
      return 'Ты пытаешься использовать конструкцию питона (например, while, if) как метод у hero?';

    if (
      esperMessage ===
      'Unexpected token: expected T_NAME but found T_NEWLINE while parsing trailer'
    )
      return 'Ты забыл вызвать метод?';

    if (esperMessage.startsWith('Unexpected token: expected T_NAME'))
      return 'Что-то не так с вызовом метода.';

    if (esperMessage === 'Function calls paramaters must be seperated by `,`s')
      return 'Ты забыл добавить запятую между параметрами функции.';

    if (esperMessage === 'Too much indentation at the beginning of this line.')
      return 'Слишком много пробелов в начале строки.';

    const needColonMatch = esperMessage.match(
      /Need a `:` on the end of the line following `(.+)`\./,
    );
    if (needColonMatch) {
      return `Нужно добавить \`:\` в конце строки после \`${needColonMatch[1]}\`.`;
    }

    const noOpeningParantethisMatch = esperMessage.match(
      /If you want to call (`.*`) as function, you need `\(\)`'s/,
    );
    if (noOpeningParantethisMatch) {
      return `Если ты хочешь вызвать метод ${noOpeningParantethisMatch[1]}, нужно добавить \`()\`.`;
    }

    const isNotAHeroMethodMatch = esperMessage.match(
      /(hero\..*) is not a function/,
    );
    if (isNotAHeroMethodMatch) {
      return `Не существует метода \`${isNotAHeroMethodMatch[1]}\`. Смотри в список доступных команд.`;
    }

    const isNotDefinedMatch = esperMessage.match(/(.*) is not defined/);
    if (isNotDefinedMatch) {
      return `Не существует метода или переменной \`${isNotDefinedMatch[1]}\`. Проверь код на опечатки.`;
    }

    if (esperMessage.startsWith('Unterminated'))
      return 'Ты забыл добавить кавычки в начале и конце строки?';

    return esperMessage;
  }
}

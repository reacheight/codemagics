import styled, { css, keyframes } from 'styled-components';
import enemy from '../../assets/knight-enemy.svg';
import wizard from '../../assets/wizard-enemy.svg';

// Константы для размеров врагов
const ENEMY_SIZES = {
  knight: {
    width: 57,
    height: 90,
    rightOffset: { right: 7, left: -2 },
  },
  wizard: {
    width: 85,
    height: 100,
    rightOffset: { right: 18, left: 15 },
  },
};

// Константы для позиционирования имени
const NAME_OFFSETS = {
  knight: { hidden: 45, normal: 70, big: 115 },
  wizard: { hidden: 55, normal: 80, big: 125 },
};

const rightFallAnimation = keyframes`
  0% {

    transform: scaleX(-1) rotate(0) translateX(0);
  }

  100% {
    transform: scaleX(-1) rotate(-60deg) translateX(-40px) translateY(-25px);
  }
`;

const leftFallAnimation = keyframes`
  0% {
    transform: rotate(0) translateX(0);
  }

  100% {
    transform: rotate(-60deg) translateX(-40px) translateY(-25px);
  }
`;

const fadeAnimation = keyframes`
  0% {
    opacity:  1;
  }

  100% {
    opacity: 0;
  }
`;

const wizardGlowAnimation = keyframes`
  0% {
    filter: drop-shadow(0 0 8px rgba(128, 0, 128, 0.6)) drop-shadow(0 0 15px rgba(75, 0, 130, 0.4));
  }
  25% {
    filter: drop-shadow(0 0 12px rgba(138, 43, 226, 0.8)) drop-shadow(0 0 20px rgba(75, 0, 130, 0.6));
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(148, 0, 211, 0.9)) drop-shadow(0 0 25px rgba(75, 0, 130, 0.7));
  }
  75% {
    filter: drop-shadow(0 0 12px rgba(138, 43, 226, 0.8)) drop-shadow(0 0 20px rgba(75, 0, 130, 0.6));
  }
  100% {
    filter: drop-shadow(0 0 8px rgba(128, 0, 128, 0.6)) drop-shadow(0 0 15px rgba(75, 0, 130, 0.4));
  }
`;

// Анимация колдовства для волшебника, смотрящего направо
const wizardSpellcastingRightAnimation = keyframes`
  0%, 100% {
    transform: scaleX(1) translateY(0px) rotate(0deg);
  }
  25% {
    transform: scaleX(1) translateY(-2px) rotate(1deg);
  }
  50% {
    transform: scaleX(1) translateY(-3px) rotate(0deg);
  }
  75% {
    transform: scaleX(1) translateY(-2px) rotate(-1deg);
  }
`;

// Анимация колдовства для волшебника, смотрящего налево
const wizardSpellcastingLeftAnimation = keyframes`
  0%, 100% {
    transform: scaleX(-1) translateY(0px) rotate(0deg);
  }
  25% {
    transform: scaleX(-1) translateY(-2px) rotate(-1deg);
  }
  50% {
    transform: scaleX(-1) translateY(-3px) rotate(0deg);
  }
  75% {
    transform: scaleX(-1) translateY(-2px) rotate(1deg);
  }
`;

// Анимация красного свечения для рыцаря
const knightRedGlowAnimation = keyframes`
  0% {
    filter: drop-shadow(0 0 8px rgba(220, 20, 60, 0.6)) drop-shadow(0 0 15px rgba(139, 0, 0, 0.4));
  }
  25% {
    filter: drop-shadow(0 0 12px rgba(255, 69, 0, 0.8)) drop-shadow(0 0 20px rgba(139, 0, 0, 0.6));
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(255, 0, 0, 0.9)) drop-shadow(0 0 25px rgba(139, 0, 0, 0.7));
  }
  75% {
    filter: drop-shadow(0 0 12px rgba(255, 69, 0, 0.8)) drop-shadow(0 0 20px rgba(139, 0, 0, 0.6));
  }
  100% {
    filter: drop-shadow(0 0 8px rgba(220, 20, 60, 0.6)) drop-shadow(0 0 15px rgba(139, 0, 0, 0.4));
  }
`;

// Анимация готовности к бою для рыцаря, смотрящего направо
const knightWarrianceRightAnimation = keyframes`
  0%, 100% {
    transform: scaleX(1) translateY(0px) rotate(0deg);
  }
  25% {
    transform: scaleX(1) translateY(-1px) rotate(0.5deg);
  }
  50% {
    transform: scaleX(1) translateY(-2px) rotate(0deg);
  }
  75% {
    transform: scaleX(1) translateY(-1px) rotate(-0.5deg);
  }
`;

// Анимация готовности к бою для рыцаря, смотрящего налево
const knightWarrianceLeftAnimation = keyframes`
  0%, 100% {
    transform: scaleX(-1) translateY(0px) rotate(0deg);
  }
  25% {
    transform: scaleX(-1) translateY(-1px) rotate(-0.5deg);
  }
  50% {
    transform: scaleX(-1) translateY(-2px) rotate(0deg);
  }
  75% {
    transform: scaleX(-1) translateY(-1px) rotate(0.5deg);
  }
`;

export const Wrapper = styled.div`
  width: ${({ enemyType }) => ENEMY_SIZES[enemyType].width}px;
  height: 114px;
  position: relative;
  text-align: center;
  z-index: ${({ x }) => x};
  transform: scale(${({ isBig }) => (isBig ? 2 : 1)});
  transition: ${({ spedUp }) => css`
    right ${spedUp ? 100 : 150}ms linear,
    bottom ${spedUp ? 100 : 150}ms linear;
  `}
    ${({ shift, isBig, nameHidden, enemyType }) => {
      const offsets = NAME_OFFSETS[enemyType];

      let baseOffset;
      if (nameHidden) {
        baseOffset = offsets.hidden;
      } else if (isBig) {
        baseOffset = offsets.big;
      } else {
        baseOffset = offsets.normal;
      }

      return css`
        bottom: ${baseOffset + shift.bottom}px;
        right: ${shift.right}px;
      `;
    }}
    ${({ x, y }) => css`
      grid-row-start: ${x + 1};
      grid-row-end: ${x + 2};
      grid-column-start: ${y + 1};
      grid-column-end: ${y + 2};
    `};
`;

export const Name = styled.span`
  display: block;
  position: relative;
  top: 7px;
  right: 5px;
  font-weight: bold;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  color: #fff;
  text-shadow: 0 0 3px #000;
  user-select: none;
  ${({ fade }) =>
    fade &&
    css`
      animation: ${fadeAnimation} 1s ease-out forwards;
    `}
`;

export const Image = styled.div`
  height: ${({ enemyType }) => ENEMY_SIZES[enemyType].height}px;
  background: url(${({ enemyType }) => (enemyType === 'wizard' ? wizard : enemy)})
    no-repeat center;
  position: relative;
  right: ${({ direction, enemyType }) => {
    const offset = direction === 'right' ? 'right' : 'left';
    return ENEMY_SIZES[enemyType].rightOffset[offset];
  }}px;
  opacity: ${({ x, y, heroX, heroY }) =>
    x - heroX === 1 && y === heroY ? 0.7 : 1};

  // Комбинированная анимация для рыцарей: красное свечение + готовность к бою
  ${({ enemyType, alive, direction }) =>
    enemyType === 'knight' &&
    alive &&
    css`
      animation:
        ${knightRedGlowAnimation} 3s ease-in-out infinite,
        ${direction === 'right' ? knightWarrianceRightAnimation : knightWarrianceLeftAnimation}
          4.5s ease-in-out infinite;
    `}

  // Для мёртвых рыцарей - стандартный transform
  ${({ enemyType, alive, direction }) =>
    enemyType === 'knight' &&
    !alive &&
    css`
      transform: scaleX(${direction === 'right' ? 1 : -1});
    `}

  // Для других врагов - стандартный transform
  ${({ enemyType, direction }) =>
    enemyType !== 'wizard' &&
    enemyType !== 'knight' &&
    css`
      transform: scaleX(${direction === 'right' ? 1 : -1});
    `}

  // Комбинированная анимация для волшебников: свечение + колдовство
  ${({ enemyType, alive, direction }) =>
    enemyType === 'wizard' &&
    alive &&
    css`
      animation:
        ${wizardGlowAnimation} 3s ease-in-out infinite,
        ${direction === 'right' ? wizardSpellcastingRightAnimation : wizardSpellcastingLeftAnimation}
          4s ease-in-out infinite;
    `}

  // Для мёртвых волшебников - стандартный transform
  ${({ enemyType, alive, direction }) =>
    enemyType === 'wizard' &&
    !alive &&
    css`
      transform: scaleX(${direction === 'right' ? 1 : -1});
    `}

   ${({ alive, direction, spedUp }) => {
    if (!alive)
      return css`
        animation:
          ${direction === 'right' ? leftFallAnimation : rightFallAnimation}
            ${spedUp ? 500 : 1000}ms ease-out forwards,
          ${fadeAnimation} 2s ease-out forwards;
      `;
  }}
`;

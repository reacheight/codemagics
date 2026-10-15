import React, { useState, useEffect } from 'react';

import { Wrapper, Name, Image } from './styled';

const computeDirection = ({ y, heroY, wizardZone }) => {
  if (wizardZone) {
    return y > wizardZone.y ? 'left' : 'right';
  }

  return y >= heroY ? 'left' : 'right';
};

export const Enemy = ({
  x,
  y,
  heroX,
  heroY,
  name,
  alive,
  nameHidden,
  spedUp,
  isBig,
  shift,
  isWizard,
  wizardZone,
}) => {
  const [deathDirection, setDeathDirection] = useState(null);

  // Определяем тип врага
  const enemyType = isWizard ? 'wizard' : 'knight';

  useEffect(() => {
    if (alive && deathDirection) {
      setDeathDirection(null);
    } else if (!alive) {
      setDeathDirection(computeDirection({ y, heroY, wizardZone }));
    }
  }, [alive]);

  const direction =
    deathDirection || computeDirection({ y, heroY, wizardZone });

  return (
    <Wrapper
      enemyType={enemyType}
      x={x}
      y={y}
      heroX={heroX}
      heroY={heroY}
      nameHidden={nameHidden}
      isBig={isBig}
      shift={shift}
      spedUp={spedUp}
    >
      {!nameHidden && <Name fade={!alive}>{name}</Name>}
      <Image
        enemyType={enemyType}
        x={x}
        y={y}
        heroX={heroX}
        heroY={heroY}
        direction={direction}
        alive={alive}
        spedUp={spedUp}
      />
    </Wrapper>
  );
};

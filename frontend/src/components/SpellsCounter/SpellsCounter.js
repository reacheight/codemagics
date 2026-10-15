import React from 'react';
import {
  SpellsCounterWrapper,
  SpellIcon,
  SpellText,
  SpellItem,
} from './styled';

export const SpellsCounter = ({ fireballCount = 0, totalFireballs = 0 }) => {
  if (totalFireballs === 0) {
    return null;
  }

  return (
    <SpellsCounterWrapper>
      <SpellItem>
        <SpellIcon isFireball isEmpty={fireballCount === 0} />
        <SpellText isEmpty={fireballCount === 0}>
          {fireballCount}/{totalFireballs}
        </SpellText>
      </SpellItem>
    </SpellsCounterWrapper>
  );
};

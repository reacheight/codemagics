import React from 'react';
import { WizardCell } from './styled';

export const WizardZoneCell = ({ x, y, isWizardAlive }) => {
  return <WizardCell x={x} y={y} isWizardAlive={isWizardAlive}></WizardCell>;
};

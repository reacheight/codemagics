import styled, { css, keyframes } from 'styled-components';

const wizardPulse = keyframes`
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
`;

const wizardFadeOut = keyframes`
  0% {
    background: radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, rgba(75, 0, 130, 0.25) 70%, rgba(128, 0, 128, 0.15) 100%);
    box-shadow: 
      inset 0 0 18px rgba(138, 43, 226, 0.3),
      0 0 8px rgba(138, 43, 226, 0.2);
    opacity: 1;
    transform: scale(1);
  }
  100% {
    background: radial-gradient(circle, rgba(138, 43, 226, 0) 0%, rgba(75, 0, 130, 0) 70%, rgba(128, 0, 128, 0) 100%);
    box-shadow: none;
    opacity: 0;
    transform: scale(0.95);
  }
`;

export const WizardCell = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  pointer-events: none;
  border-radius: 2px;

  background: ${({ isWizardAlive }) =>
    isWizardAlive
      ? 'radial-gradient(circle, rgba(148, 0, 211, 0.6) 0%, rgba(138, 43, 226, 0.4) 70%, rgba(75, 0, 130, 0.2) 100%)'
      : 'transparent'};

  box-shadow: ${({ isWizardAlive }) =>
    isWizardAlive
      ? 'inset 0 0 25px rgba(148, 0, 211, 0.5), 0 0 15px rgba(138, 43, 226, 0.4), 0 0 30px rgba(138, 43, 226, 0.2)'
      : 'none'};

  animation: ${({ isWizardAlive }) =>
    isWizardAlive ? wizardPulse : wizardFadeOut}
    ${({ isWizardAlive }) => (isWizardAlive ? '2s' : '1.2s')} ease-in-out
    ${({ isWizardAlive }) => (isWizardAlive ? 'infinite' : 'forwards')};

  ${({ x, y }) => css`
    z-index: -1;
    grid-row-start: ${x + 1};
    grid-row-end: ${x + 2};
    grid-column-start: ${y + 1};
    grid-column-end: ${y + 2};
  `}
`;

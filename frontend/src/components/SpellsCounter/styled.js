import styled, { css } from 'styled-components';
import fireballIcon from '../../assets/fireball.png';

export const SpellsCounterWrapper = styled.div`
  position: fixed;
  z-index: 101;
  bottom: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
`;

export const SpellItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SpellIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  ${({ isFireball, isEmpty }) =>
    isFireball &&
    css`
      background-image: url(${fireballIcon});
      background-size: 28px 28px;
      background-repeat: no-repeat;
      background-position: center;
      opacity: ${isEmpty ? 0.3 : 1};
      border-color: ${isEmpty ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 69, 0, 0.6)'};
      transform: ${isEmpty ? 'scale(0.9)' : 'scale(1)'};
    `}
`;

export const SpellText = styled.span`
  color: ${({ isEmpty }) => (isEmpty ? 'rgba(255, 255, 255, 0.4)' : 'white')};
  font-weight: bold;
  font-size: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
`;

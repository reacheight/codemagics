import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContent, Logo } from './styled';
import { Link } from 'react-router-dom';
import { ActionButton } from '../ActionButton/ActionButton';

export const Header = ({ isTransparent, isLanding }) => {
  const navigate = useNavigate();

  return (
    <HeaderContent isTransparent={isTransparent}>
      <Link to={'/'}>
        <Logo src={'/logo.webp'} alt="App Logo" isTransparent={isTransparent} />
      </Link>
      {isLanding && (
        <ActionButton onClick={() => navigate('/game')}>
          Перейти в игру
        </ActionButton>
      )}
    </HeaderContent>
  );
};

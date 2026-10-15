import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants';

export const useNavigation = () => {
  const navigate = useNavigate();

  const handleLevelClick = useCallback(
    (level) => {
      const levelPath = ROUTES.getLevelPath(level);

      navigate(levelPath);
    },
    [navigate],
  );

  return {
    handleLevelClick,
  };
};

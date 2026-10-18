import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINTS } from '../../../constants/gameConstants';

export const useNavigation = () => {
  const navigate = useNavigate();

  const handleLevelClick = useCallback(
    (game, level) => {
      const levelPath = API_ENDPOINTS.LEVEL(game, level);

      navigate(levelPath);
    },
    [navigate],
  );

  return {
    handleLevelClick,
  };
};

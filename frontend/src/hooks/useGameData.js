import { useState, useEffect, useCallback } from 'react';
import { axios } from '../api/axios';
import { API_ENDPOINTS } from '../constants/game';

export const useGameData = () => {
  const [game, setGame] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGame = useCallback(async () => {
    try {
      const response = await axios.get(API_ENDPOINTS.gameData);
      setGame(response.data);
    } catch (err) {
      console.error('Failed to fetch game data:', err);
      setError('Не удалось загрузить данные игры');
    }
  }, []);

  useEffect(() => {
    const initializeData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        await fetchGame();
      } catch (err) {
        console.error('Failed to initialize game data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    initializeData();
  }, [fetchGame]);

  return {
    game,

    isLoading,
    error,

    refetchData: () => Promise.all([fetchGame()]),
  };
};

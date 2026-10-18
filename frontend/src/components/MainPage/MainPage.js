import React from 'react';
import { Layout } from '../Layout/Layout';
import { Container } from './styled';

import { useGameData } from '../../hooks/useGameData';
import { useMapLayout } from './hooks/useMapLayout';
import { useNavigation } from './hooks/useNavigation';

import { ModuleCard } from './components/ModuleCard';
import { GameMap } from './components/GameMap';
import { LoadingState } from './components/LoadingState';
import { ErrorState } from './components/ErrorState';

export const MainPage = () => {
  const {
    game,
    isLoading: isGameDataLoading,
    error,
    refetchData,
  } = useGameData('forest');

  const { mapRef, theoreticalDimensions, convertCoordinates } = useMapLayout();

  const { handleLevelClick } = useNavigation();

  if (isGameDataLoading) {
    return (
      <Layout isGamePage>
        <Container>
          <LoadingState message="Загрузка игровых данных..." />
        </Container>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout isGamePage>
        <Container>
          <ErrorState message={error} onRetry={refetchData} />
        </Container>
      </Layout>
    );
  }

  return (
    <Layout isGamePage>
      <Container>
        <ModuleCard levelsCount={game.levels} />

        <GameMap
          mapRef={mapRef}
          theoreticalDimensions={theoreticalDimensions}
          convertCoordinates={convertCoordinates}
          onLevelClick={(level) => handleLevelClick('forest', level)}
          isLevelCompleted={false}
          isLevelCurrent={false}
          isLevelAvailable={true}
        />
      </Container>
    </Layout>
  );
};

MainPage.displayName = 'MainPage';

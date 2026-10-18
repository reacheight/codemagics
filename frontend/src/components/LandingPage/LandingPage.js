import React, { lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { ActionButton } from '../ActionButton/ActionButton';
import codemagicsVideo from '../../assets/codemagics.webm';
import theoryImage from '../../assets/theory.webp';
import cloudImage from '../../assets/cloud.webp';
import tgPostImage from '../../assets/tg-post.jpg';
import tgLogo from '../../assets/tg-logo.png';
import { ReactComponent as TelegramIcon } from '../../assets/telegram.svg';
import {
  LandingContainer,
  HeroContainer,
  HeroSection,
  LeftColumn,
  RightColumn,
  Title,
  Subtitle,
  FeaturesContainer,
  FeatureSection,
  FeatureContent,
  FeatureImage,
  FeatureVideo,
  FeatureTitle,
  FeatureDescription,
  CloudsContainer,
  CloudImage,
  TelegramPostContainer,
  TelegramPostWidget,
  TelegramPostHeader,
  TelegramChannelInfo,
  TelegramAvatar,
  TelegramChannelDetails,
  TelegramChannelName,
  TelegramChannelHandle,
  TelegramPostContent,
  TelegramPostImage,
  TelegramPostTextContent,
  TelegramPostTitle,
  TelegramPostText,
  TelegramPostFooter,
  TelegramPostTime,
  TelegramChannelLink,
} from './styled';
import { Button } from '../Button/Button';

const DemoLevel = lazy(() =>
  import('../DemoLevel/DemoLevel').then((module) => ({
    default: module.DemoLevel,
  })),
);

const TelegramPost = () => (
  <TelegramPostContainer>
    <TelegramPostWidget>
      <TelegramPostHeader>
        <TelegramChannelInfo
          onClick={() => window.open('https://t.me/codemagics', '_blank')}
        >
          <TelegramAvatar>
            <img src={tgLogo} alt="Telegram Logo" />
          </TelegramAvatar>
          <TelegramChannelDetails>
            <TelegramChannelName>CodeMagics</TelegramChannelName>
            <TelegramChannelHandle>@codemagics</TelegramChannelHandle>
          </TelegramChannelDetails>
        </TelegramChannelInfo>
      </TelegramPostHeader>
      <TelegramPostContent>
        <TelegramPostImage>
          <img src={tgPostImage} alt="ChatGPT vs первый уровень CodeMagics" />
        </TelegramPostImage>
        <TelegramPostTextContent>
          <TelegramPostTitle>
            <strong>ChatGPT</strong> vs первый уровень{' '}
            <strong>CodeMagics</strong>
          </TelegramPostTitle>
          <TelegramPostText>
            Мы попросили последнюю модель от OpenAI — GPT-5 — пройти первый
            первый уровень нашего первого модуля. Результаты шокировали...
          </TelegramPostText>
        </TelegramPostTextContent>
      </TelegramPostContent>
      <TelegramPostFooter>
        <TelegramPostTime>2 дня назад</TelegramPostTime>
        <TelegramChannelLink
          href="https://t.me/codemagics/14"
          target="_blank"
          rel="noopener noreferrer"
        >
          Читать в Telegram
        </TelegramChannelLink>
      </TelegramPostFooter>
    </TelegramPostWidget>
  </TelegramPostContainer>
);

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Layout isLanding>
      <LandingContainer>
        <HeroContainer>
          <CloudsContainer>
            <CloudImage
              src={cloudImage}
              alt="облако"
              size={250}
              top="2%"
              left="7%"
              opacity={0.7}
              direction="horizontal"
              duration={12}
              delay="0s"
            />
            <CloudImage
              src={cloudImage}
              alt="облако"
              size={350}
              top="12%"
              left="75%"
              opacity={0.7}
              direction="horizontal"
              duration={14}
              delay="4s"
            />
            <CloudImage
              src={cloudImage}
              alt="облако"
              size={500}
              top="50%"
              left="40%"
              opacity={0.7}
              direction="vertical"
              duration={8}
              delay="2s"
            />
          </CloudsContainer>
          <HeroSection>
            <LeftColumn>
              <ActionButton
                onClick={() => window.open('https://t.me/codemagics', '_blank')}
                variant="secondary"
                icon={<TelegramIcon />}
              >
                Наш Telegram канал
              </ActionButton>
              <Title>
                Бесплатная игра
                <br />
                для изучения основ программирования
                <br />
                на Python
              </Title>
              <Subtitle>
                Прямо в браузере — не нужно ничего устанавливать. Обучение с
                нуля, подходит для детей от 10 лет.
              </Subtitle>
              <Button
                disabled={false}
                shadowColor="#1B4B82"
                frontColor="#2D7CD4"
                alt={'Начать программировать'}
                onClick={() => navigate('/game')}
                width={300}
                height={50}
                shadowHeight={15}
                fontFamily="Montserrat"
              />
            </LeftColumn>
            <RightColumn>
              <DemoLevel />
            </RightColumn>
          </HeroSection>
        </HeroContainer>

        <FeaturesContainer>
          <FeatureSection>
            <FeatureContent>
              <FeatureTitle>Обучение — в&nbsp;игровом формате</FeatureTitle>
              <FeatureDescription>
                Ребёнок пишет код, чтобы управлять персонажем, решать
                головоломки и собирать награды — учебный процесс превращается в
                захватывающую игру.
              </FeatureDescription>
            </FeatureContent>
            <FeatureVideo>
              <video
                src={codemagicsVideo}
                alt="интерфейс игры для изучения программирования для детей"
                autoPlay
                loop
                muted
                playsInline
              />
            </FeatureVideo>
          </FeatureSection>

          <FeatureSection>
            <FeatureContent>
              <FeatureTitle>
                Идеально для первых шагов в программировании
              </FeatureTitle>
              <FeatureDescription>
                Каждый уровень начинается с необходимой теории — мы объясняем
                новые концепции простым языком и на наглядных примерах.
              </FeatureDescription>
            </FeatureContent>
            <FeatureImage>
              <img
                src={theoryImage}
                alt="пример теории темы для программирования для детей"
              />
            </FeatureImage>
          </FeatureSection>

          <TelegramPost />
        </FeaturesContainer>
      </LandingContainer>
    </Layout>
  );
};

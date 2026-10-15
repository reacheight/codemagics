import styled from 'styled-components';

export const LandingContainer = styled.div`
  min-height: 100vh;
  overflow: hidden;
`;

export const HeroContainer = styled.div`
  min-width: 100%;
  background: linear-gradient(
    to right,
    rgba(25, 118, 210, 0.5),
    rgba(33, 149, 243, 0.6)
  );
  padding-block: 200px;
  padding-inline: 20px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-top: 150px;
    padding-bottom: 10px;
  }
`;

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  width: 1300px;
  margin: 0 auto;
  justify-content: space-between;
  padding-top: 80px;
  padding-bottom: 100px;

  @media (max-width: 1340px) {
    width: 100%;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 0px;
    padding-bottom: 0px;
    gap: 0;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const RightColumn = styled.div`
  flex: 0.7;
  min-width: 0;
  height: 350px;
  padding-top: 50px;

  @media (max-width: 768px) {
    transform: scale(0.75);
    margin-right: 10%;
    padding-top: 0px;
  }
`;

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 56px;
  font-weight: 800;
  line-height: 1.1;
  color: #fff;
  margin-bottom: 40px;
  text-shadow: 0 2px 8px rgba(30, 58, 138, 0.3);
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 24px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  line-height: 30px;
  text-shadow: 0 2px 8px rgba(30, 58, 138, 0.3);
  color: rgba(255, 255, 255, 1);
  margin: 0;
  margin-bottom: 40px;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const FeaturesContainer = styled.div`
  min-width: 100%;
  background:
    linear-gradient(rgba(79, 142, 247, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(79, 142, 247, 0.06) 1px, transparent 1px),
    radial-gradient(
      1200px 400px at 85% 10%,
      rgba(99, 179, 237, 0.18),
      transparent 60%
    ),
    radial-gradient(
      900px 300px at 15% 35%,
      rgba(77, 133, 207, 0.12),
      transparent 60%
    ),
    radial-gradient(
      700px 240px at 50% 95%,
      rgba(45, 124, 212, 0.1),
      transparent 65%
    ),
    linear-gradient(#f7fbff, #eaf4ff);
  background-size:
    40px 40px,
    40px 40px,
    auto,
    auto,
    auto,
    auto;
  position: relative;
`;

export const FeatureSection = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 80px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;

  &:last-child {
    margin-bottom: 0;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 1340px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column !important;
    gap: 30px;
    padding: 60px 20px;
    text-align: center;
  }
`;

export const FeatureContent = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FeatureImage = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 500px;
    height: auto;
    border-radius: 16px;
    box-shadow: 10px 16px 12px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    img {
      border-radius: 10px;
    }
  }
`;

export const FeatureVideo = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 10px 16px 12px rgba(0, 0, 0, 0.3);

  video {
    max-width: 100%;
    max-height: 400px;
    height: auto;
    border-radius: 16px;
    object-fit: cover;
    transform: scaleX(1.02);
  }

  @media (max-width: 768px) {
    border-radius: 10px;

    video {
      border-radius: 10px;
      max-height: 300px;
    }
  }
`;

export const FeatureTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 42px;
  font-weight: 700;
  color: rgb(106, 193, 255);
  margin-bottom: 24px;
  line-height: 1.2;
  text-shadow:
    0 6px 30px rgb(255, 255, 255),
    6px 0px 30px rgb(255, 255, 255),
    -6px 0 30px rgb(255, 255, 255),
    0 -6px 30px rgb(255, 255, 255);

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const FeatureDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  line-height: 30px;
  color: #3c4d65;
  margin: 0;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const CurriculumContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1340px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const CurriculumSection = styled.div`
  display: flex;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const ModulesList = styled.div`
  flex: 0 0 250px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    flex: none;
  }
`;

export const ModuleCard = styled.div`
  background: ${(props) => (props.isActive ? 'linear-gradient(135deg, #4F8EF7 0%, #6AC1FF 100%)' : '#f8f9fa')};
  border-radius: 16px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${(props) => (props.isActive ? 'transparent' : '#e9ecef')};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: ${(props) => (props.isActive ? 'transparent' : '#6AC1FF')};
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const ModuleTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => (props.isActive ? '#fff' : '#1a202c')};
  margin: 0 0 8px 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ModuleSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: ${(props) => (props.isActive ? 'rgba(255, 255, 255, 0.8)' : '#64748b')};
  margin: 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CurriculumContent = styled.div`
  flex: 1;
  background: linear-gradient(
    to right,
    rgba(25, 118, 210, 0.5),
    rgba(33, 149, 243, 0.6)
  );
  border-radius: 20px;
  padding: 30px;
  border: 1px solid #e2e8f0;
  height: fit-content;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const CurriculumHeader = styled.div`
  margin-bottom: 32px;
`;

export const CurriculumBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const CurriculumLeftSection = styled.div`
  flex: 1;
`;

export const CurriculumRightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    align-items: flex-start;
    width: 100%;
  }
`;

export const CurriculumTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  font-weight: 700;
  text-shadow: 0 2px 8px rgba(30, 58, 138, 0.3);
  color: #fff;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const LevelsCount = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const TopicsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 768px) {
    gap: 8px;
    margin-bottom: 32px;
  }
`;

export const TopicTag = styled.span`
  background: #e2e8f0;
  color: #475569;
  padding: 8px 16px;
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

// Lightweight DemoLevel Skeleton Components (independent of DemoLevel imports)
export const DemoLevelSkeletonWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  background: linear-gradient(#99c979, #5f9f6e);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  min-height: 300px;
  opacity: 0.7;
`;

export const SkeletonMapContainer = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8%;

  @media (max-width: 768px) {
    margin-left: 5%;
  }
`;

export const SkeletonGameField = styled.div`
  display: grid;
  width: 200px;
  height: 200px;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(4, 50px);
  gap: 0;
`;

export const SkeletonCell = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  animation: pulse 1.5s ease-in-out infinite alternate;

  @keyframes pulse {
    0% {
      opacity: 0.6;
    }
    100% {
      opacity: 0.3;
    }
  }
`;

export const SkeletonEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  max-width: 250px;
  min-width: 250px;
  padding: 20px;
  justify-content: center;
`;

/* Контейнер для облаков */
export const CloudsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;

/* Отдельное облако */
export const CloudImage = styled.img`
  position: absolute;
  width: ${(props) => props.size || 80}px;
  height: auto;
  top: ${(props) => props.top || '20%'};
  left: ${(props) => props.left || '10%'};
  opacity: ${(props) => props.opacity || 0.7};
  animation: ${(props) => `float-${props.direction || 'horizontal'} ${props.duration || 15}s ease-in-out infinite`};
  animation-delay: ${(props) => props.delay || '0s'};
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.05))
    drop-shadow(0 4px 3px rgba(0, 0, 0, 0.13));

  @keyframes float-horizontal {
    0%,
    100% {
      transform: translateX(0px) translateY(0px);
    }
    50% {
      transform: translateX(30px) translateY(-10px);
    }
  }

  @keyframes float-vertical {
    0%,
    100% {
      transform: translateX(0px) translateY(0px);
    }
    50% {
      transform: translateX(10px) translateY(-20px);
    }
  }

  @keyframes float-diagonal {
    0%,
    100% {
      transform: translateX(0px) translateY(0px);
    }
    50% {
      transform: translateX(25px) translateY(-15px);
    }
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.size || 80) * 0.6}px;
  }
`;

/* Стили для виджета Telegram поста */
export const TelegramPostContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;

  @media (max-width: 1340px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const TelegramPostWidget = styled.div`
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 800px;
  width: 100%;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 900px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    border-radius: 16px;
  }
`;

export const TelegramPostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px 16px;
  border-bottom: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    padding: 16px 20px 12px;
  }
`;

export const TelegramChannelInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

export const TelegramAvatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const TelegramChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TelegramChannelName = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TelegramChannelHandle = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #888;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const TelegramPostContent = styled.div`
  display: flex;
  gap: 24px;
  padding: 24px 28px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    padding: 16px 20px;
  }
`;

export const TelegramPostImage = styled.div`
  flex: 0 0 180px;
  display: flex;
  align-items: flex-start;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
    justify-content: center;

    img {
      width: 70%;
      max-width: 300px;
    }
  }
`;

export const TelegramPostTextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const TelegramPostTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: normal;
  line-height: 1.3;
  color: #1a1a1a;
  margin: 0 0 12px 0;

  strong {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const TelegramPostText = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #1a1a1a;
  white-space: pre-line;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TelegramPostFooter = styled.div`
  padding: 16px 28px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    padding: 12px 20px 16px;
  }
`;

export const TelegramPostTime = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #888;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const TelegramChannelLink = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #0088cc;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #006699;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

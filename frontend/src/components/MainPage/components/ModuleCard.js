import React from 'react';
import {
  ModuleCard as StyledModuleCard,
  ModuleInfo,
  ModuleTitle,
  LevelCount,
  Description,
  Tags,
  Tag,
  ModulePreview,
  ModuleNumber,
} from '../styled';
import module1Preview from '../../../assets/module1-preview.webp';
import { MODULE_CONFIG, UI_TEXT } from '../constants';

export const ModuleCard = ({ levelsCount }) => {
  const { title, description, tags, mobileHiddenTagsCount } = MODULE_CONFIG;
  const { moduleNumber, levelsText, altText } = UI_TEXT;

  return (
    <StyledModuleCard>
      <ModulePreview>
        <img src={module1Preview} alt={altText} loading="lazy" />
        <ModuleNumber>{moduleNumber}</ModuleNumber>
      </ModulePreview>

      <ModuleInfo>
        <ModuleTitle>{title}</ModuleTitle>
        <LevelCount>
          {levelsCount} {levelsText}
        </LevelCount>

        <Description>{description}</Description>

        <Tags>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
          <Tag className="mobile-more-tags">+{mobileHiddenTagsCount} ещё</Tag>
        </Tags>
      </ModuleInfo>
    </StyledModuleCard>
  );
};

export const zoneToCells = (wizard) => {
  const zone = wizard.zone;
  const cells = [];
  
  for (let x = zone.x; x < zone.x + zone.height; x++) {
    for (let y = zone.y; y < zone.y + zone.width; y++) {
      cells.push({ x, y, isWizardAlive: wizard.alive });
    }
  }
  
  return cells;
};

export const wizardsToCells = (wizards) => {
  return wizards.flatMap(wizard => zoneToCells(wizard));
};
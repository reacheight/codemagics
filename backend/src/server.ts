import { createServer } from 'http';
import express, { type Request, type Response } from 'express';

import { levels } from './levels.js';
import { instructions } from './instructions.js';
import LevelRunner from './LevelRunner.js';
import esper from 'esper.js';
import { cors } from './middlewares.js';
import CodeAnalyzer from './CodeAnalyzer.js';
import { games } from './games.js';
import { startingCode } from './startingCode.js';

esper.plugin('lang-python');

const port = Number(process.env.CODEMAGICS_PORT ?? 9000);
const app = express();

app.use(express.json());
app.use(cors);

type GameLevelParams = { game: string; id: string };
type IdParams = { id: string };

app.get('/games/:id', (req: Request<IdParams>, res: Response) => {
  const game = games[req.params.id];
  if (game === undefined)
    return res.status(404).json({ error: 'Game not found' });
  res.json(game);
});

app.get('/:game/level/:id', (req: Request<GameLevelParams>, res: Response) => {
  const level = levels[req.params.game]?.[req.params.id];
  if (level === undefined)
    return res.status(404).json({ error: 'Level not found' });
  res.json(level);
});

app.get(
  '/:game/level/:id/instructions',
  (req: Request<GameLevelParams>, res: Response) => {
    const instruction = instructions[req.params.game]?.[req.params.id];
    if (instruction === undefined)
      return res.status(404).json({ error: 'Instructions not found' });
    res.json(instruction);
  },
);

app.get(
  '/:game/level/:id/startingCode',
  (req: Request<GameLevelParams>, res: Response) => {
    const code = startingCode[req.params.game]?.[req.params.id];
    if (code === undefined)
      return res.status(404).json({ error: 'Starting code not found' });
    res.json(code);
  },
);

app.post(
  '/:game/level/:id/run',
  (req: Request<GameLevelParams, unknown, { code: string }>, res: Response) => {
    const level = levels[req.params.game]?.[req.params.id];
    if (level === undefined)
      return res.status(404).json({ error: 'Level not found' });

    const analyzer = new CodeAnalyzer();
    const errors = analyzer.analyze(
      req.body.code,
      level.onlyVariablesInAttack,
      level.onlyVariablesInSwitch,
    );
    if (errors.length > 0) return res.status(400).json({ errors });

    const runner = new LevelRunner(level);
    const result = runner.run(req.body.code);
    if (result.errors) return res.status(400).json(result);

    res.json(result);
  },
);

const server = createServer(app);
server.listen(port, () => {
  console.log(`Server started on ${port}`);
});

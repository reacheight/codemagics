export type Game = {
  levels: number;
};

export type Command = {
  code: string;
  description: string;
  example: string;
  autocompleteValue?: string;
};

export type Instructions = {
  instructions: string;
  example?: string;
  newCommands: Command[];
  prevCommands: Command[];
};

import { Difficulty } from './difficulty';

export class Square {
  id: number;
  value: string;
  help?: string;
  difficulty: Difficulty;
  group?: string;
  disabled?: boolean;

  constructor(
    id: number,
    value: string,
    difficulty: Difficulty,
    help?: string,
    group?: string,
    disabled?: boolean
  ) {
    this.id = id;
    this.value = value;
    this.help = help;
    this.difficulty = difficulty;
    this.group = group;
    this.disabled = disabled;
  }
}

export class SquareGroup {
  group: string;
  squares: Square[];

  constructor(group: string, squares: Square[]) {
    this.group = group;
    this.squares = squares;
  }
}

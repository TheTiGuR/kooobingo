import { Component, OnInit } from '@angular/core';
import { SquaresService } from './squares.service';
import { Square, SquareGroup } from './models/square';
import { Difficulty } from './models/difficulty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  optionInput: string = '';
  optionArray: string[] = [];
  loadedOptions: string[] = [];
  selectionOptions: Square[] = [];
  easyOptions: Square[] = [];
  mediumOptions: Square[] = [];
  hardOptions: Square[] = [];
  memeOptions: Square[] = [];
  groupOptions: SquareGroup[] = [];
  cardNumber: number = 1;

  constructor(private squaresService: SquaresService) {}

  ngOnInit(): void {
    this.selectionOptions = this.squaresService.getSquares();
    this.setDifficultyArrays();
    this.buildOptions();
  }

  public updateCard(): void {
    this.cardNumber++;
    this.selectionOptions = [];
    this.optionArray = [];
    this.buildOptions();
  }

  private buildOptions(): void {
    let squares: Square[] = [];
    let groupedItems: Square[] = this.getGroupedOptions();
    let easyOptions = this.getMultipleRandom(6, this.easyOptions.length);
    let mediumOptions = this.getMultipleRandom(9, this.mediumOptions.length);
    let hardOptions = this.getMultipleRandom(4, this.hardOptions.length);
    let memeOptions = this.getMultipleRandom(1, this.memeOptions.length);
    let squareOrder = this.getRandomSelection(24);

    groupedItems.forEach((item) => {
      squares.push(item);
    });
    easyOptions.forEach((num) => {
      squares.push(this.easyOptions[num]);
    });
    mediumOptions.forEach((num) => {
      squares.push(this.mediumOptions[num]);
    });
    hardOptions.forEach((num) => {
      squares.push(this.hardOptions[num]);
    });
    memeOptions.forEach((num) => {
      squares.push(this.memeOptions[num]);
    });
    console.log('squares:', squares);
    squareOrder.forEach((num) => {
      this.optionArray.push(squares[num].value);
    });
    console.log(this.optionArray);
  }

  private getGroupedOptions(): Square[] {
    let groupSquares: Square[] = [];

    this.groupOptions.forEach((group) => {
      let rand = this.getMultipleRandom(2, group.squares.length);
      rand.forEach((num) => {
        groupSquares.push(group.squares[num]);
      });
    });
    return groupSquares;
  }

  private setDifficultyArrays(): void {
    this.selectionOptions.forEach((option) => {
      if (!option.disabled && !option.group && option.value !== undefined) {
        if (option.difficulty === Difficulty.Easy) {
          this.easyOptions.push(option);
        } else if (option.difficulty === Difficulty.Medium) {
          this.mediumOptions.push(option);
        } else if (option.difficulty === Difficulty.Hard) {
          this.hardOptions.push(option);
        } else if (option.difficulty === Difficulty.Meme) {
          this.memeOptions.push(option);
        }
      }
      if (!option.disabled && option.group) {
        let groupIndex = this.groupOptions.findIndex(
          (group) => group.group === option.group
        );
        if (groupIndex === -1) {
          this.groupOptions.push(new SquareGroup(option.group, [option]));
        } else {
          this.groupOptions[groupIndex].squares.push(option);
        }
      }
    });
    console.log(this.groupOptions);
  }

  private getMultipleRandom(numToReturn: number, maxValues: number): number[] {
    let randomOptions: number[] = [];
    while (randomOptions.length < numToReturn) {
      randomOptions.push(Math.floor(Math.random() * maxValues));
      randomOptions = [...new Set(randomOptions)];
    }
    return randomOptions;
  }

  private getRandomSelection(length: number): number[] {
    let randomOptions: number[] = [];
    while (randomOptions.length < 24) {
      randomOptions.push(Math.floor(Math.random() * length));
      randomOptions = [...new Set(randomOptions)];
    }
    return randomOptions;
  }
}

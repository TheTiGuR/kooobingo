import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  optionInput: string = '';
  optionArray: string[] = [];
  loadedOptions: string[] = [];
  selectionOptions: string[] = [];
  cardNumber: number = 1;

  ngOnInit(): void {
    this.setOptions();
  }

  public updateCard(): void {
    this.cardNumber++;
    this.selectionOptions = [];
    this.optionArray = [];
    this.getRandomSelection(this.loadedOptions.length).forEach((num) => {
      this.selectionOptions.push(this.loadedOptions[num]);
    });
    this.optionArray = this.selectionOptions;
  }

  public setOptions(options?: string[]) {
    let myOptions: string[];
    if (options && options.length > 22) {
      myOptions = options;
    } else if (this.optionInput !== '') {
      myOptions = this.optionInput.split('\n');
    } else {
      myOptions = [
        '#69 Soccer Skin',
        '100k points while on ATK',
        'Acquire Mythic',
        'Burn Something',
        'Buy from Vending Machine',
        'Catch a Weapon While Fishing',
        'Center of Third Circle is Northeast',
        'Center of Third Circle is Northwest',
        'Center of Third Circle is Southeast',
        'Center of Third Circle is Southwest',
        'Dies In Storm',
        'Dies While In The Storm',
        'Drive a Quad Crasher',
        'Eat Food (Fish, fruit, veggies)',
        'Emotes Shortly After Spectating',
        'Find Purple Weapon',
        'Get in Car - Radio OFF',
        'Get in Car - Radio ON',
        'Gold weapon in first chest',
        'Grey Weapon Elimination',
        'Interacts with NPC',
        'Kill Wildlife',
        'Kill With Less Than 10HP Left',
        'Kill a Purple or Gold Crow',
        'Kill a Spiderman',
        'Kill an Aura',
        'Kill or be Killed While in Vehicle',
        'Kill via Melee',
        'Kill while Sliding',
        'Kill with Shotgun',
        'Kill with Sniper',
        'Killed by an NPC',
        'Kills Llama',
        'Knock down a logging tree',
        'Koooooom Dies Top 10',
        'Land at named POI',
        'Legendary Weapon From Regular Chest',
        'Level Up',
        'Light a Campfire',
        'Max Mats',
        'Open a Supply Drop',
        'Open/Visits a vault',
        'Out of Mats after 1st POI',
        'Purchase from NPC',
        'Ride the Foundation Statue Updraft',
        'Screams "PING!"',
        'Searches a cooler',
        'Shield From Big Ammo Crate',
        'Shoots Car with Enemy Inside',
        'Someone DQ\s From Bingo',
        'Take the L or Laugh It Up Occurs in Game',
        'Takes Fall Damage',
        'Takes a Rift',
        'Upgrade a Weapon',
        'Use Guzzle Juice',
        'Use Med Mist',
        'Uses a spider web',
        'White Heals From Big Ammo Crate',
      ];
    }
    this.loadedOptions = myOptions;
    this.getRandomSelection(this.loadedOptions.length).forEach((num) => {
      this.selectionOptions.push(myOptions[num]);
    });
    this.optionArray = this.selectionOptions;
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

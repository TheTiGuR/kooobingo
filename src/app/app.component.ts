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
        'Acquire Mythic Weapon',
        'Be on the Loot Boat',
        'Bounces on a Spider Web',
        'Bounty Poached',
        'Buy an Exotic Weapon',
        'Buy from Vending Machine',
        'Catch Something On Fire',
        'Catch a Fish While Fishing',
        'Catch a Weapon While Fishing',
        'Center of Third Circle is Northeast',
        'Center of Third Circle is Northwest',
        'Center of Third Circle is Southeast',
        'Center of Third Circle is Southwest',
        'Damage Player while Sliding',
        'Damaged by Bruce',
        'Damaged by an NPC',
        'Destroys a Tank / Battle Bus',
        'Dies In Storm',
        'Eat Food (Fish, fruit, veggies)',
        'Emotes Immediately After New Spectator',
        'First Aid Kit / Bandages From Big Ammo Crate',
        'First Zone Pulls Max Distance',
        'Get in Car - Radio is OFF',
        'Get in Car - Radio is ON',
        'Gold Weapon From Regular Chest',
        'Grey Weapon Elimination',
        'Hit a Player With a Vehicle',
        'Interacts With NPC',
        'Kill Non-Weapon Dropping Wildlife',
        'Kill With Less Than 10HP Left',
        'Kill a Purple or Gold Bird',
        'Kill a Spiderman',
        'Kill an Aura',
        'Kill an NPC for Mythic Weapon',
        'Kill or be Killed While in Vehicle',
        'Kill the Bounty or Avoid Being the Bounty',
        'Kill with Explosive',
        'Kill with Melee Weapon',
        'Kill with Shotgun',
        'Kill with Sniper',
        'Kills Llama',
        'Knock Down a Logging Tree',
        'Koooooom Dies Top 10',
        'Land at named POI',
        'Launches From IO Cannon',
        'Level Up',
        'Light a Campfire',
        'Open Epic Blue Chest',
        'Open IO / Seven Special Chest',
        'Open a Supply Drop',
        'Opens a cooler',
        'Purchase from NPC',
        'Ride the Foundation Statue Updraft',
        'Run Out of Ammo After First Fight',
        'Shield From Big Ammo Crate',
        'Shoots Enemy Vehicle',
        'Solid Gold+ Weapon Loadout',
        'Takes Fall Damage',
        'Takes a Rift',
        'Tires from Toolbox',
        'Upgrade a Weapon',
        'Use A Vertical Zipline',
        'Use Med Mist',
        'Visits a Vault Building',
        'Witnesses Take the L or Laugh It Up',
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

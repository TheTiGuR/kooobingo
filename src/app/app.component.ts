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
        'Attacked by Bruce',
        'Attacked by an NPC',
        'Be on the Loot Boat',
        'Bounce off Shrooms',
        'Bounce on a Spider Web',
        'Bounty Poached',
//        'Buy an Exotic Weapon',
        'Buy from Vending Machine',
        'Catch Something On Fire',
        'Catch a Fish While Fishing',
        'Catch a Weapon While Fishing',
        'Center of Third Circle is Northeast',
        'Center of Third Circle is Northwest',
        'Center of Third Circle is Southeast',
        'Center of Third Circle is Southwest',
        'Damage Opponent With Log or Boulder',
        'Damage Player while Sliding',
        'Destroy a Reality Sapling',
        'Dies In Storm',
        'Eat Food (Fish, fruit, veggies)',
        'Emotes Immediately After New Spectator',
        'First Aid Kit / Bandages From Big Ammo Crate',
        'First Zone Pulls Max Distance',
        'Get in Vehicle - Radio is OFF',
        'Get in Vehicle - Radio is ON',
        'Gold Weapon From Regular Chest',
        'Grey Weapon Elimination',
        'Hit a Player With a Vehicle',
        'Interacts With NPC',
        'Kill Llama',
        'Kill Non-Weapon Dropping Wildlife',
        'Kill Player with Explosives',
        'Kill Player with Melee Weapon',
        'Kill Player with Shotgun',
        'Kill Player with Sniper',
        'Kill With Less Than 10HP Left',
        'Kill a Player in the Air',
        'Kill a Purple or Gold Bird',
        'Kill or be Killed While in Vehicle',
        'Kill the Bounty or Avoid Being the Bounty',
        'Knock Down a Boulder',
        'Knock Down a Logging Tree',
        'Koooooom Dies Top 10',
        'Land at named POI',
        'Launches From Geyser',
        'Leave First POI without Max Health/Shield',
        'Level Up',
        'Light a Campfire',
        'Mount Gets Killed or Sleeps',
        'Open Epic Blue Chest',
        'Open IO/7/SW Special Chest',
        'Open a Buried Chest',
        'Open a Cooler',
        'Open a Safe',
        'Open a Supply Drop',
        'Pick Fruit From a Reality Sapling',
        'Pick Up A Crown',
        'Purchase from NPC',
        'Repair a Vehicle',
        'Ride Updraft on Reality Falls Tree',
        'Ride a Boar or Wolf',
        'Ride the Foundation Statue Updraft',
        'Ride the Rollercoaster',
        'Ride the Slipstream',
        'Run Out of Ammo After First Fight',
        'Shields From Big Ammo Crate',
        'Shoots Enemy Vehicle',
        'Solid Gold+ Weapon Loadout',
        'Take Fall Damage',
        'Take a Rift',
        'Tires from Toolbox',
        'Upgrade A Vehicle',
        'Upgrade a Weapon',
        'Use A Vertical Zipline',
        'Use Grappler Glove',
        'Use Med Mist',
        'Use Ripsaw Launcher',
        'Use a Baller',
        'Use a Repair Torch (Burn or Repair)',
        'Visit a Reality Zone: Coliseum',
        'Visit a Reality Zone: Coral',
        'Visit a Reality Zone: Neo',
        'Visit a Reality Zone: Pirate Cove',
        'Visit a Reality Zone: Wild West',
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

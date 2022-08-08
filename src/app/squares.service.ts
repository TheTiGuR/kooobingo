import { Injectable } from '@angular/core';

import { Square } from './models/square';
import { MOCKSQUARES } from './models/mock-squares';

@Injectable({
  providedIn: 'root',
})
export class SquaresService {
  constructor() {}

  getSquares(): Square[] {
    return MOCKSQUARES;
  }
}

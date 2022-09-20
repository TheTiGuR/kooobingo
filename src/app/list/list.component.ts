import { Component, OnInit } from '@angular/core';
import { Square } from '../models/square';
import { SquaresService } from '../squares.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  squares: Square[] = [];
  constructor(private squaresService: SquaresService) {}

  ngOnInit(): void {
    this.squares = this.squaresService.getSquares();
    console.log(this.squares)
  }
}

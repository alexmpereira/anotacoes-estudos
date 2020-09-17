import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() //valor de entrada
  rating: number =0;

  starWidth: number;

  ngOnChanges(): void {
    //senão funcionar com 94, coloque 74
    this.starWidth = this.rating * 74 / 5;
  }
}

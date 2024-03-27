import { Component } from '@angular/core';
interface Point {
  id: number;
  name: string;
  x: number;
  y: number;
}
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {
  points: Point[] = [];
  
  ngOnInit(): void {
    this.loadPointsFromLocalStorage();
  }

  loadPointsFromLocalStorage() {
    const points = localStorage.getItem('points');
    this.points = points ? JSON.parse(points) : [];
  }

  play() {}
  stop() {}
}

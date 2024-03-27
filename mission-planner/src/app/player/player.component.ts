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

  getLines() {
    return this.points.slice(1).map((point, i) => ({
      x1: this.points[i].x,
      y1: this.points[i].y,
      x2: point.x,
      y2: point.y,
    }));
  }

  play() {}
  stop() {}
}

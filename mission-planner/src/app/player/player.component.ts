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
  currentIndex: number = -1;
  playbackInterval: any = null;

  ngOnInit(): void {
    this.loadPointsFromLocalStorage();
  }
  //load the updated data from localStorage
  loadPointsFromLocalStorage() {
    const points = localStorage.getItem('points');
    this.points = points ? JSON.parse(points) : [];
  }
  //get the points from X,Y axies
  getLines() {
    return this.points.slice(1).map((point, i) => ({
      x1: this.points[i].x,
      y1: this.points[i].y,
      x2: point.x,
      y2: point.y,
    }));
  }
  // move the robot through all points sequentially until it reaches the last one, after every move it is paused 1 second
  play() {
    this.stop();
    if (this.currentIndex < this.points.length - 1) {
      this.currentIndex++;
    } else {
      return;
    }
    this.playbackInterval = setInterval(() => {
      if (this.currentIndex < this.points.length - 1) {
        this.currentIndex++;
      } else {
        this.stop();
      }
    }, 1000);
  }
  // stoping the movement of the robot. When the play button will be clicked again the robot will continue from the current point
  stop() {
    clearInterval(this.playbackInterval);
    this.playbackInterval = null;
  }
}

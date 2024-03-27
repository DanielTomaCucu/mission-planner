import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface Point {
  id: number;
  name: string;
  x: number;
  y: number;
}
@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css'],
})
export class PlannerComponent {
  point: Point = { id: 0, name: '', x: 0, y: 0 };
  dataSource = new MatTableDataSource<Point>([]);
  displayedColumns: string[] = ['id', 'name', 'x', 'y'];

  ngOnInit(): void {
    this.loadPointsFromLocalStorage();
  }
  
  // add new record in table
  addPoint() {
    if (
      this.point.name.trim() !== '' &&
      !isNaN(this.point.x) &&
      !isNaN(this.point.y)
    ) {
      const newPoint = { ...this.point, id: this.getNextId() };
      const data = this.dataSource.data.concat(newPoint);
      this.dataSource.data = data;
      this.savePointsToLocalStorage();
      this.point = { id: 0, name: '', x: 0, y: 0 };
    }
  }

  //generate a new id for every new input in table
  getNextId(): number {
    const data = this.dataSource.data;
    if (data.length === 0) return 1;
    const maxId = data.reduce((max, p) => Math.max(max, p.id || 0), 0);
    return maxId + 1;
  }

  //saving the data in localStorage, so the data is persistent even if we navigate on other pages or refresh the browser
  savePointsToLocalStorage() {
    localStorage.setItem('points', JSON.stringify(this.dataSource.data));
  }

  //check if in localStorage exist some data, if so add it in the table
  loadPointsFromLocalStorage() {
    const points = localStorage.getItem('points');
    this.dataSource.data = points ? JSON.parse(points) : [];
  }
}

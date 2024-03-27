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
  addPoint() {}
}

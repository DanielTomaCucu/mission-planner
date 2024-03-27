import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlannerRoutingModule } from './planner-routing.module';
import { PlannerComponent } from './planner.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [PlannerComponent],
  imports: [
    CommonModule,
    PlannerRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
  ],
})
export class PlannerModule {}

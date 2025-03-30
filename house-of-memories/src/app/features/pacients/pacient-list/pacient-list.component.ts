import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

export interface PeriodicElement {
  id: number;
  name: string;
  birthDate: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Isabela lovato', birthDate: new Date(2014, 12, 5) },
];

@Component({
  selector: 'app-pacient-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, DatePipe, RouterModule],
  templateUrl: './pacient-list.component.html',
  styleUrl: './pacient-list.component.scss',
})
export class PacientListComponent {
  displayedColumns: string[] = ['id', 'name', 'birthDate', 'actions'];
  dataSource = ELEMENT_DATA;
}

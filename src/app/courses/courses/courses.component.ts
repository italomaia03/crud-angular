import { Component } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses: Course[] = [{ id: '1', name: 'Angular', category: 'Front-End' }];
  displayedColumns = ['name', 'category'];
}

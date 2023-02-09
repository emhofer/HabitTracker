import { Component } from '@angular/core';
import { Habit } from 'src/app/models/Habit';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css'],
})
export class HabitsComponent {
  habits = ["Coding","Guitar"]
}

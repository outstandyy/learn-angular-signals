import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <p>Search string</p>
    <input type="text" (input)="setSearchString()">
    <hr>
    <ul>
      <li *ngFor="let user of filteredUsers">{{ user.name }}</li>
    </ul>
    <hr>
    <button (click)="addUser()">Add random user</button>
  `,
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search = signal('');
}

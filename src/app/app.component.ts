import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
    <p>Search string</p>
    <input type="text" (input)="setSearchString($event)">
    <hr>
    <ul>
      <li *ngFor="let user of filteredUsers()">{{ user.name }}</li>
    </ul>
    <hr>
    <button (click)="addUser()">Add random user</button>
  `,
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search: WritableSignal<string> = signal('');

  users: WritableSignal<User[]> = signal([
    { id: 1, name: 'Dmytro' },
    { id: 2, name: 'Daria' }
  ]);

  // filteredUsers: User[] = this.users();
  filteredUsers: Signal<User[]> = computed(
    () => this.users().filter(u => u.name.startsWith(this.search())),
  );

    setSearchString(e: Event) {
    const value: string = (e.target as HTMLInputElement).value;
    this.search.set(value);
    // this.filteredUsers = this.users().filter(u => u.name.startsWith(this.search()));
  }

  addUser() {
    this.users.update(users => [...users, { id: 3, name: 'John' }]);
    // this.users.mutate(users => [...users, { id: 3, name: 'John' }]);
  }
}

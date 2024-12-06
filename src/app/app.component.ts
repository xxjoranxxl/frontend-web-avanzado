import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';




@Component({
  selector: 'app-root',
  template: `
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <app-user-list></app-user-list>
      
    </div>
  `,
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    UserListComponent,
    UserCreateComponent,
    
  ]
})
export class AppComponent {}

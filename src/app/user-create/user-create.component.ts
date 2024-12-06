import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class UserCreateComponent {
  username: string = '';
  password: string = '';
  ingresos: { description: string; amount: number; date: string }[] = [];
  gastos: { description: string; amount: number; date: string }[] = [];
  isModalVisible: boolean = false; // O la inicialización adecuada
  @Output() modalClosed = new EventEmitter<void>();

  constructor(private userService: UserService) {}

  

  addIngreso() {
    this.ingresos.push({ description: '', amount: 0, date: new Date().toISOString().split('T')[0] });
  }

  removeIngreso(index: number) {
    this.ingresos.splice(index, 1);
  }

  addGasto() {
    this.gastos.push({ description: '', amount: 0, date: new Date().toISOString().split('T')[0] });
  }

  removeGasto(index: number) {
    this.gastos.splice(index, 1);
  }

  createUser() {
    const newUser = {
      username: this.username,
      password: this.password,
      ingresos: this.ingresos.map(ingreso => ({
        description: ingreso.description,
        amount: ingreso.amount,
        date: new Date(ingreso.date),
      })),
      gastos: this.gastos.map(gasto => ({
        description: gasto.description,
        amount: gasto.amount,
        date: new Date(gasto.date),
      }))
    };

    this.userService.createUser(newUser).subscribe(
      (response) => {
        console.log('Usuario creado:', response);
        this.username = '';
        this.password = '';
        this.ingresos = [];
        this.gastos = [];
        this.modalClosed.emit();
      },
      (error) => {
        console.error('Error al crear el usuario:', error);
      }
    );
  }

  createAndClose() {
    // Tu lógica para crear y cerrar el modal
  }

  closeModal(): void {
    this.modalClosed.emit(); // Emite el evento de cierre
  }

}

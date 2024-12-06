import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { UserCreateComponent } from '../user-create/user-create.component';
import { PipesModule } from '../pipes/pipes.module';  // Importa el módulo de pipes aquí
import { EditModalComponent } from '../edit-modal/edit-modal.component';  // Asegúrate de importar el componente de edición

// Interfaces fuera de la clase
interface Ingreso {
  description: string;
  amount: number;
  date: Date;
}

interface Gasto {
  description: string;
  amount: number;
  date: Date;
}

interface User {
  _id: string;
  username: string;
  ingresos: Ingreso[];
  gastos: Gasto[];
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],  // Vincula el archivo CSS aquí
  standalone: true,
  imports: [
    CommonModule,
    UserCreateComponent,
    PipesModule,  // Importa el módulo de pipes aquí
    EditModalComponent,  // Importa el componente de modal de edición
  ],
})

export class UserListComponent implements OnInit {
  users: User[] = []; // Cambiado de any[] a User[] para tipado estricto
  isModalVisible = false;
  isEditModalVisible = false; // Nueva propiedad para controlar la visibilidad del modal de edición
  selectedUser: User | null = null; // Nueva propiedad para almacenar el usuario seleccionado



  openModal(): void {
    this.isModalVisible = true;
    console.log('Abrir modal');
  }




  constructor(
    private userService: UserService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
      },
      error: (error) => {
        console.error('Error al obtener los usuarios:', error);
      },
    });
  }

  // Método para abrir el modal de edición
  openEditModal(user: User): void {
    this.selectedUser = user; // Asigna el usuario a editar
    this.isEditModalVisible = true; // Muestra el modal de edición
  }

  // Método para cerrar el modal de edición
  closeEditModal(): void {
    this.isEditModalVisible = false;
    this.selectedUser = null; // Limpia el usuario seleccionado
  }

  // Método para cerrar el modal de creación
  closeModal(): void {
    this.isModalVisible = false;
    console.log('Cerrar modal');
  }

  // Método para eliminar un usuario
  deleteUser(userId: string): void {
    if (!userId) {
      alert('ID de usuario no válido');
      return;
    }
  
    this.userService.deleteUser(userId).subscribe({
      next: () => {
        this.users = this.users.filter((user) => user._id !== userId);
        alert('Usuario eliminado exitosamente');
      },
      error: (error) => {
        console.error('Error al eliminar usuario:', error);
        alert('No se pudo eliminar el usuario. Revisa la consola para más detalles.');
      },
    });
  }

  // Método para calcular el total de ingresos
  getTotalIngresos(): number {
    let total = 0;
    this.users.forEach((user) => {
      user.ingresos?.forEach((ingreso: Ingreso) => {
        total += ingreso.amount;
      });
    });
    return total;
  }

  // Método para calcular el total de gastos
  getTotalGastos(): number {
    let total = 0;
    this.users.forEach((user) => {
      user.gastos?.forEach((gasto: Gasto) => {
        total += gasto.amount;
      });
    });
    return total;
  }

  // Maneja el evento de cierre del modal emitido por UserCreateComponent
  handleModalClose(): void {
    this.isModalVisible = false;
  }
}

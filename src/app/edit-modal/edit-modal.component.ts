import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class EditModalComponent {
  @Input() editData: any; // Usa un tipo específico si es posible
  @Output() modalClosed = new EventEmitter<void>();
  @Output() formSubmitted = new EventEmitter<any>(); // Emite el objeto de datos

  // Método para cerrar el modal
  closeModal(): void {
    this.modalClosed.emit();
  }

  // Método para manejar el envío del formulario
  submitForm(): void {
    // Emite el objeto de datos cuando el formulario es enviado
    this.formSubmitted.emit(this.editData);
    this.closeModal(); // Opcional: cierra el modal después de enviar
  }
}

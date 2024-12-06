import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.css'
})
export class ContactformComponent {
  isSubmitting = false;
  showAlert = false;

  onSubmit() {
    this.isSubmitting = true;

    setTimeout(() => {
      this.isSubmitting = false;
      this.showAlert = true; // Mostrar alerta

      // Ocultar alerta después de 3 segundos
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
    }, 2000);
  }
}

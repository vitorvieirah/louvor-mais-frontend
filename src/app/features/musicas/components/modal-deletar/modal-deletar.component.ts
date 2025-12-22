import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-deletar',
  standalone: true,
  imports: [],
  templateUrl: './modal-deletar.component.html',
  styleUrl: './modal-deletar.component.scss'
})
export class ModalDeletarComponent {
  @Output() fecharModal = new EventEmitter<void>();
  @Output() confirmarExclusao = new EventEmitter<void>();

  fechar() {
    this.fecharModal.emit();
  }

  confirmar() {
    this.confirmarExclusao.emit();
  }
}

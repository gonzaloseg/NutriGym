import { Component } from '@angular/core';
import { signal, computed } from '@angular/core';
import { UsuarioService } from '../../services/api_usuario_stock/api_usuario_stock.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    user = signal<any | null>(null);
    roleIsAdmin = computed(() => this.user().rol_usuario === 'Administrador'); 
    constructor(private api_usuario_stock: UsuarioService) { }

  ngOnInit(): void {
    this.user = this.api_usuario_stock.currentUser;

  }

}

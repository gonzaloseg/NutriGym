import { Component } from '@angular/core';
import { signal, computed } from '@angular/core';
import { UsuarioService } from '../../services/api_usuario_stock/api_usuario_stock.service';
import { CartService } from '../../services/cartservice/cartservice.service';
import { Producto } from '../../interfaces/producto';
import { CarritoItemDTO } from '../../interfaces/carritoitemdto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user = signal<any | null>(null);
  roleIsAdmin = computed(() => this.user()?.rol_usuario === 'Administrador');

  cartCount = signal(0); // inicia vacío

  constructor(
    private api_usuario_stock: UsuarioService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.user.set(this.api_usuario_stock.currentUser());

    // ✅ ahora cartService ya está inicializado
    this.cartCount = this.cartService.getCartCountSignal();
    this.cartService.updateCartCount(); // carga inicial
  }
}

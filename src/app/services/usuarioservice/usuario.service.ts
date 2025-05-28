import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  getUsuarioId(): number | null {
    if (this.isBrowser) {
      const id = JSON.parse(sessionStorage.getItem('usuario')!).id;
      return id ? parseInt(id, 10) : null;
    }
    return null;
  }
}
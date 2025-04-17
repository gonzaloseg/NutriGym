import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router'; 

export const sesionGuard: CanActivateFn = (route, state) => {
  const usuario = sessionStorage.getItem('usuario');
  const router = inject(Router);

  if (!usuario) {
    router.navigateByUrl('/login');
    return false;
    
  }
  
  return true;
};

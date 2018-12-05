import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {UsuarioService} from '../usuario/usuario.service';
//import { Observable } from 'rxjs';

@Injectable()

export class LoginGuardGuard implements CanActivate {

	constructor(
		public _usuarioService: UsuarioService,
		public router: Router
		){



	}

  canActivate(){
/*    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {*/
console.log('canactivate'+this._usuarioService.estaLogueado());
    	if (this._usuarioService.estaLogueado() != false){
//    		console.log('Paso el Guard');
    		return true;
    	} else {
    		console.log('Bloqueado por el Guard');
    		this.router.navigate(['/login']);
    		return false;
    	}
    	
    return true;
  }
}

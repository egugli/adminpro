import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../usuario/usuario.service';
// import { Router } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

	constructor(
			public _usuarioService: UsuarioService
		){
		
		//public router: Router
	}
  canActivate()
   	{

   		if(this._usuarioService.usuario.role === 'ROLE_ADMIN'){
   			return true;
   		} else {
   			console.log('Bloqueado por el ADMIN GUARD');
//  			this.router.navigate(['/login']);   esta es una opcion
			this._usuarioService.logout();  // esta es la otra
//   			return false;
   		}
    	
  	}
}

import { Component, OnInit } from '@angular/core';
import { Usuario } from '../User/usuario'
import { UsuarioService } from '../servicios/usuario.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {

  constructor(private UsuarioService: UsuarioService, private router: Router) { }
  public login: boolean = false

  ngOnInit() {
    this.ingresar();
  }



  registrar() {
    location.href = "registro";
  }

  nosotross() {
    location.href = "nosotros";
  }


  Correo: string;
  Password: string;

  ingresar(): void {
    if (this.UsuarioService.Validar(this.Correo, this.Password) == null) {
      this.login = false
      alert("Usuario invalido")
    } else {
      this.login = true
    }
  }

  validar() {

    this.UsuarioService.Validar(this.Correo, this.Password).subscribe(
      data => {

        if (data === true) {
          location.href = "acceso"
        } else {
          alert("Usuario invalido")
        }


      },
      err => console.log(err)
    )



  }


  miLista: Usuario[] = [];
  columnaTabla: string[] = [
    "correo",
    "password"
  ]


}

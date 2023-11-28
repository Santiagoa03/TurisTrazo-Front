import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ReservarTour } from 'src/app/interface/models-type';
import { ReservaService } from 'src/app/services/Reserva.service';

@Component({
  selector: 'reserva-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  listReservas: ReservarTour[] = [];
  mensajes: boolean = false;


  private idGUia: number = 0;
  constructor(private toastr: ToastrService, private authService: AuthService, private reservaService: ReservaService, private activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    if (this.authService.isLoggued() && this.authService.isGuide()) {
      const user = this.authService.getUser();
      if (user) {
        this.idGUia = user.numeroIdentidad;

        this.reservaService.reserva$.subscribe((reservas) => {
          this.listReservas = reservas;
        });
    
        
        this.reservaService.getAllReservaByGuiaId(this.idGUia).subscribe((reservas) => {
          this.listReservas = reservas;
        })

      }
    }
  }

  contactar(numeroContacto: string): void {
    window.open(`https:wa.me/${numeroContacto}`, '_blank')
  }

  eliminar(id: number): void {
    this.reservaService.deleteReserva(id,this.idGUia).subscribe(() => {
      this.toastr.success("El mensaje fue eliminiado correctamente");

    }, () => {
      this.toastr.error("Error al eliminar el mensaje");
    })
  }


}

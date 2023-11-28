import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Tour } from 'src/app/interface/models-type';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'gestion-tour',
  templateUrl: './gestion-tour.component.html',
  styleUrls: ['./gestion-tour.component.css']
})
export class GestionTourComponent implements OnInit {

  tourNoValidate: Tour[] = [];

  constructor(private toastr: ToastrService, private authService: AuthService, private tourService: TourService, private router: Router) { }


  ngOnInit(): void {

    if (this.authService.isAdmin()) {

      this.tourService.tour$.subscribe((tour) => {
        this.tourNoValidate = tour;
      })

      this.tourService.getAllNotValidated().subscribe((tour) => {
        this.tourNoValidate = tour;
      })

    } else {
      this.router.navigateByUrl("");
    }
  }

  verTour(id: number) {
    this.router.navigateByUrl(`/tour/${id}`);
  }


  aprobar(tour: Tour) {
    tour.validado = true;
    this.tourService.saveTour(tour).subscribe(() => {
      this.toastr.success("Se ha aprobado el tour");
    }, () => {
      this.toastr.error("Error al aprobar el tour");
    })
  }


  eliminar(tour: number) {
    this.tourService.deleteTour(tour).subscribe(() => {
      this.toastr.success("El tour ha sido eliminado correctamente");
    }, () => {
      this.toastr.error("Error al eliminar tour");
    })
  }


}

import { Usuario } from './../../../interface/models-type';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Resena, Tour } from 'src/app/interface/models-type';
import { NotificationService } from 'src/app/services/notification.service';
import { ResenaService } from 'src/app/services/resena.service';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'resena-registrar',
  templateUrl: './registrar-resena.component.html',
  styleUrls: ['./registrar-resena.component.css']
})
export class RegistrarResenaComponent implements OnInit {

  showFormResena: boolean = false;
  listTour: Tour[] = [];
  user!: Usuario | null;

  formResena = this.fb.group({
    titulo: ['', Validators.required],
    tour: [null, Validators.required],
    descripcion: ['', Validators.required],
    selectedRating: [null, Validators.required],
  });

  formSend: boolean = false;

  constructor(private tourService: TourService, private fb: FormBuilder, private toast: NotificationService, private authService: AuthService, private resenaService: ResenaService) { }

  ngOnInit(): void {
    this.tourService.getAllTour().subscribe(tour => this.listTour = tour);
  }


  toggleFormulario(): void {
    this.showFormResena = !this.showFormResena;
  }

  sendForm(): void {

    this.formSend = true;
    if (this.formResena.invalid) return;

    this.user = this.authService.getUser();
    if (this.user != null && this.user != undefined) {
      const tour: Tour = {
        id: this.formResena.get("tour")?.value || 0
      }
      const resena: Resena = {
        id: 35,
        turista: this.user,
        descripcion: this.formResena.get("descripcion")?.value || '',
        estrella: this.formResena.get("selectedRating")?.value || 0,
        titulo: this.formResena.get("titulo")?.value || '',
        tour: tour,
        fecha: new Date(),
      }
      this.resenaService.saveResena(resena).subscribe((resp) => {
        this.formResena.reset();
        this.formSend = false;
        this.showFormResena = false;
        alert("Reseña exitosa")
      })
    } else {

      return;
    }

  }

}

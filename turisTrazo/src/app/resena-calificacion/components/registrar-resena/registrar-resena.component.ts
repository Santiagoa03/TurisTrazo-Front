import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Tour } from 'src/app/interface/models-type';
import { NotificationService } from 'src/app/services/notification.service';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'resena-registrar',
  templateUrl: './registrar-resena.component.html',
  styleUrls: ['./registrar-resena.component.css']
})
export class RegistrarResenaComponent implements OnInit {

  mostrarFormularioResena: boolean = false;
  listTour: Tour[] = [];

  formularioResena = this.fb.group({
    titulo: ['', Validators.required],
    tour: [null, Validators.required],
    descripcion: ['', Validators.required],
    selectedRating: [null, Validators.required],
  });

  formSend: boolean = false;

  constructor(private tourService: TourService, private fb: FormBuilder, private toast: NotificationService) { }

  ngOnInit(): void {
    this.tourService.getAllTour().subscribe(tour => this.listTour = tour);
  }


  toggleFormulario(): void {
    this.mostrarFormularioResena = !this.mostrarFormularioResena;
  }

  sendForm(): void {
    this.formSend = true;
    if (this.formularioResena.invalid) return;
    this.toast.showNotification("Prueba", "Hola")



  }

}

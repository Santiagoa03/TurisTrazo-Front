import { ToastrService } from 'ngx-toastr';
import { NeighborhoodService } from './../../../services/neighborhood.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Barrio, Guia, ImagenSave, Tour } from 'src/app/interface/models-type';
import { GuiaService } from 'src/app/services/guia.service';
import { TourService } from 'src/app/services/tour.service';
import { ImagenService } from 'src/app/services/imagenService';

@Component({
  selector: 'tour-registrar-tour',
  templateUrl: './registrar-tour.component.html',
  styles: [
  ]
})
export class RegistrarTourComponent implements OnInit {

  formSend: boolean = false;
  selectedImages: File[] = [];
  selectedSecondaryImages: File[] = [];

  tourForm = this.formBuilder.group({
    tourName: ['', Validators.required],
    description: ['', Validators.required],
    temperature: ['', Validators.required],
    pricePerPerson: ['', Validators.required],
    neighborhood: [1],
  });

  barrios: Barrio[] = [];

  constructor(private imagenService: ImagenService, private toast: ToastrService, private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private tourService: TourService, private neighborhoodService: NeighborhoodService, private guiaService: GuiaService) { }

  ngOnInit(): void {

    if (this.authService.isGuide()) {

      this.neighborhoodService.getAllNeighborhood().subscribe((barrios) => {
        this.barrios = barrios;
      })

    } else {
      this.router.navigateByUrl("");
    }
  }


  sendTour(): void {
    this.formSend = true;
    let nameImag: string = "";
    let nameImagSec: string[] = [];


    if (this.tourForm.valid) {

      const idBarrio: number = Number((this.tourForm.get("neighborhood")?.value || 0));

      const barrio: Barrio | undefined = this.barrios.find(b => b.codigoPostal === idBarrio);

      if (barrio) {



        this.guiaService.findGuide(this.authService.getUser()?.numeroIdentidad || 0).subscribe((guia) => {
          if (guia) {

            if (this.selectedImages) {
              for (let i = 0; i < this.selectedImages.length; i++) {
                nameImag = this.selectedImages[0].name;
                nameImagSec.push(this.selectedImages[i].name)
              }
            }
            this.uploadImagesToServer();

            const tour: Tour = {
              id: 0,
              guia: guia,
              nombre: this.tourForm.get("tourName")?.value || '',
              descripcion: this.tourForm.get("description")?.value || '',
              imagen: nameImag,
              validado: false,
              precioPersona: Number(this.tourForm.get("pricePerPerson")?.value || 0),
              barrioMedellin: barrio,
              temperatura: this.tourForm.get("temperature")?.value || '',
            }

            this.tourService.saveTour(tour).subscribe((tourSave) => {
              this.tourForm.reset();
              this.formSend = false;
              this.toast.success("El tour ha sido enviado, será revisado en los próximos días");
          
              const imagenInfor: ImagenSave = {
                tour: tourSave,
                nameImages: nameImagSec
              }
              this.imagenService.saveImages(imagenInfor).subscribe();
            }, () => {
              this.toast.error("Error al enviar el tour");
            })
          } else {
            this.toast.error("¡Ups!, Algo salió mal")
          }
        })

      }

    } else {

      this.toast.error("Existe información sin diligenciar");

    }
  }

  uploadImagesToServer() {
    if (this.selectedImages.length > 0) {
      this.imagenService.uploadImages(this.selectedImages)
        .subscribe(
          (response) => {
          },
          (error) => {
          }
        );
    }
  }

  onImageChange(event: any) {
    this.selectedImages = event.target.files;
  }

}

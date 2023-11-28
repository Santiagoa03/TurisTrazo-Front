import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Imagen, ImagenData, Resena, ReservarTour, Tour } from 'src/app/interface/models-type';
import { TourService } from 'src/app/services/tour.service';
import { Location } from '@angular/common';
import { SitioInteresService } from 'src/app/services/sitio-interes.service';
import { ImagenService } from 'src/app/services/imagenService';
import { Subscription, forkJoin } from 'rxjs';
import { ResenaService } from 'src/app/services/resena.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ReservaService } from 'src/app/services/Reserva.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-detalle-tour',
  templateUrl: './detalle-tour.component.html',
  styleUrls: ['./detalle-tour.component.css']
})
export class DetalleTourComponent implements OnInit {

  formTour!: FormGroup;

  id!: number;
  tour!: Tour;
  validado: boolean = false;
  imagenes: Imagen[] = [];
  validadoSlider: boolean = false;
  slideIndex = 0;
  slideWidth = 330; // Ancho de cada slide (ajustar según diseño)
  listResena: Resena[] = [];
  resenasValidado: boolean = false;
  turista: Boolean = false;
  logueado: Boolean = false;

  isValidate: Boolean = false;

  imagenesDafaul: Imagen[] = [
    {
      id: 1,
      imagen: '',
      imagenData: '/./assets/educate.avif'
    },
    {
      id: 2,
      imagen: '',
      imagenData: '/./assets/comuna-13.jpg'
    }
  ]

  private subscription!: Subscription;;

  constructor(private authService: AuthService, private route: ActivatedRoute, private tourService: TourService, private router: Router, private location: Location, private sitioInteresService: SitioInteresService, private imagenService: ImagenService, private resenaService: ResenaService, private formBuilder: FormBuilder, private toastr: ToastrService, private reservaService: ReservaService) {

    this.formTour = this.formBuilder.group({
      fechaReserva: ['', Validators.required],
      numeroPersonas: ['', Validators.required],
      numeroContacto: ['', Validators.required],
      precioEstimado: [0]
    });
  }

  ngOnInit(): void {

    this.logueado = this.authService.isLoggued();
    this.turista = this.authService.isTourist();

    this.route.params.subscribe(params => {
      this.id = +params['id'];

      if (!isNaN(this.id)) {
        this.tourService.findTourById(Number(this.id)).subscribe((tour) => {

          this.isValidate = (this.authService.isAdmin() && Boolean(!tour.validado));
          if (tour.validado || this.isValidate) {
            this.tour = tour;
            this.tour.imagenData = '';
            this.getImages(this.tour.imagen);

          } else {
            this.router.navigateByUrl("");
          }
        }, () => {
          this.router.navigateByUrl("/sitio_interes")
        })

        const imagenInfo: ImagenData = {
          id: this.id,
          isSitio: false
        }

        this.imagenService.getAllImagen(imagenInfo).subscribe((imagen) => {
          this.imagenes = imagen;
          if (this.imagenes.length === 0) {
            this.imagenes = this.imagenesDafaul;
            this.validadoSlider = true;
          } else {
            this.getImagesForAll();
          }

        })
      } else {
        this.location.back();
      }
    });

    this.resenaService.resenas$.subscribe((resenas) => {
      this.listResena = resenas;
      this.resenasValidado = true;
    });

    this.getAllResenasById();
    this.startSlider();

    this.formTour.get('numeroPersonas')?.valueChanges.subscribe(() => {
      this.calcularPrecioTotal();
    });

  }

  get extendedListResena() {
    return [...this.listResena, ...this.listResena];
  }

  startSlider() {
    setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % this.listResena.length;
    }, 2000); // Cambia el número para ajustar la velocidad del desplazamiento
  }

  getImagesForAll() {
    const requests = this.imagenes.map(imagen =>
      this.sitioInteresService.getImages(imagen.imagen)
    );

    forkJoin(requests).subscribe(
      (data: Blob[]) => {
        data.forEach((blob, index) => {
          const reader = new FileReader();
          reader.onload = () => {
            this.imagenes[index].imagenData = reader.result as string;
            this.validadoSlider = true; // ¿Este valor debe cambiar aquí?
          };
          reader.readAsDataURL(blob);
        });
      },
      error => {
        console.error('Error al obtener imágenes:', error);
      }
    );
  }


  getImages(imagen: string) {
    this.sitioInteresService.getImages(imagen).subscribe(
      (data: Blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.tour.imagenData = reader.result as string;
          this.validado = true;
        };
        reader.readAsDataURL(data);
      },
      error => {
        console.error(`Error al obtener imagen para ${imagen}:`, error);
      }
    );
  }

  getAllResenasById() {
    this.resenaService.getAllResenaByTourId(this.id).subscribe((resenas) => {
      this.listResena = resenas;
      if (this.listResena.length > 0) { this.resenasValidado = true; }

    });
  }

  calcularPrecioTotal() {
    const numeroPersonas: number = this.formTour.get('numeroPersonas')?.value || 0;
    const valorTotal = numeroPersonas * (this.tour.precioPersona || 0);
    this.formTour.get("precioEstimado")?.setValue(valorTotal)
  }

  contactarGuia() {

    if (this.formTour.invalid) {
      this.toastr.error("Existen campos sin diligenciar")
    } else if (this.turista) {

      const reserva: ReservarTour = {
        id: 0,
        fecha: this.formTour.get("fechaReserva")?.value,
        numeroContacto: this.formTour.get("numeroContacto")?.value,
        numeroPersonas: this.formTour.get("numeroPersonas")?.value,
        precioEstimado: this.formTour.get("precioEstimado")?.value,
        tour: this.tour,
      }

      this.reservaService.saveReserva(reserva).subscribe(() => {
        this.toastr.success("Se ha registrado tu solicitud, el guía te contactará pronto.")
        this.formTour.reset();
      });

    }
  }
}


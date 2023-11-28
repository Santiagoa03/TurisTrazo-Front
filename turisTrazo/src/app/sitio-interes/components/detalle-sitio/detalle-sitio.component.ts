import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SitioInteresService } from 'src/app/services/sitio-interes.service';
import { Location } from '@angular/common';
import { Imagen, ImagenData, SitioInteres } from 'src/app/interface/models-type';
import { ImagenService } from 'src/app/services/imagenService';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'sitio-interes-detalle',
  templateUrl: './detalle-sitio.component.html',
  styleUrls: ['./detalle-sitio.component.css']
})
export class DetalleSitioComponent implements OnInit {

  sitio!: SitioInteres;
  id!: number;
  validado: boolean = false;
  validadoSlider: boolean = false;

  imagenes: Imagen[] = [];

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

  constructor(private sitioInteresService: SitioInteresService, private route: ActivatedRoute, private router: Router, private location: Location, private imagenService: ImagenService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = +params['id'];

      if (!isNaN(this.id)) {
        this.sitioInteresService.findSitio(Number(this.id)).subscribe((sitio) => {
          this.sitio = sitio;
          this.sitio.imagenData = '';
          this.getImages(this.sitio.imagen)
        }, () => {
          this.router.navigateByUrl("/sitio_interes")
        })

        const imagenInfo: ImagenData = {
          id: this.id,
          isSitio: true
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
          this.sitio.imagenData = reader.result as string;
          this.validado = true;
        };
        reader.readAsDataURL(data);
      },
      error => {
        console.error(`Error al obtener imagen para ${imagen}:`, error);
      }
    );
  }

}

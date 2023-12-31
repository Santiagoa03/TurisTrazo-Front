import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SitioInteresService } from 'src/app/services/sitio-interes.service';
import { Location } from '@angular/common';
import { SitioInteres } from 'src/app/interface/models-type';

@Component({
  selector: 'sitio-interes-detalle',
  templateUrl: './detalle-sitio.component.html',
  styleUrls: ['./detalle-sitio.component.css']
})
export class DetalleSitioComponent implements OnInit {

  sitio!: SitioInteres;
  id!: number;
  validado: boolean = false;

  constructor(private sitioInteresService: SitioInteresService, private route: ActivatedRoute, private router: Router, private location: Location) { }

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
      } else {
        this.location.back();
      }
    });
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

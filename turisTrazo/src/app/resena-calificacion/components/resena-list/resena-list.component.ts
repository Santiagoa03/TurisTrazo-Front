import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Resena } from 'src/app/interface/models-type';
import { ResenaService } from 'src/app/services/resena.service';

@Component({
  selector: 'resena-list',
  templateUrl: './resena-list.component.html',
  styles: [
  ]
})
export class ResenaListComponent implements OnInit {

  listResena: Resena[] = [];
  private subscription!: Subscription;

  constructor(private resenaService: ResenaService) { }


  ngOnInit() {
    this.resenaService.resenas$.subscribe((resenas) => {
      this.listResena = resenas;
    });

    this.getAllResenas();

  }

  getAllResenas() {
    this.resenaService.getAllResena().subscribe((resenas) => {
      this.listResena = resenas;
    });
  }
}



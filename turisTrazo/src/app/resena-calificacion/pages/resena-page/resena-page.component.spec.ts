import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenaPageComponent } from './resena-page.component';

describe('ResenaPageComponent', () => {
  let component: ResenaPageComponent;
  let fixture: ComponentFixture<ResenaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResenaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResenaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

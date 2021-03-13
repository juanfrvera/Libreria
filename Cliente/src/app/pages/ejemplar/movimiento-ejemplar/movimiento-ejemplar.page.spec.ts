import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovimientoEjemplarPage } from './movimiento-ejemplar.page';

describe('MovimientoEjemplarPage', () => {
  let component: MovimientoEjemplarPage;
  let fixture: ComponentFixture<MovimientoEjemplarPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientoEjemplarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovimientoEjemplarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DadosModalPage } from './dados-modal.page';

describe('DadosModalPage', () => {
  let component: DadosModalPage;
  let fixture: ComponentFixture<DadosModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadosModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

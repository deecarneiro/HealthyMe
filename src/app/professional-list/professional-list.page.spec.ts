import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfessionalListPage } from './professional-list.page';

describe('ProfessionalListPage', () => {
  let component: ProfessionalListPage;
  let fixture: ComponentFixture<ProfessionalListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfessionalListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

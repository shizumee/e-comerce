import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgAppComponent } from './mtg-app.component';

describe('MtgAppComponent', () => {
  let component: MtgAppComponent;
  let fixture: ComponentFixture<MtgAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtgAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtgAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationCheckupComponent } from './configuration-checkup.component';

describe('ConfigurationCheckupComponent', () => {
  let component: ConfigurationCheckupComponent;
  let fixture: ComponentFixture<ConfigurationCheckupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationCheckupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationCheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetprofilComponent } from './setprofil.component';

describe('SetprofilComponent', () => {
  let component: SetprofilComponent;
  let fixture: ComponentFixture<SetprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetprofilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

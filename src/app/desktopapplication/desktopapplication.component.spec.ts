import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopapplicationComponent } from './desktopapplication.component';

describe('DesktopapplicationComponent', () => {
  let component: DesktopapplicationComponent;
  let fixture: ComponentFixture<DesktopapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopapplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

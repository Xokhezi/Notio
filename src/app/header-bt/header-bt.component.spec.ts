import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBtComponent } from './header-bt.component';

describe('HeaderBtComponent', () => {
  let component: HeaderBtComponent;
  let fixture: ComponentFixture<HeaderBtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

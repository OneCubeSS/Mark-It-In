import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowwedoComponent } from './howwedo.component';

describe('HowwedoComponent', () => {
  let component: HowwedoComponent;
  let fixture: ComponentFixture<HowwedoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowwedoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowwedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

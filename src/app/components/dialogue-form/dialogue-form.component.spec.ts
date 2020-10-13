import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueFormComponent } from './dialogue-form.component';

describe('DialogueFormComponent', () => {
  let component: DialogueFormComponent;
  let fixture: ComponentFixture<DialogueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogueFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

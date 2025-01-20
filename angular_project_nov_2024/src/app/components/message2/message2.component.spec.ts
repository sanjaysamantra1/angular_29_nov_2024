import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Message2Component } from './message2.component';

describe('Message2Component', () => {
  let component: Message2Component;
  let fixture: ComponentFixture<Message2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Message2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Message2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

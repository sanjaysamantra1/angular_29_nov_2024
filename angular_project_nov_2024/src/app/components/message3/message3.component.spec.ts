import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Message3Component } from './message3.component';

describe('Message3Component', () => {
  let component: Message3Component;
  let fixture: ComponentFixture<Message3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Message3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Message3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

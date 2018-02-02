import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretBoxComponent } from './secret-box.component';

describe('SecretBoxComponent', () => {
  let component: SecretBoxComponent;
  let fixture: ComponentFixture<SecretBoxComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SecretBoxComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

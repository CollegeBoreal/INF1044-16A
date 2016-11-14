/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VilleListComponent } from './ville-list.component';

describe('VilleListComponent', () => {
  let component: VilleListComponent;
  let fixture: ComponentFixture<VilleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VilleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VilleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Devrait creer ', () => {
    expect(component).toBeTruthy();
  });
});

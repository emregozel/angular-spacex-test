import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { StoreModule } from '@ngrx/store';
import { ApolloModule } from 'apollo-angular';
import { LaunchFacadeService } from '../services/launch-facade.service';
import { launchReducers } from '../store';

import { LaunchDetailsComponent } from './launch-details.component';

describe('LaunchDetailsComponent', () => {
  let component: LaunchDetailsComponent;
  let fixture: ComponentFixture<LaunchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatCardModule,
        MatCarouselModule.forRoot(),
        StoreModule.forRoot(launchReducers),
        ApolloModule,
        BrowserAnimationsModule
      ],
      declarations: [LaunchDetailsComponent],
      providers: [LaunchFacadeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { ApolloModule } from 'apollo-angular';
import { DateAgoPipe } from '../pipes/date-ago.pipe';
import { LaunchFacadeService } from '../services/launch-facade.service';
import { PastLaunchesListGQL } from '../services/spacexGraphql.service';
import { launchReducers } from '../store';

import { LaunchListComponent } from './launch-list.component';

describe('LaunchListComponent', () => {
  let component: LaunchListComponent;
  let fixture: ComponentFixture<LaunchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatProgressSpinnerModule,
        MatCardModule,
        StoreModule.forRoot(launchReducers),
        ApolloModule

      ],
      declarations: [LaunchListComponent, DateAgoPipe],
      providers: [LaunchFacadeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

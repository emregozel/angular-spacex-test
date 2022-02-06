import { TestBed } from '@angular/core/testing';

import { LaunchFacadeService } from './launch-facade.service';
import { StoreModule } from '@ngrx/store';
import { launchReducers } from "../store/reducers/index"
import { PastLaunchesListGQL } from "./spacexGraphql.service";
import { Apollo, ApolloModule } from 'apollo-angular';
describe('LaunchFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot(launchReducers),
      ApolloModule
    ],
    declarations: [
      // The component that's being tested

    ],
    providers: [PastLaunchesListGQL]
  }));

  it('should be created', () => {
    const service: LaunchFacadeService = TestBed.get(LaunchFacadeService);
    expect(service).toBeTruthy();
  });
});

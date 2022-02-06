import { LaunchListState } from "./../store/reducers/launch-list.reducer";
import { map } from "rxjs/operators";
import { PastLaunchesListGQL } from "./spacexGraphql.service";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadLaunchDetail, loadLaunchList } from "../store/actions";
import * as launchListQuery from "../store/selectors";
import { LaunchDetailState } from "../store";

@Injectable({
  providedIn: "root"
})
export class LaunchFacadeService {
  launchListState$ = this.store.select(launchListQuery.getLaunchListState);
  launchList$ = this.store.select(launchListQuery.getLaunchList);
  launchListLoaded$ = this.store.select(launchListQuery.getLaunchListLoaded);
  launchListLoading$ = this.store.select(launchListQuery.getLaunchListLoading);

  launchDetailState$ = this.launchDetailStore.select(launchListQuery.getLaunchDetailState);
  launchDetail$ = this.launchDetailStore.select(launchListQuery.getLaunchDetail);
  launchDetailLoaded$ = this.launchDetailStore.select(launchListQuery.getLaunchDetailLoaded);
  launchDetailLoading$ = this.launchDetailStore.select(launchListQuery.getLaunchDetailLoading);

  constructor(
    private readonly store: Store<LaunchListState>,
    private readonly launchDetailStore: Store<LaunchDetailState>,
    private readonly pastLaunchesService: PastLaunchesListGQL
  ) { }

  pastLaunchListStoreCache() {
    this.store.dispatch(loadLaunchList());
    return this.launchListState$;
  }

  pastLaunchDetailStoreCache(id) {
    this.launchDetailStore.dispatch(loadLaunchDetail({ param: id }));
    return this.launchDetail$;
  }

  pastLaunchListFacade() {
    return this.pastLaunchesService
      .fetch({ limit: 30 })
      .pipe(map(res => res.data.launchesPast));
  }
}

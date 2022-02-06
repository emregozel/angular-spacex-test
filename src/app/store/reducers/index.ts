import { ActionReducerMap } from "@ngrx/store";
import * as fromLaunchList from "./launch-list.reducer";
import * as fromLaunchDetail from "./launch.detail.reducer";

export interface LaunchListState {
  launchList: fromLaunchList.LaunchListState;
  launchhDetail: fromLaunchDetail.LaunchDetailState;
}

export const launchReducers: ActionReducerMap<LaunchListState, any> = {
  launchList: fromLaunchList.reducer,
  launchhDetail: fromLaunchDetail.reducer
};


export interface LaunchDetailState {
  launchhDetail: fromLaunchDetail.LaunchDetailState;
}

// export const launchDetailReducers: ActionReducerMap<LaunchDetailState, any> = {
//   launchhDetail: fromLaunchDetail.reducer
// };

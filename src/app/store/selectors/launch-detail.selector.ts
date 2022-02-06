import { LaunchDetailState } from "../reducers";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getLaunchDetailState = createFeatureSelector<LaunchDetailState>(
    "launchhDetail"
);

export const getLaunchDetail = createSelector(
    getLaunchDetailState,
    (state: any) => {
        return state.data;
    }
);

export const getLaunchDetailLoaded = createSelector(
    getLaunchDetailState,
    (state: any) => state.loaded
);

export const getLaunchDetailLoading = createSelector(
    getLaunchDetailState,
    (state: any) => state.loading
);

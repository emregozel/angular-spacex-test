import { createAction, props } from "@ngrx/store";

export const loadLaunchDetail = createAction("[Launch] Load Launch Detail", props<{ param: any }>());

export const loadLaundDetailSuccess = createAction(
    "[Launch] Load Detail Success",
    props<{ payload: any }>()
);

export const loadLaunchDetailFail = createAction(
    "[Launch] Load Detail Fail",
    props<{ payload: any }>()
);

export type LaunchDetailAction =
    | typeof loadLaunchDetail
    | typeof loadLaundDetailSuccess
    | typeof loadLaunchDetailFail;
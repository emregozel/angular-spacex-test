import { createReducer, on } from "@ngrx/store";
import {
  LaunchListAction,
  loadLaunchList,
  loadLaunchListFail,
  loadLaunchListSuccess
} from "../actions";

export type LaunchListState = any;


const initialState: LaunchListState = {
  data: [],
  loaded: false,
  loading: false,
  error: null
};
const getIntialStateWithDummyData = () => {
  if (initialState.data.length == 0) {
    for (let index = 0; index < 30; index++) {
      initialState.data.push({ id: index })

    }
  }
  return initialState;
}

const launchListReducer = createReducer(
  getIntialStateWithDummyData(),
  on(loadLaunchList, state => ({
    ...state,
    loading: true,
    loaded: false
  })),
  on(loadLaunchListSuccess, (state, { payload }) => {
    return {
      ...state,
      data: payload,
      loading: false,
      loaded: true
    };
  }),
  on(loadLaunchListFail, (state, { payload }) => ({
    ...getIntialStateWithDummyData(),
    error: payload
  }))
);

export function reducer(
  state: LaunchListState | undefined,
  action: LaunchListAction
) {
  return launchListReducer(state, action);
}

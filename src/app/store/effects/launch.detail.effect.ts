import { LaunchDetailsGQL, PastLaunchesListGQL } from "./../../services/spacexGraphql.service";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
    loadLaunchDetail,
    loadLaunchDetailFail,
    loadLaundDetailSuccess
} from "../actions";
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class LaunchDetailEffects {
    constructor(
        private actions$: Actions,
        private readonly launchDetailsService: LaunchDetailsGQL
    ) { }

    launchhDetail$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadLaunchDetail),
            switchMap((action) =>

                this.launchDetailsService.fetch({ id: action.param as string }).pipe(
                    map((response: any) =>
                        loadLaundDetailSuccess({
                            payload: response.data.launch as any
                        })
                    ),
                    catchError(error => of(loadLaunchDetailFail(error)))
                )
            )
        )
    );
}

import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LaunchFacadeService } from "../services/launch-facade.service";
@Component({
  selector: "app-launch-details",
  templateUrl: "./launch-details.component.html",
  styleUrls: ["./launch-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly launchFacade: LaunchFacadeService
  ) {}
  launchDetails$ = this.launchFacade.pastLaunchDetailStoreCache(this.route.snapshot.paramMap.get('id'));
}

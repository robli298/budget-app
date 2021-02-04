import { Injectable } from "@angular/core";
import { SocialMediaService } from "@app/services";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from 'rxjs/operators';
import * as fromAppActions from "./app.actions";

@Injectable()
export class AppEffects {
    constructor(private actions$: Actions,
        private socialMediaService: SocialMediaService) { }

    loadRequest$ = createEffect(() => this.actions$.pipe(ofType(fromAppActions.requestLoadSocialMedias), switchMap(() =>
        this.socialMediaService.load().pipe(map(socialMedias =>
            fromAppActions.loadSocialMediasSuccess({ socialMedias })))
    )));
}
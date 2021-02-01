import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { SocialMediaService } from "../core/services";
import { loadSocialMediasSuccess, requestLoadSocialMedias } from "./app.actions";

@Injectable()
export class AppEffects {
    constructor(private actions$: Actions,
        private socialMediaService: SocialMediaService) { }

    loadRequest$ = createEffect(() => this.actions$.pipe(ofType(requestLoadSocialMedias), switchMap(() =>
        this.socialMediaService.load().pipe(map(socialMedias =>
            loadSocialMediasSuccess({ socialMedias }), shareReplay(1)))
    )));
}
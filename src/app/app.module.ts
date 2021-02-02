import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppConfigService } from '@app/services';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './features/auth/auth.module';
import { AppEffects } from './store/app.effects';
import * as fromApp from './store/app.reducer';

export function initializeApp(
  appConfig: AppConfigService
) {
  return () => appConfig.loadConfiguration();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, BrowserAnimationsModule, HttpClientModule, CoreModule, AuthModule, StoreModule.forRoot({ [fromApp.appFeatureKey]: fromApp.reducer}), EffectsModule.forRoot([AppEffects])],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [AppConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

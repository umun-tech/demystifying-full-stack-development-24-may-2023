import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IonicStorageModule } from "@ionic/storage-angular";
import { ComponentsConfigModule, CoreModule } from "@umun-tech/core";
import { IamModule } from "@umun-tech/iam";
import { OrganizationConfigModule } from "@umun-tech/organization";
import { FormModule } from "@umun-tech/form";
import { CurrencyPipe, DatePipe } from "@angular/common";
import { MAT_AUTOCOMPLETE_SCROLL_STRATEGY } from "@angular/material/autocomplete";
import { scrollFactory } from "@umun-tech/entity";
import { Overlay } from "@angular/cdk/overlay";
import { MAT_CHIPS_DEFAULT_OPTIONS } from "@angular/material/chips";
import { COMMA, ENTER } from "@angular/cdk/keycodes";


import { __login, _home_, __home,
_no_organization_, _select_organization_, AppRoutingModule } from "./app-routing.module";
import { EmployeeViewComponent } from "./employee-view/employee-view.component";
import { EmployeeCreateComponent } from "./employee-create/employee-create.component";
import { FormsModule } from "@angular/forms";

export const baseURL = 'http://localhost:8080';
export var app_name = "Sample App";
export var app_name_short = "Sample App";
export const version = {
  number: "1",
  versionToDisplay: "0.0.1",
  color: "danger",
  stage: "dev"
};

@NgModule({
  declarations: [
    AppComponent,
    EmployeeViewComponent,
    EmployeeCreateComponent
  ],
  entryComponents: [],
  imports: [BrowserModule.withServerTransition({ appId: "serverApp" }),
    IonicModule.forRoot({
      mode: "ios"
    }), AppRoutingModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot({
      name: app_name
    }),
    CoreModule.forRoot({
        apiURL: baseURL + "/api",
        baseURL: baseURL,
        appName: app_name,
        appIconSmall: "assets/icon.png",
        appNameShort: app_name_short,
        version: version
      }
    ),
    IamModule.forRoot({
      frontEndVersion: version.number,
      appId: app_name,
      routeAfterLogout: __login,
      routeAfterLogin: _home_,
      routeInGuard: __home,
      loginDisclaimer: "I understand and accept the EULA, Privacy Policy, and Disclaimer when I hit the LOGIN button.",
      loginDisclaimerMore: `Disclaimer More`,
      loginSubtitle: "Umun",
      userTypeNamesToDisplay: ["User", "U1", "U2", "U3", "U4", "U5"],
      indexUrl: "/"
    }),
    ComponentsConfigModule.forRoot({
      icon: "assets/icon.png",
      appName: app_name
    }),
    OrganizationConfigModule.forRoot({
      noOrganizationRoute: _no_organization_,
      afterOrganizationCreateRoute: _home_,
      selectOrganizationRoute: _select_organization_
    }),
    FormModule,
    FormsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DatePipe,
    CurrencyPipe,
    {
      provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
      useFactory: scrollFactory,
      deps: [Overlay]
    },
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [ENTER, COMMA]
      }
    }],
  bootstrap: [AppComponent],

})
export class AppModule { }

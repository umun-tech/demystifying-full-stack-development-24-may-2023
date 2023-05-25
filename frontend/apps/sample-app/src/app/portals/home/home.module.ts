import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { IamComponentsModule } from "@umun-tech/iam";
import { CoreModule } from "@umun-tech/core";

import { HomePortal } from "./home.portal";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    IamComponentsModule,
    CoreModule,
  ],
  declarations: [HomePortal],

})
export class HomeModule {

}
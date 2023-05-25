import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomePortal } from "./home.portal";


const routes: Routes = [
  {
    path: '',
    component: HomePortal,
    children: [
      //default path
      {
        path: '',
        redirectTo: 'todo: add default page',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}

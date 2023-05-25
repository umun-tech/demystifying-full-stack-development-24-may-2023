import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { LoggedInGuard } from "@umun-tech/iam";
import { OrganizationSelectedGuard } from "@umun-tech/organization";

    export const __home = "portal-35";
export const _home_ = `/${__home}`;


export const __login = "login";
export const __register = "register";

export const __no_organization = "choose-organization";
export const _no_organization_ = `/${__no_organization}`;

export const __select_organization = "select-organization";
export const _select_organization_ = `/${__select_organization}`;

const routes: Routes = [

        {
    path: __home,
    loadChildren: () => import("./portals/home/home.module").then(m => m.HomeModule),
    canLoad: [LoggedInGuard, OrganizationSelectedGuard],
    canActivate: [OrganizationSelectedGuard]
  },
 {
    path: __login,
    loadChildren: () => import("@umun-tech/iam").then(m => m.LoginPageModule)
  },
  {
    path: __register,
    loadChildren: () => import("@umun-tech/iam").then(m => m.RegisterModule)
  },
  {
    path: __no_organization,
    loadChildren: () => import("@umun-tech/organization").then(m => m.CreateOrganizationModule),
    canLoad: [LoggedInGuard]
  },
  {
    path: __select_organization,
    loadChildren: () => import("@umun-tech/access").then(m => m.SelectOrganizationModule),
    canLoad: [LoggedInGuard]
  },
  {
    path: "activate",
    loadChildren: () => import("@umun-tech/iam").then(m => m.CompleteRegistrationModule)
  },
  {
    path: "details/:entityId/:entityName/:home",
    loadChildren: () => import("@umun-tech/entity").then(m => m.EntityPageModule),
    canLoad: [LoggedInGuard, OrganizationSelectedGuard],
    canActivate: [OrganizationSelectedGuard],
    resolve: {
    }
  },
  {
    path: "details/:entityId/:entityName",
    redirectTo: `details/:entityId/:entityName/${__home}`,
    pathMatch: "full"
  },
  {
    path: "",
    redirectTo: __home,
    pathMatch: "full"
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

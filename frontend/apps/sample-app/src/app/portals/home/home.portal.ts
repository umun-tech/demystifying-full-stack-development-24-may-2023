import { Component } from "@angular/core";
import { List } from "immutable";
import { MenuItem, rootAnimation } from "@umun-tech/core";
import { Organization, OrganizationSelectionService } from "@umun-tech/organization";

import { PortalPageLogic } from "../portal-page.logic";


    import {__home} from '../../app-routing.module';
/**
* Add this to app-routing.module
*export const __home = 'home';
*
  {
   path: __home,    loadChildren: () => import('./portals/home/home.module').then(m => m.HomeModule),
    canLoad: [LoggedInGuard, OrganizationSelectedGuard],
    canActivate: [OrganizationSelectedGuard]
  },
*/

@Component({
  selector: "umn-home",
  templateUrl: "home.portal.html",
  styleUrls: ["home.portal.scss"],
  animations: [
    rootAnimation
  ]
})
export class HomePortal extends PortalPageLogic {


  setMenuItems = (org: Organization) => {
    const items = this.menuItems.filter(item => {
      if (!item.requiredPrivileges) {
        return true;
      }
      if (OrganizationSelectionService.hasPrivilege(item.requiredPrivileges)) {
        return true;
      }
      return false;
    });
    if (items.filter(item => item.inTab).length <= 3) {
      const orgItem = items.find(item => item.name == "Organizations");
      if (orgItem) {
        orgItem.inTab = true;
      }
    }
    this.menuItemsFiltered = List(items);
  };

  private menuItems: MenuItem[] = [

  ];
}

export const route = (portalName: string, entityName: string): string =>{
return `/${portalName}/${entityName}/${entityName}`
}
import { ChangeDetectorRef, Component } from "@angular/core";
import { List } from "immutable";
import { MenuItem, RestService } from "@umun-tech/core";
import { Organization, OrganizationSelectionService } from "@umun-tech/organization";
import { AccountAccessService } from "@umun-tech/access";
import { EntityPrefService } from "@umun-tech/entity";

@Component({
  template: ''
})
export abstract class PortalPageLogic {

  menuItemsFiltered!: List<MenuItem>;
  logoSmall = "assets/icon.png";

  selectedOrganization?: Organization

  abstract  setMenuItems: (organization: Organization) => void;

  constructor(private organizationService: OrganizationSelectionService,
              private accessService: AccountAccessService,
              private entityPrefService: EntityPrefService,
              private rest: RestService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.organizationService.getSelected().then(org => {
      this.selectedOrganization = org;
      this.setMenuItems(org);
      console.log(this.selectedOrganization?.myPrivileges)
      if (this.selectedOrganization.logoUrl) {
        this.logoSmall = this.rest.getBaseURL() + this.selectedOrganization.logoUrl
      }
      this.cdr.detectChanges()
    })
    this.accessService.promptAcceptRequest()
  }

  logoClicked($event: MouseEvent) {
    this.organizationService.showSelector($event);
  }

}

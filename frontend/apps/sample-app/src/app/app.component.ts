import { Component } from "@angular/core";
import { IonRouterOutlet, ModalController } from "@ionic/angular";
import { EmployeeCreateComponent } from "./employee-create/employee-create.component";

@Component({
  selector: 'sample-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private modalController: ModalController,
              ) {
  }
  async createButtonClicked() {

    let modal = await this.modalController.create({
      component: EmployeeCreateComponent,
      swipeToClose: true,
      animated: true,
    })
    modal.present();

  }
}

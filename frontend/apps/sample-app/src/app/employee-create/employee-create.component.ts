import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { EmployeeService } from "../employee.service";

@Component({
  selector: 'employee-create',
  templateUrl: 'employee-create.component.html',
  styleUrls: ['employee-create.component.scss']
})
export class EmployeeCreateComponent {
  name = "hi";
  role = "";

  constructor(private modalController: ModalController,
              private employeeService: EmployeeService
              ) {
  }

  saveButtonClicked() {
    console.log("save button clicked", this.name, this.role);
    this.employeeService.create(this.name, this.role).then(res=>{
      console.log(res)
      this.modalController.dismiss();
    })
  }
}

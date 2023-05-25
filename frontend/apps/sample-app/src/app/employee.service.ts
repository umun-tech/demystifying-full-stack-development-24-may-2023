import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {

  static readonly url = "http://localhost:8080/api/v1/employee"

  create(name: string, role: string) {
   return fetch(EmployeeService.url, {
      method: "POST",
     headers: {
       "Content-Type": "application/json",
       "Access-Control-Allow-Origin": "https://example.com" // Replace with the allowed origin
     },
      body: JSON.stringify({
        name: name,
        role: role
      })
    })
  }

}

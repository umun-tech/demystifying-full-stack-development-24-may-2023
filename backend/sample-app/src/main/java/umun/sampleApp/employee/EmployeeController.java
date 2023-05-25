package umun.sampleApp.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Employee employee) {
        //authentication & authorization
        return ResponseEntity.ok(employeeService.create(employee));
    }

    @GetMapping
    public ResponseEntity<?> read() {
        return ResponseEntity.ok(employeeService.read());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> read(@PathVariable("id") Long id) {
        return ResponseEntity.ok(employeeService.read(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Long id,
                                    @RequestBody Employee employee) {
        //authentication & authorization
        return ResponseEntity.ok(employeeService.update(id, employee));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        //authentication & authorization
        return ResponseEntity.ok(employeeService.delete(id));
    }

}

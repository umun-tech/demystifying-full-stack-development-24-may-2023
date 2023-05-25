package umun.sampleApp.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public Employee create(Employee employee) {
        //business logic
        return repository.saveAndFlush(employee);
    }

    public List<Employee> read() {
        return repository.findAll();
    }

    public Employee read(Long id) {
        //exception handling if not found.
        return repository.findOne(id);
    }

    public Employee update(Long id, Employee employee) {
        Employee savedEmployee = read(id);
        savedEmployee.setName(employee.getName());
        return repository.saveAndFlush(savedEmployee);
    }

    public String delete(Long id) {
        repository.delete(id);
        return "Employee deleted successfully";
    }
}

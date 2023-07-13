package realWorldApp.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@SpringBootApplication
@CrossOrigin(origins = "http://localhost:5173")
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @GetMapping(path = "/users")
    public User getUsers() {
      List<Transferencia> transferencias = new ArrayList<>();
      transferencias.add(new Transferencia("123456789", "John Doe", "solera@solera.com", 100.0));
      transferencias.add(new Transferencia("987654321", "solera@solera.com","Jane Smith",  -50.0));

      User user = new User("solera@solera.com", "bootcamp2", transferencias);
      return user;
    }

}

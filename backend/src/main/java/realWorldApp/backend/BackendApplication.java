package realWorldApp.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
@CrossOrigin(origins = "http://localhost:5173")
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
		
	}
	@GetMapping(path = "/users")
    public  User getUsers() {
        // Aquí puedes implementar la lógica para obtener los datos del usuario por su ID
        
    	User user = new User( "solera@solera.com", "bootcamp2");
        return user;
    }

}

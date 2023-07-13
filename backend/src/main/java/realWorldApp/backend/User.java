package realWorldApp.backend;
import java.util.ArrayList;
import java.io.Serializable;
import java.util.List;
public class User {
    private String email;
    private String password;
    private List<Transferencia> transferencias;

    public User() {
        super();
    }

    public User(String email, String password, List<Transferencia> transferencias) {
        this.email = email;
        this.password = password;
        this.transferencias = transferencias;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Transferencia> getTransferencias() {
        return transferencias;
    }

    public void setTransferencias(List<Transferencia> transferencias) {
        this.transferencias = transferencias;
    }
}

package realWorldApp.backend;
public class Transferencia {
    private String numeroTransferencia;
    private String nombreBeneficiario;
    private String nombreReceptor;
    private double cantidad;

    public Transferencia() {
        super();
    }

    public Transferencia(String numeroTransferencia, String nombreBeneficiario, String nombreReceptor, double cantidad) {
        this.numeroTransferencia = numeroTransferencia;
        this.nombreBeneficiario = nombreBeneficiario;
        this.nombreReceptor = nombreReceptor;
        this.cantidad = cantidad;
    }

    public String getNumeroTransferencia() {
        return numeroTransferencia;
    }

    public void setNumeroTransferencia(String numeroTransferencia) {
        this.numeroTransferencia = numeroTransferencia;
    }

    public String getNombreBeneficiario() {
        return nombreBeneficiario;
    }

    public void setNombreBeneficiario(String nombreBeneficiario) {
        this.nombreBeneficiario = nombreBeneficiario;
    }

    public String getNombreReceptor() {
        return nombreReceptor;
    }

    public void setNombreReceptor(String nombreReceptor) {
        this.nombreReceptor = nombreReceptor;
    }

    public double getCantidad() {
        return cantidad;
    }

    public void setCantidad(double cantidad) {
        this.cantidad = cantidad;
    }
}

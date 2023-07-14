package realWorldApp.backend;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class BackendApplicationTests {

    private ChromeDriver driver;

    @BeforeEach
    public void setUp() {
        // Configurar el driver de Chrome
        driver = new ChromeDriver();
    }

    @AfterEach
    public void tearDown() {
        // Cerrar el navegador después de cada prueba
        driver.quit();
    }

    @Test
    public void testNavigationToLoginPage() {
        // Prueba de navegación a la página de inicio de sesión
        driver.get("http://localhost:5173");
        assertEquals("http://localhost:5173/", driver.getCurrentUrl());
    }
    
    @Test
    public void testValidLogin() {
        // Navegar a la página de login
        driver.get("http://localhost:5173");

        // Rellenar el formulario de  login
        WebElement usernameInput = driver.findElement(By.xpath("//input[@class='inputUser']"));
        WebElement passwordInput = driver.findElement(By.xpath("//input[@type='password']"));
        WebElement loginButton = driver.findElement(By.xpath("//button[@type='button']"));

        usernameInput.sendKeys("solera@solera.com");
        passwordInput.sendKeys("bootcamp2");
        loginButton.click();


        String currentUrl = driver.getCurrentUrl();
        assertEquals("http://localhost:5173/setting", currentUrl);
    }
    @Test
    public void testInvalidLogin() {
        // Prueba de inicio de sesión inválido
        driver.get("http://localhost:5173");

        WebElement usernameInput = driver.findElement(By.xpath("//input[@class='inputUser']"));
        WebElement passwordInput = driver.findElement(By.xpath("//input[@type='password']"));
        WebElement loginButton = driver.findElement(By.xpath("//button[@type='button']"));

        usernameInput.sendKeys("usuarioIncorrecto");
        passwordInput.sendKeys("contraseñaIncorrecta");
        loginButton.click();

        // Verificar si se muestra un mensaje de error
        WebElement errorMessage = driver.findElement(By.xpath("//span[@class='error-message']"));
        assertNotNull(errorMessage);
    }
    @Test
    public void testLoginWithEmptyFields() {
        // Prueba de campos vacíos
        driver.get("http://localhost:5173");

        WebElement loginButton = driver.findElement(By.xpath("//button[@type='button']"));
        loginButton.click();

        // Verificar si se muestra un mensaje de error
        WebElement errorMessage = driver.findElement(By.xpath("//span[@class='error-message']"));
        assertNotNull(errorMessage);
    }
}


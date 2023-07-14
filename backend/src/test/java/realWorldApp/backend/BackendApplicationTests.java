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
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\isvaku.claure\\Downloads\\chromedriver_win32\\chromedriver.exe");
        driver = new ChromeDriver();
    }

    @AfterEach
    public void tearDown() {
        // Cerrar el navegador después de cada prueba
        driver.quit();
    }

    @Test
    public void testLogin() {
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

}

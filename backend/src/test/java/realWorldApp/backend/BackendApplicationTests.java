package realWorldApp.backend;

import org.openqa.selenium.By;

import org.openqa.selenium.WebElement;

import org.openqa.selenium.chrome.ChromeDriver;

import org.openqa.selenium.firefox.FirefoxDriver;
import org.junit.jupiter.api.Test;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.test.context.SpringBootTest;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

@SpringBootTest
class BackendApplicationTests {

	//enter with the good email
	@Test
	public  void testValidate () {
		  ChromeDriver driver = new ChromeDriver();
	        driver.get("http://localhost:5173/");

	        driver.findElement(By.xpath("//input[@type='text']")).sendKeys("solera@solera.com");
	        driver.findElement(By.xpath("//input[@type='password']")).sendKeys("bootcamp2");
	        driver.findElement(By.xpath("//button[@type='button']")).click();
	      
	}

}

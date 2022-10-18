package stepDefenition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks {

	public static WebDriver driver;

	@Before
	public void SetUp() {
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");

		driver = new ChromeDriver(); // WebDRiver is interface. chromedriver is the class implementing
										// webdriver.

	}

	@After
	public void TearDOwn() {

		driver.close();

	}

}

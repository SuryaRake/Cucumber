package stepDefenition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDef {

	WebDriver driver = Hooks.driver;

	@Given("I have already launched the application")
	public void i_have_already_launched_the_application() {
		// Write code here that turns the phrase above into concrete actions
		driver.get("https://accounts.simplilearn.com/user/login"); // using the object and get function calling the url
		driver.manage().window().maximize();

		driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);

	}

	@And("I clicked on LoginLink")
	public void i_clicked_on_loginlink() throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(5000);
		WebElement loginlink = driver.findElement(By.linkText("Log in"));
		loginlink.click();
	}

	@When("I enter correct username and password")
	public void i_enter_correct_username_and_password() {
		WebElement UserName = driver.findElement(By.name("user_login"));
		UserName.sendKeys("suryaksatheesan@gmail.com");
		WebElement paswrd = driver.findElement(By.id("password"));
		paswrd.sendKeys("Raaku@27");

	}

	@When("I click on LoginButton")
	public void i_click_on_LoginButton() {
		// Write code here that turns the phrase above into concrete actions
		WebElement loginbtn = driver.findElement(By.name("btn_login"));
		loginbtn.click();
	}

	@Then("I  should land on the home page")
	public void i_should_land_on_the_home_page() {
		// Write code here that turns the phrase above into concrete actions

	}

	@When("I enter incorrect username and password")
	public void i_enter_incorrect_username_and_password() {
		// Write code here that turns the phrase above into concrete actions
		WebElement UserName = driver.findElement(By.name("user_login"));
		UserName.sendKeys("surya.satheesan@qwer.com");
		WebElement paswrd = driver.findElement(By.id("password"));
		paswrd.sendKeys("Test@1234");
	}

	@Then("I  should get the error message {string}")
	public void i_should_get_the_error_message(String ExpError) {
		// Write code here that turns the phrase above into concrete actions
		WebElement errormsg = driver.findElement(By.id("msg_box"));

		String ActError = errormsg.getText(); // ACtual error message fetched and saved to ActErr
		Assert.assertEquals(ExpError, ActError);
	}

	@When("I enter username as {string} and password as {string}")
	public void i_enter_username_as_and_password_as(String UsrNmVal, String PswdVal) {
		// Write code here that turns the phrase above into concrete actions
		WebElement UserName = driver.findElement(By.name("user_login"));
		UserName.sendKeys(UsrNmVal);
		WebElement paswrd = driver.findElement(By.id("password"));
		paswrd.sendKeys(PswdVal);
	}

}

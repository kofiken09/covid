package stepdefinitions;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class Loginsteps {

    public static WebDriver driver;

    @Given("^I am on automation practice website$")
    public void i_am_on_automation_practice_website() throws Throwable {
        System.setProperty("webdriver.gecko.driver","C:\\Users\\chloe\\IdeaProjects\\covid\\drivers\\geckodriver.exe");

        driver = new FirefoxDriver();
        driver.get("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    }

    @When("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
    public void i_enter_and(String arg1, String arg2) throws Throwable {
        driver.findElement(By.id("email")).sendKeys("aaronopp@yahoo.com");
        driver.findElement(By.id("passwd")).sendKeys("kofiken");
    }

    @When("^I click on \"([^\"]*)\" to log into my account and select on \"([^\"]*)\"$")
    public void i_click_on_to_log_into_my_account_and_select_on(String arg1, String arg2) throws Throwable {
        driver.findElement(By.name("SubmitLogin")).click();
        driver.findElement(By.cssSelector(".sf-with-ul")).click();
    }

    @When("^select \"([^\"]*)\" and select \"([^\"]*)\"$")
    public void select_and_select(String arg1, String arg2) throws Throwable {
        driver.findElement(By.cssSelector("#subcategories > ul:nth-child(2) > li:nth-child(1) > div:nth-child(1)")).click();
        driver.findElement(By.cssSelector("li.ajax_block_product:nth-child(1) > div:nth-child(1) > div:nth-child(1)")).click();
    }


    @Then("^I add to \"([^\"]*)\" and \"([^\"]*)\"$")
    public void i_add_to_and(String arg1, String arg2) throws Throwable {
        driver.findElement(By.cssSelector("button.exclusive > span:nth-child(1)")).submit();
    }
}



package step_definitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class searchStepdefs {
    private WebDriver webDriver;
    public searchStepdefs(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @When("^User Click Search Field and input Apply for a number plate$")
    public void userClickSearchFieldAndInputApplyForANumberPlate() throws InterruptedException {
        WebElement searchFieldAndInput = webDriver.findElement(By.xpath("//section[@class='personalised-content']/div[@class='region']/div[1]//input[@name='q']"));
        searchFieldAndInput.click();
        searchFieldAndInput.sendKeys("Apply for a number plate");
        WebElement clickSearch = webDriver.findElement(By.xpath("//section[@class='personalised-content']/div[@class='region']/div[1]//button[@class='button button--primary']"));
        clickSearch.click();
        Thread.sleep(2000);
    }

    @Then("^User Click menu Find Locations$")
    public void userClickMenuFindLocations() throws InterruptedException {
        WebElement userClickMenuFindLocations = webDriver.findElement(By.xpath("//ul[@class='MainNav__list-peZtddYtxn']/li[.='Find locations']"));
        userClickMenuFindLocations.click();
        Thread.sleep(1000);
    }

    @Then("^User click and Search \"([^\"]*)\" on Suburb Locations$")
    public void userClickAndSearchOnSuburbLocations(String locations) throws InterruptedException {
        WebElement userClickAndSearchOnSuburbLocations = webDriver.findElement(By.xpath("//input[@id='locatorTextSearch']"));
        userClickAndSearchOnSuburbLocations.clear();
        userClickAndSearchOnSuburbLocations.sendKeys(locations);
        Thread.sleep(1000);
        WebElement clickButton = webDriver.findElement(By.cssSelector(".button--primary"));
        clickButton.click();
        Thread.sleep(1000);
    }
}

package step_definitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.concurrent.TimeUnit;

public class Hooks {
    public static WebDriver webDriver;

    @Before
    public void openBrowser(){
        ChromeOptions a = new ChromeOptions();
        a.addArguments("--no-sandbox");
        a.addArguments("--disable-dev-shm-usage");
        a.addArguments("--headless");
        a.addArguments("--window-size=1920,1080");
        a.addArguments("--remote-allow-origins=*");
        WebDriverManager.chromedriver().forceDownload().setup();

        webDriver = new ChromeDriver(a);
        String appUrl = "https://www.service.nsw.gov.au/";
        webDriver.get(appUrl);
        webDriver.manage().window().maximize();
    }

    @After
    public void closeBrowser(){
        // Menutup jendela browser aktif
        webDriver.quit();
    }
}
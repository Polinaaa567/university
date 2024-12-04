package org.example;

import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.*;
import org.openqa.selenium.edge.EdgeDriver;
import java.time.Duration;

public class MainClass {
//    @Test
//    public void FirstTest() {
//        System.setProperty("web-driver.Edge.driver","C:\\Users\\ACER\\OneDrive\\Рабочий стол\\testProject\\demo\\drivers\\msedgedriver.exe");
//        WebDriver driver = new EdgeDriver();
//
//        driver.get("https://habr.com/ru/all/");
//
//        driver.manage().window().setSize(new Dimension(1280, 1025));
//
//        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
//
//        driver.findElement(By.xpath("//*[@class='tm-svg-img tm-header-user-menu__icon tm-header-user-menu__icon_search tm-header-user-menu__icon_dark']")).click();
//        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
//
//        driver.findElement(By.xpath("//*[@class='tm-search__input tm-input-text-decorated__input']")).sendKeys("Selenium WebDriver");
//
//        driver.findElement(By.xpath("//*[@class='tm-svg-img tm-svg-icon']")).click();
//
//        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
//
//        driver.findElement(By.linkText("Что такое Selenium WebDriver?")).click();
//        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
////
////        Assert.assertEquals( "1  окт  2012 в 16:40",
////                driver.findElement(By.xpath("//*[@title='2012-10-01, 16:40']")).getText());
//
//        JavascriptExecutor js =((JavascriptExecutor) driver);
//        js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
//        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
//
//        driver.findElement(By.xpath("//a[@href='/ru/articles/' and @class='footer-menu__item-link']")).click();
//        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
//
//        driver.quit();
//    }

    @Test
    public void taskTest() {
        System.setProperty("web-driver.Edge.driver", "C:\\Users\\ACER\\Downloads\\edgedriver_win64\\msedgedriver.exe");
        WebDriver driver = new EdgeDriver();

        driver.get("https://eios.kemsu.ru/a/eios");

        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
        WebElement inputLogin = driver.findElement(By.name("username"));
        inputLogin.clear();
        inputLogin.click();
        inputLogin.sendKeys("stud71724");

        WebElement inputPassword = driver.findElement(By.name("password"));
        inputPassword.clear();
        inputPassword.click();
        inputPassword.sendKeys("catDogbestFriend_89");

        driver.findElement(By.xpath("//*[@class='css-h0m9oy efn4aem0' and @type='submit']")).click();

        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));

        Assert.assertEquals("Колесник П.О.",
                driver.findElement(By.xpath("//a[@class='css-10pdxt6 efn4aem0']")).getText());

        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));

        driver.findElement(By.linkText("ЭИОС")).click();

        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        driver.quit();
    }
}

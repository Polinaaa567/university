package lib.ui;

import io.appium.java_client.AppiumDriver;
import org.openqa.selenium.By;

public class SearchPageObject extends MainPageObject{
    private static final String
    SEARCH_INIT_ELEMENT = "//*[contains(@text,'Поиск по Википедии')]",
    SEARCH_INPUT = "//*[contains(@text,'Поиск по Википедии')]",
    SEARCH_RESULT = "//*[@class='android.view.ViewGroup']//*[@text='{SUBSTRING}']",
    SAVE_INIT_ELEMENT = "//*[contains(@text,'Сохранить')]",
    ADD_INIT_ELEMENT = "//*[contains(@text,'Добавить в список')]",
    NAME_LIST_INIT_ELEMENT = "//*[contains(@text,'Название этого списка')]",
    OK_ELEMENT = "//*[contains(@text,'ОК')]",
    SEE_LIST_ELEMENT = "//*[contains(@text,'Посмотреть список')]",
    INIT_ELEMENT_MORE_ID = "item_overflow_menu",
    INIT_DELETE_LIST = "//*[contains(@text,'Удалить список')]";

    public SearchPageObject(AppiumDriver driver) {
        super(driver);
    }

    public void initSearchInput() {
        this.waitForElementAndClick(
                By.xpath(SEARCH_INIT_ELEMENT),
                "Невозможно нажать на поле ввода",
                20
        );
    }

    public void typeSearchLine(String search_line) {
        this.waitForElementAndSendKeys(
                By.xpath(SEARCH_INPUT),
                search_line,
                "Невозможно нажать на поле ввода",
                20
        );
    }

    private static String getResultSearchElement(String substring) {
        return SEARCH_RESULT.replace("{SUBSTRING}", substring);
    }

    public void waitForSearchResult(String substring) {
        String search_res_xpath = getResultSearchElement(substring);

        this.waitForElementAndClick(
                By.xpath(search_res_xpath),
                "Невозможно найти"+ substring,
                20
        );

        System.out.println(search_res_xpath);
    }

//    public void
    public void saveInitElement() {
        this.waitForElementAndClick(
                By.xpath(SAVE_INIT_ELEMENT),
                "Невозможно нажать на Сохранить",
                20
        );
    }


    public void addElementInList() {
        this.waitForElementAndClick(
                By.xpath(ADD_INIT_ELEMENT),
                "Невозможно добавить в список",
                20
        );
    }

    public void tapInputName(String nameList) {
        this.waitForElementAndSendKeys(
                By.xpath(NAME_LIST_INIT_ELEMENT),
                nameList,
                "Невозможно нажать на поле ввода",
                20
        );
    }

    public void tapButtonOK() {
        this.waitForElementAndClick(
                By.xpath(OK_ELEMENT),
                "Невозможно добавить в список",
                20
        );
    }

    public void tapSeeList(){
        this.waitForElementAndClick(
                By.xpath(SEE_LIST_ELEMENT),
                "Невозможно посмотреть список",
                20
        );
    }

    public void tapMore() {
        this.waitForElementAndClick(
                By.id(INIT_ELEMENT_MORE_ID),
                "Невозможно посмотреть ещё",
                20
        );
    }

    public void deleteElement() {
        this.waitForElementAndClear(
                By.xpath("The Hobbit"),
                "Невозможно удалить элемент",
                20
        );

        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
    public void tapDeleteList() {
        this.waitForElementAndClick(
                By.xpath(INIT_DELETE_LIST),
                "Невозможно удалить",
                20
        );
    }

    public void tapOKDeleteList() {
        this.waitForElementAndClick(
                By.xpath(OK_ELEMENT),
                "Невозможно удалить",
                20
        );

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

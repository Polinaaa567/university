import lib.CoreTestCase;
import lib.ui.MainPageObject;
import lib.ui.SearchPageObject;
import org.junit.Test;

public class FirstTest extends CoreTestCase {
    public MainPageObject MainPageObject;

    public void setUp() throws Exception {
        super.setUp();
        MainPageObject = new MainPageObject(driver);
    }

    @Test
    public void testSearch () {
        SearchPageObject SearchPageObject = new  SearchPageObject(driver);
        SearchPageObject.initSearchInput();
        SearchPageObject.typeSearchLine("The Hobbit, or There and Back Again");
        SearchPageObject.waitForSearchResult("повесть английского писателя Джона Р. Р. Толкина");

        SearchPageObject.saveInitElement();
        SearchPageObject.addElementInList();
        SearchPageObject.tapInputName("The Hobbit");
        SearchPageObject.tapButtonOK();

        SearchPageObject.tapSeeList();
        SearchPageObject.tapMore();
        SearchPageObject.tapDeleteList();
        SearchPageObject.tapOKDeleteList();

        System.out.println("Our Test Search");
    }
}


//В поисковой строке найти «Хоббит, или Туда и обратно».
// Перейти в статью, в крайнем верхнем правом углу нажать на три точки и выбрать «Добавить в список для чтения».
// Нажать «Понятно», указать название «Хоббит», нажать «Ок».
// Выбрать внизу «Просмотр списка».
// После чего нажать на три точки и удалить список для чтения полностью. Удостовериться, что в списке отсутствует добавленный ранее раздел «Хоббит». (см.видео ссылка).
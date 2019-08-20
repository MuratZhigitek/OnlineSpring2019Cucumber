package com.vytrack.step_definitions;

import com.vytrack.utilities.BasePage;
import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.Driver;
import com.vytrack.utilities.Pages;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class TopMenuStepDefinitions {

    Pages pages = new Pages();

    @Then("user navigate to {string} and {string}")
    public void user_navigate_to_and(String tab, String module) {
        pages.dashboardPage().navigateToModule(tab, module);
        BrowserUtils.waitFor(2);

    }
    @Then("user name should be {string}")
    public void user_name_should_be(String expected) {
        Assert.assertEquals(expected, pages.dashboardPage().getUserMenuName());
    }
    @Then("the page title should be {string}")
    public void the_page_title_should_be(String expected) {
    Assert.assertEquals(expected, pages.dashboardPage().getPageTitle());
    }


}

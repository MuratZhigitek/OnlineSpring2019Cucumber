$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login/Login.feature");
formatter.feature({
  "name": "As user I want to login under different roles",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@VYT-4121"
    }
  ]
});
formatter.scenario({
  "name": "Login as a store manager",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@storemanager"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a store manager",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a_store_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"Dashboard\" page name is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_page_name_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify warning message for invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with \"wrong\" username and \"wrong\" password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_with_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies \"Invalid user name or password.\" warning message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_warning_message_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as a driver",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@driver"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a driver",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a_driver()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"Quick Launchpad\" page name is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_page_name_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as different users",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@map_example"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with following credentials",
  "rows": [
    {
      "cells": [
        "username",
        "salesmanager101"
      ]
    },
    {
      "cells": [
        "password",
        "UserUser123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_with_following_credentials(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to \"Fleet\" and \"Vehicles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigate_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"All Cars\" page name is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_page_name_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "login as different user tests",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_1"
    }
  ]
});
formatter.step({
  "name": "user log in as a \"\u003cuser_type\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user verifies that \"\u003cpage name\u003e\" page name is displayed",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user_type",
        "page name"
      ]
    },
    {
      "cells": [
        "driver",
        "Quick Launchpad"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Dashboard"
      ]
    },
    {
      "cells": [
        "store manager",
        "Dashboard"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login as different user tests",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"Quick Launchpad\" page name is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_page_name_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "login as different user tests",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"Dashboard\" page name is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_page_name_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "login as different user tests",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"store manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"Dashboard\" page name is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_page_name_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User names test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_with_outline_2"
    }
  ]
});
formatter.step({
  "name": "user logs in with following credentials",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "username",
        "\u003cusername\u003e"
      ]
    },
    {
      "cells": [
        "password",
        "\u003cpassword\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "user name should be \"\u003cname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "Credentials information",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "name"
      ]
    },
    {
      "cells": [
        "user187",
        "UserUser123",
        "Jerel Vandervort"
      ]
    },
    {
      "cells": [
        "user200",
        "UserUser123",
        "Lonzo Leuschke"
      ]
    },
    {
      "cells": [
        "storemanager52",
        "UserUser123",
        "Roma Medhurst"
      ]
    },
    {
      "cells": [
        "storemanager66",
        "UserUser123",
        "Carlos Ernser"
      ]
    },
    {
      "cells": [
        "salesmanager125",
        "UserUser123",
        "Cleveland Heller"
      ]
    },
    {
      "cells": [
        "salesmanager140",
        "UserUser123",
        "Jameson Paucek"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User names test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with following credentials",
  "rows": [
    {
      "cells": [
        "username",
        "user187"
      ]
    },
    {
      "cells": [
        "password",
        "UserUser123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_with_following_credentials(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user name should be \"Jerel Vandervort\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_name_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User names test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with following credentials",
  "rows": [
    {
      "cells": [
        "username",
        "user200"
      ]
    },
    {
      "cells": [
        "password",
        "UserUser123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_with_following_credentials(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user name should be \"Lonzo Leuschke\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_name_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User names test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with following credentials",
  "rows": [
    {
      "cells": [
        "username",
        "storemanager52"
      ]
    },
    {
      "cells": [
        "password",
        "UserUser123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_with_following_credentials(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user name should be \"Roma Medhurst\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_name_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User names test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with following credentials",
  "rows": [
    {
      "cells": [
        "username",
        "storemanager66"
      ]
    },
    {
      "cells": [
        "password",
        "UserUser123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_with_following_credentials(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user name should be \"Carlos Ernser\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_name_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User names test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with following credentials",
  "rows": [
    {
      "cells": [
        "username",
        "salesmanager125"
      ]
    },
    {
      "cells": [
        "password",
        "UserUser123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_with_following_credentials(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user name should be \"Cleveland Heller\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_name_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User names test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with following credentials",
  "rows": [
    {
      "cells": [
        "username",
        "salesmanager140"
      ]
    },
    {
      "cells": [
        "password",
        "UserUser123"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_with_following_credentials(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user name should be \"Jameson Paucek\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_name_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.step({
  "name": "user log in as a \"\u003cuser_type\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user navigate to \"\u003ctab\u003e\" and \"\u003cmodule\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "the page title should be \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "User and navigation info",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user_type",
        "tab",
        "module",
        "title"
      ]
    },
    {
      "cells": [
        "driver",
        "Fleet",
        "Vehicles",
        "Car - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "driver",
        "Fleet",
        "Vehicles Model",
        "Vehicles Model - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "driver",
        "Customers",
        "Accounts",
        "Accounts - Customers"
      ]
    },
    {
      "cells": [
        "driver",
        "Customers",
        "Contacts",
        "Contacts - Customers"
      ]
    },
    {
      "cells": [
        "driver",
        "Activities",
        "Calendar Events",
        "Calendar Events - Activities"
      ]
    },
    {
      "cells": [
        "driver",
        "System",
        "Jobs",
        "Jobs - System"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Fleet",
        "Vehicles",
        "All - Car - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Fleet",
        "Vehicles Model",
        "All - Vehicles Model - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Customers",
        "Accounts",
        "All - Accounts - Customers"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Customers",
        "Contacts",
        "All - Contacts - Customers"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Activities",
        "Calendar Events",
        "All - Calendar Events - Activities"
      ]
    },
    {
      "cells": [
        "sales manager",
        "System",
        "Jobs",
        "All - Jobs - System"
      ]
    },
    {
      "cells": [
        "store manager",
        "Fleet",
        "Vehicles",
        "All - Car - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "store manager",
        "Fleet",
        "Vehicles Model",
        "All - Vehicles Model - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "store manager",
        "Customers",
        "Accounts",
        "All - Accounts - Customers"
      ]
    },
    {
      "cells": [
        "store manager",
        "Customers",
        "Contacts",
        "All - Contacts - Customers"
      ]
    },
    {
      "cells": [
        "store manager",
        "Activities",
        "Calendar Events",
        "All - Calendar Events - Activities"
      ]
    },
    {
      "cells": [
        "store manager",
        "System",
        "Jobs",
        "All - Jobs - System"
      ]
    }
  ]
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to \"Fleet\" and \"Vehicles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigate_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Car - Entities - System - Car - Entities - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to \"Fleet\" and \"Vehicles Model\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigate_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Vehicles Model - Entities - System - Car - Entities - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to \"Customers\" and \"Accounts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigate_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Accounts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to \"Customers\" and \"Contacts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigate_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Contacts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to \"Activities\" and \"Calendar Events\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigate_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Calendar Events - Activities\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to \"System\" and \"Jobs\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigate_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Jobs - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to \"Fleet\" and \"Vehicles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigate_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Car - Entities - System - Car - Entities - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to \"Fleet\" and \"Vehicles Model\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigate_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Vehicles Model - Entities - System - Car - Entities - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to \"Customers\" and \"Accounts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigate_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Accounts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to \"Customers\" and \"Contacts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigate_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Contacts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to \"Activities\" and \"Calendar Events\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigate_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Calendar Events - Activities\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to \"System\" and \"Jobs\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigate_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Jobs - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"store manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to \"Fleet\" and \"Vehicles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigate_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Car - Entities - System - Car - Entities - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"store manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to \"Fleet\" and \"Vehicles Model\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigate_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Vehicles Model - Entities - System - Car - Entities - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"store manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to \"Customers\" and \"Accounts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigate_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Accounts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"store manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to \"Customers\" and \"Contacts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigate_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Contacts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"store manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to \"Activities\" and \"Calendar Events\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigate_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Calendar Events - Activities\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user log in as a \"store manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_log_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to \"System\" and \"Jobs\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigate_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Jobs - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
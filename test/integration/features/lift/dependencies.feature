Feature: Dependencies

  Scenario: No dependencies defined
    Given the project is an existing php project
    And no dependencies are defined in the results
    When the project is lifted
    Then no dependencies are installed with composer

  Scenario: No php dependencies defined
    Given the project is an existing php project
    And no php dependencies are defined in the results
    When the project is lifted
    Then no dependencies are installed with composer

  Scenario: php dependencies defined
    Given the project is an existing php project
    And php dependencies are defined in the results
    When the project is lifted
    Then the dependencies are installed with composer

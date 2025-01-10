Feature: Scaffolder

  Scenario: Scaffold
    When the project is scaffolded
    And the composer file is defined
    And the vendor directory is ignored from version control

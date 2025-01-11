Feature: Scaffolder

  Scenario: Scaffold
    When the project is scaffolded
    Then the composer file is defined
    And the vendor directory is ignored from version control
    And initial dependencies are defined
    And documentation is initialized
    And the build file is defined

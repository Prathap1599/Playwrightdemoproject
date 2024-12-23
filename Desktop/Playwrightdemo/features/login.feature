Feature: Login to the application

Scenario Outline: User to able to login the application

    Given User able to open the browser
    When enter user email id "<email>"
    Then enter login button

Example:
 |email|
 |prathapn1599@gmail.com|
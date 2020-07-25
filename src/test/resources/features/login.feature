@googleSearch @test
Feature:I want to login into my account to purchase an item


Scenario: As a user I want to be able to login into
my account

Given I am on automation practice website
When I enter "email" and "password"
And I click on "sign button" to log into my account and select on "women"
And select "tops" and select "t-shirt"
Then I add to "cart" and "submit"
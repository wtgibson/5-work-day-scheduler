# 04 Third-Party APIs: Work Day Planner

## Summary 

The purpose of the assignment was to create a simple calendar allowing user's to save events for each hour of the work day. The application features dynamically updated HTML and CSS leveraging jQuery.

```
User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Site Picture
![Site](Assets/05-third-party-apis-homework-demo.gif)

## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles HTML elements on page
- Bootstrap - CSS framework directed at responsive, mobile first front-end web development
- JavaScript - provides dynamic interactivity on HTML documents
- jQuery - easy to use API library simplifying Javascript actions
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

## Code Snippet

Below is an example of a block of code in the JS file where most of the logic behind the quiz is stored. First I created a function enacted on the user's click on an answer choice checking it against the answer key to the question then displayed whether it was correct or incorrect in the result field and added or subtracted points accordingly. 

```js
answersElement.addEventListener("click", function(event) {
    console.log("answer chosen");
    var element = event.target;
    if (element.textContent !== quizQuestions[i].correct) {
        console.log(element)
        console.log("Wrong Answer")
        resultElement.textContent = "Incorrect!";
        console.log(resultElement.textContent)
        document.getElementById("result").style.color = 'red';            
        console.log(resultElement.style.color)

    } else {
        console.log(element)
        console.log("Right Answer")
        resultElement.textContent = "Correct!";
        console.log(resultElement.textContent)
        document.getElementById("result").style.color = 'green';            
        console.log(resultElement.style.color)
        userScore += 10
        console.log(userScore)

    }
    if (i < quizQuestions.length - 1) {
    i++;
    quiz();
    } else {
    clearInterval(timeInterval)    
    alert("Quiz Complete!");
    userScore += secondsLeft
    console.log(userScore)
    alert(userScore);
    endQuiz();
    restartQuiz();
    }
});
```

## Author Links

Will Gibson

[LinkedIn](https://www.linkedin.com/in/wtgibson/)

[GitHub](https://github.com/wtgibson/4-code-quiz)

Special thanks to Mahisha Gunasekaran, Kerwin Hy, and Jeremy Cantwell, and Brad Davis for their input and assistance with the assignment!
# CV Application
![Incoming gif]()
## Links
- [Try CV Application here!](https://appletri.github.io/cv-application/)

- [Link to the Assignment](https://www.theodinproject.com/lessons/node-path-javascript-cv-application)

## About
### ReactJS
<hr>
This is the first project for ReactJS. I learned how to make basic components, utilizing state and props. Later down the curriculum, I was tasked with swapping out the class components with hooks.

### Design
I noticed that the design of having a bunch of input fields to affect the look of a resume could be overwhelming. My main goal was to make this simplified with an intuitive way to edit the resume. I designed a wrapper div that would contain the visual value div and an input field for editting. Everytime the user would click on the visual value div, both divs inside the wrapper would toggle hidden. This would create an input field wherever there is something that could be editted. After placing a new value inside the input field, the user can click out of the field and the state would be updated with the new value, thus changing the visual value div. Having these changes allows the user to focus on the resume and how it will in the end. I kept the cv application to be 8.5in by 11in for printing purposes.


### Code
<hr>
#### The Bread and Butter
Since everything is pretty much editable, the core helper function that would be used in all my sections is the Wrapper.js and the InputChanger.js. They both hold two functions, one for text input and the other for text area (for the work responsibilities). They work together to toggle the hidden fields respectively and pass props down the line to display and edit information. Since I went for a look that doesnt show input fields borders, I had to specify the character length of the input field to avoid overflow issues of text.

#### Details.js
The Details are the work responsibilites for the work experiences. Originally when I had constructors, the Details was an object inside of the work experience object and both were updated in the same file. With the new learned hooks, I was able to seperate them and call upon Details for each work experience I created. The details would work independently due to their isolated states.

Another feature that I added to Details was to remove the detail from the array when the array does not have any letters. This is a great way to do this fuction since it removes the excessive amounts of remove buttons and is intuitive for the user to remove data by deleting all the data.

#### ToggleEditFeatures
This is a piece of code in the App(), I use this button as a way to hide all the add/remove buttons for the resume. I created some text to guide the user to the button so they could learn how to add and remove items from their application. If the user was working with a smaller window, the button would stay with the user with some sticky css.


### Print/Save
<hr>
The user can print or save the resume as a PDF by using the default printing for their web browsers. Some settings that the user may want to get the print to be as shown is to have: 

Scale:fit to page width 

Print Backgrounds: on



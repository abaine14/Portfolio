# Portfolio-Updated-2020
React.js , Graphql, HTML, CSS, JavaScript and Dependecies

In the attached files there are snippets of code that connect an input table with Graphql integrations in AWS Appsync, Javascript projects, and other files. 

<h3>Project One</h3>
<hr/>

<b>The Organizer folder houses a plethora of other components (code is available to view)</b><br/>
   <b>Organizer.js</b> is the main stem of the Organizer folder that all the other components attach. Utilizing isolation of code is a       way to be sure that each section is operating independently first before they ar merged.<br/><br/>
<b> Forms folder</b><br/>
   Forms are exported to the Organizer.js file via imports usuing the file <b>IncomeUI</b>. This form is a mixture of React Bootstrap and Material UI which takes user inputed information and submits it to a dynamoDB table.
   Each input has an ID attributed to it that is user specific and based off of an authenication token (AWS Cognito)<br/><br/>
<b>Data that is entered into the dynamoDB table through a Graphql mutation that leverages an Apollo client</b><br/>
   Accessing the user specific information is acheived by using a query to list the items using strong syntax is (available to view in the <b> schema.graphql file) </b><br/>
    
<h3>Project Two </h3>
<hr/>

<b> This project is an automatic name displayer built for the admissions office</b><br/>
   The objective was to change the names and amount of list items being shown from a list of students where the amount is different each         day. 
   <br/><b>The project is built in two ways:</b> <br/>
   The <b>first</b> approach is a list that scrolls up the screen simliar to the end credits of a movie. <b>(index.html)</b><br/>
   <b>Pros:</b> Automatically scales to the amount of student in a list<br/>
   <b>Cons:</b> Manually adjust the speed of scrolling to make sure the names are able to be read.<br/>
   
   The <b>second</b> approach makes the names appear on the screen one at a time.<b>index2.hmtl</b><br/>
   <b> Pros:</b> Each name appears one at time at an interval that is preset<br/>
   <b> Cons:</b> In order for the the list to loop the page is set to reload which restarts the function from the beginning.<br/>
   
   Data is taken from the <b>admissions.json</b> file that is uploaded to the server.<br/>
   index.html corresponds to styles.css || index2.html corresponds to style2.css
   
   
   
   
   

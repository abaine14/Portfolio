# React-Snippets-Updated-2020
React infrastructure (only snippets), Graphql, and Dependecies

In the attached folders there are snippets of code that connect an input table with Graphql integrations in AWS Appsync. The computational algorithm is left out due to the nature of this portfolio excercise. 

<b>The Organizer folder houses a plethora of other components (code is available to view)</b><br/>
   Organizer.js is the main stem of the Organizer folder that all the other components attach. I utilize isolation of code to be 
    sure that each section is operating smoothly while also making it easier to navigate.<br/><br/>
<b>The Forms folder</b><br/>
   Forms are exported to the Organizer via imports
   IncomeUI was is a mixture of React Bootstrap and Material UI it takes User information provided and submits to a dynamoDB table 
     called IncomeTable
   Each input has an ID attributed to it that is user specific and based off of a authenication token (AWS Cognito)<br/><br/>
<b>Data that is entered into the dynamoDB table through a Graphql mutation that leverages the Apollo client</b><br/>
   Accessing the user specific information using a query to list the items using strong syntax is available to view in the Graphql
        folder
    

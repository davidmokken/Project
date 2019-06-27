# Programming Project - Migration & Crime in the Netherlands

---

##### ***Name***: David Mokken
##### ***Course***: Minor Programming
##### ***Student number***: 10770798

---
![](images/website.png)

This application was created with to provide proper and easy to understand visualisations of data concerning crimerates, migrants and ethnicity which hopefully might change people's perceptions about migrants. A more detailed description of the case is provided on the site or in the README.md.

***__Technical Design__***
---
**HTML, Bootstrap & CSS**
The website in its entirety consists out of 4 HTML-files. One for each page of the website; the homepage (index.html), the case description page (about.html), the visualisations page (visualizations.html) and lastly, the additional information page (information.html). 
In these files a lot of Bootstrap and CSS is used for the visual aspect of the pages. The pages are linked to each other with the help of a navigation bar or links in the pages. The hero-images provide a nice visual aspect that grabs the attention of the reader. Also a footer was included to provide my contact info to possible readers/users. 
There are certain elements such as the dropdown, radio button, and label that actually interactive with the data and therefore change by user action.

**Python**
I used python and pandas to convert my csv data into a json file. This actually took some time as there were certain steps that needed to be taken before I could succesfully converted into a json. I had chosen for a multi-index dataframework in pandas in which I could more easily change the names of the columns and have more clear vision over my data. However, this could not be converted directly into a nested json. Therefore, I had to create a 2 layered nested dict from the multi-index dataframework. After this step I could succesfully push the dict into a nested json file.

**Javascript**
Clearly describe the technical design: how is the functionality implemented in your code? This should be like your DESIGN.md but updated to reflect the final application. First, give a high level overview, which helps us navigate and understand the total of your code (which components are there?). Second, go into detail, and describe the modules/classes (apps) files/functions (data) and how they relate.

**Javascript**

***__Challenges__***
---
Clearly describe challenges that your have met during development. Document all important changes that your have made with regard to your design document (from the PROCESS.md). Here, we can see how much you have learned in the past month.

***__Defence__***
---
Defend your decisions by writing an argument of a most a single paragraph. Why was it good to do it different than you thought before? Are there trade-offs for your current solution? In an ideal world, given much more time, would you choose another solution?

Make sure the document is complete and reflects the final state of the application. The document will be an important part of your grade.

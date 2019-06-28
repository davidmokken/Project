# Programming Project - Migration & Crime in the Netherlands

---

##### ***Name***: David Mokken
##### ***Course***: Minor Programming
##### ***Student number***: 10770798

---
![Preview](images/website.JPG)


***__Problem Statement__***
---
We live in times where people are afraid, especially of people who are different or come from another place than ours. This in combination with lack of knowledge of the actual numbers of crime, asylum seekers and migrants have lead to forgone conclusions and fear/anger in many people towards "foreigners". 

**Solution**
This application was created with to provide proper and easy to understand visualisations of data concerning crimerates, migrants and ethnicity which hopefully might change people's perceptions about migrants. A more detailed description of the case is provided on the site or in the README.md.

***__High Level Overview__***
---
**Dashboard Components**
The visualization consists of the following components:

* Every html webpage contains a fixed navbar at the top with 5 navigational
links, the first is a picture of a David that also links to the homepage. A footer at the bottom and a title with favicon symbol of a scale. 

* Every page contains a large image to attract attention the my case. Every image contains a title and a link button to another site.

* Four D3 visualizations:
All visualisations are interactive and linked with each other. Functions differ per visualisation.
  - Datamap
  - Line chart (includes button to start animation of drawing line chart)
  - Horizontal bar chart
  - Fillgauge

***__Technical Design__***
---
**HTML, Bootstrap & CSS**
The website in its entirety consists out of 4 HTML-files. One for each page of the website; the homepage (index.html), the case description page (about.html), the visualisations page (visualizations.html) and lastly, the additional information page (information.html). 
In these files a lot of Bootstrap and CSS is used for the visual aspect of the pages. The pages are linked to each other with the help of a navigation bar or links in the pages. The hero-images provide a nice visual aspect that grabs the attention of the reader. Also a footer was included to provide my contact info to possible readers/users. 
There are certain elements such as the dropdown, radio button, and label that actually interactive with the data and therefore are changeble by user action. Apart from a seperate style file, I have chosen to sometimes style in the html tags as it gave me a clearer and better insight in all the different several grid objects in terms of spacing and color.

**Python**
I used python and pandas to convert my csv data into a json file. This actually took some time as there were certain steps that needed to be taken before I could succesfully converted into a json. I had chosen for a multi-index dataframework in pandas in which I could more easily change the names of the columns and have more clear vision over my data. However, this could not be converted directly into a nested json. Therefore, I had to create a 2 level layered nested dict from the multi-index dataframework. After this step I could succesfully push the dict into a nested json file.

**Javascript**
In this repository I have made a distinction between personally created JavaScript files and externally (and slightly modified) Javascript files. The external JavaScript files are the D3 library files and the Fillgauges. The Fillgauge files are complicated files and are therefore slightly modified to be properly used. I, myself, wrote scripts for the barchart, map function and linechart.

* datamap.js: This script loads all the converetd datafiles and creates a datamap using a TopoJSON-file. It holds a hoover function for the datamap and is color scaled. It connects all the other visualisation by linking the seperate datafiles to a on-click function for provinces and value change functions for the radio button and dropdown. Furthermore, a function is created for the update when the user clicks on the Netherlands button. A start function is also created that shows the data for the Netherlands in 2017 when starting the program. 

* barchart.js: In this script the main function is the update function that is called in the datamap script. At the start of the function there are two sub-functions that create hard copies for the respective state of the radiobutton. There is also a tip/hoover function to provide a more detailed view of the data. 
  
* linechart.js: In this script the main function is the update function that is called by the datamap script. It first defines the constant values and appends the svg, color scales and x/y scales. Furthermore, for every picked line a d3.line function is created. Lastly a legend is created from an id_list. The data from the id list is also used to create several paths. In the update funciton the data is slightly transformed to an array so it can used in a line chart. And from that data lines are added to the previously mentionned paths.

* fillgauge.js: The fillgauges scripts are external scripts gained from the d3 library. In every script the basic information have been slighly updated so it can react to the on click function in the datamap and to be different from each other.

**Data**
The data folder contains 3 csv files and 4 json files. Out of the 4 json file, 3 contain the converted data from the csv. The additional one contains data to create the datamap.
* [Immigration per Province CSV](data/Immigratie_per_gemeente.csv)
* [Immigration per Province JSON](data/immi.json)
   - Datafile containing immigration data per province.

* [Crime per Province CSV](data/Misdrijven_per_gemeente.csv)
* [Crime per Province JSON](data/crime.json)
   - Datafile containing crime data per province.

* [Safety feeling per Province CSV](data/veiligheidsbeleving_gemeente.csv.csv)
* [Safety feeling per Province JSON](data/safe.json)
   - Datafile containing safety feeling data per province.
   
* [TopoJSON file for creation of datamap](data/ned.json)
   -  TopoJSON datafile containing the necessary data to create a d3 datamap.   
   
***__Process and Development__***
---
**Challenges**
The first big challenges I encoutered was the creation of a multi-index dataframe, as I had not worked with these before. When I finally created one I found out that I was unable to convert it into a json file. Therefore, I had to convert it in a multi nested dict which eventually enabled me to convert the data in a json.<br> 
The other big challenge was to wirk with the fillgauges. The fillgauges were slighly outdated visualisations which did not contain a version 5 of D3. I had to alter the data for it to be shown on my webpage.<br>
Lastly, and as expected, a main challenge for me was the linking of the different visualisations. Especially the merge and transition of the linechart and barchart was difficult and took quite some time.

**Acquired Skills**
  * I learned a lot about formatting and converting data. Especially working with pandas and dicts as I had to take a long route to create the kind of json file I wanted to work with.
  
  * I learned a lot about the interactive elements of d3 visualisations and how they worked. 
  
  * Overall, I general improvement in HTML, D3, CSS and mostly in Javascript.

**Comparison to DESIGN.MD**
* Layout was not included in the Design of the project. Now it included multiple css, html and bootstrap components.
* Used datasets changed from 4 to 3.
* Idea for piechart changes to a barchart.

***__Defence__***
---
I had not included the design of my website as I wanted to pretty up my site when all the visuals were working. At the start of the project I had grand ideads about the project and I wanted to include a lot of visuals, datasets and webpages. Thankfully, Nigel quickly persuaded me to scale it down a lot. The biggest change from my desing is the choice of a linechart over a piechart. I wanted to use the fourth dataset for the piechart but I saw that the data did not link in a correct way with the dataset which in turn meant that a pie chart could not link or interact with other visualisations. I also felt that a piechart would not provide me with enough and significant information for my page. Therefore, I choose a, for me, new and a more precise line chart. If would have had more time I would create a seperate webpage focussing on the crime data in more detail. It would than contain several extra charts and more info. However, with the time I had, I am really proud of my final product and I can proudly show it to friends and family.


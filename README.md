# Programming Project - Migration & Crime in the Netherlands

---

##### ***Name***: David Mokken
##### ***Course***: Minor Programming
##### ***Student number***: 10770798

---
### [GitHub Pages]((https://davidmokken.github.io/Project/index.html))  
### [Product Demonstration Video]

***__Problem Statement and goal of the project__***
---
In the week of May 16th "het ministerie van Justitie en Veiligheid" (Ministry of Justice) came under scrutiny when it released a report on crimes related to asylum seekers. 
The report had hidden the numbers of asylum seekers for suspected for serious crimes such as rape and murder under the heading 'other' and were therefore not included in the top 10 crimes for which asylum seekers were suspected. 
We live in times where people are afraid, especially of people who are different or come from another place than ours.
This in combination with lack of knowledge of the actual numbers of crime, asylum seekers and migrants have lead to forgone conclusions and fear/anger in many people towards "foreigners".
The goal of this products is to provide proper and easy to understand visualisations about crimerates, migrants and ethnicity which hopefully might change people's perceptions about migrants. We all might just get along after all.

---

***__Website Walktrough__***
---
**Homepage**
The homepage of the website consists of a title and provides a short discription of the minor and final project. This page, and the others as well, first shows a large picture that grabs your attention and provide insight in the subject of the project. In the picture is a hyperlink to the case description page. At top of the page is a navigation bar with an icon (the David) and links to the other pages. At the bottom, there is a footer which contains general information about me.
![](images/homepage.jpg)

**Case Description**
The second page starts with a large image with a link to the visualisations page. The page provides a description about the picked case to provide more information about the subject. Furthermore, the reason for picking this case is also explained.
![](images/case.jpg)

**Visualisations**
The visualisation page is the most important and interesting page of the site. The page contains all the visualisations created for the final project.
In the top left corner there is a map of Netherlands. The provinces are color coded to the amount of immigrants. A hoover function is added to explain in detai will display several different datasets.  The dropdown let's you select a different year. The dropdown also changes the barchart and the fillgauges. Once clicked on a province the barchart, linechart and fillgauges change. Furthermore, the label above the map also changes to the name of the clicked province. 
![](images/mapnl.jpg)

The top right shows a barchart which shows the distribution of the different immigrants descents per province. The radio button changes the barchart from a total amount of distribution to a relative distribution. There is a Netherlands button that once clicked changes all the chart to show information about the Netherlands as a whole. A hoover function is installed to show the precise amount in the barchart. The bars are color coded to the amount of percent with the darker color showing the lesser amount.
![](images/barchart.jpg)

The bottom left shows 4 fillgauges. They show relevent information as simple numbers and percentages in regards to data concerning safety feeling. All Fillgauges react to the dropdown and click function in the map. The four fillgauges show (in order): the grade given for safety in the neighbourhood, the percentage of peiople who feel crime has increased in their neighbourhood in the last year, the percentage of people who feel unsafe in general and, lastly, the percentage of people who belief there is a lot of crime in the neighbourhood.
![](images/fillgauge.jpg)

The bottom right shows a linechart that shows amount of registered crimes over 5 years in a given province. Several different crimes were picked that were hidden in the report that was mentionned in the case. The linechart reacts to the province chosen/clicked in the map.
![](images/linechart.jpg)

**Information**
The last page shows information and pictures about the different visualisations. It describes the visualisations and their provides the datasets that contains the data used in this project.
![](images/information.jpg)

---
***__Sources__***
**Data Sources**




__Prerequisites__
---

*Data sources*
- __[StatLine](https://opendata.cbs.nl/statline/#/CBS/nl/dataset/82249NED/table?ts=1558540015099)__ - Social contacts and participation in Society.
- __[StatLine](https://opendata.cbs.nl/statline/#/CBS/nl/dataset/83102NED/table?ts=1558540301270)__ - Asylum seekers in the Netherlands 2013-2018
- __[StatLine](https://opendata.cbs.nl/statline/#/CBS/nl/dataset/81877NED/table?ts=1558540316272)__- Feeling of (un)safety per region.
- __[Politie StatLine](https://data.politie.nl/#/Politie/nl/dataset/47013NED/table?ts=1558538256717)__- Crime in the Netherlands.
- __[StatLine](https://opendata.cbs.nl/statline/#/CBS/nl/dataset/81947NED/table?ts=1558540317309)__ - Suspects based on migration background.
- __[StatLine](https://opendata.cbs.nl/statline/#/CBS/nl/dataset/70072ned/table?ts=1558635886803)__ - Migration data, The Netherlands.

*External components*
- D3-tip
- Mapping

*Related Visualizations*
- 
*Hardest part*
- Linking the data map, in my case the Netherlands, to different pages for the provinces.
- Creating a format will be essential. If I correctly format the page, it will be much easier to link all the different data to the different pages

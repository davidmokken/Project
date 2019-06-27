# Programming Project - Migration & Crime in the Netherlands

---

##### ***Name***: David Mokken
##### ***Course***: Minor Programming
##### ***Student number***: 10770798

---
### [GitHub Pages](https://davidmokken.github.io/Project/index.html) 
### [Product Demonstration Video Needs to be included]

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
---
**Data Sources**
The data used came from the CSB and Politie databases. 
The datasets used were:
- __[StatLine](https://opendata.cbs.nl/statline/#/CBS/nl/dataset/81877NED/table?ts=1558540316272)__- Feeling of (un)safety per region.
- __[Politie StatLine](https://data.politie.nl/#/Politie/nl/dataset/47013NED/table?ts=1558538256717)__- Crime in the Netherlands.
- __[StatLine](https://opendata.cbs.nl/statline/#/CBS/nl/dataset/70072ned/table?ts=1558635886803)__ - Migration data, The Netherlands.

**Code Sources**
Several materials used in this projects have their own licenses.
* Bootstrap elements:
    * Navigation bar: [click here](https://getbootstrap.com/docs/4.3/components/navs/#regarding-accessibility)
    * Hero Image: [click here](https://www.w3schools.com/howto/howto_css_hero_image.asp)
    * Grid: [click here](https://www.w3schools.com/bootstrap/bootstrap_grid_basic.asp)
    
* Map of Europe:
    * TopoJSON map (paths and coördinates): [click here](http://bl.ocks.org/denisemauldin/cb870e6f439864a5ae74d4fc561ac46f)
    * The idea for a color coded map: [click here](http://bl.ocks.org/denisemauldin/cb870e6f439864a5ae74d4fc561ac46f)
    * Babel (used for the map function): [click here](https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.10.3/babel.min.js')

* Bar chart:
    * Based on: [click here](https://datavizcatalogue.com/methods/bar_chart.html)
    
* Liquid Fillgauges:
    * Based on: [click here](http://bl.ocks.org/brattonc/5e5ce9beee483220e2f6)
    
* Linechart chart:
    * Based on: [click here](https://datavizcatalogue.com/methods/bar_chart.html)
   

**API's and D3 Plugins**  
* [D3](https://d3js.org)
* [D3 tip library](https://labratrevenge.com/d3-tip/javascripts/d3.tip.v0.6.3.js)
* [Bootstrap](https://getbootstrap.com)
* [TopoJSON](https://github.com/topojson/topojson)
* [DataMaps](https://datamaps.github.io/)
* [Babel](https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.10.3/babel.min.js)

**Images** 
* Homepage image: [click here](https://www.volkskrant.nl/nieuws-achtergrond/voor-migranten-is-spanje-de-nieuwe-toegangspoort-tot-europa~be15c9a1/#&gid=1&pid=1)
* MPROG image: [click here](https://pbs.twimg.com/profile_images/2220153576/minor-avatar.png)
* Case Description image: [click here](https://www.volkskrant.nl/nieuws-achtergrond/het-is-simpel-zegt-het-cpb-geef-een-asielzoeker-een-huis-daar-waar-werk-is~be66e4b9/#&gid=1&pid=1)
* State Secretary Harbers image: [click here](https://nos.nl/artikel/2284928-ophef-over-onduidelijke-misdaadcijfers-asielzoekers-harbers-geen-opzet.html)
* Visualisations image: [click here](https://s3-eu-west-1.amazonaws.com/investico/app/uploads/2019/03/12141935/Artikel-20-header-1050x557.png)
* Information image: [click here](https://www.unrefugees.org/emergencies/iraq/)

<p align="center"><i>
This project is licensed under the terms of the MIT license.</br>
davidmokken 2019
</i></p>

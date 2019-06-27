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
The homepage provides a short discription of the minor and final project.

**Map of the Netherlands**

The map of Netherlands will display several different datasets. 

*Sketch*

*Main Features*
1. When mouse moved over, the amount of data is shown (at start the amount of immigrants)
1. When clicked on a province, certain charts are shown (depends on dataset currently viewing which data in charts are shown)
1. Dropdown menu to select year
1. Dropdown menu to select different datasets
1. Possibility/button to show line chart (instead of the map) to display total numbers of migrants in the Netherlands over the years.


*Datasets used for main map of the netherlands:*
- Immigrants per province (dropdown)
- Safety feeling per province (dropdown)
- Amount of crimes

*Minimum Viable Product*
1. Link/Button to crime in the Netherlands page and when clicked on province when total crime amount is showing also redirect to crime page

---

**When clicked on a province**

All provinces of The Netherlands will have seperate info

*Main Features*
1. Barchart to display all the different kinds of migration backgrounds (migration dataset)
1. Pie chart that will display relative percentage of migrants that have one parent born outside of the Netherlands (migration dataset)
1. Bar chart to show different kind of crimes (crime dataset)
1. Line Chart to show decrease in suspects with lines being seperate background (suspect dataset used for crime dataset)
1. Pie chart to show percentage of background of suspects (suspect dataset used for crime dataset)
1. Liquid fill chart to show percentage of people thinking criminality has increased (safety dataset)
1. Liquid fill chart to show percentage komt wel eens voor "Respectloos gedrag door onbekenden op straat" (safety dataset)


*Datasets used:*
- Immigrants per province (dropdown)
- Safety feeling per province (dropdown)
- Amount of crimes (dropdown)
- Suspect dataset

*Minimum Viable Product*
1. Large number to show grade for safety (safety dataset)
1. Large number to show amount of crimes (crime dataset)

---

**Page for Asylum Seekers and Volunteerwork (told that I wanted to do too much so this will be extra if there is time left)**

Page containing Asylum Seekers and Volunteerwork by Migrants in The Netherlands

*Main Features*
1. Pie Chart to show background percentage of the people who do informal work
1. Pie Chart of percentage of people doing volunteerwork
1. Barchart of what the volunteerwork is
1. Linechart of Asylum seekers per year with people from several countries as lines

*Datasets used:*
- Social contacts and participation
- Asylum seekers in the Netherlands 2013-2018

*Minimum Viable Product*
1. Color scale to display difference
2. English page

---

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

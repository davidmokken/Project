# Programming Project - Migration & Crime in the Netherlands

---

##### ***Name***: David Mokken
##### ***Course***: Minor Programming
##### ***Student number***: 10770798

---

***__Design of the project__***
---
With the help of this design I will show that I have everything necessary to complete this project.

***__Data sources__***
---
*The following data sources are found and loaded into a csv:*
- __[StatLine](https://opendata.cbs.nl/statline/#/CBS/nl/dataset/81877NED/table?ts=1558540316272)__- Feeling of (un)safety per region.
- __[Politie StatLine](https://data.politie.nl/#/Politie/nl/dataset/47013NED/table?ts=1558538256717)__- Crime in the Netherlands.
- __[StatLine](https://opendata.cbs.nl/statline/#/CBS/nl/dataset/81947NED/table?ts=1558540317309)__ - Suspects based on migration background.
- __[StatLine](https://opendata.cbs.nl/statline/#/CBS/nl/dataset/70072ned/table?ts=1558635886803)__ - Migration data, The Netherlands.

*The following datasets are already loaded into csv and can be used for extra data visualisations when there is time left:*
- __[StatLine](https://opendata.cbs.nl/statline/#/CBS/nl/dataset/82249NED/table?ts=1558540015099)__ - Social contacts and participation in Society.
- __[StatLine](https://opendata.cbs.nl/statline/#/CBS/nl/dataset/83102NED/table?ts=1558540301270)__ - Asylum seekers in the Netherlands 2013-2018

The datasets in the four main datasets will be converted into json files. Out of these files the information will be stored in pandas multi-index dataframes. With the provinces will be the first index and the seperate years will be the second index. This multi-index data framework will provide a challenge to work with as we have never worked with them before, a welcome challenge however. 

***__Technical Components__***
---
The technical components for this project will be:
1. Bar charts
*We have already worked with bar charts but I must figure out how to properly link chart to several datasets*
1. (interactive) Pie charts
*I have already worked with a piechart but I must figure out how to properly link chart to several datasets*
1. A worldmap (chart)
*The main frame for the worldmap will be used from the final homework assignment for data processing. However, this framework must be linked to several different datasets*
1. Liquid fill gauge charts
*The d3 blocks site provides a framework for several liquid fill gauge charts but they must be linked to the several datasets*

***__API's & D3__***
---
The D3 plugins that will be used are the worldmap plugin and the liquid fill javascript file.


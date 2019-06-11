

d3.json('/data/immi.json').then(d => chart(d));

const total_data = {}
const year_data = {}
const countr_data = {}



function chart(data) {
    console.log(data['2017']['Flevoland'])
    



    // for (year in data){
    //     total_data[year] = year_data
    //     // console.log(total_data[year])
    //     for (country in data[year]) {
    //         year_data[country] = countr_data
    //         for (info in data[year][country]){
                
    //             // console.log(data[year][country][info])
    //             countr_data[info] = (data[year][country][info])
    //             // countr_data['Dutch Antillies'] = data[year][country]['Dutch Antillies']
    //             // countr_data['Surinam'] = data[year][country]['Surinam']
    //             // countr_data['Turkey'] = data[year][country]['Turkey']
    //             // countr_data['Other'] = data[year][country]['Other']
    //             // countr_data[Marrocan] = data[year][country]['Marrocan']
    //             // countr_data[Marrocan] = data[year][country]['Marrocan']
//             }


//         // }


//     } console.log(total_data)
// }   

// this.id()
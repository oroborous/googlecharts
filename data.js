var renewals1 = [
    ['Region', 'Renewals', 'Year'],
    ['Carrier', 86, 2018],
    ['Enterprise', 305, 2018],
    ['Enterprise Velocity', 157, 2018],
    ['HCM', 286, 2018],
    ['MM Partner', 467, 2018],
    ['MM Prospect', 64, 2018],
    ['Prospect', 15, 2018],
    ['Select', 289, 2018],
    ['SMB Partner', 522, 2018],
    ['SMB Prospect', 183, 2018],
    ['United Kingdom', 16, 2018],
    ['Carrier', 37, 2019],
    ['Enterprise', 146, 2019],
    ['Enterprise Velocity', 54, 2019],
    ['HCM', 73, 2019],
    ['MM Partner', 246, 2019],
    ['MM Prospect', 45, 2019],
    ['Partner', 1, 2019],
    ['Prospect', 2, 2019],
    ['Select', 199, 2019],
    ['SMB Partner', 249, 2019],
    ['SMB Prospect', 61, 2019],
    ['United Kingdom', 8, 2019],
    ['?', 1, 2020],
    ['Carrier', 101, 2020],
    ['Enterprise', 139, 2020],
    ['Enterprise Velocity', 44, 2020],
    ['HCM', 123, 2020],
    ['MM Partner', 482, 2020],
    ['MM Prospect', 37, 2020],
    ['Partner', 3, 2020],
    ['Prospect', 5, 2020],
    ['Select', 327, 2020],
    ['SMB Partner', 308, 2020],
    ['SMB Prospect', 58, 2020],
    ['United Kingdom', 7, 2020],
    ['?', 5, 2021],
    ['Carrier', 202, 2021],
    ['Enterprise', 169, 2021],
    ['Enterprise Velocity', 43, 2021],
    ['HCM', 148, 2021],
    ['MM Partner', 634, 2021],
    ['MM Prospect', 45, 2021],
    ['Prospect', 1, 2021],
    ['Select', 383, 2021],
    ['SMB Partner', 499, 2021],
    ['SMB Prospect', 74, 2021],
    ['United Kingdom', 14, 2021],
    ['?', 2, 2022],
    ['Carrier', 205, 2022],
    ['Enterprise', 73, 2022],
    ['Enterprise Velocity', 30, 2022],
    ['HCM', 156, 2022],
    ['MM Partner', 1075, 2022],
    ['MM Prospect', 22, 2022],
    ['Select', 280, 2022],
    ['SMB Partner', 1525, 2022],
    ['SMB Prospect', 95, 2022],
    ['United Kingdom', 12, 2022],
    ['Carrier', 20, 2023],
    ['HCM', 7, 2023],
    ['MM Partner', 65, 2023],
    ['Select', 3, 2023],
    ['SMB Partner', 119, 2023],
    ['United Kingdom', 12, 2023]];

var renewals2 = [
    // ['Year','Region', 'Renewals'],
    [2018, 'Carrier', 86],
    [2018, 'Enterprise', 305],
    [2018, 'Enterprise Velocity', 157],
    [2018, 'HCM', 286],
    [2018, 'MM Partner', 467],
    [2018, 'MM Prospect', 64],
    [2018, 'Prospect', 15],
    [2018, 'Select', 289],
    [2018, 'SMB Partner', 522],
    [2018, 'SMB Prospect', 183],
    [2018, 'United Kingdom', 16],
    [2019, 'Carrier', 37],
    [2019, 'Enterprise', 146],
    [2019, 'Enterprise Velocity', 54],
    [2019, 'HCM', 73],
    [2019, 'MM Partner', 246],
    [2019, 'MM Prospect', 45],
    [2019, 'Partner', 1],
    [2019, 'Prospect', 2],
    [2019, 'Select', 199],
    [2019, 'SMB Partner', 249],
    [2019, 'SMB Prospect', 61],
    [2019, 'United Kingdom', 8],
    [2020, '?', 1],
    [2020, 'Carrier', 101],
    [2020, 'Enterprise', 139],
    [2020, 'Enterprise Velocity', 44],
    [2020, 'HCM', 123],
    [2020, 'MM Partner', 482],
    [2020, 'MM Prospect', 37],
    [2020, 'Partner', 3],
    [2020, 'Prospect', 5],
    [2020, 'Select', 327],
    [2020, 'SMB Partner', 308],
    [2020, 'SMB Prospect', 58],
    [2020, 'United Kingdom', 7],
    [2021, '?', 5],
    [2021, 'Carrier', 202],
    [2021, 'Enterprise', 169],
    [2021, 'Enterprise Velocity', 43],
    [2021, 'HCM', 148],
    [2021, 'MM Partner', 634],
    [2021, 'MM Prospect', 45],
    [2021, 'Prospect', 1],
    [2021, 'Select', 383],
    [2021, 'SMB Partner', 499],
    [2021, 'SMB Prospect', 74],
    [2021, 'United Kingdom', 14],
    [2022, '?', 2],
    [2022, 'Carrier', 205],
    [2022, 'Enterprise', 73],
    [2022, 'Enterprise Velocity', 30],
    [2022, 'HCM', 156],
    [2022, 'MM Partner', 1075],
    [2022, 'MM Prospect', 22],
    [2022, 'Select', 280],
    [2022, 'SMB Partner', 1525],
    [2022, 'SMB Prospect', 95],
    [2022, 'United Kingdom', 12],
    [2023, 'Carrier', 20],
    [2023, 'HCM', 7],
    [2023, 'MM Partner', 65],
    [2023, 'Select', 3],
    [2023, 'SMB Partner', 119],
    [2023, 'United Kingdom', 12]
];

var okabeIto = ["#000000", "#E69F00", "#56B4E9", "#009E73", "#F0E442", "#0072B2", "#D55E00", "#CC79A7"];
var paired12 = ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"]

var renewals3 = longToWide(renewals2);

function longToWide(long) {
    /*
    Create an object to hold the data like this:
    {
        2018: {
            'Carrier': 86,
            'Enterprise': 305,
            'HCM': 286
        },
        2019: {
            'Carrier': 37,
            'Enterprise': 146
        }
    }
     */
    var years = {};
    var regions = []; // Also collect the unique regions
    long.forEach(value => {
        // Create variables for ease of reading
        var year = value[0];
        var region = value[1];
        var count = value[2];

        // If this is a new region, add it to the list of regions
        if (!regions.includes(region) && region !== "?")
            regions.push(region);

        if (year !== 2023) {
            if (!years[year]) {
                // Add the year if there isn't already an entry for it
                years[year] = {};
            }

            // Add the count to its year and region
            years[year][region] = count;
        }
    });

    // Sort regions alphabetically so the legend is A-Z
    regions.sort().reverse();

    // Output for debugging
    console.log(years);
    console.log(regions);

    /*
    ['Year', 'Carrier', 'Enterprise', 'HCM'],
    [2018, 46, 138, 93],
    [2019, 88, 111, 65]
    */

    // Create header row
    var flat = [['Year', ...regions]];

    // For every year...
    for (const year in years) {
        // Add the year itself as the first value in its row
        var amounts = [year];

        // For every region...
        for (const region of regions) {
            // Add the amount for that year and region, if it exists,
            // otherwise add zero
            amounts.push(years[year][region] ? years[year][region] : 0);
        }
        // Add the row to the table
        flat.push(amounts);
    }

    // Output for debugging
    console.log(flat);

    return flat;
}

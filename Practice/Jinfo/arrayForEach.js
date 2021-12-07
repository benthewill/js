let idLists = [
    {
        id : 0010314442,
        name : `benthewill`,
        email : `benthewill@gmail.com`,
        address : `1990 E Kent Ave South`,
        gender : `male`
    },
    {
        id : 0010315412,
        name : `bengoldhuman`,
        email : `bengoldhuman@gmail.com`,
        address : `3157 E Kent Ave S`,
        gender : `female`
    },
    {
        id : 0010314441,
        name : `manword`,
        email : `manword@gmail.com`,
        address : `Kamehameha Road`,
        gender : `male`
    },
    {
        id : 0010347474,
        name : `phoebe`,
        email : `phoebe@gmail.com`,
        address : `Central Perk`,
        gender : `female`
    },
]

function filtered (arr) {
    let arrFilteredFemale = arr.filter(a => a.gender == `female`);
    arrFilteredFemale.forEach((a) => {
        console.log(`${a.name} lives at ${a.address}`);
    });
}

console.log(filtered (idLists));



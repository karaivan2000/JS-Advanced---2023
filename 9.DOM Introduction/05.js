function colorizeTable () {
   // let rowElements = document.querySelectorAll(`tr:nth-0f-type(2n) td`);

    //rowElements.forEach(x => {
        //x.style.backgroundColor = `Teal`;
    //});

    let rowElements = document.getElementsByTagName(`tr`);

    let rows = Array.from(rowElements);
    rows.forEach((x, i) => {
        if (i % 2 !== 0) {
            x.style.backgroundColor = `Teal`;
        }
    });
}

colorizeTable();
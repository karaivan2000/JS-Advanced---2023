function sort2(array) {
    
    array = array.sort((a, b) =>{
        a.length - b.length || a.localeCompare
    });
    console.log(array.join(`\n`));
}

sort2(['alpha',

    'beta',

    'gamma']);
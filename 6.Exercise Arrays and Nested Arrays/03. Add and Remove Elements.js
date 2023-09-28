function solve (commands){
    let output = [];

    for (let i = 0; i < commands.length; i++) {
        let currentCommands  = commands[i];
        if (currentCommands === `add`) {
            output.push(i + 1);
        } else if (currentCommands === `remove`) {
            output.pop();
        }
    }
    if (output.length === 0) {
        console.log(`Empty`);
    } else {
        console.log(output.join(`\n`));
    }

}
solve(['add', 'add', 'remove', 'add', 'add']);
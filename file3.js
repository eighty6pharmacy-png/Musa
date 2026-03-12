const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;

    const updated = data.replace('CSPC', 'NABUA CAMARINES SUR');
    fs.writeFile('example.txt', updated, (err) => {
        if (err) throw err;
    });
});
            
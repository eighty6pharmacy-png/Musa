const fs = require('fs');

fs.appendFile('example.txt', '\n This is a new line', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    }
    console.log('File appended successfully');
});
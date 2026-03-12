const fs = require('fs');

fs.writeFile('example.txt', 'Hello, Node js', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    }
    console.log('File written successfully');
});
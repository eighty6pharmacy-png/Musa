const fs = require('fs');

fs.mkdir('uploads', err=> {
    if (err) {
        console.error('Error creating directory:', err);
    }
    console.log('Directory created successfully');
});
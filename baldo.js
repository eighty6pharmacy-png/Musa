const fs = require ('fs');

// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if(err)throw err;
//         const updated = data.replace('Hello node js','NABUA CAMARINES SUR');
    
//     fs.writeFile('example.txt', updated, err => {
//         if(err) throw err;
//     });
// });

fs.mkdir('uploads', err => {
    if(err){
        console.error('Error creating directory', err);
    };
    console.log('Directory created successfully');
});

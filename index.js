const fs = require("fs");
const path = require("path");

const currentPath = path.join(__dirname, 'Students');
const newPath = path.join(__dirname, 'Names');
const currentFilePath = path.join(__dirname, 'Names', 'user.js');
const newFilePath = path.join(__dirname, 'Names', 'temidayo_sanusi.js')
const newFile = path.join(__dirname, 'Names', 'user.js');
const content = `const name = 'Temidayo Sanusi';`
const newContent = `const Age = 24; const sex = 'female'; const nationality = 'Nigerian'; const phoneNumber = +2349047010860;`

fs.mkdir(currentPath, (err)=>{
    if (err){
        return (err);
    }
    else {
        console.log('Folder created successfully');
    }
})


fs.writeFile(newFile, content, (err)=>{
    if (err){
        return (err);
    }
    else {
        console.log('Folder created successfully');
    } 
})

fs.rename(currentPath, newPath, (err)=>{
    if (err){
        return (err);
    }
    else{
        console.log('Update done successfully!')
    }
})

fs.appendFile(newFile, newContent, (err)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log("File Updated!");
    }
})

 fs.rename(currentFilePath, newFilePath, (err)=>{
   if  (err){
      console.log("err");
 }
    else
     {
        console.log("File renamed!")
   }
 })

 fs.readFile(newFilePath, 'utf8', (err, data)=>{
    if(err){
        return err;
    }
    else{
        console.log('File read successfully');
        console.log(data);
    }
 })

//  fs.rm(newFilePath, (err)=>{
//     if(err){
//         return err;
//     }
//     else{
//         console.log('File deleted successfully');  
//     }
//  })






























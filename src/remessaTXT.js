var fs = require(`fs`);


module.exports = {
  generateTXT : function(filename_path, string){
    fs.writeFile(filename_path, string, function (err) {
      if (err) throw err;
      console.log('File is created successfully.');
    });
  }
}


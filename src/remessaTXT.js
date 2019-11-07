var fs = require(`fs`);

module.exports = {
  generateTXT: function (filename_path, string) {
    console.log(filename_path)
    fs.writeFile(filename_path, string, (err) => {
      if (err) throw err;
      console.log(filename_path)
      console.log('Arquivo remessa criado');
    })
  }
}


function cleanUp(files, sort) {
  const sortedFiles = [];
  for (let i = 0; i < files.length; i++) {
    let dotLocation = files[i].indexOf(".");
    const fileName = files[i].substring(0, dotLocation);
    console.log(dotLocation, fileName);

  }
  console.log(sortedFiles);
}

module.exports = cleanUp;

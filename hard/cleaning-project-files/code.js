function cleanUp(files, sort) {
  const sortedFiles = [];
  for (let i = 0; i < files.length; i++) {
    let dotLocation = files[i].indexOf(".");
    const fileName = files[i].substring(0, dotLocation);
    console.log(dotLocation, fileName);
    if (i === 0) {
      sortedFiles.push(files[i])
    }

    for (let k = 0; k < sortedFiles.length; k++) {
      if (sortedFiles[k][0] === fileName) {
        sortedFiles[k].push(files[i]);
      }
    }
  }
  console.log(sortedFiles);

  return sortedFiles;
}

module.exports = cleanUp;

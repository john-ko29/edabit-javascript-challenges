function cleanUp(files, sort) {
  const sortedFiles = [];
  for (let i = 0; i < files.length; i++) {
    let dotLocation = files[i].indexOf(".");
    const fileName = files[i].substring(0, dotLocation);
    console.log(dotLocation, fileName);
    if (i === 0) {
      const firstFile = [files[0]]
      sortedFiles.push(firstFile)
      continue;
    }

    let moveOn = false;
    for (let k = 0; k < sortedFiles.length; k++) {
      if (sortedFiles[k][0].substring(0, dotLocation) === fileName) {
        sortedFiles[k].push(files[i]);
        moveOn = true;
      }
    }
    if (moveOn) {
      continue;
    }
    sortedFiles.push([files[i]]);
  }
  console.log(sortedFiles);

  return sortedFiles;
}

module.exports = cleanUp;

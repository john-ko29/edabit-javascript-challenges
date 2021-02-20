function cleanUp(files, sort) {
  const sortedFiles = [];
  for (let i = 0; i < files.length; i++) {
    let dotLocation = files[i].indexOf(".");
    let fileName = null;
    if (sort === "prefix")  {
      fileName = files[i].substring(0, dotLocation);
    } else {
      fileName = files[i].substring(dotLocation, files.length - 1);
    }
    console.log(dotLocation, fileName);
    if (i === 0) {
      const firstFile = [files[0]]
      sortedFiles.push(firstFile)
      continue;
    }

    let moveOn = false;
    for (let k = 0; k < sortedFiles.length; k++) {
      let currentFile = null;
      if (sort === "prefix") {
        currentFile = sortedFiles[k][0].substring(0, dotLocation);
      } else {
        currentFile = sortedFiles[k][0].substring(dotLocation, files.length - 1);
      }
      if (currentFile === fileName) {
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

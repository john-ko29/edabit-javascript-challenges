function sortContacts(names, sort) {
  const fullName = [];
  const initials = [];
  const sortedList = [];
  const order = [];
  for (let i =  0; i < names.length; i++) {
    const tempFullName = names[i].split(" ");
    fullName.push(tempFullName[i])
    initials.push(tempFullName[1]);
  }
  initials.sort();

  console.log(initials);
}

module.exports = sortContacts;

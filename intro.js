const student = {
  name: 'Abdul Aziz Ndayishimiye',
  age: 33,
  favoriteProgrammingLanguage: 'JavaScript',
};

function displayStudentInfo(student) {
  Object.entries(student).forEach(([property, value]) => {
    console.log(`${property}: ${value}`);
  });
}

displayStudentInfo(student);

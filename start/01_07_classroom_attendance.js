// Write your code here
function getStudents(classroom) {
  const { hasTeachingAssisstant, classes } = classroom;
  let teacher, assistant, students;

  if (hasTeachingAssisstant) {
    [teacher, assistant, ...students] = classes;
  } else {
    [teacher, ...students] = classes;
  }

  return students;
}

const students = getStudents({
  hasTeachingAssisstant: false,
  classes: ["c1", "c2", "c3", "c4", "c5"],
});

console.log(students);

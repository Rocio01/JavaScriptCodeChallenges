const attendance = (classroom) => {
  let {hasTeachingAssistant, classList} = classroom;
  let teacher, teacherAssistant, students;
  if (hasTeachingAssistant){
    [teacher, teacherAssistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

console.log(attendance({
  hasTeachingAssistant: true,
  classList: ["Felix", "eU", "M", "P", "W"]
}))
console.log(attendance({
  hasTeachingAssistant: false,
  classList: ["Felix", "eU", "M", "P", "W"]
}))
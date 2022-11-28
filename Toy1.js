// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


function checkGrade (studentGrades){
    if (studentGrades >= 79 && studentGrades <=100){
    return "A"
}
else if(studentGrades >=60 && studentGrades <=79){
    return "B"
}
else if(studentGrades >=59 && studentGrades <=49){
    return "C"
}
else if(studentGrades >=40 && studentGrades <=49){
    return "D"
}
else if(studentGrades < 40){
    return "E"
}
}
function handleClick(event){
    let marks=parseInt(document.getElementById("Marks").value)
    let grade=(checkGrade(marks))
    document.getElementById("Grade").textContent=grade
}
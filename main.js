"use strict"

const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];


function findTopStudent(data){
    let topStudent = data[0];
    for (let i = 1;
        i < data.length; 
        i++){
        if(data[i].score  > topStudent.score){
            topStudent=data[i];
        }
    } 

    return topStudent.name;
}
console.log(findTopStudent(grades));

function addLetterGrade(data){
    data.forEach((item) => {
        item["letter"] = item.score >= 90 ? "A": item.score < 75 ? "C" : "B";
    });
    console.log(data)
}

addLetterGrade(grades)

function calculateAverage(data) {
    const total = data.reduce(function (sum, student) {
        return sum + student.score;
    }, 0)
    return total / data.length;

}
console.log('средний балл:', calculateAverage(grades))


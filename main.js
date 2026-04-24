"use strict"

const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

function addLetterGrade(data){
    data.forEach((item) => {
        item["letter"] = item.score >= 90 ? "A": item.score < 75 ? "C" : "B";
    });
    console.log(data)
}

addLetterGrade(grades)
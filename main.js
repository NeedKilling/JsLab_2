"use strict"

const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];
function filterfail(data, score=60 ){
    let fail=[];

    for (let i =0; i < data.length; i++){
        if (data[i].score < score){
            fail.push(data[i].name);
        }
    }
    return fail;
}
console.log("Список должников", filterfail(grades));
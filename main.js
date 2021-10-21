var student_array= [];

function submit(){
var display_array=[];
for (var i=1; i<=4; i++){
    var name1= document.getElementById("name_of_the_student_"+i).value;
    student_array.push(name1);

}
console.log(student_array);
var l=student_array.length;
for (var j=0; j<l; j++){
    display_array.push("<h4> Name - "+student_array[j]+"</h4>");
}
console.log(display_array);
document.getElementById("display_name_with_commas").innerHTML=display_array;
var remove_commma = display_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commma;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    student_array.sort();
    var display_array=[];
    var l=student_array.length;
for (var j=0; j<l; j++){
    display_array.push("<h4> Name - "+student_array[j]+"</h4>");
}
console.log(display_array);
var remove_commma = display_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commma;
}
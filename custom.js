/*$(document).ready(function(){
$('.question > .faq-question > .answer').hide();
$('.question > .faq-question ').click(function() {
if ($(this).hasClass("active")) {
    $(this).removeClass("active").find(".answer").slideUp();
} else {
    $(".question > .faq-question.active .answer").slideUp();
    $(".question  > .faq-question.active").removeClass("active");
    $(this).addClass("active").find(".answer").slideDown();
}
return false;
});
});*/


/*$(document).ready(function(){
document.querySelector(".faq-question").addEventListener("click", displayanswer);

function displayanswer() {
document.querySelector(".answer").innerHTML = answer();
}
});*/


/*var acc = document.getElementsByClassName(".question");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
this.classList.toggle("active");
var answer = this.nextElementSibling;
if (answer.style.display === "block") {
    answer.style.display = "none";
} else {
    answer.style.display = "block";
}
});
}*/

const questions = document.querySelectorAll('.faq-box-question');
questions.forEach((question) => question.addEventListener('click', () => {
question.classList.add('faq-accordion')
if (question.classList.contains('active')) {
    question.classList.toggle('active');
} else {
    questions.forEach((question) => question.classList.remove('active'))
    question.classList.add('active');
}
}));



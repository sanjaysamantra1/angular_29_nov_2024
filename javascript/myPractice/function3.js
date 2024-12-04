function changeColor1() { // Regular - this : how/where the function is called
    console.log(this); // this = window / btn1 / btn2 / btn3 (dynamic)
    this.style.backgroundColor = 'red';

}
// changeColor1(); // global
let changeColor2 = () => { // this = window
    console.log(this); // this = static , this = where the function is written
    this.style.backgroundColor = 'blue';
}
document.getElementById('btn-1').addEventListener('click', changeColor1);
document.getElementById('btn-2').addEventListener('click', changeColor1);
document.getElementById('btn-3').addEventListener('click', changeColor1);

document.getElementById('btn-4').addEventListener('click', changeColor2);
document.getElementById('btn-5').addEventListener('click', changeColor2);
document.getElementById('btn-6').addEventListener('click', changeColor2);
// javascript

console.log("Hello world");
// DOM MANIPULATION 
// getElementById()
const title = document.getElementById('main-heading');
console.log(title);

const listitem=document.getElementsByClassName('list-items');
console.log(listitem);
console.log("tagname");

const tagname=document.getElementsByTagName('li');
console.log(tagname);

// queryselector()
const container=document.querySelector('div');
console.log(container);
 // queryselectorAll()
const container1=document.querySelectorAll('div');
console.log(container1);

const title1=document.querySelector('#main-heading');
title1.style.color='red';



const list1=document.querySelectorAll('.list-items');
console.log(list1);


for( var i=0;i<list1.length;i++)
{list1[i].style.color='blue';
// list1[i].style.fontSize='2rem';

    
}
console.log(list1);



// creating elements 

const ul=document.querySelector('ul');
const li=document.createElement('li');
// adding elements
ul.append(li);
// modify the Text
li.innerText=("X-men");

// modifying attribute and classes
li.setAttribute('id','main-heading');


li.removeAttribute('id');
console.log(list1);
console.log(title.getAttribute('id'));


// add a class to a listitem
li.classList.add('list-items');
console.log(list1);

// agr hamne css,  jski help se  bhi laga di hai usi class ya id pr toh jss vali nhi mani jaegi  us time pr jo hamne jss se element create  kiya but jo css simply lagi hui hai vo create element apply hoegi. 

console.log(li.classList.contains('list-items'));

// reove elements
// li.remove();


//parent node traversal 
let ul1=document.querySelector('ul');
console.log(ul1);
console.log(ul1.parentNode);
console.log(ul1.parentElement);
console.log(ul1.parentNode.parentNode);
console.log(ul1.parentElement.parentElement);

const html=document.documentElement;
console.log(html);

// console.log(html.parentNode);
// console.log(html.parentElement);

//child node traversal 
let ul2=document.querySelector('ul');
console.log(ul2);

console.log(ul2.childNodes);
// console.log(ul2.firstChild);
// console.log(ul2.lastChild);
ul2.lastChild.style.backgroundColor='blue';
ul2.childNodes[1].style.color='white';

// indentation is caused a s text nodes 

// 5 listitem those are not null

console.log(ul2.children);

//sibling node traversal
let ul3=document.querySelector('ul');
const div1=document.querySelector('div');
console.log(div1.childNodes);

console.log(ul3);
// console.log(ul3.previousSibling);
// console.log(ul3.nextSibling);
console.log(ul3.previousElementSibling);
console.log(ul3.nextElementSibling);



// DOM MANIPULATION EVENT LISTENER 
//event listener 

// elment.addEventListener("click",function);

const buttonTwo=document.querySelector('.btn-2');
function alertBtn(){
    alert('I also love React');
    };
  buttonTwo.addEventListener("click",alertBtn);
    

const buttonthree=document.querySelector('.btn-3');
function alertBtn1(){
    alert('i also love Node js ');
    
};

buttonthree.addEventListener("click",alertBtn1);


const newbackgroundcolor=document.querySelector('.box-3');
function changeBgcolor() 
{
    newbackgroundcolor.style.backgroundColor='blue';
    
};

newbackgroundcolor.addEventListener("mouseover",changeBgcolor);


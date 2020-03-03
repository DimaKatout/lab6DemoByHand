
//we can access anything in the Dom by document
/*
 id="kittenProfiles
<article>
    <h2><frankie/h2>
    <p>frankie is addorabl , and is 4 mounth old</p>
    <ul>
        <li>cudling</li>
        <li>chasing string</li>
    </ul>
    <img src="images/frankie.jpeg" />
</article>
</div> */
var frankie=
{name:"Frankie",
age:0,
likes:["cuddling","chasing", "food"],
imagePath:`images/frankie.jpeg`,
goodWithDogs:false,
goodWithCats:true,
breed:"britich shorthair",
getAge:function(min,max)
{
this.age = getRandomNum(min,max);
},

//kol al7aki eli 3melto ta7t taba3 alDom bedi ajebo o a3melo hoon be method 
//3adi altare2teen bzboto
render:function()
{var container = document.getElementById("kittenProfiles");
console.log(container);
var articleEl =document.createElement("article");
console.log(articleEl);
//kol ma a3mel eshi lazem a3melo append la alab ta3o
container.appendChild(articleEl);
var h2El = document.createElement("h2");
h2El.textContent= this.name;
console.log(h2El);

articleEl.appendChild(h2El);
var pEl=document.createElement("p");
//mola7aza hoon ana bara alobject fa ma basta5dem this.age basta5dem frankie.age
pEl.textContent=`frankie is adorable,and is ${this.age} months old`;
console.log(pEl);
articleEl.appendChild(pEl);
var ulEl=document.createElement("ul");
articleEl.appendChild(ulEl);
//frankie.likes.length entebhi hadool aktar ashya2 btentasa
for(let i=0;i<this.likes.length;i++)
{
var liEl=document.createElement("li");
ulEl.appendChild(liEl);
liEl.textContent=this.likes[i];
}



var imgEl = document.createElement("img");
articleEl.appendChild(imgEl);
//setAttribute awal para alattribute name o altani alvalue elo
imgEl.setAttribute("src",this.imagePath);


}


};

//anytime you make a functions inside the object thay must be called from outside the object
//hay altare2a eli banadeeh fiha lazem esem alobj . ese, alfunction
//eza ma 3nelet heek ma ra7 yetnada alfunction la7aloo 

frankie.getAge(3,7);
frankie.render();

function getRandomNum(min,max)

{
return Math.floor(Math.random() * (max-min+1))+min;
}
///////////////////////////////
//lama ne3mel getElementById bseer 3endi refrence la html elemnt

//starting the Dom hereeeeeeeeeeeeeeeeeeee  :)))))))))))))))
/*var container = document.getElementById("kittenProfiles")
console.log(container);
var articleEl =document.createElement("article");
console.log(articleEl);
//kol ma a3mel eshi lazem a3melo append la alab ta3o
container.appendChild(articleEl);
var h2El = document.createElement("h2")
h2El.textContent= frankie.name;
console.log(h2El);

articleEl.appendChild(h2El);
var pEl=document.createElement("p");
//mola7aza hoon ana bara alobject fa ma basta5dem this.age basta5dem frankie.age
pEl.textContent=`frankie is adorable,and is ${frankie.age} months old`;
console.log(pEl);
articleEl.appendChild(pEl);
var ulEl=document.createElement("ul");
articleEl.appendChild(ulEl);
//frankie.likes.length entebhi hadool aktar ashya2 btentasa
for(let i=0;i<frankie.likes.length;i++)
{
var liEl=document.createElement("li");
ulEl.appendChild(liEl);
liEl.textContent=frankie.likes[i];
}



var imgEl = document.createElement("img");
articleEl.appendChild(imgEl);
//setAttribute awal para alattribute name o altani alvalue elo
imgEl.setAttribute("src",frankie.imagePath);*/





var person ={name: "Dima",
changeName:function (newName)
{
    //bezbot a7ki person.name=newName

console.log('what is the value of this ',this )
    this.name=newName;


}
};
var obj={
    sayHi:function()
    {
        console.log('hi');
    }

};
//eza bedi bakto 3al console mathalan console ra7 yetl3li kol almethods eli fiha
//this will add another key (age) and it's value is 23
person["age"]=23;
//Another way ..person.age=23;
//we can change the name person.name="jsjsj"

//we can console the object to see what we have 
console.log(person);

//hay btbaynli alobject ka jadwal
console.table(person);
var userName='name';
person[userName]='DimaKatout';
person.changeName("jdhihsisjs");
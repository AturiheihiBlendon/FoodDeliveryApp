function Placeorder(){
    document.getElementById("order summary").style.display="block";
    Uname=document.getElementById("name");
    mobile=document.getElementById("number");
    adress=document.getElementById("home");
    burger=document.getElementById("optBurger");
    rollex=document.getElementById("optRollex");
    pizza=document.getElementById("optPizza");
    chicken=document.getElementById("optChicken");
    coke=document.getElementById("optCoke");

    var meal_cost=0;
    var Ad_on_cost=0;
    var meal_name="";
    var Ad_on_name="";

    if(burger.checked){
        meal_cost=13;
        meal_name=burger.value;
    }

    if(rollex.checked){
        meal_cost=6;
        meal_name=rollex.value;
    }

    if(pizza.checked){
        meal_cost=12;
        meal_name=pizza.value;
    }

    if(chicken.checked){
        meal_cost=10;
        meal_name=chicken.value;
    }
    
    if(coke.checked){
        Ad_on_cost=1;
        meal_cost+=Ad_on_cost;
        Ad_on_name=coke.value+"<br>";
    }
    document.getElementById("lbName").innerHTML=Uname.value;
    document.getElementById("lbContact").innerHTML=mobile.value;
    document.getElementById("lbAddress").innerHTML=adress.value;
    document.getElementById("lbMeal").innerHTML=meal_name;
    document.getElementById("lbAdon").innerHTML=Ad_on_name;
    document.getElementById("lbAmount").innerHTML="$"+meal_cost;

    }
function err() {
    var name = document.getElementById("name-inp").value;
    var age = document.getElementById("age-inp").value;
    var errror = document.getElementById("err");
    var nameget = document.getElementById("nameget")
    var ageget = document.getElementById("ageget")
    const audio = new Audio("10.Kol_Sana_Wenta_Tayeb.mp3");
    var error = "";
    var happy = "Happy birthday ya <br> "
    var happyage = "كل سنة و انت طيبة قلبي بقي عنده "

    if( name.length ==""  ){
       error = "please enter your name"
       errror.innerHTML= error ;
        return false; 
    }

    else if (age.length =="" || isNaN(age) ){ 
        error = "please enter your age"
        errror.innerHTML= error ;
        return false; 
      }

      else {
        error = "";
        errror.innerHTML= error ;
        nameget.innerHTML= happy + name + "❤";
        ageget.innerHTML= happyage + age + "سنين" + "❤" ;
        audio.play();
        return true ;
      }


}


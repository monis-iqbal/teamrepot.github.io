const login = ()=>{
    let  emailLog = document.getElementById("signemail").value
    let  pwdLog = document.getElementById("pwd").value
    if( emailLog === "ali@xyz.com" & pwdLog === "123456" || emailLog === "hamza@xyz.com" & pwdLog === "123457" || emailLog === "ahmad@xyz.com" & pwdLog === "123458" || emailLog ===  "ebad@xyz.com" & pwdLog === "123459" ){
        location.href="./index4.html"
    }else{alert("your email or password is wrong")}
}
     
        
        
   
// users data
// function users(FullName,userId,Email,Password){
//     this.FullName = name;
//     this.userId = id;
//     this.Email = email;
//     this.Password = password;
// }

// const user1 = new users("ali" , "000001" , "ali@xyz.com" , "123456" )
// const user2 = new users("hamza" , "000002" , "hamza@xyz.com" , "123457")
// const user3 = new users("ahmad" , "000003" , "ahmad@xyz.com" , "123458")
// const user4 = new users("ebad" , "000004" , "ebad@xyz.com" , "123459")

function createTeam(){
    // getting values and storing 
    let usersEmail = ["ali@xyz.com" ," hamza@xyz.com"," ahmad@xyz.com"," ebad@xyz.com"]
    let teamName = document.getElementById("team_name").value
    localStorage.setItem("Team_name" , teamName)
    let teamCategory = document.getElementById("category").value
    localStorage.setItem("Category" , teamCategory)
    let adminEmail = document.getElementById("create_member_email").value
    localStorage.setItem("adminEmail" ,  adminEmail)


//  displaying values in a div

    document.getElementById("newTeam").innerHTML = teamName
    
    let data1 = localStorage.getItem("Team_name"  )
    let data2 = localStorage.getItem("Category")
    let data3 = localStorage.getItem("adminEmail")
    let team = data1  + "(" + data2  + ")" + "<br>" + "team owner : " + data3  + "<br>" + usersEmail
    // localStorage.setItem("team1" , team )
    document.getElementById("newTeam").innerHTML = team
    

    document.getElementById("createteam_none").style = "display : none "
    
}


// create team box

function createNewTeam() {
    
    document.getElementById("createteam_none").style = "display : block ;"
}


function hiddenBtn(){
    document.getElementById("createteam_none").style = "display : none ;"
}


// function createT(){
//   let e = document.getElementById("category");
//   let as = document.forms[0].category.value;
//   let strUser = e.options[e.selectedIndex].value;
//   console.log(as, strUser);
// }
// e.onchange=show;
// show();



// time for page 6
// let n =  new Date();
// y = n.getFullYear();
// m = n.getMonth() + 1;
// d = n.getDate();
// document.getElementById("date").innerHTML = m + "/" + d + "/" + y;



function Apply_change(){
    let applyQuestion1 = document.getElementById("ask_qu1").innerText;
    let applyQuestion2 = document.getElementById("ask_qu2").innerText;
    let applyQuestion3 = document.getElementById("ask_qu3").innerText;

    document.getElementById("question-field1").innerHTML = applyQuestion1
    document.getElementById("question-field2").innerHTML = applyQuestion2
    document.getElementById("question-field3").innerHTML = applyQuestion3
}









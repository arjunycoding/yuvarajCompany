/*************
    LOGIN
*************/ 
// VARIBELS
let submit = $("#submit");
let warrning = $("#alert");
let mainpage = $("#mainPage")
let loginPage = $("#loginPage")
let loginInfo = {
    "arjun":"123",
    "adhithya":"456"
};
// HIDE AND SHOW
warrning.hide()
mainpage.hide()
// FUNCTIONS
function validateForm(){
    for (const [key, value] of Object.entries(loginInfo)) {
        let uname = $("#username").val();
        let pwd = $("#password").val();
        if(uname == key && pwd == value){
            mainpage.show()
            loginPage.hide()
            break;
        } else {
            warrning.show()
        }
    }
}
// EVENT LISTENERS
submit.on("click", validateForm)

/************
    SPA
*************/
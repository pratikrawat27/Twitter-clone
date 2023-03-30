// DOM Element

const mainPage = document.querySelector('.main-page');

const loginPage = document.querySelector('.login-page');

const middleContent = document.querySelector(".middle-content");

const btnTop = document.querySelector('.btn-top');

const newFeedPage = document.querySelector('.feeds-page');

const loginModel = document.querySelector('.login-model');

const modelX = document.querySelector('.login-model i');
 
const loginFormBtn = document.querySelector('.login-form-btn');

const backToMain = document.querySelector('.login-page-nav a');

const postBtn =  document.querySelector('.post-btn');

const modelWrap = document.querySelector('.model-wrapper');

const model = document.querySelector('.model');

const postModelX = document.querySelector('.model-header i');

const modelPostBtn = document.querySelector('.model-header button');

const modelFotterPl = document.querySelector('.model-footer span');

const modelInput = document.querySelector('.model-input');

const user = document.querySelector('.user');

const sidebar = document.querySelector('.sidebar');

const sidebarWrapper = document.querySelector('.sidebar-wrapper');

const xBtn = document.querySelector('.sidebar-header i')

const toggel = document.querySelector('.toggel');

const circle = document.querySelector('.circle');

/*******************************************************/
/*******************************************************/
//Hiding And Displaying The Main And LogIn Page

//Main Page

const goToLoginPage = () => {
    //Hide Main Page Display LogIn Page 
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
};

middleContent.addEventListener('click', (e) => {
    if (e.target.classList[1] ==='main-btn'){
        goToLoginPage(); 
    }
    //console.log(e.target.classList[1]); //e.target give us the elements which are clicked.
});

btnTop.addEventListener('click', () => {
    const inputUserInfo = document.querySelector('.user-info');
    const inputUserPassword = document.querySelector('.user-password');

    if(inputUserInfo.value !== "" && inputUserPassword.value !== ""){
        mainPage.style.display = 'none';
        newFeedPage.style.display = 'block';
    } else {
        goToLoginPage();
        loginModel.style.display = 'block';
    }
    //console.log(inputUserInfo.value); //.value property stores anything we insert inside of them.
});

const goToMainPage = () => {
    mainPage.style.display = 'grid';
    loginPage.style.display = 'none';
};

backToMain.addEventListener('click', () => {
    goToMainPage();
});

//LogIn Page

modelX.addEventListener('click', () => {
    loginModel.style.display = 'none';
});

loginFormBtn.addEventListener('click', () => {
    const loginUserInfo = document.querySelector('.login-user-info');
    const loginUserPassword = document.querySelector('.login-user-password');

    if(loginUserInfo.value !== "" && loginUserPassword.value !== ""){
        newFeedPage.style.display = 'block';
        loginPage.style.display = 'none';
    } else {
        loginModel.style.display = 'block';    
    }
}); 

//News Feed Page
//Post Model

postBtn.addEventListener('click', () => {
    model.style.display = 'block';
    modelWrap.classList.add('model-wrapper-display');
});

postModelX.addEventListener('click', () => {
    model.style.display = 'none';
    modelWrap.classList.remove('model-wrapper-display');

    if(modelInput.value !== ""){
        modelInput.value = "";
        changeOp(.5);
    }
});

const changeOp = (x) => {
    modelPostBtn.style.opacity = x;
    modelFotterPl.style.opacity = x;
}

modelInput.addEventListener('keypress', (e) => {
    if(e.target.value !== ""){
        changeOp(1);
    }
});

modelInput.addEventListener('blur', (e) => {
    if(e.target.value === ""){
        changeOp(.5);
    }
});

//Sidebar

user.addEventListener('click', () => {
    sidebar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-wrapper-display');
});

xBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
});

//Dark Mode

const darkElements1 = document.querySelectorAll('.dark-mode-1');

const darkElements2 = document.querySelectorAll('.dark-mode-2');

const lightText = document.querySelectorAll('.light-text');

const borders = document.querySelectorAll('.border')

toggel.addEventListener('click', () => {
    circle.classList.toggle('move');
    //toggel allow us to add class to class list if it doesnt exist and remove the class if it exist
    Array.from(darkElements1).map(darkEl1 =>
        darkEl1.classList.toggle('dark-1')
    ); //NodeList to Array
    Array.from(darkElements2).map(darkEl2 =>
        darkEl2.classList.toggle('dark-2')
    );
    Array.from(lightText).map(lightT => 
        lightT.classList.toggle('light')
    );
    Array.from(borders).map(borderr => 
        borderr.classList.toggle('border-color')
    );
});


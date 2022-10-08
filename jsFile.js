function reSize() {
    document.getElementById("container").style.height = window.innerHeight;
}



function showLoginField() {
    let profilePictureDisplay = document.getElementById("profilePicture");
    let inputUsernameDisplay = document.getElementById("username");
    let inputPasswordDisplay = document.getElementById("password");
    let signinButtonDisplay = document.getElementById("signinButton");
    let signupButtonColor = document.getElementById("signupButtonInput");
    let loginButtonDisplay = document.getElementById("loginButton");
    let loginButtonColor = document.getElementById("loginButtonInput");
    let signupSpace = document.getElementById("signupButton");
    profilePictureDisplay.classList.remove("d-none");
    inputUsernameDisplay.classList.remove("d-none");
    inputPasswordDisplay.classList.remove("d-none");
    signinButtonDisplay.classList.add("d-none");
    signupButtonColor.classList.add("buttonColorRed");
    loginButtonDisplay.classList.remove("d-none");
    loginButtonColor.classList.add("buttonColorGreen");
    signupSpace.classList.add("pt-4");
}



function showHidePassword() {
    let passwordType = document.getElementById("passwordInput");
    if (passwordType.getAttribute("type") == "password") {
        passwordType.setAttribute("type", "text");
    } else {
        passwordType.setAttribute("type", "password");
    }
}










function displayStep1() {
    let input = document.getElementById("inputPhoneNumber_email");
    let hide = document.getElementById("symbolArrowPhoneNumber_email");
    let display = document.getElementById("arrowPhoneNumber_email");
    let title = document.getElementById("step1");
    if (input.value.lenght !== 0) {
        hide.classList.add("d-none");
        display.classList.remove("d-none");
        display.classList.add("activeOpacity");
        display.classList.add("arrowClickStyle");
        title.classList.add("colorGreen");
    }
}

function nextStep2() {
    let hide = document.getElementById("phoneNumber_emailPart");
    let show = document.getElementById("passwordPart");
    let subtitle = document.getElementById("stepList");
    let step = document.getElementById("subtitleStep1");
    hide.classList.add("d-none");
    show.classList.remove("d-none");
    subtitle.classList.remove("d-none");
    step.classList.remove("d-none");
    step.classList.remove("colorBlack");
}

function step1() {
    let show = document.getElementById("phoneNumber_emailPart");
    let hidePasswordPart = document.getElementById("passwordPart");
    let hideConfirmPasswordPart = document.getElementById("confirmPasswordPart")
    let hideFullNamePart = document.getElementById("fullNamePart");
    let hideRegisterPart = document.getElementById("registerPart");
    let stepList = document.getElementById("stepList");
    let subtitle = document.getElementById("stepList");
    let step1 = document.getElementById("subtitleStep1");
    let step2 = document.getElementById("subtitleStep2");
    let step3 = document.getElementById("subtitleStep3");
    let step4 = document.getElementById("subtitleStep4");
    show.classList.remove("d-none");
    hidePasswordPart.classList.add("d-none");
    hideConfirmPasswordPart.classList.add("d-none");
    hideFullNamePart.classList.add("d-none");
    hideRegisterPart.classList.add("d-none");
    stepList.classList.add("mr-5");
    subtitle.classList.add("d-none");
    step1.classList.add("d-none");
    step2.classList.add("d-none");
    step3.classList.add("d-none");
    step4.classList.add("d-none");
}




function displayStep2() {
    let input = document.getElementById("inputPassword");
    let hide = document.getElementById("symbolArrowPassword");
    let display = document.getElementById("arrowPassword");
    let title = document.getElementById("step2");
    if (input.value.lenght !== 0) {
        hide.classList.add("d-none");
        display.classList.remove("d-none");
        display.classList.add("activeOpacity");
        display.classList.add("arrowClickStyle");
        title.classList.add("colorGreen");
    }
}

function nextStep3() {
    let hide = document.getElementById("passwordPart");
    let show = document.getElementById("confirmPasswordPart");
    let subtitle = document.getElementById("stepList");
    let step = document.getElementById("subtitleStep2");
    hide.classList.add("d-none");
    show.classList.remove("d-none");
    subtitle.classList.remove("d-none");
    subtitle.classList.add("mr-5");
    step.classList.remove("d-none");
    step.classList.remove("colorBlack");
}

function step2() {
    let show = document.getElementById("passwordPart");
    let hidePhoneNumber_emailPart = document.getElementById("phoneNumber_emailPart");
    let hideConfirmPasswordPart = document.getElementById("confirmPasswordPart")
    let hideFullNamePart = document.getElementById("fullNamePart");
    let hideRegisterPart = document.getElementById("registerPart");
    let stepList = document.getElementById("stepList");
    let step2 = document.getElementById("subtitleStep2");
    let step3 = document.getElementById("subtitleStep3");
    let step4 = document.getElementById("subtitleStep4");
    let step1 = document.getElementById("subtitleStep1");
    show.classList.remove("d-none");
    hidePhoneNumber_emailPart.classList.add("d-none");
    hideConfirmPasswordPart.classList.add("d-none");
    hideFullNamePart.classList.add("d-none");
    hideRegisterPart.classList.add("d-none");
    stepList.classList.add("mr-5");
    step2.classList.add("d-none");
    step3.classList.add("d-none");
    step4.classList.add("d-none");
    step1.classList.remove("colorBlack");
}



function displayStep3() {
    let input = document.getElementById("inputConfirmPassword");
    let hide = document.getElementById("symbolArrowConfirmPassword");
    let display = document.getElementById("arrowConfirmPassword");
    let title = document.getElementById("step3");
    if (input.value.lenght !== 0) {
        hide.classList.add("d-none");
        display.classList.remove("d-none");
        display.classList.add("activeOpacity");
        display.classList.add("arrowClickStyle");
        title.classList.add("colorGreen");
    }
}

function nextStep4() {
    let hide = document.getElementById("confirmPasswordPart");
    let show = document.getElementById("fullNamePart");
    let subtitle = document.getElementById("stepList");
    let step = document.getElementById("subtitleStep3");
    hide.classList.add("d-none");
    show.classList.remove("d-none");
    subtitle.classList.remove("d-none");
    subtitle.classList.add("mr-5");
    step.classList.remove("d-none");
    step.classList.remove("colorBlack");
}

function step3() {
    let show = document.getElementById("confirmPasswordPart");
    let hidePhoneNumber_emailPart = document.getElementById("phoneNumber_emailPart");
    let hidePasswordPart = document.getElementById("passwordPart")
    let hideFullNamePart = document.getElementById("fullNamePart");
    let hideRegisterPart = document.getElementById("registerPart");
    let stepList = document.getElementById("stepList");
    let step3 = document.getElementById("subtitleStep3");
    let step4 = document.getElementById("subtitleStep4");
    let step1 = document.getElementById("subtitleStep1");
    let step2 = document.getElementById("subtitleStep2");
    show.classList.remove("d-none");
    hidePhoneNumber_emailPart.classList.add("d-none");
    hidePasswordPart.classList.add("d-none");
    hideFullNamePart.classList.add("d-none");
    hideRegisterPart.classList.add("d-none");
    stepList.classList.add("mr-5");
    step3.classList.add("d-none");
    step4.classList.add("d-none");
    step1.classList.remove("colorBlack");
    step2.classList.remove("colorBlack");
}

function displayStep4() {
    let input = document.getElementById("inputFullName");
    let hide = document.getElementById("symbolArrowFullName")
    let display = document.getElementById("arrowFullName");
    let title = document.getElementById("step4");
    if (input.value.lenght !== 0) {
        hide.classList.add("d-none");
        display.classList.remove("d-none");
        display.classList.add("activeOpacity");
        display.classList.add("arrowClickStyle");
        title.classList.add("colorGreen");
    }
}

function nextStepDone() {
    let hide = document.getElementById("fullNamePart");
    let show = document.getElementById("registerPart");
    let subtitle = document.getElementById("stepList");
    let step4 = document.getElementById("subtitleStep4");
    let stepList = document.getElementById("stepList");
    let step1 = document.getElementById("subtitleStep1");
    let step2 = document.getElementById("subtitleStep2");
    let step3 = document.getElementById("subtitleStep3");
    hide.classList.add("d-none");
    show.classList.remove("d-none");
    subtitle.classList.remove("d-none");
    step4.classList.remove("d-none");
    stepList.classList.remove("mr-5");
    step1.classList.add("colorBlack");
    step2.classList.add("colorBlack");
    step3.classList.add("colorBlack");
    step4.classList.add("colorBlack");
}

function step4() {
    let show = document.getElementById("fullNamePart");
    let hidePhoneNumber_emailPart = document.getElementById("phoneNumber_emailPart");
    let hidePasswordPart = document.getElementById("passwordPart")
    let hideConfirmPasswordPart = document.getElementById("confirmPasswordPart");
    let hideRegisterPart = document.getElementById("registerPart");
    let stepList = document.getElementById("stepList");
    let step4 = document.getElementById("subtitleStep4");
    let step1 = document.getElementById("subtitleStep1");
    let step2 = document.getElementById("subtitleStep2");
    let step3 = document.getElementById("subtitleStep3");
    show.classList.remove("d-none");
    hidePhoneNumber_emailPart.classList.add("d-none");
    hidePasswordPart.classList.add("d-none");
    hideConfirmPasswordPart.classList.add("d-none");
    hideRegisterPart.classList.add("d-none");
    stepList.classList.add("mr-5");
    step4.classList.add("d-none");
    step1.classList.remove("colorBlack");
    step2.classList.remove("colorBlack");
    step3.classList.remove("colorBlack");
}
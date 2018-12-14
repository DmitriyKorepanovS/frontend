function renderData() {
    const selectId = {
        status: document.getElementById('status'),
        phonenumber: document.getElementById('phonenumber'),
        email: document.getElementById('email'),
        username: document.getElementById('username')
    }

    selectId.status.innerHTML = currentView.status;
    selectId.phonenumber.innerHTML = currentView.phonenumber;
    selectId.email.innerHTML = currentView.email;
    selectId.username.innerHTML = currentView.username;
}
renderData()

function addListener() {
    document.getElementById('navigation').addEventListener("click", changeTab)
    document.getElementById('newInterest').addEventListener("click", addInterest)
    document.getElementById('sectionInterest').addEventListener("click", deleteInterest)

    makeListnerChangeData('status', 'familyStatus')
    makeListnerChangeData('username', 'input')
    makeListnerChangeData('phonenumber', 'phoneNumberInput')
    makeListnerChangeData('email', 'emailinput')

    // document.getElementById('formInterest').addEventListener('submit', function (event) {
    //     event.preventDefault();
    // })

    function makeListnerChangeData(idForChange, idForInput) {
        document.getElementById(idForChange).addEventListener("click", function () {
            showInput(idForInput, idForChange)
        })
    }
}
addListener()

function changeTab() {
    if (event.target.className === 'nav__item') {
        showButton();
    }
}

function showButton() {
    let elementButtonrow = document.querySelectorAll('.nav__item');
    for (let i = 0; i < elementButtonrow.length; i++) {
        if (elementButtonrow[i].classList.contains('nav__item--current')) {
            elementButtonrow[i].classList.remove('nav__item--current');
            var indexDiv = i;
        }
        event.target.classList.add('nav__item--current');
    }
    for (let i = 0; i < elementButtonrow.length; i++) {
        if (elementButtonrow[i].classList.contains('nav__item--current')) {
            var indexDiv = i;
        }
    }
    showSection(indexDiv)
}

function showSection(indexDiv) {
    let section = document.querySelectorAll('.tab');
    for (let i = 0; i < section.length; i++) {
        if (section[i].classList.contains('tab--active')) {
            section[i].classList.remove('tab--active')
            section[indexDiv].classList.add('tab--active')
            break
        }
    }
}

function showInput(id, changeID) {
    let target = event.target;
    event.target.style = 'display: none';
    let p = document.getElementById(changeID).textContent
    document.getElementById(id).setAttribute('placeholder', p);
    document.getElementById(id).style = 'display: block'

    document.getElementById(id).addEventListener("change", function () {
        renderText(target, id, changeID)
    })
}

function renderText(target, id, changeID) {
    let inputData = document.getElementById(id).value;
    currentView[changeID] = inputData;
    saveLocalStorage()
    target.textContent = inputData;
    target.style = 'display: block';
    document.getElementById(id).style = 'display: none';

}

function addInterest() {
    let inputData = document.getElementById('interestinput').value;
    let li = document.createElement('li');
    li.setAttribute('class', 'interest__item');
    li.innerHTML = inputData;
    let sectionInterest = document.getElementById('sectionInterest');

    if (inputData.length > 0) {
        sectionInterest.insertBefore(li, sectionInterest.children[0])
    }
}

function deleteInterest() {
    if (event.target.className === 'interest__item') {
        let currentElement = event.target;
        currentElement.parentNode.removeChild(currentElement);
    }
}

function saveLocalStorage() {
    let serialObj = JSON.stringify(currentView);
    localStorage.setItem("myKey", serialObj);
}
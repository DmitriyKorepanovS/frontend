const defaultView = {
    status: 'холост',
    phonenumber: '+7 (440) 554-32-12',
    email: 'vitalya@gora.ru',
    username: 'Виталя Гора'
};

let currentView;
if (!localStorage) {
    currentView = defaultView;
} else {
    let localStorageData = JSON.parse(localStorage.getItem("myKey"));
    currentView = Object.assign(defaultView, localStorageData);
}
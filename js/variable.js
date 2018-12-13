const defaultView = {
    statusInfo: 'холост',
    phoneNumber: '+7 (440) 554-32-12',
    emailData: 'vitalya@gora.ru',
    userName: 'Виталя Гора'
};

let currentView;
if (!localStorage) {
    currentView = defaultView;
} else {
    let localStorageData = JSON.parse(localStorage.getItem("myKey"));
    currentView = Object.assign(defaultView, localStorageData);
}
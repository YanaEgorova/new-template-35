const WEBSITE_NAME = 'Soft World Toy';
const WEBSITE_URL = 'softworldtoy.com';
const WEBSITE_CORP = 'Mayer Media Grp Inc';
const WEBSITE_PHONE = '844 406 0494';
const WEBSITE_EMAIL = 'support@softworldtoy.com';
const WEBSITE_ADDRESS = '1130 Bedford Ave Num 56, Brooklyn, NY 11216';
const WEBSITE_RETURN_ADDRESS = '1218 E Broadway #317 Long Beach CA 90802, USA';
const WEBSITE_DESCRIPTOR = '8444060494softworldtoy';

let websiteName = document.querySelectorAll('.js_website-name');
let websiteUrl = document.querySelectorAll('.js_website-url');
let websiteCorp = document.querySelectorAll('.js_website-corp');
let websitePhone = document.querySelectorAll('.js_website-phone');
let websiteEmail = document.querySelectorAll('.js_website-email');
let websiteAddress = document.querySelectorAll('.js_website-address');
let websiteReturnAddress = document.querySelectorAll('.js_website-return-address');
let websiteDescriptor = document.querySelectorAll('.js_website-desc');




websiteName = [...websiteName];
websiteUrl = [...websiteUrl];
websiteCorp = [...websiteCorp];
websitePhone = [...websitePhone];
websiteAddress = [...websiteAddress];
websiteDescriptor = [...websiteDescriptor];

// SET WEBSITE TITLE
document.title = WEBSITE_NAME;

if(!(websiteName.length === 0)) {
    setInformation(websiteName, WEBSITE_NAME);
}

if(!(websiteUrl.length === 0)) {
    setInformation(websiteUrl, WEBSITE_URL);
    setWebsiteHref(websiteUrl, WEBSITE_URL);
}

if(!(websiteCorp.length === 0)) {
    setInformation(websiteCorp, WEBSITE_CORP);
}

if(!(websitePhone.length === 0)) {
    setInformation(websitePhone, WEBSITE_PHONE);
    setPhoneHref(websitePhone, WEBSITE_PHONE);
}

if(!(websiteEmail.length === 0)) {
    setInformation(websiteEmail, WEBSITE_EMAIL);
    setEmailHref(websiteEmail, WEBSITE_EMAIL);
}

if(!(websiteAddress.length === 0)) {
    setInformation(websiteAddress, WEBSITE_ADDRESS);
}

if(!(websiteReturnAddress.length === 0)) {
    setInformation(websiteReturnAddress, WEBSITE_RETURN_ADDRESS);
}

if(!(websiteDescriptor.length === 0)) {
    setInformation(websiteDescriptor, WEBSITE_DESCRIPTOR);
}


function setInformation(array, info) {
    array.forEach(item => {
        item.textContent = info;
    });
}

function setWebsiteHref(array, info) {
    array.forEach(item => {
        item.hasAttribute('href') && item.setAttribute('href', `http://${info}`);
    });
}

function setPhoneHref(array, info) {
    array.forEach(item => {
       const href = `tel:${info}`;
       item.hasAttribute('href') && item.setAttribute('href', href);
    });
}

function setEmailHref(array, info) {
    array.forEach(item => {
        const href = `mailto:${info}`
        item.setAttribute('href', href);
    });
}


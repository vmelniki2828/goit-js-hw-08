import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
let formData = {};

formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onFormSubmit);

addSavedText();

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
    formData = {};
};

function onInput(evt) {
   
    const savedFeedback = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedFeedback) {
        savedFeedback[evt.target.name] = evt.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedFeedback));
        formData = savedFeedback;
        return;
    }
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function addSavedText() {
    const savedFeedback = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedFeedback) {
        Object.entries(savedFeedback).forEach(([name, value]) => {
            formRef.elements[name].value = value;
        })
        formData = savedFeedback;
    }
}
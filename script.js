'use strict';

const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const steps = document.querySelectorAll('.step');
const progressLine = document.querySelector('.progress_line');

let currentStep = 1;

next.addEventListener('click', onNextClick);
prev.addEventListener('click', onPrevClick);

steps.forEach((step, index) => {
  step.addEventListener('click', () => setStep(index));
});

function onNextClick() {
  if (currentStep < 4) currentStep++;
  setProgressWidth(currentStep);
  render();
}

function onPrevClick() {
  if (currentStep > 1) currentStep--;
  setProgressWidth(currentStep);
  render();
}

function setProgressWidth(step) {
  let width = '0%';
  if (step === 2) width = '33%';
  if (step === 3) width = '66%';
  if (step === 4) width = '99%';
  progressLine.setAttribute('style', 'width: ' + width);
}

function setStep(index) {
  currentStep = index + 1;
  setProgressWidth(currentStep);
  render();
}

function render() {
  steps.forEach((step, index) => {
    if (index < currentStep) step.classList.add('active');
    else step.classList.remove('active');

    if (currentStep === 4) next.classList.add('disabled');
    else next.classList.remove('disabled');

    if (currentStep === 1) prev.classList.add('disabled');
    else prev.classList.remove('disabled');
  });
}

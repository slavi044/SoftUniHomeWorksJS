function attachEventsListeners() {
    let buttonForDays = document.getElementById('daysBtn');
    let buttonForHours = document.getElementById('hoursBtn');
    let buttonForMins = document.getElementById('minutesBtn');
    let buttonForSecs = document.getElementById('secondsBtn');
    
    let inputDays = document.getElementById('days');
    let inputHours = document.getElementById('hours');
    let inputMins = document.getElementById('minutes');
    let inputSecs = document.getElementById('seconds');

    buttonForDays.addEventListener('click', () => {
        let days =  Number(inputDays.value);
        inputHours.value = days * 24;
        inputMins.value = days * 1440;
        inputSecs.value = days * 86400;
    });

    buttonForHours.addEventListener('click', () => {
        let hours =  Number(inputHours.value);
        inputDays.value = hours / 24;
        inputMins.value = hours * 60;
        inputSecs.value = hours * 3600;
    });

    buttonForMins.addEventListener('click', () => {
        let mins =  Number(inputMins.value);
        inputDays.value = mins / 60 / 24;
        inputHours.value = mins / 60;
        inputSecs.value = mins * 60;
    });

    buttonForSecs.addEventListener('click', () => {
        let secs =  Number(inputSecs.value);
        inputDays.value = secs / 60 / 60 / 24;
        inputHours.value = secs / 60 / 60;
        inputMins.value = secs / 60;
    });
}
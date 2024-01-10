document.addEventListener('DOMContentLoaded', function () {
    // Function to create elements
    function createElement(type, attributes, text) {
        const element = document.createElement(type);
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
        if (text) {
            element.textContent = text;
        }
        return element;
    }

    // Get form container
    const formContainer = document.body;

    // Create form elements
    const bookingChoiceLabel = createElement('label', {}, 'Choice of Booking:');
    const bookingChoiceSelect = createElement('select', { id: 'bookingChoice' });
    const bookingOptions = ['Full day booking', 'Half day booking', 'Hourly booking'];
    for (const option of bookingOptions) {
        const optionElement = createElement('option', { value: option }, option);
        bookingChoiceSelect.appendChild(optionElement);
    }

    const userNameLabel = createElement('label', {}, 'User Name:');
    const userNameInput = createElement('input', { type: 'text', id: 'userName' });

    const mobileNumberLabel = createElement('label', {}, 'Mobile Number:');
    const mobileNumberInput = createElement('input', { type: 'tel', id: 'mobileNumber' });

    const emailLabel = createElement('label', {}, 'Email:');
    const emailInput = createElement('input', { type: 'email', id: 'email' });

    const numberOfPersonsLabel = createElement('label', {}, 'No of Persons:');
    const numberOfPersonsInput = createElement('input', { type: 'number', id: 'numberOfPersons' });

    const dateLabel = createElement('label', {}, 'Date:');
    const dateInput = createElement('input', { type: 'date', id: 'date' });

    const timeLabel = createElement('label', {}, 'Time:');
    const timeInput = createElement('input', { type: 'time', id: 'time' });

    const slotLabel = createElement('label', {}, 'Slot:');
    const slotSelect = createElement('select', { id: 'slot' });
    const slotOptions = ['Breakfast', 'Lunch', 'Dinner'];
    for (const option of slotOptions) {
        const optionElement = createElement('option', { value: option }, option);
        slotSelect.appendChild(optionElement);
    }

    // Append form elements to the container
    formContainer.appendChild(bookingChoiceLabel);
    formContainer.appendChild(bookingChoiceSelect);
    formContainer.appendChild(userNameLabel);
    formContainer.appendChild(userNameInput);
    formContainer.appendChild(mobileNumberLabel);
    formContainer.appendChild(mobileNumberInput);
    formContainer.appendChild(emailLabel);
    formContainer.appendChild(emailInput);
    formContainer.appendChild(numberOfPersonsLabel);
    formContainer.appendChild(numberOfPersonsInput);
    formContainer.appendChild(dateLabel);
    formContainer.appendChild(dateInput);
    formContainer.appendChild(timeLabel);
    formContainer.appendChild(timeInput);
    formContainer.appendChild(slotLabel);
    formContainer.appendChild(slotSelect);

    // Add event listener to choice of booking select
    bookingChoiceSelect.addEventListener('change', function () {
        const selectedOption = bookingChoiceSelect.value;

        // Hide/show relevant fields based on the selected option
        dateLabel.style.display = 'none';
        dateInput.style.display = 'none';
        timeLabel.style.display = 'none';
        timeInput.style.display = 'none';
        slotLabel.style.display = 'none';
        slotSelect.style.display = 'none';

        if (selectedOption === 'Full day booking') {
            dateLabel.style.display = 'block';
            dateInput.style.display = 'block';
        } else if (selectedOption === 'Half day booking') {
            dateLabel.style.display = 'block';
            dateInput.style.display = 'block';
            slotLabel.style.display = 'block';
            slotSelect.style.display = 'block';
        } else if (selectedOption === 'Hourly booking') {
            dateLabel.style.display = 'block';
            dateInput.style.display = 'block';
            timeLabel.style.display = 'block';
            timeInput.style.display = 'block';
        }
    });
});
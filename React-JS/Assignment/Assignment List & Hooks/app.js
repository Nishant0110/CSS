<<<<<<< HEAD
let col20 = document.querySelector(".col-20");
let aElements = col20.querySelectorAll("a");

aElements.forEach(a => {
    a.onclick = () => {
        let index = a.classList[0].charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        let targetQuestion = document.querySelector(`.que-${index}`);

        // Hide all questions
        document.querySelectorAll('.dis').forEach(question => {
            question.style.display = 'none';
        });
        // Display the selected question
        targetQuestion.style.display = "block";
    }
});


=======
let col20 = document.querySelector(".col-20");
let aElements = col20.querySelectorAll("a");

aElements.forEach(a => {
    a.onclick = () => {
        let index = a.classList[0].charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        let targetQuestion = document.querySelector(`.que-${index}`);

        // Hide all questions
        document.querySelectorAll('.dis').forEach(question => {
            question.style.display = 'none';
        });
        // Display the selected question
        targetQuestion.style.display = "block";
    }
});


>>>>>>> 0560a695275bcf83d54ec8323d1b239ec72bf359

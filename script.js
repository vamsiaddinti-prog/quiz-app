const quiz = [
    {
        question: "What is HTML?",
        options: ["Programming Language", "Markup Language", "Database", "OS"],
        answer: 1
    },
    {
        question: "Which is used for styling?",
        options: ["HTML", "CSS", "Python", "Java"],
        answer: 1
    },
    {
        question: "Which runs in browser?",
        options: ["C", "Java", "JavaScript", "Python"],
        answer: 2
    }
];

let current = 0;
let score = 0;
let selected = null;

function loadQuestion() {
    const q = quiz[current];
    document.getElementById("question").innerText = q.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((opt, index) => {
        const div = document.createElement("div");
        div.classList.add("option");
        div.innerText = opt;
        div.onclick = () => selected = index;
        optionsDiv.appendChild(div);
    });
}

function nextQuestion() {
    if (selected === quiz[current].answer) {
        score++;
    }

    selected = null;
    current++;

    if (current < quiz.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-box").innerHTML =
            "<h2>Your Score: " + score + "/" + quiz.length + "</h2>";
    }
}

loadQuestion();

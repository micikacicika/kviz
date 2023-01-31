let quizNiz = [
{
    pitanje: "Ko je napisao roman Stranac?",
    a: "Alber Kami",
    b: "Herman Hese",
    c: "Ernest Hemingvej",
    tacanOdgovor: "a",
},
{
    pitanje: "Koje delo pocinje i zavrsava se recenicom - Veliki plavi krug i u njemu zvezda?",
    a: "Starac i more",
    b: "Stranac",
    c: "Seobe",
    tacanOdgovor: "c",
},
{
    pitanje: "Koja stilska figura je prisutna u pocetnim stihovima epske pesme - Mali Radojica?",
    a: "hiperbola",
    b: "slovenska antiteza",
    c: "personifikacija",
    tacanOdgovor: "b",
},
{

    pitanje: "Iz kog Nusicevog dela su likovi - Zivka Popovic i ujka Vasa?",
    a: "Sumnjivo lice",
    b: "Narodni poslanik",
    c: "Gospodja ministarka",
    tacanOdgovor: "c",
},
];

let quiz = document.getElementById("quiz");
let pitanje = document.getElementById("pitanje");

let odgovori = document.querySelectorAll(".odgovor"); 

let a = document.getElementById("a_text");
let b = document.getElementById("b_text");
let c = document.getElementById("c_text");

let dugme = document.getElementById("dugme");

let trenutniInput = 0;
let score = 0;

loadQuiz();

 function loadQuiz() {

   deselectAnswers();

   let  cuurentQuizNiz = quizNiz[trenutniInput];
   pitanje.innerText = cuurentQuizNiz.pitanje;

    a.innerText = cuurentQuizNiz.a;
    b.innerText = cuurentQuizNiz.b;
    c.innerText = cuurentQuizNiz.c;
 }

 function getSelected() {
    let odgovor = undefined;

    odgovori.forEach((odgovoR) => {
        if (odgovoR.checked) {
            odgovor = odgovoR.id;
            console.log("OVO JE ANSWER "+ odgovor)
        }
    
 })};

 function deselectAnswers() {
    odgovori.forEach((odgovoR) => {
        odgovoR.checked = false;
    });
}

dugme.addEventListener("click", () => {
    let odgovor = getSelected(); 
    if(odgovor) {
        if(odgovor === quizNiz[trenutniInput].tacanOdgovor) {
            score++;
        } }
        trenutniInput ++;
    if (trenutniInput < quizNiz.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `
            <h1>You answered correctly at ${score}/${quizNiz.length} questions.</h1>
            
            <button onclick="location.reload()">Reload</button>
        `;
    }
}
);

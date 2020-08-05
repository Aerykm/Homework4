var questions = [
    {
        prompt: "How many world wars are there?\n(A) 25\n(B) 2\(C) 100\n(D) 0",
        answer: "B"
    },
    {
        prompt: "Can 100 alley cats beat 15 great danes?\n(A) The cats will eat them\n(B) The great danes would win\(C) I wouldn't hang out to find out\n(D) I can beat them all",
        answer: "D"
    },
    {
        prompt: "Which is the last harry potter movie?\n(A) Prizoner of azkaban\n(B) weekend at harry's\(C) Deathly hollows pt.2\n(D) who watches harry potter?",
        answer: "C"
    },
    {
        prompt: "Why isnt this quiz very consistent?\n(A) I dont do quizes very well\n(B) I wanted a general quiz\(C) I wanted this to be fun\n(D) I love inconsistency",
        answer: "C"
    },
    {
        prompt: "Who is our president?\n(A) A hot cheeto\n(B) Donald Trump\(C) Donaldo Drumpf\n(D) That one dude who wears a toupee",
        answer: "D"
    }
]

var score = 0

for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt)
    if(response == questions[i].answer){
        score++;
        alert("Correct!");
    } else {
        alert("wRONG!!!");
    }
}

alert("You got" + score + "/" + questions.length)
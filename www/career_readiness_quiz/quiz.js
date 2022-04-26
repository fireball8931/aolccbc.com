// TODO: create submit sub
// TODO: hook it into teams


var quiz_array = [
    "Welcome to WHO WANTS TO START A NEW CAREER *queue fanfare*",
    "This is the next line"
]

const questions = [
    {"question" : "My Present occupation is", "options" : ["Filled with opportunities","Not too promising","A dead end","I'm unemployed"]},
    {"question" : "I think that training may", "options" : ["Help me earn a promotion","Enable me to start a new career","Give me extra income"]},
    {"question" : "The greatest rewards of working are", "options" : ["Earning an income","A sense of accomplishment","Enjoying the challenge", "Working with people","Learning new skills"]},
    {"question" : "When it comes to working by myself", "options" : ["I can setup and follow my own schedule","I need occasional reminders","I need close supervision"]},
    {"question" : "When it comes to making decisions", "options" : ["I can make them myself","I need to consult with others","I procrastinate"]},
    {"question" : "I think my strengths are", "options" : ["Dedication","Friendliness","Ambition","Perseverance","An open and inquiring mind"]},
    {"question" : "My ability to concentrate is", "options" : ["Good","Fair","Poor"]},
    {"question" : "I find I can learn most easily by", "options" : ["Memorizing","Reading and trying to understand for myself","Having someone else support me and answer my questions"]},
    {"question" : "My ability to understand subjects that interest me is", "options" : ["Above average","Average","Below average"]},
    {"question" : "I think the one factor that holds back my career success is", "options" : ["Insufficient training or skills","Lack of confidence","Not having enough ambition","Not knowing the right people"]},
    {"question" : "When faced with a problem", "options" : ["I ask the opinions of qualified people","I try to figure it out myself","I try to forget about the problem and hope it solves itself"]},
    {"question" : "When it comes to accepting responsibility", "options" : ["I enjoy accepting it","I prefer sharing it","I would rather avoid it"]},
    {"question" : "When it comes to task completion", "options" : ["I always finish what I start","I need encouragement to persevere","I often give up"]},
]
const question14 = `<h3>I hope to get accepted to Academy of Learning Career College because</h3><br>
                    <textarea rows="5" cols="50" name="I hope to get accepted to Academy of Learning Career College because"></textarea>`
function startQuiz() {
    form_content =''
    quizoverlay = document.getElementById("quizoverlay")
    question_number = 0;
    quizoverlay.innerHTML = quiz_array[0];
    startConfetti();
    hideshowElementById("quizoverlay","show")
    
    questions.forEach(element => {
        question_number ++
        question_option = 0
        question_text = element.question
        form_content = `${form_content}\n<br>
            <h3>${question_number}. ${question_text}</h3>`;
        question_option_id =''
        options = element.options.forEach(option => {
            question_option ++
            question_option_id = `q${question_number}.${question_option}`

            form_content = `${form_content}<input type="checkbox" name="${question_text}" id="${question_option_id}" value="${option}">
            <label for="${question_option_id}">${option}</label><br>`

        })

});

document.getElementById('quiz').innerHTML = form_content + question14
// console.log(form_content);
             
}

function getDataFromQuiz() {
    question_number = 0;
    questions.forEach(element => {

   
    
    
    
}

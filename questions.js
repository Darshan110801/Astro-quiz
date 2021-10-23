
function fetcher()  {fetch("https://quizboot.herokuapp.com/random_upto_max/10")
  .then(response => response.json())
  .then(data => { questions = data; }).then(()=>{
    let new_questions = [];
    let count =1;
    console.log(questions);
    for (question_i of questions){
       new_question = {numb:count,question : question_i.statement,options:[question_i.option1,question_i.option2,question_i.option3,question_i.option4]}
       new_question.answer = new_question.options[question_i.correct_ans-1];
       new_questions.push(new_question)
    }
    console.log(new_questions)
    questions = new_questions
  })}
fetcher();

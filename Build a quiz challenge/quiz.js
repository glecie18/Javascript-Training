
const quiz = [
    ["What is the capital of France?", "Paris"],
    ["What is 2 + 2?", "4"],
    ["What is the color of the sky?", "blue"],
    ["Who wrote 'Hamlet'?", "Shakespeare"],
    ["What is the largest planet in our solar system?", "Jupiter"]
  ];
 
  let correctAnswers = 0;

  for (let i = 0; i < quiz.length; i++) {
    const question = quiz[i][0]; 
    const correctAnswer = quiz[i][1]; 
    
    const userAnswer = prompt(question);
    
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      correctAnswers++; 
    }
  }

  
  alert(`You answered ${correctAnswers} out of ${quiz.length} questions correctly!`);
  
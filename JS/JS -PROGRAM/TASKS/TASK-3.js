let score = 0;

function askQuestion(question, options, correctOption) {
  let userAnswer = prompt(`${question}\n${options}`);
  switch (userAnswer.toLowerCase()) {
    case correctOption:
      alert("✅ Correct!");
      score++;
      break;
    case "a":
    case "b":
    case "c":
    case "d":
      alert(`❌ Wrong! Correct answer was: ${correctOption}`);
      break;
    default:
      alert("⚠️ Invalid input! Please enter a, b, c or d only.");
      break;
  }
}

// Q1
askQuestion(
  "1. What does HTML stand for?",
  "a) HyperText Markup Language\nb) Hyperlink and Text Markup Language\nc) Home Tool Markup Language\nd) HyperText Machine Language",
  "a"
);

// Q2
askQuestion(
  "2. Which symbol is used for comments in JavaScript?",
  "a) <!-- -->\nb) //\nc) ##\nd) %%", 
  "b"
);

// Q3
askQuestion(
  "3. Which company developed JavaScript?",
  "a) Microsoft\nb) Google\nc) Netscape\nd) Apple",
  "c"
);

// Q4
askQuestion(
  "4. What is the output of 2 + '2'?",
  "a) 4\nb) 22\nc) NaN\nd) Error",
  "b"
);

// Q5
askQuestion(
  "5. Which is NOT a variable keyword in JavaScript?",
  "a) var\nb) let\nc) const\nd) int",
  "d"
);

// Final Score
alert(`🎉 Quiz Over! You scored ${score} out of 5`);

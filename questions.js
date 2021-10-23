
let response = fetch("https://quizboot.herokuapp.com/random_upto_max/5", {
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
})
  .then((res) => res.json())
  .then((resp) => {
    console.log(resp);
  });
questions = [
    {
    numb: 1,
    question: "What new element was discovered on the Moon?",
    answer: "Armalcolite",
    options: [
      "Ferrite",
      "Selenium",
      "Armalcolite",
      "Malcoarmite"
    ]
  },
    {
    numb: 2,
    question: "What does ISRO stand for?",
    answer: " Indian Space Research Organisation",
    options: [
      " Indiana Space Requisite Organisation",
      " Indian Station Research Organisation",
      " Indian Scholar Research Organisation",
      " Indian Space Research Organisation"
    ]
  },
    {
    numb: 3,
    question: "Which was the first satellite launched by ISRO?",
    answer: "Kalpana-1",
    options: [
      "Kalpana-1",
      "Bhaskara",
      "Aryabhata",
      "Chandrayaan"
    ]
  },
    {
    numb: 4,
    question: "In which place Dr Vikram Sarabhai Space Centre is located?",
    answer: "Sriharikota",
    options: [
      "Thiruvananthapuram",
      "Bangalore",
      "Sriharikota",
      "None Of these"
    ]
  },
    {
    numb: 5,
    question: "Who is the father of modern space science in India?",
    answer: "Vikram Sarabhai",
    options: [
      "Satish Dhawan",
      "Vikram Sarabhai",
      "Dr. Apj abdul kalam",
      "C V Raman"
    ]
  },
  
    {
  numb: 6,
  question: "What is the name of the largest peak in the Solar system?",
  answer: "Olympus Mons (Mars)",
  options: [
    "Pavonis Mons(Mars)",
    "Olympus Mons (Mars)",
    "Oberon peak(Uranus)",
    "None of these"
  ]
},

{
numb: 7,
question: "How many moons does Mars have?",
answer: "2",
options: [
  "0",
  "4",
  "2",
  "5"
]
},
{
numb: 8,
question: "How many Ice giants are in the Solar system?",
answer: " 2 (Uranus, Neptune)",
options: [
  " 4 (Uranus, Neptune, Saturn, Jupiter)",
  "None of these",
  " 3 (Uranus, Neptune, Pluto)",
  " 2 (Uranus, Neptune)"
]
},

{
numb: 9,
question: "Which is the largest moon in the Solar system?",
answer: "Ganymede",
options: [
  "Ganymede",
  "Luna",
  "Titan",
  "Callisto"
]
},

{
numb: 10,
question: "Which star is closest to the Sun?",
answer: "Proxima Centauri",
options: [
  "Sirius",
  "Alpha Centauri",
  "Proxima Centauri",
  "Deneb"
]
},
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
  //   {
  //   numb: 11,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];

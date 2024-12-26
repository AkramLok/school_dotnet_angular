import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../../global.service';


@Component({
  selector: 'app-quiz3',
  templateUrl: './quiz3.component.html',
  styleUrls: ['./quiz3.component.css']
})
export class Quiz3Component {
  constructor(public globalService: GlobalService) { }
  @Input() quizId: number = 2;
  answers: { [key: number]: string } = {}; // Track answers for each question
  allQuestionsAnswered: boolean = false; // Track whether all questions are answered
  correctCount: number = 0;
  ngAfterViewInit() {
    // Access the quizId from the div element
  }
  // Function to check if all questions are answered
  checkAllQuestionsAnswered() {
    this.allQuestionsAnswered = this.chapter3Questions.every((question, index) => this.answers[index] !== undefined);
  }

  //constructor(private http: HttpClient) { }

  // Function to handle form submission
  onSubmit() {
    // Calculate correct count locally
    this.correctCount = this.chapter3Questions.reduce((count, question, index) => {
      const userAnswer = this.answers[index]; // Convert userAnswer to number
      const correctAnswer = this.chapter3Questions[index].choices[parseInt(this.chapter3Questions[index].correctAnswer) - 1]; // Convert correctAnswer to number
      console.log(index + ': ' + userAnswer + '   ' + correctAnswer);
      return userAnswer === correctAnswer ? count + 1 : count;
    }, 0);

    // Handle the response locally
    console.log('Number of correct answers:', this.correctCount);
    if (this.correctCount >= 3) {
      this.globalService.isBoolean3 = true;
    }
  }

  chapter3Questions = [
    {
      question: 'What is the significance of version tagging in Git?',
      choices: [
        'To enhance code readability',
        'To manage software licenses',
        'To track changes and collaboration',
        'To facilitate release management and identify specific milestones'
      ],
      correctAnswer: '4'
    },
    {
      question: 'Which workflow is known for its structured approach to managing branches and is suitable for projects with a structured release cycle?',
      choices: ['GitHub Flow', 'Feature Branch Workflow', 'Gitflow Workflow', 'Centralized Workflow'],
      correctAnswer: '3'
    },
    {
      question: 'What are Git hooks used for?',
      choices: [
        'Decorative purposes in Git repositories',
        'Creating graphical user interfaces',
        'Automating tasks and enhancing collaboration',
        'Managing database schemas'
      ],
      correctAnswer: '3'
    },
    {
      question: 'What is the primary purpose of semantic versioning?',
      choices: [
        'To make version numbers look more appealing',
        'To confuse developers with complex versioning schemes',
        'To avoid versioning altogether',
        'To convey meaning about the underlying changes and compatibility'
      ],
      correctAnswer: '4'
    },
    {
      question: 'Which best practice involves excluding temporary files and build artifacts from being tracked by Git?',
      choices: ['Committing everything', 'Using large commit messages', 'Ignoring files with .gitignore', 'Having a single branch'],
      correctAnswer: '3'
    }
  ];

}

import { Component,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.component.html',
  styleUrls: ['./quiz2.component.css']
})
export class Quiz2Component {
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
    this.allQuestionsAnswered = this.branchManagementQuestions.every((question, index) => this.answers[index] !== undefined);
  }

  //constructor(private http: HttpClient) { }

  // Function to handle form submission
  onSubmit() {
    // Calculate correct count locally
    this.correctCount = this.branchManagementQuestions.reduce((count, question, index) => {
      const userAnswer = this.answers[index]; // Convert userAnswer to number
      const correctAnswer = this.branchManagementQuestions[index].choices[parseInt(this.branchManagementQuestions[index].correctAnswer) - 1]; // Convert correctAnswer to number
      console.log(index + ': ' + userAnswer + '   ' + correctAnswer);
      return userAnswer === correctAnswer ? count + 1 : count;
    }, 0);

    // Handle the response locally
    console.log('Number of correct answers:', this.correctCount);
    if (this.correctCount >= 3) {
      this.globalService.isBoolean2 = true;
    }
  }

  branchManagementQuestions = [
    {
      question: 'Why is creating branches for features or bug fixes essential in Git?',
      choices: [
        'To make the codebase more complex',
        'To allow parallel development on different features or bug fixes',
        'To increase the number of commits',
        'To create unnecessary overhead'
      ],
      correctAnswer: '2'
    },
    {
      question: 'What Git command is used to create a new branch?',
      choices: ['git checkout', 'git branch', 'git switch', 'git create'],
      correctAnswer: '2'
    },
    {
      question: 'Which command is used to switch to a different branch in Git?',
      choices: ['git move', 'git switch', 'git change', 'git branch-switch'],
      correctAnswer: '2'
    },
    {
      question: 'What is the purpose of merging branches in Git?',
      choices: [
        'To create conflicts between branches',
        'To make the repository larger in size',
        'To combine changes from one branch into another',
        'To delete branches'
      ],
      correctAnswer: '3'
    },
    {
      question: 'How can merge conflicts be resolved in Git?',
      choices: [
        'By ignoring conflicts and continuing with the merge',
        'By running "git conflict-resolve"',
        'By manually editing the conflicting files',
        'By deleting the conflicting branch'
      ],
      correctAnswer: '3'
    }
  ];

}

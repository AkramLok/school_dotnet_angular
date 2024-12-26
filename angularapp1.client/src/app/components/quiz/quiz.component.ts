import { Component,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  constructor(public globalService: GlobalService, private router: Router) { }
  @Input() quizId: number = 1;
  answers: { [key: number]: string } = {}; // Track answers for each question
  allQuestionsAnswered: boolean = false; // Track whether all questions are answered
  correctCount: number = 0;
  ngAfterViewInit() {
    // Access the quizId from the div element
  }
  // Function to check if all questions are answered
  checkAllQuestionsAnswered() {
    this.allQuestionsAnswered = this.questions.every((question, index) => this.answers[index] !== undefined);
  }

  //constructor(private http: HttpClient) { }

  onSubmit() {
    this.correctCount = this.questions.reduce((count, question, index) => {
      const userAnswer = this.answers[index]; // Convert userAnswer to number
      const correctAnswer = this.questions[index].choices[parseInt(this.questions[index].correctAnswer)-1]; // Convert correctAnswer to number
      console.log(index+': '+userAnswer + '   ' + correctAnswer);
      return userAnswer === correctAnswer ? count + 1 : count;
    }, 0);

    console.log('Number of correct answers:', this.correctCount);
    if (this.correctCount >= 4) {
      this.globalService.isBoolean1 = true;
      //this.router.navigateByUrl('chap2');
    }
  }

  
  questions = [
    {
      question: 'What is the primary purpose of version control in software development?',
      choices: ['Enhancing code readability', 'Managing software licenses', 'Tracking changes and collaboration', 'Improving runtime performance'],
      correctAnswer: '3'
    },
    {
      question: 'Which of the following is a distributed version control system widely used in the industry?',
      choices: ['Subversion (SVN)', 'Mercurial', 'Git', 'CVS (Concurrent Versions System)'],
      correctAnswer: '3'
    },
    {
      question: 'What does the term "working directory" refer to in Git?',
      choices: ['The space where code is executed', 'The directory where Git is installed', 'The directory containing the project\'s files', 'The directory for storing backup files'],
      correctAnswer: '3'
    },
    {
      question: 'Which Git command is used to initialize a new repository?',
      choices: ['git start', 'git init', 'git create', 'git begin'],
      correctAnswer: '2'
    },
    {
      question: 'What does the staging area in Git represent?',
      choices: ['The area where developers work on new features', 'The space where Git repositories are stored', 'The area for preparing changes before committing', 'The location of Git configuration settings'],
      correctAnswer: '3'
    },
    {
      question: 'Which Git command is used to view the commit history?',
      choices: ['git log', 'git history', 'git show', 'git status'],
      correctAnswer: '3'
    },
    {
      question: 'What is the role of Git in collaboration among multiple developers?',
      choices: ['Managing project licenses', 'Tracking runtime errors', 'Resolving merge conflicts', 'Optimizing code execution speed'],
      correctAnswer: '3'
    },
    {
      question: 'Which configuration settings should be set after installing Git to identify the author of commits?',
      choices: ['user.role', 'author.name and author.email', 'git.author', 'user.name and user.email'],
      correctAnswer: '2'
    }
  ];
  
  
}

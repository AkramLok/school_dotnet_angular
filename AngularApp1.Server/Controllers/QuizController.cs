using Microsoft.AspNetCore.Mvc;
using System.Linq;

[ApiController]
[Route("api/quiz")]
public class QuizController : ControllerBase
{
    [HttpPost("submit")]
    public IActionResult SubmitQuiz([FromBody] Quiz quizSubmission)
    {
        int quizId = quizSubmission.QuizId;
        var userAnswers = quizSubmission.Answers;
        var correctAnswers = GetCorrectAnswersForQuiz(quizId);

        if (correctAnswers == null || userAnswers == null)
        {
            return BadRequest("Invalid quiz data");
        }

        int correctCount = correctAnswers
            .Where((correctAnswer, index) => correctAnswer == userAnswers[index])
            .Count();

        int totalQuestions = correctAnswers.Length;
        return Ok(new { CorrectCount = correctCount, TotalQuestions = totalQuestions });
    }

    private string[] GetCorrectAnswersForQuiz(int quizId)
    {
        if (quizId == 1)
        {
            return new string[] { "3", "3", "3", "2", "3", "3", "3", "2" };
        }
        else if(quizId == 2)
        {
            return new string[] { "2", "2", "2", "3", "3"};
        }
        else if(quizId == 3)
        {
            return new string[] { "4", "3", "3", "4", "3"};
        }
        return null;
    }
}

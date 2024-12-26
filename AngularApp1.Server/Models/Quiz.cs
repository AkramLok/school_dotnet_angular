// Models/QuizResponse.cs
public class Quiz
{
    public int QuizId { get; set; }
    public Dictionary<int, string> Answers { get; set; }
}

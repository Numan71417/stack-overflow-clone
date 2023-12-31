import mongoose from "mongoose";

const QuestionSchema = mongoose.Schema({
  questionTitle: { 
    type: String, 
    required: "Question must have a title" 
  },
  questionBody: { 
    type: String, 
    required: "Question must have a body" 
  },
  questionImg: { 
    type: String
  },
  questionVid: { 
    type: String
  },
  quesCode: { 
    type: String
  },
  questionTags: { 
    type: [String], 
    required: "Question must have a tags" 
  },
  noOfAnswers: { 
    type: Number, 
    default: 0 
  },
  upVote: { 
    type: [String], 
    default: [] 
  },
  downVote: { 
    type: [String], 
    default: [] 
  },
  userPosted: { 
    type: String, 
    required: "Question must have an author" 
  },
  userPic: { 
    type: String, 
  },
  userId: { 
    type: String 
  },
  askedOn: { 
    type: Date, 
    default: Date.now 
  },
  answer: [
    {
      answerBody: String,
      ansImg:String,
      ansVid:String,
      ansCode:String,
      userAnswered: String,
      userId: String,
      userPic: String,
      answeredOn: { 
        type: Date, 
        default: Date.now 
      },
    },
  ],
});

export default mongoose.model("Question", QuestionSchema);

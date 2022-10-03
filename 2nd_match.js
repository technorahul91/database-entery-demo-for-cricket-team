const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/details1",
    { useNewurlParser: true, useUnifiedTopology: true })
    .then(() => console.log("2nd match"))
    .catch((err) => console.log(err));

const matchesSchema = new mongoose.Schema({
    MatchNumber: Number,
    MatchStatus: String,
    Teams: String,
    Day: Number,
    Stadium: String,
    Umpire: String,
    Overs: Number,
    TossWonBy: String,
    BattingTeam1: {
        TeamName: String,
        Player1: {
            name: String,
            Score: Number,
            Balls: Number,
        },
        Player2: {
            name: String,
            Score: Number,
            Balls: Number,
        },
        Player3: {
            name: String,
            Score: Number,
            Balls: Number,
        },
        Player4: {
            name: String,
            Score: Number,
            Balls: Number,
        },
        Player5: {
            name: String,
            Score: Number,
            Balls: Number,
        },
        Player6: {
            name: String,
            Score: Number,
            Balls: Number,
        },
        Player7: {
            name: String,
            Score: Number,
            Balls: Number,
        }
    },

    TotalScoreC: Number,
    OversC: Number,
    WicketsC: Number,
    Target: Number,
    BowlingTeam1: {
        TeamName: String,
        Bowler1: {
            name: String,
            overs: Number,
            Runs: Number,
            wickets: Number
        },
        Bowler2: {
            name: String,
            overs: Number,
            Runs: Number,
            wickets: Number
        },
        Bowler3: {
            name: String,
            overs: Number,
            Runs: Number,
            wickets: Number
        },
    },

    BattingTeam2: {
        TeamName: String,
        Player1: {
            name: String,
            Score: Number,
            Balls: Number,
        },
        Player2: {
            name: String,
            Score: Number,
            Balls: Number,
        },
        Player3: {
            name: String,
            Score: Number,
            Balls: Number,
        },
        Player4: {
            name: String,
            Score: Number,
            Balls: Number,
        },
        Player5: {
            name: String,
            Score: Number,
            Balls: Number,
        },
        Player6: {
            name: String,
            Score: Number,
            Balls: Number,
        },
        Player7: {
            name: String,
            Score: Number,
            Balls: Number,
        }
    },

    
    BowlingTeam2: {
        TeamName: String,
        Bowler1: {
            name: String,
            overs: Number,
            Runs: Number,
            wickets: Number
        },
        Bowler2: {
            name: String,
            overs: Number,
            Runs: Number,
            wickets: Number
        },
        Bowler3: {
            name: String,
            overs: Number,
            Runs: Number,
            wickets: Number
        },
        
    },
    TotalScoreD: Number,
    OversD: Number,
    WicketsD: Number,
    Winner:String,
    playerOftheMatch: String,
})

const Mat2=new mongoose.model("Matches",matchesSchema)
const Match2=new Mat2({
    MatchNumber:2,
    MatchStatus: "League Match",
    Teams:"TeamC vs TeamD",
    Day: 1,
    Stadium: "Azad maidan",
    Umpire:"Rajesh",
    Overs: 6,
    TossWonBy:"TeamC ",
    BattingTeam1: {
        TeamName:"TeamC",
        Player1: {
            name: "player31",
            Score: 10,
            Balls: 5,
        },
        Player2: {
            name: "player32",
            Score: 10,
            Balls: 5,
        },
        Player3: {
            name: "player33",
            Score: 10,
            Balls: 5,
        },
        Player4: {
            name: "player34",
            Score: 10,
            Balls: 5,
        },
        Player5: {
            name: "player35",
            Score: 10,
            Balls: 6,
        },
        Player6: {
            name: "player36",
            Score: 10,
            Balls: 5,
        },
        Player7: {
            name: "player37",
            Score: 10,
            Balls: 5,
        }
    },

    TotalScoreC: 70,
    OversC: 6,
    WicketsC: 6,
    Target: 71,
    BowlingTeam1: {
        TeamName: "TeamD",
        Bowler1: {
            name:"player47",
            overs: 2,
            Runs: 30,
            wickets: 2
        },
        Bowler2: {
            name: "player46",
            overs: 2,
            Runs: 20,
            wickets:2
        },
        Bowler3: {
            name: "player45",
            overs:2,
            Runs: 20,
            wickets: 2
        },
    },

    BattingTeam2: {
        TeamName: "TeamD",
        Player1: {
            name: "player41",
            Score: 10,
            Balls: 5,
        },
        Player2: {
            name:"player42",
            Score: 10,
            Balls: 5,
        },
        Player3: {
            name: "player43",
            Score: 10,
            Balls:5,
        },
        Player4: {
            name: "player44",
            Score: 10,
            Balls: 5,
        },
        Player5: {
            name:"player45",
            Score: 10,
            Balls: 5,
        },
        Player6: {
            name: "player46",
            Score: 10,
            Balls: 7,
        },
        Player7: {
            name: "player47",
            Score: 0,
            Balls: 3
            
        }
    },

    
    BowlingTeam2: {
        TeamName: "TeamC",
        Bowler1: {
            name: "player37",
            overs: 2,
            Runs: 20,
            wickets: 3
        },
        Bowler2: {
            name: "player36",
            overs:2,
            Runs: 20,
            wickets: 1
        },
        Bowler3: {
            name: "player35",
            overs: 1.3,
            Runs: 20,
            wickets: 2
        },
        
    },
    TotalScoreD: 60,
    OversD: 5.3,
    WicketsD: 6,
    Winner:"TeamC",
    playerOftheMatch: "Player37",
})


Match2.save();
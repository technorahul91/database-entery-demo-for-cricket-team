const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/details1",
    { useNewurlParser: true, useUnifiedTopology: true })
    .then(() => console.log("3rd match"))
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

    TotalScoreE: Number,
    OversE: Number,
    WicketsE: Number,
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
    TotalScoreF: Number,
    OversF: Number,
    WicketsF: Number,
    Winner:String,
    playerOftheMatch: String,
})

const Mat2=new mongoose.model("Matches",matchesSchema)
const Match3=new Mat2({
    MatchNumber:3,
    MatchStatus: "League Match",
    Teams:"TeamE vs TeamF",
    Day: 1,
    Stadium: "Mumbai gymkhana",
    Umpire:"Santosh",
    Overs: 6,
    TossWonBy:"TeamE ",
    BattingTeam1: {
        TeamName:"TeamE",
        Player1: {
            name: "player51",
            Score: 10,
            Balls: 5,
        },
        Player2: {
            name: "player52",
            Score: 10,
            Balls: 5,
        },
        Player3: {
            name: "player53",
            Score: 10,
            Balls: 5,
        },
        Player4: {
            name: "player54",
            Score: 10,
            Balls: 5,
        },
        Player5: {
            name: "player55",
            Score: 10,
            Balls: 6,
        },
        Player6: {
            name: "player56",
            Score: 10,
            Balls: 5,
        },
        Player7: {
            name: "player57",
            Score: 10,
            Balls: 5,
        }
    },

    TotalScoreE: 70,
    OversE: 6,
    WicketsE: 6,
    Target: 71,
    BowlingTeam1: {
        TeamName: "TeamF",
        Bowler1: {
            name:"player67",
            overs: 2,
            Runs: 30,
            wickets: 2
        },
        Bowler2: {
            name: "player66",
            overs: 2,
            Runs: 20,
            wickets:2
        },
        Bowler3: {
            name: "player65",
            overs:2,
            Runs: 20,
            wickets: 2
        },
    },

    BattingTeam2: {
        TeamName: "TeamF",
        Player1: {
            name: "player61",
            Score: 10,
            Balls: 5,
        },
        Player2: {
            name:"player62",
            Score: 10,
            Balls: 5,
        },
        Player3: {
            name: "player63",
            Score: 10,
            Balls:5,
        },
        Player4: {
            name: "player64",
            Score: 10,
            Balls: 5,
        },
        Player5: {
            name:"player65",
            Score: 10,
            Balls: 5,
        },
        Player6: {
            name: "player66",
            Score: 10,
            Balls: 7,
        },
        Player7: {
            name: "player67",
            Score: 0,
            Balls: 3
            
        }
    },

    
    BowlingTeam2: {
        TeamName: "TeamE",
        Bowler1: {
            name: "player57",
            overs: 2,
            Runs: 20,
            wickets: 3
        },
        Bowler2: {
            name: "player56",
            overs:2,
            Runs: 20,
            wickets: 1
        },
        Bowler3: {
            name: "player55",
            overs: 1.3,
            Runs: 20,
            wickets: 2
        },
        
    },
    TotalScoreF: 60,
    OversF: 5.3,
    WicketsF: 6,
    Winner:"TeamF",
    playerOftheMatch: "Player57",
})


Match3.save();
module.exports=Match3
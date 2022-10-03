const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/details1",
    { useNewurlParser: true, useUnifiedTopology: true })
    .then(() => console.log("1st match"))
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

    TotalScoreA: Number,
    OversA: Number,
    WicketsA: Number,
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
    TotalScoreB: Number,
    OversB: Number,
    WicketsB: Number,
    Winner:String,
    playerOftheMatch: String,
})

const Mat1=new mongoose.model("Matches",matchesSchema)
const Match1=new Mat1({
    MatchNumber:1,
    MatchStatus: "League Match",
    Teams:"TeamA vs TeamB",
    Day: 1,
    Stadium: "Azad maidan",
    Umpire:"Rajesh",
    Overs: 6,
    TossWonBy:"TeamA",
    BattingTeam1: {
        TeamName:"TeamA",
        Player1: {
            name: "player11",
            Score: 10,
            Balls: 5,
        },
        Player2: {
            name: "player12",
            Score: 10,
            Balls: 5,
        },
        Player3: {
            name: "player13",
            Score: 10,
            Balls: 5,
        },
        Player4: {
            name: "player14",
            Score: 10,
            Balls: 5,
        },
        Player5: {
            name: "player15",
            Score: 10,
            Balls: 6,
        },
        Player6: {
            name: "player16",
            Score: 10,
            Balls: 5,
        },
        Player7: {
            name: "player17",
            Score: 10,
            Balls: 5,
        }
    },

    TotalScoreA: 70,
    OversA: 6,
    WicketsA: 6,
    Target: 71,
    BowlingTeam1: {
        TeamName: "TeamB",
        Bowler1: {
            name:"player27",
            overs: 2,
            Runs: 30,
            wickets: 2
        },
        Bowler2: {
            name: "player26",
            overs: 2,
            Runs: 20,
            wickets:2
        },
        Bowler3: {
            name: "player25",
            overs:2,
            Runs: 20,
            wickets: 2
        },
    },

    BattingTeam2: {
        TeamName: "TeamB",
        Player1: {
            name: "player21",
            Score: 10,
            Balls: 5,
        },
        Player2: {
            name:"player22",
            Score: 10,
            Balls: 5,
        },
        Player3: {
            name: "player23",
            Score: 10,
            Balls:5,
        },
        Player4: {
            name: "player24",
            Score: 10,
            Balls: 5,
        },
        Player5: {
            name:"player25",
            Score: 10,
            Balls: 5,
        },
        Player6: {
            name: "player26",
            Score: 10,
            Balls: 7,
        },
        Player7: {
            name: "player27",
            Score: 0,
            Balls: 3
            
        }
    },

    
    BowlingTeam2: {
        TeamName: "TeamA",
        Bowler1: {
            name: "player17",
            overs: 2,
            Runs: 20,
            wickets: 3
        },
        Bowler2: {
            name: "player16",
            overs:2,
            Runs: 20,
            wickets: 1
        },
        Bowler3: {
            name: "player15",
            overs: 1.3,
            Runs: 20,
            wickets: 2
        },
        
    },
    TotalScoreB: 60,
    OversB: 5.3,
    WicketsB: 6,
    Winner:"TeamA",
    playerOftheMatch: "Player17",
})


Match1.save();

module.exports=Match1
const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/tournament",
{ useNewurlParser:true,useUnifiedTopology:true})
.then(()=>console.log("Matches schedule"))
.catch((err)=>console.log(err));

const matchesSchema= new mongoose.Schema({
    MatchNumber:Number,
    MatchStatus:String,
    Teams:String,
    Day:Number,
    Stadium:String,
    Umpire:String,
    Overs:Number
})


const Match=new mongoose.model("Matches",matchesSchema)
const Match1=new Match({
    MatchNumber:1,
    MatchStatus:"League Match",
    Teams:"TeamA vs TeamB",
    Day:1,
    Stadium:"Azad maidan",
    Umpire:"Rajesh",
    Overs:6
})

const Match2=new Match({
    MatchNumber:2,
    MatchStatus:"League Match",
    Teams:"TeamC vs TeamD",
    Day:1,
    Stadium:"Azad maidan",
    Umpire:"Rajesh",
    Overs:6
})

const Match3=new Match({
    MatchNumber:3,
    MatchStatus:"League Match",
    Teams:"TeamE vs TeamF",
    Day:1,
    Stadium:"Mumbai gymkhana",
    Umpire:"Santosh",
    Overs:6
})

const Match4=new Match({
    MatchNumber:4,
    MatchStatus:"League Match",
    Teams:"TeamG vs TeamH",
    Day:1,
    Stadium:"Mumbai gymkhana",
    Umpire:"Santosh",
    Overs:6
})

const Match5=new Match({
    MatchNumber:5,
    MatchStatus:"League Match",
    Teams:"Winner of match1 vs Winner of match2",
    Day:2,
    Stadium:"Azad maidan",
    Umpire:"Rajesh",
    Overs:6
})

const Match6=new Match({
    MatchNumber:6,
    MatchStatus:"League Match",
    Teams:"Winner of match3 vs Winner of match4",
    Day:2,
    Stadium:"Mumbai gymkhana",
    Umpire:"Santosh",
    Overs:6
})

const Match7=new Match({
    MatchNumber:7,
    MatchStatus:"League Match",
    Teams:"Winner of match5 vs Winner of match6",
    Day:3,
    Stadium:"Azad maidan",
    Umpire:"Rajesh",
    Overs:6
})

const Match8=new Match({
    MatchNumber:8,
    MatchStatus:"Qualifier Match",
    Teams:"Loser of match5 vs Loser of match6",
    Day:4,
    Stadium:"Azad maidan",
    Umpire:"Rajesh",
    Overs:6
})

const Match9=new Match({
    MatchNumber:9,
    MatchStatus:"Semi-Final Match",
    Teams:"Winner of match8 vs Loser of match7",
    Day:5,
    Stadium:"Mumbai gymkhana",
    Umpire:"Santosh",
    Overs:6
})

const Match10=new Match({
    MatchNumber:10,
    MatchStatus:"Final Match",
    Teams:"Winner of match7 vs winner of match9",
    Day:6,
    Stadium:"Azad maidan",
    Umpire:"Rajesh",
    Overs:6
})


Match.insertMany([Match1,Match2,Match3,Match4,Match5,Match6,Match7,Match8,Match9,Match10]);

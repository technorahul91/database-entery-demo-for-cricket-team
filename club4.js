const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/club",
    { useNewurlParser: true, useUnifiedTopology: true })
    .then(() => console.log("club4 onboard"))
    .catch((err) => console.log(err));

const clubListSchema = new mongoose.Schema({
    //_id:mongoose.Schema.Types.ObjectId(),

    name: String,
    owner: String,
    teamG: {
        name: String,
        player1: String,
        player2: String,
        player3: String,
        player4: String,
        player5: String,
        player6: String,
        player7: String,
    },
    teamH: {
        name: String,
        player1: String,
        player2: String,
        player3: String,
        player4: String,
        player5: String,
        player6: String,
        player7: String,
    }

})

const Club = new mongoose.model("Player", clubListSchema);
const clubList = new Club({

    name: "VidarbhaClub",
    owner: "Virat",
    teamG: {
        name: "Wardha",
        player1: "player71",
        player2: "player72",
        player3: "player73",
        player4: "player74",
        player5: "player75",
        player6: "player76",
        player7: "player77",
    },
    teamH: {
        name: "Indrawati",
        player1: "player81",
        player2: "player82",
        player3: "player83",
        player4: "player84",
        player5: "player85",
        player6: "player86",
        player7: "player87",
    }

});


clubList.save();


//module.exports=mongoose.model('players',clubListSchema)
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/club",
    { useNewurlParser: true, useUnifiedTopology: true })
    .then(() => console.log("club2 onboard"))
    .catch((err) => console.log(err));

const clubListSchema = new mongoose.Schema({
    //_id:mongoose.Schema.Types.ObjectId(),

    name: String,
    owner: String,
    teamC: {
        name: String,
        player1: String,
        player2: String,
        player3: String,
        player4: String,
        player5: String,
        player6: String,
        player7: String,
    },
    teamD: {
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

    name: "PuneClub",
    owner: "Sachin",
    teamC: {
        name: "Mulashi",
        player1: "player31",
        player2: "player32",
        player3: "player33",
        player4: "player34",
        player5: "player35",
        player6: "player36",
        player7: "player37",
    },
    teamD: {
        name: "Katraj",
        player1: "player41",
        player2: "player42",
        player3: "player43",
        player4: "player44",
        player5: "player45",
        player6: "player46",
        player7: "player47",
    }

});


clubList.save();

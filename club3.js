const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/club",
    { useNewurlParser: true, useUnifiedTopology: true })
    .then(() => console.log("club3 onboard"))
    .catch((err) => console.log(err));

const clubListSchema = new mongoose.Schema({
    //_id:mongoose.Schema.Types.ObjectId(),

    name: String,
    owner: String,
    teamE: {
        name: String,
        player1: String,
        player2: String,
        player3: String,
        player4: String,
        player5: String,
        player6: String,
        player7: String,
    },
    teamF: {
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

    name: "MumbaiClub",
    owner: "Mahendra",
    teamE: {
        name: "Giants",
        player1: "player61",
        player2: "player62",
        player3: "player63",
        player4: "player64",
        player5: "player65",
        player6: "player66",
        player7: "player67",
    },
    teamF: {
        name: "Youngsters",
        player1: "player61",
        player2: "player62",
        player3: "player63",
        player4: "player64",
        player5: "player65",
        player6: "player66",
        player7: "player67",
    }

});


clubList.save();
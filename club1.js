const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/club",
    { useNewurlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Club1 onboard"))
    .catch((err) => console.log(err));

const clubListSchema = new mongoose.Schema({
    //_id:mongoose.Schema.Types.ObjectId(),

    name: String,
    owner: String,
    teamA: {
        name: String,
        player1: String,
        player2: String,
        player3: String,
        player4: String,
        player5: String,
        player6: String,
        player7: String,
    },
    teamB: {
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
const clubList1 = new Club({

    name: "NashikClub",
    owner: "Dravid",
    teamA: {
        name: "Godavari",
        player1: "player11",
        player2: "player12",
        player3: "player13",
        player4: "player14",
        player5: "player15",
        player6: "player16",
        player7: "player17",
    },
    teamB: {
        name: "Darana",
        player1: "player21",
        player2: "player22",
        player3: "player23",
        player4: "player24",
        player5: "player25",
        player6: "player26",
        player7: "player27",
    }

});

clubList1.save()
module.exports=clubList1

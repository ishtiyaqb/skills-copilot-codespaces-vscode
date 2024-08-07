function skillsMember() {
    var user = firebase.auth().currentUser;
    var db = firebase.firestore();
    var member = db.collection("members").doc(user.uid);
    member.get().then(function(doc) {
        if (doc.exists) {
            var data = doc.data();
            var skills = data.skills;
            var skillList = document.querySelector("#skills-list");
            skillList.innerHTML = "";
            for (var i = 0; i < skills.length; i++) {
                var skill = skills[i];
                var li = document.createElement("li");
                li.textContent = skill;
                skillList.appendChild(li);
            }
        } else {
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}
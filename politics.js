var issues;

ajax.get('/api/issues?affected=me').then(function(listOfThingsThatMatterToMe) {
    issues.push(listOfThingsThatMatterToMe);
})



function Person(name, experiences) {
    this.name = name;
    this.opinion = myOpinion(experiences)
}


function myOpinion(arrayOfExperiences) {

    var obj = {};
    var howIMakeMyChoices = arrayOfExperiences.reduce(function(totalExperience, curr) {
        return totalExperience += curr;
    })

    issues.forEach(function(issue) {
            obj[issue] = {
                stance: howImakeMyChoices + issue;
                changes: 0;
            })

        return obj;
    }
}

function debate(person1, person2) {
    var tiredOfTalking = false;
    var agree = false;

    while (!tiredOfTalking || !agree) {
        for (var issue1 in person1.opinion) {
            for (var issue2 in person2.opinion) {
                if (issue1 === issue2) {
                    //meaning were talking about the same thing
                    discuss(); //attempt to change person.issue.stance
                    if (issue1.stance === issue2.stance) {
                        agree = true;
                    } else {
                        tiredOfTalking = true;
                    }
                } else {
                    debate(); //infinite loop of talking past eachother
                }
            }
        }
    }
}

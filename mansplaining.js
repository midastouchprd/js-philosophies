var woman = new Person();
var man = new Person();

woman.gender = 'female'
man.gender = 'male'

function talking(gender, conversation) {
    return conversation;
}

man.isSheWrong = function() {
    if (man.misognist) {
        return true;
    }
}

woman.thingsSheAlreadyKnows = (man.thingsHeKnows) * 2;


function Mansplaining(person, you) {
    //men
    while (you.gender === "male" && you.misognist) {
        //if a female
        if (person.gender === "female") {
            //talking and you capture what they said
            var sheSaid = talking(person.thingSheKnows);
            //and you think she is wrong
            if (you.isSheWrong(sheSaid)) {
                //repeat something
                alert("Well, Actually " + you.thingsHeKnows)
            }
        } else {
            //if they are a man
            listen();
        }
    }
}

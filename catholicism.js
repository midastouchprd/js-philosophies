var You = {
    perfection: false;
}

function godLovesMe(you) {
    if (perfection(you)) {
        return true;
    }
    return false;
}

function goingToHeaven(you) {
    if (perfection(you)) {
        return true;
    }
    return false;
}

function perfection(you) {
    if (you.confess && you.dontSin && you.dontHaveSex && you.dontDrink && you.dontLie && you.readBible) {

        you.perfection = "almost"

    } else if (you.areACardinal && you.areAChildMolester) {
        you.perfection = true;
    }
}

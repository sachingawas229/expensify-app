
export const isAdult = (age) => {
    if(age > 18) {
        return true;
    } else {
        return false;
    }
}

const isSenior = (age) => {
    if (age > 60) {
        return true
    } else {
        return false;
    }
}

export default isSenior;
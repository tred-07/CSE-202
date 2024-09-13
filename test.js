function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0) return "Invalid Input";
    return ((income - expenses) * .2);
}

function sendNotification(email) {
    let ans = "", flag = 0, chk = 0;
    for (let it of email) {
        if (it == '@') flag = 1, chk = 1;
        if (flag === 1) {
            ans += " sent you an email from "
            flag = 0
        }
        else ans += it
    }
    if (chk === 1) return ans
    else return "Invalid Email"
}

function checkDigitsInName(name) {
    for (let it of name) {
        if (it >= '0' && it <= '9') return true
    }
    if (typeof name !== "string") return "Invalid Input"
    return false
}
function calculateFinalScore(obj) {
    if (typeof obj.name !== "string") return "Invalid Input"
    if (typeof obj.testScore !== "number") return "Invalid Input"
    if (typeof obj.schoolGrade !== "number") return "Invalid Input"
    if (typeof obj.isFFamily !== "boolean") return "Invalid Input"
    let score = 0;
    if(obj["isFFamily"]==true)score=20
    score+=(obj["testScore"]+obj["schoolGrade"])
    if (score >= 80) return true
    else return false
}
function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber!=="number")return "Invalid Input"
    let cmp=waitingTimes.length,sum=0
    for(let it of waitingTimes)sum+=it
    sum/=cmp
    sum=Math.round(sum)
    sum*=(serialNumber-cmp-1)
    return sum
}
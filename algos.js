// 2160. Minimum Sum Of Four Digit Number After Splitting Digits

// You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

// For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
// Return the minimum possible sum of new1 and new2.



var minimumSum = function(num) {
    
    let arr = []

    let sorted = num.toString().split('').sort((a, b) => a - b).join('');

    let num1 = sorted[0]
    let num2 = sorted[1]
    let num3 = sorted[2]
    let num4 = sorted[3]

    let firstNum = parseInt(num1.toString() + num3.toString())
    let secondNum = parseInt(num2.toString() + num4.toString())

    arr.push(firstNum)
    arr.push(secondNum)

    let sum = arr[0] + arr[1]

    return sum
};
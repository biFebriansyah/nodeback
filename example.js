// const Pembulatan = (value = 0) => {
//     const regXp = /\W/g

//     if (isNaN(value) || value === 0) {
//         return "Input harus valid angka"
//     } else if (!regXp.test(value)) {
//         return "angka tersebut langsung"
//     }

//     const strValue = value.toString()
//     const splitValue = strValue.split(".")
//     const splitNum = splitValue[1].split("")

//     if (splitNum.length !== 2) {
//         return "angka tersebut langsung"
//     }

//     if (splitNum[1] > 0 && splitNum[1] < 5) {
//         splitNum[1] = 0
//     } else {
//         splitNum[0] = Number(splitNum[0]) + 1
//         splitNum[1] = 0
//     }

//     const joinNum = splitNum.join("")
//     splitValue[1] = joinNum
//     return splitValue.join(",")
// }

function round(value) {
    if (isNaN(value)) return "Invalid number!"

    value = value.toString().split(".")
    let coma = value[1].split("")
    let roundedUnit = []
    for (let i = coma.length - 1; i > 0; i--) {
        if (
            (Number(coma[i]) < 5 && Number(coma[i - 1]) < 5) ||
            (Number(coma[i]) < 5 && Number(coma[i - 1]) > 4)
        ) {
            roundedUnit.push(Number(coma[i]))
            roundedUnit.push(Number(coma[i - 1]))
        }
        if (
            (Number(coma[i]) > 4 && Number(coma[i - 1]) < 5) ||
            (Number(coma[i]) > 4 && Number(coma[i - 1]) > 4)
        ) {
            roundedUnit.push(Number(coma[i]))
            roundedUnit.push(Number(coma[i - 1]) + 1)
            coma[i - 1] = (Number(coma[i - 1]) + 1).toString()
        }
    }
    if (roundedUnit[roundedUnit.length - 1] == 10) {
        return [(Number(value[0]) + 1).toString(), "00"].join(".")
    }
    let result = [value[0], roundedUnit[roundedUnit.length - 1] + "0"].join(".")
    return result
}

console.log(round(6.352764))
console.log(round(6.842764))
console.log(round(0.944537))
console.log(round(0.84))
console.log(round(6.852764))
console.log(round(0.892764))
console.log(round(2.005))

console.log("----------")

function round2(value) {
    if (isNaN(value)) return "Invalid number!"

    value = value.toString().split(".")
    let coma = value[1].split("")
    let res
    for (let i = coma.length - 1; i > 0; i--) {
        if (Number(coma[i]) > 4) {
            coma[i - 1] = (Number(coma[i - 1]) + 1).toString()
        }
        res = coma[i]
    }
    if (res > 5) res = (Number(coma[0]) + 1).toString()
    res = coma[0]
    if (res == 10) return [(Number(value[0]) + 1).toString(), "00"].join(".")
    return [value[0], res + "0"].join(".")
}

console.log(round2(6.352764))
console.log(round2(6.842764))
console.log(round2(0.95))
console.log(round2(0.887))
console.log(round2(6.8527645))
console.log(round2(0.892764))
console.log(round2(2.005))

console.log("-----------")

const pembulatan = (value) => {
    const regXp = /\W/g

    if (isNaN(value)) {
        return "input harus angka"
    } else if (!regXp.test(value)) {
        return "angka tersebut langsung"
    }

    const splitValue = value.toString().split(".")
    const elNums = splitValue[1].split("")

    if (elNums.length < 2) {
        return "angka tersebut langsung"
    }

    for (let index = elNums.length - 1; index > 0; index--) {
        if (elNums[index] > 4) {
            elNums[index - 1] = (Number(elNums[index - 1]) + 1).toString()
        }
        elNums[index] = 0
    }

    if (elNums[0] > 9) {
        return `${Number(splitValue[0]) + 1}.00`
    } else {
        splitValue[1] = elNums.slice(0, 2).join("")
        return splitValue.join(".")
    }
}

console.log(pembulatan(6.352764))
console.log(pembulatan(6.842764))
console.log(pembulatan(0.95))
console.log(pembulatan(0.887))
console.log(pembulatan(6.8527645))
console.log(pembulatan(0.892764))
console.log(pembulatan(2.005))

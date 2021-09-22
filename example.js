const Pembulatan = (value = 0) => {
    if (isNaN(value) || value === 0) {
        return "Input harus angka"
    }

    const input = value.toString()

    if (input.search(/\W/g) < 1) {
        return "angka tersebut langsung"
    }

    const splitValue = input.split(".")
    const splitNum = splitValue[1].split("")

    if (splitNum[1] > 0 && splitNum[1] < 5) {
        splitNum[1] = 0
    } else {
        splitNum[0] = Number(splitNum[0]) + 1
        splitNum[1] = 0
    }

    const joinNum = splitNum.join("")
    splitValue[1] = joinNum
    return splitValue.join(",")
}

console.log(Pembulatan("5.2"))

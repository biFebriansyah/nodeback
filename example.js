const groupingAnagram = (arrayString) => {
    const objAnagram = {}

    for (let i = 0; i < arrayString.length; i++) {
        const word = arrayString[i]
        const sortedWord = sortWordWithUnicode(word)

        if (objAnagram[sortedWord]) {
            objAnagram[sortedWord].push(word)
        } else {
            objAnagram[sortedWord] = [word]
        }
    }

    const arr = []
    for (const item in objAnagram) {
        if (objAnagram[item].length > 1) {
            arr.push(objAnagram[item])
        }
    }

    console.log(arr)
    return arr
}

const sortWordWithUnicode = (previousWord) => {
    const wordLowerCase = previousWord.toLowerCase()

    const arrUnicode = wordToUnicode(wordLowerCase)

    const sortedUnicode = sortArrayNumber(arrUnicode)

    const sortedWord = unicodeArrayToWord(sortedUnicode)

    return sortedWord
}

const wordToUnicode = (word) => {
    const arrUnicode = []

    for (let i = 0; i < word.length; i++) {
        arrUnicode.push(word.charCodeAt(i))
    }

    return arrUnicode
}

const sortArrayNumber = (arrNumber) => {
    for (let i = 0; i < arrNumber.length; i++) {
        for (let j = i + 1; j < arrNumber.length; j++) {
            if (arrNumber[i] > arrNumber[j]) {
                ;[arrNumber[i], arrNumber[j]] = [arrNumber[j], arrNumber[i]]
            }
        }
    }
    return arrNumber
}

const unicodeArrayToWord = (arrayUnicode) => {
    const arrayLetter = []

    for (let i = 0; i < arrayUnicode.length; i++) {
        arrayLetter.push(String.fromCharCode(arrayUnicode[i]))
    }

    return arrayLetter.join("")
}

const input = ["data", "anda", "kua", "dana", "aku", "nada", "taman", "adat", "mantan"]
groupingAnagram(input)

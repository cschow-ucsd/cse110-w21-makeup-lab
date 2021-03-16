const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const operation = document.getElementById('operation')
const submitButton = document.getElementById('operation')
const resultText = document.getElementById('result')

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const n1 = Number(num1.value)
    const n2 = Number(num2.value)
    let result = undefined
    switch(operation.value) {
        case '+':
            result = n1 + n2
            break
        case '-':
            result = n1 - n2
            break
        case 'x':
            result = n1 * n2
            break
        case '/':
            resulit = n1 / n2
            break
        default:
            throw 'Invalid operation!'
            break
    }
    resultText.innerHTML = `Result: ${result}`
    calculations.push({
        num1: n1,
        num2: n2,
        operation: operation.value,
        result: result
    })
})

function testLog() {
    console.log(`1st number: ${num1.value}`)
    console.log(`2nd number: ${num2.value}`)
}

function testError() {
    console.error('Cannot divide by 0')
}

let calculations = []
function testTable() {
    console.table(calculations)
}

function testDir() {
    console.dir(document.head)
}

function testDirxml() {
    console.dirxml(document)
}

function testGroup() {
    const label = 'Calculations so far'
    console.group(label)
    for (let i = 0; i < calculations.length; i++) {
        const calc = calculations[i]
        console.info(`${calc.num1} ${calc.operation} ${calc.num2} = ${calc.result}`)
    }
    console.groupEnd(label)
}

let sum, timeout
function testTimeStart() {
    console.log('Performing additions...')

    console.time()
    sum = 0
    function callback() {
        sum++
        console.log(sum)
        timeout = setTimeout(callback, 0)
    }
    timeout = setTimeout(callback, 0)
}

function testTimeEnd() {
    clearTimeout(timeout)
    console.log(`Time to perform ${sum} additions:`)
    console.timeEnd()
}

function testTrace() {
    const func = () => {
        testLog()
        console.trace()
    }
    func()
}
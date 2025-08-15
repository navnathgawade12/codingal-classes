const display = document.querySelector('.display')
const numberbutton = document.querySelectorAll('.number')
const operatorbuttons = document.querySelectorAll('.operator')

let currentinput = ''
let previousinput = ''
let operator = null

function updatedisplay(value){
    display.textContent = value | '0'
}

numberbutton.forEach(button=>{
    button.addEventListener('click', ()=>{
        currentinput = currentinput + button.id
        updatedisplay(currentinput)
    })
})

operatorbuttons.forEach(button=>{
    button.addEventListener('click', ()=>{
        const id = button.id
        let result
        switch(id){
            case 'clear':
                currentinput = ''
                previousinput = ''
                operator = null
                updatedisplay('')
                break;
                case 'backspace':
                    currentinput = currentinput.slice(0,-1)
                    updatedisplay(currentinput)
                    break
                    case 'equals':
                        if(operator && previousinput && currentinput){
                            result = calculate(parseFloat(previousinput) , parseFloat(currentinput) , operator)
                            updatedisplay(result.tostring())
                            currentinput = result.tostring()
                            previousinput = ''
                            operator = null
                        }
                        break
                        case 'divide':
                        case 'multiply':
                        case 'subtract':
                        case 'sum':
                            if(currentinput){
                                if(previousinput && operator){
                                    result = calculate(parseFloat(previousinput) , parseFloat(currentinput) , operator)
                                    previousinput = result.tostring()
                                    updatedisplay(result)
                                }else{
                                    previousinput = currentinput
                                    currentinput = ''
                                    operator = getoperatorsymbol(id)
                                }
                            }
                            break
        }
    })
})

function getoperatorsymbol(id){
    switch(id){
        case 'divide':
            return '/'
        case 'multiply':
            return '*'
        case 'subtract':
            return '-'
        case 'sum':
            return '+'
            default:
            return ''
    }
}

function calculate(a,b,op){
    switch(op){
        case "+":
            return a+b
        case "-":
            return a-b
        case "*":
            return a*b
        case "/":
            return a/b
        default:
            return b
    }
}


updatedisplay("")
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
        switch(id){
            case 'clear':
                currentinput = ''
                previousinput = ''
                operator = null
                updatedisplay('')
                break;
        }
    })
})
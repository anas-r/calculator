import {$} from "./alias";
import {parse, representation, tokenize} from "./parser";

export function render() {
    const calc = $.div('calc');

    const screen = $.div('screen')
    const screenText = $.div('screen-text');
    screen.append(screenText);

    const buttons = $.div('buttons');
    const zero = $.btn('0')
    const AC = $.btn('AC');
    const power = $.btn('');
    power.innerHTML = '<span class="button-circle"><span class="button-label">x<sup>y</sup></span></span> '

    const op = {
        add: $.btn('+'),
        sub: $.btn('-'),
        mul: $.btn('*'),
        div: $.btn('/'),
        eq: $.btn('=')
    }
    Object.keys(op).forEach(key => op[key].classList.add("operator"))

    zero.id = "zero";
    op.eq.id = "equal"
    AC.id = "AC";
    power.id = "power"
    power.classList.add("operator")

    buttons.append(AC,$.btn('√'),power)
    buttons.append($.btn('C'), $.btn('('), $.btn(')'), op.div);
    buttons.append($.btn('7'), $.btn('8'), $.btn('9'), op.mul);
    buttons.append($.btn('4'), $.btn('5'), $.btn('6'), op.sub);
    buttons.append($.btn('1'), $.btn('2'), $.btn('3'), op.add);
    buttons.append(zero, $.btn('.'), op.eq);

    calc.append(screen, buttons);
    $('body').append(calc);

    setUp();
}

function setUp() {
    const screenText = $('.screen > div').element;
    $('.buttons').on('click', (event) => {
        const target = event.target.closest('.button');
        if (!target){return}
        else if (target.textContent === "√") {
            screenText.textContent =tokenize(`(${screenText.textContent})^0.5`).join(" ")
            autoFormatScreenText(screenText);
        }
        else if (target.textContent.match(/[0-9]/)) {
            screenText.textContent = tokenize(screenText.textContent+target.textContent).join(" ");
            autoFormatScreenText(screenText);
        } else if (target.textContent === 'C') {
            const newText = tokenize(screenText.textContent);
            newText.pop()
            screenText.textContent = newText.join(" ")
            autoFormatScreenText(screenText);
        } else if (target.textContent === 'AC'){
            screenText.textContent = '';
        } else if (target.textContent.match(/[-+*\/()]/)) {
            screenText.textContent = tokenize(screenText.textContent + target.textContent).join(" ");
            autoFormatScreenText(screenText);
        } else if (target.id === "power"){
            screenText.textContent = tokenize(screenText.textContent + "^").join(" ");
            autoFormatScreenText(screenText);
        } else if (target.textContent === '.') {
            if (screenText.textContent.split(" ").pop().match(/[.]/)){
                autoFormatScreenText(screenText);
                return;
            }
            else {
                console.log(screenText.textContent.split(" ").pop())
                autoFormatScreenText(screenText);
                screenText.textContent += '.';
            }
        } else if (target.textContent === '=') {
            try {
                screenText.textContent = representation(screenText.textContent);
                autoFormatScreenText(screenText);
            } catch(e) {
                console.error(e)
                screenText.textContent = "Bad expression";
                setTimeout(() => screenText.textContent = '',500)
            }
        }
    })
}

function autoFormatScreenText(screenText) {
    let len = screenText.textContent.length
    if (len <= 19) {
        screenText.style.fontSize = 'xx-large';
    } else if (len > 19 && len < 27) {
        console.log("x large")
        screenText.style.fontSize = 'x-large';
    } else if (len > 27) {
        screenText.style.fontSize = 'large';
    }
}
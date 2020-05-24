const precedence = {
    "+": 0,
    "-": 0,
    "*": 1,
    "/": 1,
    "^": 2
}

const leftAssociativity = {
    "+": true,
    "-": true,
    "*": true,
    "/": true,
    "^": false
}

function compute(strA, strB, operator) {
    let [a, b] = [parseFloat(strA), parseFloat(strB)]
    switch (operator) {
        case "+" :
            return a + b;
        case "-" :
            return a - b;
        case "*" :
            return a * b;
        case"/" :
            return a / b;
        case "^" :
            return a ** b;
        default:
            throw new Error(`${operator} is not an operator`);
    }
}

function _misplacedMinus(tokens) {
    return tokens.findIndex((c, i) => {
        return (c !== '-') ? false :
            (tokens[i - 1] === '(' || i === 0)
    })
}

export function tokenize(expression) {
    const tokens = expression.split(/([-+*\/()^])/).filter(c => c.match(/[-+*()0-9\/^]/)).map(c => c.trim());
    let indexOfMisplacedMinus = _misplacedMinus(tokens)
    while (indexOfMisplacedMinus > -1) {
        tokens.splice(indexOfMisplacedMinus, 0, "0");
        indexOfMisplacedMinus = _misplacedMinus(tokens);
    }
    return tokens;
}

/* A Shunting-yard algorithm implementation. */
function reversePolishNotation(expression) {
    const start = Date.now()
    const tokens = tokenize(expression);
    const queue = [];
    const stack = [];
        tokens.forEach(token => {
            if (token.match(/[0-9]/)) {
                queue.push(token);
            } else if (_isOperator(token)) {
                while (
                    (stack[0])
                    &&
                    (precedence[token] < precedence[stack[0]] || (precedence[token] === precedence[stack[0]] && leftAssociativity[token]))
                    &&
                    (stack[0] !== '(')
                    ) {
                    queue.push(stack.shift());
                    if (Date.now() - start > 1000) {
                        throw new Error('Bad expression')
                    }
                }
                stack.unshift(token);
            } else if (token === '(') {
                stack.unshift(token)
            } else if (token === ')') {
                while (stack[0] && stack[0] !== '(') {
                    queue.push(stack.shift());
                }
                if (stack[0] === '(') {
                    stack.shift()
                }
            }
        })
    while (stack[0]) {
        if (!stack[0].match(/[()]/)) {
            queue.push(stack.shift());
        } else {
            stack.shift();
        }
    }
    return queue
}

function _isOperator(token) {
    return (!!token.match(/[-+*\/^]/) && !token.match(/[0-9]/));
}

function parse(expression) {
    const rpn = reversePolishNotation(expression);
    let i = 0;
    while (rpn[1]) {
        if (!rpn[i]) {
            throw new Error("Invalid expression")
        }
        if (!_isOperator(rpn[i])) {
            i++;
        } else if (i > 1) {
            rpn.splice(i - 2, 3, compute(rpn[i - 2], rpn[i - 1], rpn[i]) + "")
            i = 0;
        } else {
            throw new Error("Invalid expression")
        }
    }
    if (rpn[0] === "NaN") {
        throw new Error("Invalid expression")
    }
    return rpn[0];
}

export function representation(expression,roundTo=3){
    return Math.round(parse(expression)*(10**roundTo))/(10**roundTo)
}
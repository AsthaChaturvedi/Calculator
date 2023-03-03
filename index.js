let string = "";
const get = (x) => {
    string += x
    document.getElementById('input').value = string
}

function getSecondPart(string) {
    return string.split('+')[1];
}
const operator = (x) => {

    switch (x) {
        case "+":
            string += x
            document.getElementById('input').value = string
            break;
        case "-":
            string += x
            document.getElementById('input').value = string
            break;
        case "*":
            string += x
            document.getElementById('input').value = string
            break;
        case "/":
            string += x
            document.getElementById('input').value = string


            break;
        case "/":
            string += x
            document.getElementById('input').value = string
            case "=":
                    console.log(string)
                let string1=getSecondPart(string);
                 console.log(string1)
                document.getElementById('input').value = string
                break;
            break;
        case "AC":
            string = string.substring(string.length, 1)
            document.getElementById('input').value = string
            break;
        case "clear":
            document.getElementById('input').value = ""
            break;
        default:
            string += x
            document.getElementById('input').value = string
            break;
    }



}

function clear() {
    document.getElementById('input').value = ""
}
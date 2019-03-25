function braces(values) {
    let response = [];

    for (let index = 0; index < values.length; index++) {
        if ( invalidBraces(values[index]) ){
            response.push("NO");
        } else {
            response.push("YES")
        }
    }

    return response;
}

function invalidBraces(string){
    let dictionary = [
        "{}", 
        "[]", 
        "()" 
    ]

    let glossary = [
        ["{", "}"],
        ["[", "]"],
        ["(", ")"]
    ]

    let stack = [];

    for (let index = 0; index < string.length; index++) {
        if (dictionary[0].includes(string[index])){
            if (stack.length === 0 && string[index] === glossary[0][1]){
                return false
            } else if (stack[0] === glossary[0][0] && string[index] === glossary[0][1] ) {
                stack.shift();
            } else {
                stack.unshift(string[index])
            }
        } 
        if (dictionary[1].includes(string[index])){
            if (stack.length === 0 && string[index] === glossary[1][1]){
                return false
            } else if (stack[0] === glossary[1][0] && string[index] === glossary[1][1] ) {
                stack.shift();
            } else {
                stack.unshift(string[index])
            }
        } 
        if (dictionary[2].includes(string[index])){
            if (stack.length === 0 && string[index] === glossary[2][1]){
                return false
            } else if (stack[0] === glossary[2][0] && string[index] === glossary[2][1] ) {
                stack.shift();
            } else {
                stack.unshift(string[index])
            }
        } 
    }

    return true;
}
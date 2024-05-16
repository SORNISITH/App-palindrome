

const palindrome = (input) => {
    const string = input.toLowerCase()
    let palinDrome = string;
    palinDrome.trim().split('').reverse();

    return string == palinDrome ? `This ${input} is a palindrome.`: `This ${input} isn't a palindrome.` ;
}




const test = () => {
    alert('hello clicker');
}






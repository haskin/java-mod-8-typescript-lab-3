const button: HTMLButtonElement = document.querySelector("button") as HTMLButtonElement;
function prepend(numSpaces: number | string, inputString: string): string {
    return inputString.padStart(inputString.length + +numSpaces, " ");
}
button!.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Creating Prepend String");
    const inputString: HTMLInputElement = document.getElementById("input_string") as HTMLInputElement;
    const inputNumberOfSpaces: HTMLInputElement = document.getElementById("number_of_spaces") as HTMLInputElement;
    const outputSpan: HTMLSpanElement = document.getElementById("output_string") as HTMLSpanElement;
    console.log(`Input string: ${inputString.value}`);
    console.log(`Number of spaces: ${inputNumberOfSpaces.value}`);
    let outputString = prepend(inputNumberOfSpaces!.value, inputString!.value)
    console.log(`Output : ${outputString}`);
    outputSpan.textContent = outputString;
});








let currentIndex = -1;

function updateText(inputItemId, targetItemId) {
  const userInput = document.getElementById(inputItemId);
  const target = document.getElementById(targetItemId);
  const test = document.getElementById("input-clone");
  let charCopy;

  userInput.oninput = function () {
    currentIndex++;

    charCopy = userInput.value.charAt(currentIndex);

    if (charCopy == target.textContent[currentIndex]) {
      test.textContent += charCopy;
    } else {
      console.log(
        `La letra que escribiste es ${charCopy} y deberias haber escrito ${target.textContent[currentIndex]}`
      );
    }
  };
}

updateText("user-input", "target-text");

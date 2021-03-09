const initTypeWriter = () => {
  const textElement = document.querySelector(".txt3 span");
  const typeWriter = (text) => {
    const allCharacter = text.innerHTML.split("");
    text.innerHTML = "";

    allCharacter.forEach((letra, index) =>
      setTimeout(() => (text.innerHTML += letra), 100 * index)
    );
  };

  typeWriter(textElement);
};

export default initTypeWriter;

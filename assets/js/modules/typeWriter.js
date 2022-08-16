
const initTypeWriter = () => {
  // const textElement = document.querySelector(".txt3 span");
  
  // const typeWriter = (text) => {
    //   const allCharacter = text.split("");
    //   textElement.innerHTML = "";
    
    //   allCharacter.forEach((letra, index) =>
    //     setTimeout(() => (textElement.innerHTML += letra), 100 * index)
    //   );
    // };
    
  const professions = ["Instrutor Front-End", "Dev Front-End", "Freelancer"];
  let typed = new Typed(".typing", {
    strings: professions,
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
  })
};

export default initTypeWriter;

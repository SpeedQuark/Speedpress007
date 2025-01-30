const numberElement = document.getElementById('number');
     const generateButton = document.getElementById('generate');

     generateButton.addEventListener('click', () => {
         const randomNumber = Math.floor(Math.random() * 100) + 1; // Números entre 1 y 100
         numberElement.textContent = randomNumber;
     });

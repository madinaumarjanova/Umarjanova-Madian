const wrapper = document.querySelector(".wrapper"),
    searchInput = wrapper.querySelector("input"),
    volume = wrapper.querySelector(".word i"),
    infoText = wrapper.querySelector(".info-text"),
    removeIcon = wrapper.querySelector(".search span");

  




const dictionaryData = {
    'algorithm': {
      'definition': 'A set of instructions that a computer follows to complete a task.',
      'example': 'The algorithm for finding the largest number in a list is to compare each number in the list to the largest number found so far, and then replace the largest number found so far with the new number if it is larger.'
    },
    'application': {
      'definition': 'A software program that performs a specific task, such as a word processor, web browser, or game.',
      'example': 'Microsoft Word is an application that is used to create and edit documents.'
    },
    'artificial intelligence (AI)': {
      'definition': 'The ability of a machine to simulate human intelligence, such as the ability to learn, reason, and make decisions.',
      'example': 'Self-driving cars use AI to navigate roads and avoid obstacles.'
    },
    'bandwidth': {
      'definition': 'The amount of data that can be transmitted over a network connection in a given period of time.',
      'example': 'A high-bandwidth internet connection is required for streaming video and playing online games.'
    },
    'bug': {
      'definition': 'An error in a software program that causes it to malfunction.',
      'example': 'A bug in a web browser might cause it to crash when visiting a certain website.'
    },
    'cache': {
      'definition': 'A temporary storage area for data that is frequently accessed.',
      'example': 'A web browser cache stores copies of recently visited web pages so that they can be loaded more quickly the next time they are visited.'
    },
    'cloud computing': {
      'definition': 'The delivery of computing services over the internet, such as storage, processing, and software.',
      'example': 'Google Drive is a cloud computing service that provides online storage for files.'
    },
    'compiler': {
      'definition': 'A software program that translates a programming language into machine code that can be executed by a computer.',
      'example': 'The GCC compiler is used to compile C and C++ programs.'
    },
    'cookie': {
      'definition': 'A small piece of data that is stored on a user\'s computer by a website.',
      'example': 'A cookie can be used to track a user\'s browsing history or to keep them logged in to a website.'
    },
    'database': {
      'definition': 'A collection of organized data that can be easily accessed and manipulated.',
      'example': 'A database can be used to store customer information, product data, or financial records.'
    },
    'debug': {
      'definition': 'The process of finding and fixing bugs in a software program.',
      'example': 'A programmer might debug a software program by adding print statements to the code to see what values are being stored in different variables.'
    },
    'desktop computer': {
      'definition': 'A personal computer that is designed to be used on a desk.',
      'example': 'A desktop computer typically consists of a monitor, keyboard, mouse, and CPU.'
    },
    'digital camera': {
      'definition': 'A device that takes digital photographs, which are stored electronically instead of on film.',
      'example': 'A digital camera can be used to take photos for personal use or for professional photography.'
    },
    'domain name': {
      'definition': 'The unique name that identifies a website on the internet.',
      'example': 'The domain name for Google is www.google.com.'
    },
    'driver': {
      'definition': 'A software program that allows a computer to communicate with a hardware device.',
      'example': 'A printer driver allows a computer to communicate with a printer.'
    },
    'dmail': {
      'definition': 'A system for sending and receiving electronic messages.',
      'example': 'Email can be used to send text messages, images, and other files.'
    },
    'encryption': {
      'definition': 'The process of converting data into a format that cannot be read by unauthorized individuals.',
      'example': 'Encryption is used to protect sensitive data, such as credit card numbers and passwords.'
    },
    'firewall': {
      'definition': 'A network security device that monitors and controls incoming and outgoing network traffic.',
      'example': 'A firewall can be used to protect a computer or network from unauthorized access.'
    },
    'firmware': {
      'definition': 'Software that is built into a hardware device and controls its operation.',
      'example': 'The firmware for a router controls how it routes network traffic.'
    },
    'free software': {
      'definition': 'Software that is freely available to use, copy, and modify.',
      'example': 'The Linux operating system is an example of free software.'
    }
    
  };
  
  


  searchInput.addEventListener("keyup", e => {
    let query = e.target.value.trim(); 

    if (e.key === "Enter" && query) {
        query = query.toLowerCase(); 

        let foundWord = null;

        
        for (const word in dictionaryData) {
            if (word.toLowerCase() === query) {
                foundWord = word;
                break;
            }
        }

        if (foundWord) {
            
            document.querySelector(".word p").innerText = foundWord;
            document.querySelector(".meaning span").innerText = dictionaryData[foundWord].definition;
            document.querySelector(".example span").innerText = dictionaryData[foundWord].example;
            wrapper.classList.add("active");
            infoText.style.color = "#4D59FB";
            infoText.innerHTML = "Definition and example for the word:";
        } else {
            
            wrapper.classList.remove("active");
            infoText.style.color = "#FF0000";
            infoText.innerHTML = "Word not found in the dictionary.";
        }
    }
});



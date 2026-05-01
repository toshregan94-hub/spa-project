
// Getting elements from the page
const form = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const result = document.getElementById("result-display");

// Implementing the addEventListener on the search form
form.addEventListener("submit",function(event) {
    event.preventDefault(); // Stopping the page from reloading

const word= searchInput.value.trim(); // Getting the typed word

// Handling empty input in the search form
if (!word){
    result.innerHTML= "<p class='error'>Please enter a word to search.</p>";

    return;
}
// Displaying loading message while fetching data
result.innerHTML="<p>Loading...</p>"; 
//clear previous results while showing loading state
result.innerHTML="<p class='loading'>Loading...</p>";
// Fetching the word from the API
fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(function(response){
        // Incase word is not found
        if(!response.ok){
            throw new Error("Word not found");
            
        }
        return response.json();
    })
        .then(function(data){
            displayResults(data[0]); // uses the first result
        })
    .catch(function(error){
        // Incase the word is not found when trying to fetch the data.
        result.innerHTML="<p class='error'>Word not found. Please try another word.</p>";
    });

});


// Displaying results on the page
function displayResults(entry){
    const word=entry.word;
    const meanings=entry.meanings;
    const phonetic=entry.phonetic;
    const audio=getAudio(entry.phonetics);
   // Building the HTML to display the results
    let html="<p class='word-title'>" + word + "</p>";
    if (phonetic){
        html+="<p class='phonetic'>" + phonetic + "</p>";
        
    }
    if (audio){
        html+=`<audio controls src="${audio}"></audio>`;
    }
    // Looping through the meanings and displaying the part of speech, definitions, and synonyms
    meanings.forEach(function(meaning){
       html+= "<p><strong>" + meaning.partOfSpeech + "</strong></p>";
       for(let j=0; j<meaning.definitions.length && j<3; j++){
        html+= "<p>" + (j + 1) + ". " + meaning.definitions[j].definition + "</p>";
    } 
    if(meaning.synonyms.length>0){
        html+="<p class='synonyms'><strong>Synonyms:</strong> " + meaning.synonyms.join(", ") + "</p>";
    }
});
// Displaying the final HTML on the page
    result.innerHTML=html;
}
// Getting the audio pronunciation from the phonetics array
    function getAudio(phonetics){
        if(!phonetics) return null;
        for(let p of phonetics){
            if(p.audio) return p.audio;

        }
        return null;
    }


// function runStreamlitApp() {
//     fetch('/run_streamlit_app')
//         .then(response => {
//             if (response.ok) {
//                 alert("Streamlit app is now running!");
//             } else {
//                 alert("Error running Streamlit app.");
//             }
//         })
//         .catch(error => console.error('Error:', error));
// }

// function sendMessage() {
//     var userInput = document.getElementById("user-input").value.trim();
//     if (userInput.startsWith("speak:")) {
//         var textToSpeak = userInput.substring("speak:".length).trim();
//         if (textToSpeak) {
//             pronounceText(textToSpeak);
//             addUserMessage(userInput);
//             document.getElementById("user-input").value = "";
//         }
//     } else {
//         addUserMessage(userInput);
//         document.getElementById("user-input").value = "";
//         showListeningEffect();
//         fetch('/process1', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ text: userInput })
//         })
//             .then(response => response.json())
//             .then(data => {
//                 addBotMessage(data.response);
//             });
//     }
// }

// function addUserMessage(message) {
//     var chatContainer = document.getElementById("chat-container");
//     var userDiv = document.createElement("div");
//     userDiv.className = "user-message";
//     userDiv.innerHTML = message;
//     chatContainer.appendChild(userDiv);
// }

// function addBotMessage(message) {
//     var chatContainer = document.getElementById("chat-container");
//     var botDiv = document.createElement("div");
//     botDiv.className = "bot-message";
//     botDiv.innerHTML = message;
//     chatContainer.appendChild(botDiv);
// }

// function showListeningEffect() {
//     var botDiv = document.createElement("div");
//     botDiv.className = "bot-message";
//     botDiv.innerHTML = "Listening...";
//     document.getElementById("chat-container").appendChild(botDiv);
// }

// function pronounceText(text) {
//     var utterance = new SpeechSynthesisUtterance(text);
//     speechSynthesis.speak(utterance);
// }
// $(document).ready(function () {
//     $('#score-btn').click(function () {
//         var essayText = $('#essay').val();
//         $.get("/score", { essay: essayText }, function (data) {
//             $('#score').text("Score: " + data.score);
//         });
//     });

//     $('#word-cloud-btn').click(function () {
//         var essayText = $('#essay').val();
//         $.post("/generate_word_cloud", { essay: essayText }, function (data) {
//             $('body').append('<img src="' + data.image_path + '" alt="Word Cloud" class="generated-image">');
//         });
//     });

//     $('#error-correction-btn').click(function () { // New click event for error correction button
//         var essayText = $('#essay').val();
//         $.post("/error_correction_visualization", { essay: essayText }, function (data) {
//             $('body').append('<img src="' + data.image_path + '" alt="Error Correction Visualization" class="generated-image">');
//         });
//     });

//     $('#keyword-btn').click(function () { // New click event for keyword extraction button
//         var essayText = $('#essay').val();
//         $.post("/extract_keywords", { essay: essayText }, function (data) {
//             $('#keywords').text("Keywords: " + data.keywords.join(', '));
//         });
//     });
// });
// document.addEventListener('DOMContentLoaded', function () {
//     const startBtn = document.getElementById('startBtn');
//     const stopBtn = document.getElementById('stopBtn');
//     const responseArea = document.getElementById('responseArea');
//     const imageArea = document.getElementById('imageArea');

//     startBtn.addEventListener('click', function () {
//         fetch('/start_listening', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 // Display image if available
//                 if (data.image_url) {
//                     const img = document.createElement('img');
//                     img.src = data.image_url;
//                     imageArea.innerHTML = '';  // Clear previous image (if any)
//                     imageArea.appendChild(img);  // Append new image
//                 } else {
//                     imageArea.innerHTML = '';  // Clear image area if no image available
//                 }

//                 responseArea.innerText = data.response;
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 responseArea.innerText = 'An error occurred. Please try again.';
//             });
//     });

//     stopBtn.addEventListener('click', function () {
//         responseArea.innerText = 'Goodbye!';
//         imageArea.innerHTML = '';  // Clear the image area
//     });
// });
// document.addEventListener('DOMContentLoaded', function () {
//     const cursorPath = document.querySelector('.cursor-path');

//     document.addEventListener('mousemove', function (e) {
//         cursorPath.style.left = e.pageX + 'px';
//         cursorPath.style.top = e.pageY + 'px';
//     });
// });


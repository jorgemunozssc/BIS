// Find the element with class "small-print"
const smallPrintElement = document.querySelector('.small-print');

// Create a new hyperlink element
const hyperlinkElement = document.createElement('a');
hyperlinkElement.href = 'https://draperjames.com/pages/privacy'; // Set the href attribute to the URL you want the hyperlink to point to
hyperlinkElement.textContent = 'Privacy Policy'; // Set the text content of the hyperlink

// Insert the hyperlink element after the small-print element
smallPrintElement.insertAdjacentElement('afterend', hyperlinkElement);


const button = document.getElementById("BIS_trigger");

// Define the function to be executed after 1 second
function delayedFunction() {
  // Code to be executed after 1 second
// Find the element with class "small-print"
const smallPrintElement = document.querySelector('.small-print');

// Create a new hyperlink element
const hyperlinkElement = document.createElement('a');
hyperlinkElement.href = 'https://draperjames.com/pages/privacy'; // Set the href attribute to the URL you want the hyperlink to point to
hyperlinkElement.textContent = 'Privacy Policy'; // Set the text content of the hyperlink

// Insert the hyperlink element after the small-print element
smallPrintElement.insertAdjacentElement('afterend', hyperlinkElement);
  console.log("Delayed function executed!");
}

// Add an event listener to the button element
button.addEventListener("click", function() {
  // Call the setTimeout function to delay the execution of the delayedFunction by 1 second
  setTimeout(delayedFunction, 1000);
});

const button = document.getElementById("BIS_trigger");

// Define the function to be executed after 1 second
function delayedFunction() {
  // Code to be executed after 1 second
// Find the element with class "small-print"
const smallPrintElement = document.querySelectorAll('.form-horizontal.clearfix');

// Create a new hyperlink element
const hyperlinkElement = document.createElement('a');
hyperlinkElement.href = 'https://draperjames.com/pages/privacy'; // Set the href attribute to the URL you want the hyperlink to point to
hyperlinkElement.textContent = 'Privacy Policy'; // Set the text content of the hyperlink

// Insert the hyperlink element after the small-print element
smallPrintElement.insertAdjacentElement('afterend', hyperlinkElement);
  console.log("Delayed function executed!");
}

// Add an event listener to the button element
button.addEventListener("click", function() {
  // Call the setTimeout function to delay the execution of the delayedFunction by 1 second
  setTimeout(delayedFunction, 1000);
});

// Find the element with class "small-print"
const smallPrintElement = document.querySelectorAll(".form-horizontal.clearfix");

// Create a new hyperlink element
const hyperlinkElement = document.createElement('a');
hyperlinkElement.href = 'https://draperjames.com/pages/privacy'; // Set the href attribute to the URL you want the hyperlink to point to
hyperlinkElement.textContent = 'Privacy Policy'; // Set the text content of the hyperlink

// Insert the hyperlink element after the small-print element
smallPrintElement.insertAdjacentElement('afterend', hyperlinkElement);



const button = document.getElementById("BIS_trigger");

// Define the function to be executed after 1 second
function delayedFunction() {
  // Code to be executed after 1 second
  console.log("Delayed function executed!");
// Find the element with class "small-print"
const smallPrintElement = document.querySelectorAll(".form-horizontal.clearfix");

// Create a new hyperlink element
const hyperlinkElement = document.createElement('a');
hyperlinkElement.href = 'https://draperjames.com/pages/privacy'; // Set the href attribute to the URL you want the hyperlink to point to
hyperlinkElement.textContent = 'Privacy Policy'; // Set the text content of the hyperlink

// Insert the hyperlink element after the small-print element
smallPrintElement.insertAdjacentElement('afterend', hyperlinkElement);

}

// Add an event listener to the button element
button.addEventListener("click", function() {
  // Call the setTimeout function to delay the execution of the delayedFunction by 1 second
  setTimeout(delayedFunction, 1000);
});



let triggerButton = document.getElementById("BIS_trigger");

// Define the function to be executed after 1 second
function delayedFunction() {
  // Code to be executed after 1 second
  console.log("Delayed function executed!");
// Find the element with class "small-print"
const smallPrintElement = document.querySelector('.checkbox');
// Create a new hyperlink element
const hyperlinkElement = document.createElement('a');
hyperlinkElement.href = 'https://draperjames.com/pages/privacy'; // Set the href attribute to the URL you want the hyperlink to point to
hyperlinkElement.textContent = 'Privacy Policy'; // Set the text content of the hyperlink

// Insert the hyperlink element after the small-print element
anchorElement.insertAdjacentElement('afterend', hyperlinkElement);

}

// Add an event listener to the button element
triggerButton.addEventListener("click", function() {
  // Call the setTimeout function to delay the execution of the delayedFunction by 1 second
  setTimeout(delayedFunction, 2000);
});

const smallPrintElement = document.querySelector('.checkbox');
console.log(smallPrintElement);


$('iframe').ready(function($) {
setTimeout(function() {
console.log('iframe ready');
$("iframe").contents().find(".accepts_marketing").find("label").addClass("dave");
console.log('is class added');
$("iframe").contents().find('label').each(function() {
var textArry = $(this).text().split(" ");
$.each(textArry, function(index) {
if (textArry[index].match("^#") || textArry[index].match("Hearst") || textArry[index].match("UK")) {
textArry[index] = '<span class="Hearst-link"><a target="_BLANK" href="https://www.hearst.co.uk">' + textArry[index] + '</a></span>';
} else if (textArry[index].match("^#") || textArry[index].match("Privacy") || textArry[index].match("Notice"))
textArry[index] = '<span class="Hearst-link"><a target="_BLANK" href="https://housebeautiful.co.uk/pages/privacy-policy">' + textArry[index] + '</a></span>';
});
console.log('links added');
var output = textArry.join(' ');
$(this).html(output);
});
}, 3000);
});

$('iframe').ready(function($) {
    setTimeout(function() {
         $("iframe").contents().find(".smail-print").find("label")
        $("iframe").contents().find('label').each(function() {
          console.log('found');
            var textArry = $(this).text().split(" "); 
            $.each(textArry, function(index) {
              if (textArry[index].match("^#") || textArry[index].match("Hearst") || textArry[index].match("UK")) {
                textArry[index] = '<span><a target="_BLANK" href="https://www.hearst.co.uk">' + textArry[index] + '</a></span>';
              } else if  (textArry[index].match("^#") || textArry[index].match("Privacy") || textArry[index].match("Notice")){
                textArry[index] = '<span><a target="_BLANK" href="https://housebeautiful.co.uk/pages/privacy-policy">' + textArry[index] + '</a></span>';
              }
            });
          console.log('links added');
            var output = textArry.join(' ');
            $(this).find('input').get(0).nextSibling.remove(); 
            $(this).append(output); 
          });
    }, 3000);
});

hyperlink ="test";
$('#BISModal').contents().find('.small-print').after(hyperlink);


$('iframe').ready(function($) {
    setTimeout(function() {
         $("iframe").contents().find(".accepts_marketing")
        $("iframe").contents().find('label').each(function() {
          console.log('found');
            var textArry = $(this).text().split(" "); 
            $.each(textArry, function(index) {
              if (textArry[index].match("^#") || textArry[index].match("Hearst") || textArry[index].match("UK")) {
                textArry[index] = '<span><a target="_BLANK" href="https://www.hearst.co.uk">' + textArry[index] + '</a></span>';
              } else if  (textArry[index].match("^#") || textArry[index].match("Privacy") || textArry[index].match("Notice")){
                textArry[index] = '<span><a target="_BLANK" href="https://housebeautiful.co.uk/pages/privacy-policy">' + textArry[index] + '</a></span>';
              }
            });
          console.log('links added');
            var output = textArry.join(' ');
            $(this).find('input').get(0).nextSibling.remove(); 
            $(this).append(output); 
          });
    }, 3000);
});


$('#BISModal').ready(function($) {
    setTimeout(function() {
         $("iframe").contents().find(".accepts_marketing")
        $("iframe").contents().find('label').each(function() {
          console.log('found');
            var textArry = $(this).text().split(" "); 
            $.each(textArry, function(index) {
              if (textArry[index].match("^#") || textArry[index].match("Hearst") || textArry[index].match("UK")) {
                textArry[index] = '<span><a target="_BLANK" href="https://www.hearst.co.uk">' + textArry[index] + '</a></span>';
              } else if  (textArry[index].match("^#") || textArry[index].match("Privacy") || textArry[index].match("Notice")){
                textArry[index] = '<span><a target="_BLANK" href="https://housebeautiful.co.uk/pages/privacy-policy">' + textArry[index] + '</a></span>';
              }
            });
          console.log('links added');
            var output = textArry.join(' ');
            $(this).find('input').get(0).nextSibling.remove(); 
            $(this).append(output); 
          });
    }, 3000);
});


accepts-marketing

setTimeout(function() {
  // Code to run after 3 seconds
const smallPrintElement = document.querySelector('.accepts-marketing');
// Create a new hyperlink element
const hyperlinkElement = document.createElement('a');
hyperlinkElement.href = 'https://draperjames.com/pages/privacy'; // Set the href attribute to the URL you want the hyperlink to point to
hyperlinkElement.textContent = 'Privacy Policy'; // Set the text content of the hyperlink

// Insert the hyperlink element after the small-print element
smallPrintElement.insertAdjacentElement('afterend', hyperlinkElement);

  console.log('3 seconds have passed!');
}, 3000); // 3000 milliseconds = 3 seconds


const button = document.getElementById("BIS_trigger");

// Define the function to be executed after 1 second
function delayedFunction() {
  // Code to be executed after 1 second
  console.log("Delayed function executed!");
// Find the element with class "small-print"
const smallPrintElement = document.querySelector('.small-print');

// Create a new hyperlink element
const hyperlinkElement = document.createElement('a');
hyperlinkElement.href = 'https://draperjames.com/pages/privacy'; // Set the href attribute to the URL you want the hyperlink to point to
hyperlinkElement.textContent = 'Privacy Policy'; // Set the text content of the hyperlink

// Insert the hyperlink element after the small-print element
document.querySelector('.small-print').insertAdjacentElement('afterend', hyperlinkElement);

}

// Add an event listener to the button element
button.addEventListener("click", function() {
  // Call the setTimeout function to delay the execution of the delayedFunction by 1 second
  setTimeout(delayedFunction, 1000);
});

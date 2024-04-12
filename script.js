
document.addEventListener('DOMContentLoaded', function() {
  // Specify the old phone number
  var oldPhoneNumber = '123-456-7890';
  
  // Specify the new phone number
  var newPhoneNumber = '987-654-3210';
  
  // Function to check the time and update phone numbers
  function updatePhoneNumbers() {
    // Get the current date and time in CST
    var currentDateTime = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
    
    // Extract the hour from the current date and time
    var currentHour = new Date(currentDateTime).getHours();
    
    // Check if the current hour is after 5 PM (17:00)
    if (currentHour >= 17) {
      // Get all elements containing the old phone number
      var elements = document.querySelectorAll('body *');
      
      elements.forEach(function(element) {
        if (element.innerHTML.includes(oldPhoneNumber)) {
          // Replace the old phone number with the new phone number
          element.innerHTML = element.innerHTML.replace(oldPhoneNumber, newPhoneNumber);
        }
      });
    }
  }
  
  // Call the updatePhoneNumbers function initially
  updatePhoneNumbers();
  
  // Set an interval to check the time and update phone numbers every minute
  setInterval(updatePhoneNumbers, 60000);
});

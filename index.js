//Write your code here

const attendee = {
   attendeeId: "T001",
   name: "Alice Smith",
   event: "JavaScript Conference",
   ticketType: "VIP",
   ticketPrice: 150,
};

console.log(attendee)

//Logs the attendance name
function logAttendeeName(attendee) {
  console.log(attendee.name)
}

logAttendeeName(attendee);

//logs the price of a ticket
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice)
}

logTicketPrice(attendee);

//Updates the type of ticket bought
function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
}

updateTicketType(attendee, "VIP");

//Updates the price of the ticket
function updateTicketPrice(attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice;
}

updateTicketPrice(attendee, 150);

//Removes the event property from the object
function removeEventProperty(attendee) {
  delete attendee.event;
}

//Adds a CheckdIn property to the object
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}

addCheckedInProperty(attendee);


//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};
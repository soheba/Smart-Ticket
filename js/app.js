//GLOBAL VARIABLES
let numberOfSeats = 40;
let totalSeats = 0;
let grandTotal = 0;

//SELECTORS
let numberOfSeatsContainer = document.getElementById("number_of_seats");
let takeSeatBtn = document.getElementById("take_seat");
let seats = document.querySelectorAll("#seat");
let seatList = document.getElementById("seat_list");
let totalPriceSpan = document.getElementById("total_price");

//
console.log(seats);
//adding click event to all the seats
let seatsArr = Array.from(seats);

for (let i = 0; i < seatsArr.length; i++) {
  seatsArr[i].addEventListener("click", () => {
    if (seatsArr[i].classList.contains("bg-green-600")) {
      //do nothing
    } else {
      numberOfSeats--;
      totalSeats++;
      numberOfSeatsContainer.innerText = numberOfSeats + " seats";
      seatsArr[i].classList.add("bg-green-600");

      let newrow = document.createElement("tr");

      let seatName = document.createElement("td");
      seatName.innerText = seatsArr[i].innerText;

      let seatClass = document.createElement("td");
      seatClass.innerText = "Economy";
      let seatPrice = document.createElement("td");
      seatPrice.innerText = "550";
      newrow.appendChild(seatName);
      newrow.appendChild(seatClass);
      newrow.appendChild(seatPrice);

      seatList.appendChild(newrow);

      //totalprice update
      grandTotal = calculateTotal(totalSeats, 550);
      totalPriceSpan.innerText = grandTotal;

      console.log(totalSeats);
    }
  });
}

numberOfSeatsContainer.innerText = numberOfSeats + " seats";

// takeSeatBtn.addEventListener("click", () => {
//   numberOfSeats--;
//   totalSeats++;
//   numberOfSeatsContainer.innerText = numberOfSeats + " seats";
//   console.log(numberOfSeats);
// });

//functions

function calculateTotal(totalNumberSeats, ticketprice) {
  return ticketprice * totalNumberSeats;
}
//valid invalid check in next buton
//let pasNAme.value == "" || phon === "" || email == "" ==> invalid
let nextButton = document.getElementById("next_button");
nextButton.addEventListener("click", () => {
  let passengerName = document.getElementById("passengerName");
  let phoneNumber = document.getElementById("phoneNumber");
  let email = document.getElementById("email");
  let myModal3 = document.getElementById("my_modal_3");

  if (
    email.value !== "" &&
    passengerName.value !== "" &&
    phoneNumber.value !== ""
  ) {
    console.log("show modal");
    console.log(myModal3);
    myModal3.showModal();
  }
});

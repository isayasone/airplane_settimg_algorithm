

  /**
   * Returns araay of seats(s) with lane and empy string
   *  create seat based on given array columns and rows
   *  note s mean  free seat
   * @param {Array} seatsColsRows: 2D array.
   * @return {Array} seats: 2D array.
   */
 const createSeats=(seatsColsRows)=> {
    const maxColumns = Math.max(...seatsColsRows.map((arr) => arr[1]));
    let seats = [];
    for (let colI = 0; colI < maxColumns; colI++) {
      let block = [];

      seatsColsRows.forEach((arr) => {
        const row = arr[0];
        let col = arr[1];

        for (let i = 0; i < row; i++) {
          if (col - colI > 0) {
            block.push("s");
          } else {
            block.push("");
          }
        }
        block.push("lane");
      });
      block = block.slice(0, -1);
      seats.push(block);
    }
    return seats;
  }

    /**
   * Returns araay of seats assigned with passenger number
   * @param {Array} seatsColsRows: 2D array.
   * @param {number} passengers: number of passenger.
   * @return {Array}  passenger with seat : 2D array.
   */

 const  assignAllSeatsService=(seatsColsRows, passengers)=> {
    let seats = createSeats(seatsColsRows);
    let remainingPassengers =  passengers;
    let assignedSeats = seats;
   let nextSeatNumber = 1;
  const assignAllSeats=()=> {

     // Asign seats front row to back starting from  left to right
    seats.forEach((row, rowI) => {
      row.forEach((seat, seatI) => {
        if (remainingPassengers < 1) {
          return;
        }
        if (seatI > 0 && seatI < row.length) {
          if (
            seat === "s" &&
            (row[seatI - 1] === "lane" || row[seatI + 1] === "lane")
          ) {
            seats[rowI][seatI] = nextSeatNumber;
            nextSeatNumber++;
            remainingPassengers--;
          }
        }
      });
    });

   // Asign  window seats
    seats.forEach((row, rowI) => {
      row.forEach((seat, seatI) => {
        if (remainingPassengers < 1) {
          return;
        }
        if (seat === "s" && (seatI === 0 || seatI === row.length - 1)) {
          seats[rowI][seatI] = nextSeatNumber;
          nextSeatNumber++;
        remainingPassengers--;
        }
      });
    });

  // Asign  center seats
    seats.forEach((row, rowI) => {
      row.forEach((seat, seatI) => {
        if (remainingPassengers < 1) {
          return;
        }
        if (
          seat === "s" &&
          !(
            seatI === 0 ||
            seatI === row.length - 1 ||
            row[seatI - 1] === "lane" ||
            row[seatI + 1] === "lane"
          )
        ) {
          seats[rowI][seatI] = nextSeatNumber;
          nextSeatNumber++;
          remainingPassengers--;
        }
      });
    });
    assignedSeats = seats;
  }
    assignAllSeats();
    return assignedSeats;
      }

  module.exports= assignAllSeatsService



# airplane Seatng-Algorithm

$ npm install
$ npm start

*accept Get Query request  accepts  seats and passengers
*For example http://localhost:8080/api/airplane/setting?seats= [[3, 2], [4, 3], [2, 3], [3, 4]]&passengers=30

app that helps seat audiences in a flight based on the following input and rules.

Rules for seating:
- Always seat passengers starting from the front row to back, starting from the left to the right
- Fill aisle seats first followed by window seats followed by center seats (any order in center seats)

Input to the program will be
- A 2D array that represents the rows and columns [[3,4], [4,5], [2,3]]
- Number of passengers waiting in queue.

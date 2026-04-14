class Classroom {
  constructor(roomNumber, building) {
    this.roomNumber = roomNumber;
    this.building = building;
  }

  showRoomInfo() {
    console.log(`🏫 สถานที่: ห้อง ${this.roomNumber} อาคาร ${this.building}`);
  }
}
module.exports = Classroom;

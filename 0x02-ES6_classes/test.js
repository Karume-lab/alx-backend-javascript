class ClassRoom {
	constructor(maxStudentsSize) {
		this._maxStudentsSize = maxStudentsSize;
	}
}


function initializeRooms() {
	return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}


console.log(initializeRooms());

class HolbertonCourse {
	constructor(name, length, students){
		set name (name) {
			this.name = name;
		}
	}
}

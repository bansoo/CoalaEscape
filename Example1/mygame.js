﻿/*방생성*/
room = game.createRoom("room", "배경-5(수정).png") 
room2 = game.createRoom("room2","룸2(수정).png")

/*객체생성(방1 : door, shelf, book, keypad, hole, byungi)*/
room.door = room.createObject("door", "문-오른쪽-닫힘(수정).png")
room.door.setWidth(136) 
room.locateObject(room.door, 1049, 255) 
room.shelf = room.createObject("shelf", "선반-좌.png")
room.shelf.setWidth(460)
room.locateObject(room.shelf, 250, 150)
room.book = room.createObject("book", "책3-1.png")
room.book.setWidth(80)
room.locateObject(room.book, 100, 140)
room.keypad = room.createObject("keypad", "숫자키-우.png") 
room.keypad.setWidth(50) 
room.locateObject(room.keypad, 930, 250) 
room.hole = room.createObject("hole", "hole.png") 
room.hole.setWidth(100) 
room.locateObject(room.hole, 220, 550) 
room.byungi = room.createObject("byungi", "변기(수정).png") 
room.byungi.setWidth(170) 
room.locateObject(room.byungi, 200, 450) 
room.sap = room.createObject("sap", "삽(수정).png")

/*객체생성(방2 : ) */
room2.text1 = room2.createObject("text1", "이전 방으로 돌아가기(수정).png")
room2.text1.setWidth(180) 
room2.locateObject(room2.text1, 100, 700) 
room2.cavinet = room2.createObject("cavinet", "캐비닛-오른쪽-닫힘.png") 
room2.sap = room2.createObject("sap", "삽(수정).png") 
room2.cavinet.setWidth(150) 
room2.sap.setWidth(45)
room2.locateObject(room2.cavinet, 1170, 500) 
room2.locateObject(room2.sap, 1160, 500)
room2.keypad = room2.createObject("keypad", "숫자키-우.png") 
room2.keypad.setWidth(50) 
room2.locateObject(room2.keypad, 1200, 510) 

/*동작(방1)*/
room.book.onClick = function() {
	showImageViewer("종이.png", "책.txt");
}

room.door.onClick = function() { 
	if(room.door.isClosed()){ 
		room.door.open() 
	} else if (room.door.isOpened()){ 
		game.move(room2) 
	} else if (room.door.isLocked()){ 
		printMessage("문이 잠겨있다") 
	}
}

room.keypad.onClick = function() {
	printMessage("중앙대학교 개교기념일은?")
	showKeypad("number", "1011" , function(){ 
		room.door.unlock() 
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

room.door.onOpen = function() { 
	room.door.setSprite("문-오른쪽-열림(수정).png") 
}


room.byungi.move = true
room.byungi.onDrag = function(direction){ 
	if(direction == "Right" && room.byungi.move){ 
		printMessage("변기를 밀었다!")
		room.hole.show()
		room.byungi.moveX(150) 
		room.byungi.moveY(-40) 
		room.byungi.move = false 
	} else {
		printMessage("좀 수상한데?")
	}
}

room.hole.onClick = function() {
	if(game.getHandItem() == room.sap) {
		printMessage("조금더 파보자..")
		count++
		
	} 
	else {
		printMessage("수상한 흔적이다")
	}
	if(count == 3 ){
		game.clear()	}
	else{}
}

/*동작(방2)*/
room2.text1.onClick = function(){
	game.move(room) 
}

room2.cavinet.lock() 
room2.sap.hide() 
room2.cavinet.onClick = function() { 
	if(room2.cavinet.isClosed()){ 
		room2.cavinet.open() 
	} 
	else if (room2.cavinet.isLocked()){ 
		printMessage("캐비닛이 잠겨있다") 
	}
}

room2.cavinet.onOpen = function() {
	room2.cavinet.setSprite("캐비닛-오른쪽-열림.png")
	room2.sap.show()
}


room2.keypad.onClick = function() {
	printMessage("책에 단서가 있지 않을까?")
	showKeypad("number", "2748" , function(){ 
		room2.cavinet.unlock() 
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

//------------아이템을 이전 방에서 쓰기 위해-----------//
room2.sap.onClick = function(){
	room2.sap.hide()
	room.sap.pick()
}
//------------default option------------------------//
room.sap.hide()
room.door.lock()
room.hole.hide()
count = 0
game.start(room) 
printMessage("방탈출에 오신 것을 환영합니다!") 
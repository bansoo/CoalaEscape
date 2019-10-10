/*방생성*/
room = game.createRoom("room", "배경-5(수정).png") 
room2 = game.createRoom("room2","룸2(수정).png")
room3 = game.createRoom("room3","동굴배경(수정).png")
room4 = game.createRoom("room4","배경(해변).png")

/*객체생성(방1 : door, shelf, book, keypad, hole, byungi)*/
room.door = room.createObject("door", "문-오른쪽-닫힘(수정).png")
room.door.setWidth(136) 
room.locateObject(room.door, 1049, 255) 

room.shelf = room.createObject("shelf", "선반-좌.png")
room.shelf.setWidth(460)
room.locateObject(room.shelf, 250, 150)

room.shelf2 = room.createObject("shelf2", "나무판자(수정).png")
room.shelf2.setWidth(460)
room.locateObject(room.shelf2, 750, 500)

room.shelf3 = room.createObject("shelf3", "선반-좌.png")
room.shelf3.setWidth(460)
room.locateObject(room.shelf3, 250, 250)
/*
room.shelf4 = room.createObject("shelf4", "나무판자(수정).png")
room.shelf4.setWidth(460)
room.locateObject(room.shelf4, 250, 250)

room.shelf5 = room.createObject("shelf5", "나무판자(수정).png")
room.shelf5.setWidth(460)
room.locateObject(room.shelf5, 250, 250)*/

room.book = room.createObject("book", "책3-1.png")
room.book.setWidth(80)
room.locateObject(room.book, 100, 140)

room.book2 = room.createObject("book2", "책3-1.png")
room.book2.setWidth(80)
room.locateObject(room.book2, 200, 120)

room.book3 = room.createObject("book3", "책3-1.png")
room.book3.setWidth(80)
room.locateObject(room.book3, 300, 100)

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

room.bomb = room.createObject("bomb","다이너마이트(수정).png")
room.bomb.setWidth(100)
room.locateObject(room.bomb, 400, 500)
room.gifok = room.createObject("gifok","기폭장치(수정).png")
room.gifok.setWidth(100)
room.locateObject(room.gifok, 1170, 500)

room.chanjang = room.createObject("chanjang","판자재료(수정).png")
room.chanjang.setWidth(250)
room.locateObject(room.chanjang, 850, 300)

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
room2.ghost = room2.createObject("gost", "귀신1.png")
room2.ghost.setWidth(230) 
room2.locateObject(room2.ghost, 700, 350)
room2.switch = room2.createObject("switch", "스위치.png")
room2.switch.setWidth(100) 
room2.locateObject(room2.switch, 80, 350) 

/*객체생성(방3 :) */
room3.text1 = room3.createObject("text1", "이전 방으로 돌아가기(수정).png")
room3.text1.setWidth(180) 
room3.locateObject(room3.text1, 100, 700) 
room3.bomb = room3.createObject("bomb","다이너마이트(수정).png")
room3.bomb.setWidth(140)
room3.locateObject(room3.bomb, 300, 300)
room3.gifok = room3.createObject("gifok","기폭장치(수정).png")
room3.gifok.setWidth(140)
room3.locateObject(room3.gifok, 350, 350)
room3.rock = room3.createObject("rock","바위(수정).png")
room3.rock.setWidth(170)
room3.locateObject(room3.rock, 700, 300)
room3.bomb2 = room3.createObject("bomb2","다이너마이트(수정).png")
room3.bomb2.setWidth(80)
room3.locateObject(room3.bomb2, 700, 300)
room3.light = room3.createObject("light","나가는곳(수정2).png")
room3.light.setWidth(130)
room3.locateObject(room3.light, 700, 300)
room3.gifok2 = room3.createObject("gifok2","기폭장치(수정).png")
room3.gifok2.setWidth(100)
room3.locateObject(room3.gifok2, 200, 580)

/*객체생성(방4 : ) */



room4.bada = room4.createObject("bada", "바다.png")
room4.bada.setWidth(1100) 
room4.locateObject(room4.bada, 650, 620) 



room.doublenamu = room.createObject("doublenamu", "나무판자두개.png")
room.doublenamu.setWidth(136)
room.locateObject(room.doublenamu, 1049, 255)

room.doublenamu2 = room.createObject("doublenamu2", "나무판자두개.png")
room.doublenamu2.setWidth(136)
room.locateObject(room.doublenamu2, 1049, 255)

room4.text1 = room4.createObject("text1", "이전 방으로 돌아가기(수정).png")
room4.text1.setWidth(180) 
room4.locateObject(room4.text1, 100, 700) 

room4.ship = room4.createObject("ship", "뗏목(수정).png")
room4.ship.setWidth(136) 
room4.locateObject(room4.ship, 600, 555) 

/*동작(방1)*/
room.book.onClick = function() {
	showImageViewer("종이.png", "책.txt")

}

room.book2.onClick = function() {
	showImageViewer("종이.png", "책2.txt")

}

room.book3.onClick = function() {
	showImageViewer("종이.png", "책3.txt")

}

room.door.onClick = function() { 
	if(room.door.isClosed()){ 
		room.door.open() 
	} else if (room.door.isOpened()){ 
		game.move(room2) 
		printMessage("으스스하다")
		
	} else if (room.door.isLocked()){ 
		printMessage("문이 잠겨있다") 

	}
}

room.keypad.onClick = function() {
	printMessage("중앙대학교 개교기념일은?")
	showKeypad("number", "1111" , function(){ 
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
	if(game.getHandItem() != room.sap){
		printMessage("삽이 필요할것 같다?")
	}
	if(game.getHandItem() == room.sap && sapbroken == false) {
		
		printMessage("조금더 파보자..")
		count++
	}
	if(count ==3){
		printMessage("삽이 부러졌다!")
		sapbroken = true
	}
	if(count ==5 && sapbroken == false) {
		game.move(room3)
		printMessage("땅굴이 나왔다..")
	}
		
}
room.chanjang.onClick = function(){
	room.chanjang.pick()
}



game.makeCombination(room.shelf2, room.shelf3, room.chanjang)
//game.makeCombination(room.shelf2, room.shelf3, room.chanjang)


game.makeCombination(room.shelf2, room.shelf2, room.doublenamu)

game.makeCombination(room.shelf3, room.shelf3, room.doublenamu2)

game.makeCombination(room.doublenamu, room.doublenamu2, room4.ship)

/*
game.makeCombination(room.shelf2, room.shelf4, room.doublenamu)
game.makeCombination(room.shelf2, room.shelf5, room.doublenamu)
game.makeCombination(room.shelf3, room.shelf4, room.doublenamu2)
game.makeCombination(room.shelf3, room.shelf5, room.doublenamu2)
game.makeCombination(room.doublenamu, room.doublenamu2, room4.ship)*/


/*동작(방2)*/
room2.text1.onClick = function(){
	game.move(room)
	
}
room2.switch.onClick = function() {
	
	if(roomLight) {
		room2.setRoomLight(0.5)
		roomLight = false
		room2.ghost.show()
		if(sapbroken){
			printMessage("귀신이 삽을 고쳐줬다!")
			sapbroken = false
		}
		else {printMessage("무섭다")
		playSound("ghost.wav")
	}
		
	} else {
		room2.setRoomLight(1)
		roomLight = true
		room2.ghost.hide()
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

room2.cavinet.onClick = function() { 
	if(room2.cavinet.isClosed()){ 
		room2.cavinet.open() 
	} 	
	 else if (room2.cavinet.isLocked()){ 
		printMessage("캐비닛이 잠겨있다") 

	}
}
/*동작(방3)*/
room3.text1.onClick = function(){
	game.move(room)
	
}

room3.rock.onClick = function(){
	if(game.getHandItem() != room3.bomb){
		printMessage("꿈쩍도하지않는다.")
	}
	else if(game.getHandItem() == room3.bomb){
		printMessage("폭탄을 설치했다.")
		room3.bomb = null
		room3.bomb2.show()
	}

	
}
room3.bomb2.onClick = function(){
	if(game.getHandItem() != room3.gifok){
		printMessage("어떻게 터트리지?")
	}
	else if(game.getHandItem() == room3.gifok){
		printMessage("멀리떨어져서 터트리자")

		room3.gifok = null
		room3.gifok2.show()
	}

	
}

room3.gifok2.onClick = function(){
	playSound("폭탄소리.wav")
	room3.light.show()
	room3.rock.hide()
	printMessage("바위가 부서졌다!")
}
room3.light.onClick = function(){
	game.move(room4)
}

/*동작(방4)*/
room4.text1.onClick = function(){
	game.move(room3)
	
}


room4.bada.onClick = function() {
	if(game.getHandItem() != room4.ship){
		printMessage("여길 어떻게 빠져나가지..?")
	}
	if(game.getHandItem() == room4.ship){
		room4.ship.show()
	}
}
room4.ship.onClick = function() {
game.clear()
}
//------------아이템을 다른 방에서 쓰기 위해-----------//
room2.sap.onClick = function(){
	room2.sap.hide()
	room.sap.pick()
}

room.gifok.onClick = function() {
	room.gifok.hide()
	room3.gifok.pick()
}

room.bomb.onClick = function() {
	room.bomb.hide()
	room3.bomb.pick()
}
room.shelf2.onClick = function() {
	room.shelf2.pick()
}

room.shelf3.onClick = function() {
	room.shelf3.pick()
}

//------------default option------------------------//
var sapbroken = false
roomLight = true
room2.ghost.hide()
room.sap.hide()
room2.sap.hide()
room.door.lock()
room2.cavinet.lock()
room.hole.hide()
room3.gifok.hide()
room3.gifok2.hide()
room3.bomb.hide()
room3.bomb2.hide()
room3.light.hide()
room4.ship.hide()
//room4.shelf.hide()
//room4.shelf2.hide()
//room4.shelf3.hide()
room.doublenamu.hide()
room.doublenamu2.hide()
//room.shelf4.hide()
//room.shelf5.hide()
count = 0
game.start(room) 
printMessage("방탈출에 오신 것을 환영합니다!") 
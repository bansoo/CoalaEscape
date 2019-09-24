/*방생성*/
room = game.createRoom("room", "배경-5(수정).png") // 방 생성
room2 = game.createRoom("room2","룸2(수정).png")

room.door = room.createObject("door", "문-오른쪽-닫힘(수정).png") // 문 생성
room.door.setWidth(136) // 크기 조절
room.locateObject(room.door, 1049, 255) // 문 배치
room.shelf = room.createObject("shelf", "선반-좌.png")
room.shelf.setWidth(460)
room.locateObject(room.shelf, 250, 150)

room.book = room.createObject("book", "책3-1.png")
room.book.setWidth(80)
room.locateObject(room.book, 100, 140)
room.book.onClick = function() {
	showImageViewer("종이.png", "책.txt"); // 이미지 출력
}
room.door.lock() // door 상태를 locked로 변경

room.door.onClick = function() { // door를 클릭했을 때
	if(room.door.isClosed()){ // door가 closed 상태이면
		room.door.open() // door의 상태를 open으로 바꿈
	} else if (room.door.isOpened()){ // door가 opened 상태이면
		game.move(room2) // room2로 이동
	} else if (room.door.isLocked()){ // door가 locked 상태이면
		printMessage("문이 잠겨있다") // 메시지 출력
	}
}

room.keypad = room.createObject("keypad", "숫자키-우.png") // 오브젝트 생성
room.keypad.setWidth(50) // 크기 조절
room.locateObject(room.keypad, 930, 250) // 위치 변경

room.keypad.onClick = function() {
	printMessage("중앙대학교 개교기념일은?")
	showKeypad("number", "1011" , function(){ // 키패드 1 - 숫자4자리
		room.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.door.setSprite("문-오른쪽-열림(수정).png") // 열린 문으로 변경
}
//--------------------------변기와 땅굴-----------------------//
room.hole = room.createObject("hole", "hole.png") // 홀 생성
room.hole.setWidth(100) // 크기 조절
room.locateObject(room.hole, 220, 550) // 홀 배치
room.hole.hide()
room.byungi = room.createObject("byungi", "변기(수정).png") // 변기 생성
room.byungi.setWidth(170) // 크기 조절
room.locateObject(room.byungi, 200, 450) // 변기 배치

room.byungi.move = true
room.byungi.onDrag = function(direction){ // 드래그 모션 direction - Up, Down, Left, Right
	if(direction == "Right" && room.byungi.move){ // 오른쪽으로 드래그 했으면
		printMessage("변기를 밀었다!")
		room.hole.show()
		room.byungi.moveX(150) // X 방향으로 200 이동
		room.byungi.moveY(-40) // Y 방향으로 -40 이동
		room.byungi.move = false // 이후에는 더 이상 움직이지 않도록 합니다.
	} else {
		printMessage("좀 수상한데?")
	}
}


room2.text1 = room2.createObject("text1", "이전 방으로 돌아가기(수정).png") // 문 생성
room2.text1.setWidth(180) // 크기 조절
room2.locateObject(room2.text1, 100, 700) // 텍스트 배치

room2.text1.onClick = function(){
	game.move(room) // room으로 이동
}

room2.cavinet = room2.createObject("cavinet", "캐비닛-오른쪽-닫힘.png") // 문 생성
room2.sap = room2.createObject("sap", "삽(수정).png") // 열쇠 생성
room2.cavinet.setWidth(150) // 크기 조절
room2.sap.setWidth(45)
room.sqp = room2.sqp
room2.locateObject(room2.cavinet, 1170, 500) // 문 배치
room2.locateObject(room2.sap, 1160, 500)
room2.cavinet.lock() // door 상태를 locked로 변경
room2.sap.hide() // key 숨기기
room2.cavinet.onClick = function() { // door를 클릭했을 때
	if(room2.cavinet.isClosed()){ // door가 closed 상태이면
		room2.cavinet.open() // door의 상태를 open으로 바꿈
	} 
	else if (room2.cavinet.isLocked()){ // door가 locked 상태이면
		printMessage("캐비닛이 잠겨있다") // 메시지 출력
	}
}

room2.cavinet.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room2.cavinet.setSprite("캐비닛-오른쪽-열림.png") // 열린 문으로 변경
	room2.sap.show()
}

room2.keypad = room2.createObject("keypad", "숫자키-우.png") // 오브젝트 생성
room2.keypad.setWidth(50) // 크기 조절
room2.locateObject(room2.keypad, 1200, 510) // 위치 변경

room2.keypad.onClick = function() {
	printMessage("책에 단서가 있지 않을까?")
	showKeypad("number", "2748" , function(){ // 키패드 1 - 숫자4자리
		room2.cavinet.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}
room2.sap.onClick = function(){
	room2.sap.hide()
	room.sap.pick()
}
count = 0
room.sap = room.createObject("sap", "삽(수정).png")
room.sap.hide()

//---------------------땅굴파기----------------------//
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

game.start(room) // 게임시작
printMessage("방탈출에 오신 것을 환영합니다!") // 환영 메시지 출력
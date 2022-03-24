***

## MBTI CARD 📝
* <https://jiyeonyun.github.io/habitTracker_renewal/>
<br>↑ 배포사이트
<br>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"/>
<img src="https://img.shields.io/badge/Git hub-181717?style=flat-square&logo=Github&logoColor=white"/>
<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat-square&logo=Yarn&logoColor=white"/>
<img src="https://img.shields.io/badge/FireBase-FFCA28?style=flat-square&logo=FireBase&logoColor=white"/>
<br>
<img width="468" alt="스크린샷 2022-03-23 오후 3 06 40" src="https://user-images.githubusercontent.com/94913420/159634790-a3939913-7880-4a5a-8e05-0b059c3abb8d.png">
<img width="489" alt="스크린샷 2022-03-23 오후 2 59 03" src="https://user-images.githubusercontent.com/94913420/159634546-c4047632-5fae-4c84-9445-c757616736e9.png">
<br>
실행시 처음 나오는 화면 (집중시간 휴식시간 싸이클을 설정할수있다)
<br> <br>

 *** 
 
리액트 강의를듣고 habitTracker를 만들게 되었습니다.<br>
한번더 내 스타일대로 내가 원하는 어플리케이션으로 만들어봐야 내것이 된다는 생각에 제가 주로 사용하던 포모도로를 만들어보고싶었습니다.<br>
기존에 배운 habit트래커와 +js에서 배운 todoList를 사용해 아래에는 할일 목록을 만들고 위에는 타이머르 배치하였습니다. <br>
타이머는 js에서 만들어봤지만 리액트로 만드는데 많은 시행착오가있었습니다.<br>
<br>
<br>


## 상세 페이지
### 시작화면
<br><br><br>
<img width="468" src="https://user-images.githubusercontent.com/94913420/159634568-661e7fad-fe5d-4b87-9f11-532523417096.gif">
<br><br>
실행하게되며 가장먼저 설정 팝업이 뜬다.
설정팝업은 헤더부분에서 톱니바퀴부분을 누르면 설정을 변경할수있다.
팝업에서 집중시간, 휴식시간 , 집중횟수를 설정하면 타이머가 설정된다.
<br><br><br>
### 할일 리스트
<img width="468" src="https://user-images.githubusercontent.com/94913420/159634582-ba67ce08-c8d3-4c5a-9712-176ce3238795.gif">
<img width="500" alt="스크린샷 2022-03-23 오후 3 07 02" src="https://user-images.githubusercontent.com/94913420/159634533-b8352b80-49eb-4527-a5a9-01667bff6c91.png">
<img width="500" alt="스크린샷 2022-03-23 오후 3 06 56" src="https://user-images.githubusercontent.com/94913420/159634537-283d289b-5577-4f04-bf89-e61ea261be30.png">
<br><br><br>
그리고 밑에 할일을 적을수있다.<br>
할일을 적으면 밑에 리스트가 생긴다.<br>
수정 완료 삭제버튼이 있다. 수정버튼을 누르고 수정후 엔터를 하면 할일내용이 바뀐다. <br>
완료버튼을 누르면 체크 아이콘이 초록색으로 바뀌고 할일에 줄이쳐진다.<br>
삭제버튼을 누르면 할일이 제거된다.
<br><br><br>
### 타이머 설정, 플레이, 정지

<img width="468" src="https://user-images.githubusercontent.com/94913420/159634590-78dbcd8d-1b07-4376-b831-6777593ee542.gif">
<br><br><br>
타이머의 플레이버튼을 누르면 설정된 타이머가 시작된다. 일시정지를 누르게되면 타이머가 멈춘다.<br>
다시한번 누르면 정지되었던 타이머가 움직인다.
<br><br><br>

### 타이머 끝, 리셋

<img width="468" src="https://user-images.githubusercontent.com/94913420/159634592-5065e2ea-f157-40c6-aa64-a9f6b8af27d3.gif">
<br><br><br>
설정된 집중횟수를 다 채우게되면 finish라는 팝업이 나온다. 그리고 설정된 focus시간만큼 지난다면 그다음 타이머는<br>
설정된 휴식시간으로 변경된다.<br>
리셋버튼을 누르면 모든게 리셋되고, 다시 설정화면으로 초기화된다.
<br><br><br>

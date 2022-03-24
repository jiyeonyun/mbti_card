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
<img width="1131" alt="스크린샷 2022-03-24 오후 2 29 18" src="https://user-images.githubusercontent.com/94913420/159849637-4d8a533a-033b-4033-af15-939f0a5fa0c6.png">
<img width="1159" alt="스크린샷 2022-03-24 오후 2 29 34" src="https://user-images.githubusercontent.com/94913420/159849643-d12bad27-09ab-4120-855c-268df95c012b.png">
<br>
실행시 처음 나오는 화면 (깃허브와 구글을 이용하여 로그인 할 수 있다.)
<br> <br>

 *** 
 
mbti 기록 카드르 만들었습니다.<br>
firebase를 이용하여 로그인,실시간 수정과 데이터베이스를 사용 했습니다.<br>
새로고침해도 기존에 추가해놓은 카드는 사라지지않습니다.<br>


## 상세 페이지
### 로그인
<br><br><br>

<img width="1159" src="https://user-images.githubusercontent.com/94913420/159849672-6d95878e-292c-4828-bd69-dc1d1f10806c.gif">
<img width="1159" src="https://user-images.githubusercontent.com/94913420/159849674-149b674e-8d64-4013-a158-9a0e598ee2b1.gif">

<br><br>
실행하게되며 가장먼저 로그인 팝업이 뜹니다.
깃허브나 구글로 로그인할수있고, 이전에 로그인한 쿠키가 남아있으면 자동으로 로그인이됩니다.

<br><br><br>
### 상세 기능
<br><br><br>
<img width="1159" src="https://user-images.githubusercontent.com/94913420/159849665-01165808-24af-40e3-bd4f-1e71a907a37b.gif">
add폼에서 기록을하고 추가를 하며 옆 list에 mbti카드가 생성됩니다.<br>
mbti카드는 실시간으로 수정할수있습니다.<br>
각 mbti에 따라 이미지가 바뀝니다. 16가지 정해진 mbti외 다른 글자가 입력될경우 기본이미지가 나옵니다. <br>
mbti 인풋이 비어있는 상태로 추가를 누르면 알림창이 나오며 추가가 되지않습니다.<br>
삭제버튼을 누르면 카드가 제거됩니다.<br>
파이어베이스르 사용해 데이터베이스를 사용하고 있기 때문에 여기서 수정 삭제 추가 된것은 파이어베이스에도 반영이됩니다.
<br><br><br>
### 타이머 설정, 플레이, 정지

<br><br><br>
타이머의 플레이버튼을 누르면 설정된 타이머가 시작된다. 일시정지를 누르게되면 타이머가 멈춘다.<br>
다시한번 누르면 정지되었던 타이머가 움직인다.
<br><br><br>

### 타이머 끝, 리셋

<br><br><br>
설정된 집중횟수를 다 채우게되면 finish라는 팝업이 나온다. 그리고 설정된 focus시간만큼 지난다면 그다음 타이머는<br>
설정된 휴식시간으로 변경된다.<br>
리셋버튼을 누르면 모든게 리셋되고, 다시 설정화면으로 초기화된다.
<br><br><br>

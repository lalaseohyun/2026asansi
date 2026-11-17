// config.js — 행사 설정. 프로젝트마다 이 파일과 questions.js를 교체한다

export const EVENT = {
  title: '2026년 하반기 신규농업인 기초영농기술교육 협동퀴즈',
  subtitle: '아산 신규농업인, 배운 걸 맞혀라!',
  lobbyMessage: 'QR코드를 접속해 주세요.',
  // 대기 화면 QR이 가리킬 참가자 주소. 진행자 화면을 어디서 열든(내 컴퓨터의 localhost 포함) 항상 이 주소로 QR을 만든다.
  joinUrl: 'https://lalaseohyun.github.io/2026asansi/',
  teamLabel: '조',
  teamCount: 8,
  // teamId는 1~8 숫자 키. 표시 이름에 '+' 등 특수문자를 쓰면 realAnswers()의
  // 키 검사(/^[\w-]+$/)를 통과하지 못하므로, 키는 숫자로 두고 이름만 표시용으로 쓴다.
  teamNames: {
    1: '1조', 2: '2조', 3: '3조', 4: '4조',
    5: '5조', 6: '6조', 7: '7조', 8: '8조'
  },
  members: {},              // 예) 1: ['홍길동', '김철수'] — PIN 설정 화면 오인 선택 방지용
  joinMode: 'open',
  showRanking: true,
  tieBreak: 'speed'
};

// Firebase 콘솔 > 프로젝트 설정 > 내 앱 > SDK 설정 및 구성의 값을 그대로 붙여 넣는다.
// databaseURL은 지역이 포함된 전체 주소여야 한다 (...asia-southeast1.firebasedatabase.app).
export const FIREBASE = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT.firebaseapp.com',
  databaseURL: 'https://YOUR_PROJECT-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'YOUR_PROJECT',
  appId: 'YOUR_APP_ID'
};

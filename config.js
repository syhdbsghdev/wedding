/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "신윤호",
    nameEn: "Shin Yun Ho",
    father: "신겸식",
    mother: "곽희선",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이혜빈",
    nameEn: "Lee Hye Vin",
    father: "이철수",
    mother: "이연실",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-12-19",
    time: "15:30",
    venue: "메리비아포레",
    hall: "메리비아포레 웨딩홀 6층",
    address: "대전광역시 서구 둔산중로 134번길 13",
    tel: "02-1234-5678",
    mapLinks: {
      kakao: "https://map.kakao.com/?urlX=586980.9999999993&urlY=794884.0000000002&urlLevel=3&itemId=1411799605&q=%EB%A9%94%EB%A6%AC%EB%B9%84%EC%95%84%ED%8F%AC%EB%A0%88%EC%9B%A8%EB%94%A9%ED%99%80&srcid=1411799605&map_type=TYPE_MAP",
      naver: "https://map.naver.com/p/search/%EB%A9%94%EB%A6%AC%EB%B9%84%EC%95%84%20%ED%8F%AC%EB%A0%88/place/1493067194?c=15.00,0,0,0,dh&placePath=%2Fhome%3Fbk_query%3D%EB%A9%94%EB%A6%AC%EB%B9%84%EC%95%84%20%ED%8F%AC%EB%A0%88%26entry%3Dbmp%26from%3Dmap%26fromPanelNum%3D2%26timestamp%3D202608171525%26locale%3Dko%26svcName%3Dmap_pcv5%26searchText%3D%EB%A9%94%EB%A6%AC%EB%B9%84%EC%95%84%20%ED%8F%AC%EB%A0%88"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "한 해의 마지막을 맞이하는 12월, \n 저희 두 사람은 서로에게 가장 큰 선물이 되었습니다.\n\n 따뜻한 불빛 아래\n 한마음으로 새로운 길을 함께 걸어가려 합니다.\n\n 저희의 새로운 시작에 함께해 주신다면\n 더없이 따뜻한 겨울이 될 것 같습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "신윤호", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "신겸식", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "곽희선", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "이혜빈", bank: "하나은행", number: "000-000-000000" },
      { role: "아버지", name: "이철수", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "이연실", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신윤호 ♥ 이혜빈 결혼합니다",
    description: "2026년 12월 19일, 소중한 분들을 초대합니다."
  }
};

export const curriculumData = [
  {
    id: 1,
    title: "1회차: 기본 인물, 장소, 동작 마스터",
    subTitle: "TOPIK I 합격의 첫걸음! 일상생활의 주체(인물)와 공간(장소) 및 기본 동사를 배웁니다.",
    duration: "2시간",
    
    // 국립국제교육원 TOPIK 공식 소개 규정
    topikIntro: {
      title: "🔎 국립국제교육원 TOPIK I 공식 규정 및 시험 안내",
      purpose: "한국어를 모국어로 하지 않는 재외동포 및 외국인의 한국어 학습 방향 제시 및 한국어 사용 능력을 측정하여 유학, 취업 등에 활용하는 것을 목적으로 합니다.",
      target: "재외동포 및 외국인 (한국 내 대학 입학, 비자 취득, 해외 기업 취업 등 희망자)",
      levels: [
        { grade: "1급 (TOPIK I)", standard: "80점 이상 취득", criteria: "자기소개, 물건 사기, 음식 주문 등 일상생활에 필요한 기초적인 대화가 가능하며, 약 800개의 기본 어휘를 이해할 수 있는 수준." },
        { grade: "2급 (TOPIK I)", standard: "140점 이상 취득", criteria: "전화하기, 부탁하기 등 일상적인 공공시설 이용과 간단한 회사 생활이 가능하며, 약 1,500~2,000개의 어휘를 사용할 수 있는 수준." }
      ],
      sections: [
        { area: "듣기 (Listening)", questions: "30문항", score: "100점", time: "40분", format: "4지선다형 객관식" },
        { area: "읽기 (Reading)", questions: "40문항", score: "100점", time: "60분", format: "4지선다형 객관식" }
      ],
      tips: [
        "TOPIK I은 1교시 단일 교시로 구성되며, 중간에 쉬는 시간 없이 총 100분 동안 진행됩니다.",
        "오답에 대한 감점 제도가 없으므로, 모든 문항의 답안을 반드시 채우는 것이 고득점에 유리합니다."
      ]
    },

    // 상세 시간표 (Timeline)
    timeline: [
      { time: "10분", activity: "도입 & TOPIK 소개", detail: "출석 체크, 지난 시간 복습 및 TOPIK I 시험 배점(200점 만점)과 1급(80점 이상) 합격 기준 오리엔테이션" },
      { time: "30분", activity: "1단계: 단위 공부", detail: "오늘의 주제 어휘(인물 👤, 장소 📍, 동사 🏃)의 핵심 단어 의미 학습 및 예문 낭독" },
      { time: "35분", activity: "2단계: 읽기 실전 훈련", detail: "실제 TOPIK 기출 기반 읽기 문제 풀이 (서점 그림 매칭, 병원 빈칸 채우기) 및 격조사 해설" },
      { time: "10분", activity: "쉬는 시간", detail: "중간 휴식 시간" },
      { time: "25분", activity: "3단계: 듣기 실전 훈련", detail: "실제 TOPIK 기출 기반 듣기 문제 청취 (약국 대화, 카페 주문 그림) 및 쉐도잉 훈련" },
      { time: "10분", activity: "마무리 정리 & 장악", detail: "오늘 배운 핵심 명사 10개, 동사 10개 플래시카드로 암기 여부 최종 테스트" }
    ],
    
    // 1단계: 단위 공부 (Vocab Warm-up)
    vocabWarmUp: {
      title: "1단계: 단위 공부 (오늘의 핵심 기초 어휘)",
      description: "그림 카드를 보고 어떤 인물, 장소, 동작인지 유추한 뒤 카드를 클릭하여 한글 단어를 확인해보세요.",
      instructorGuide: "<strong>[단위 공부 교수 가이드]</strong><br>- 학생들에게 카드의 '그림'만 보여주고 한글 단어(학생, 의사, 병원 등)를 큰 소리로 외쳐보게 유도하십시오.<br>- 단어 발음 듣기 🔊 버튼을 눌러 원어민 발음을 들려주고 함께 쉐도잉 훈련을 하세요.<br>- 카드를 클릭하여 뒤집어 뒷면의 뜻과 예문을 소리 내 낭독하게 하십시오.",
      categories: [
        {
          name: "👤 인물 명사 (People)",
          words: [
            { word: "학생", definition: "Student", example: "학생이 학교에서 공부를 합니다.", image: "/topik_student_scene.jpg" },
            { word: "선생님", definition: "Teacher", example: "선생님이 교실에서 한국어를 가르칩니다.", image: "/topik_teacher_scene.jpg" },
            { word: "의사", definition: "Doctor", example: "의사가 병원에서 아픈 사람을 치료합니다.", image: "/topik_doctor_scene.jpg" },
            { word: "요리사", definition: "Chef / Cook", example: "요리사가 식당에서 맛있는 음식을 만듭니다.", image: "/topik_chef_scene.jpg" }
          ]
        },
        {
          name: "📍 장소 명사 (Places)",
          words: [
            { word: "학교", definition: "School", example: "우리는 학교에서 친구를 만납니다.", image: "/topik_school_scene.jpg" },
            { word: "병원", definition: "Hospital", example: "머리가 아파서 병원에 갔습니다.", image: "/topik_hospital_scene.jpg" },
            { word: "식당", definition: "Restaurant", example: "식당에서 김치찌개를 먹었습니다.", image: "/topik_restaurant_scene.jpg" },
            { word: "은행", definition: "Bank", example: "돈을 찾으러 은행에 갑니다.", image: "/topik_bank_scene.jpg" }
          ]
        },
        {
          name: "🏃 동작 동사 (Basic Verbs)",
          words: [
            { word: "가다", definition: "To go", example: "저는 오늘 시장에 갑니다.", image: "/topik_go_scene.jpg" },
            { word: "오다", definition: "To come", example: "비가 오면 우산을 씁니다.", image: "/topik_come_scene.jpg" },
            { word: "하다", definition: "To do", example: "동생은 매일 운동을 합니다.", image: "/topik_student_scene.jpg" },
            { word: "먹다", definition: "To eat", example: "아침에 사과를 먹었습니다.", image: "/topik_restaurant_scene.jpg" }
          ]
        }
      ]
    },

    // 🕹️ 1회차 어휘-그림 매칭 게임 (영어가 완전 배제된 6쌍)
    vocabGamePairs: [
      { type: "text-image", text: "서점", matchVal: "/topik_bookstore_scene.jpg", key: "bookstore" },
      { type: "text-image", text: "카페", matchVal: "/topik_cafe_scene.jpg", key: "cafe" },
      { type: "text-image", text: "비 (날씨)", matchVal: "/topik_rainy_scene.jpg", key: "rainy" },
      { type: "text-image", text: "의사", matchVal: "/topik_doctor_scene.jpg", key: "doctor" },
      { type: "text-image", text: "요리사", matchVal: "/topik_chef_scene.jpg", key: "chef" },
      { type: "text-image", text: "학생", matchVal: "/topik_student_scene.jpg", key: "student" }
    ],

    // 2단계: 실전 훈련 (Actual Practice)
    practiceQuestions: [
      {
        id: "q1_r1",
        type: "reading",
        category: "읽기 (Reading) 기출",
        question: "다음 그림을 보고 무엇을 하는 상황인지 가장 알맞은 것을 고르십시오. (TOPIK I 기출)",
        image: "/topik_bookstore_scene.jpg",
        options: ["밥을 먹습니다.", "노래를 부릅니다.", "책을 고릅니다.", "옷을 삽니다."],
        correct: 2, // 책을 고릅니다
        explanation: "그림을 보면 많은 책이 꽂혀 있는 책장 앞에서 책을 한 권 손에 들고 보고 있습니다. 책을 고르고 파는 장소인 서점의 맥락과 일치하는 동작입니다.",
        instructorGuide: "<strong>[읽기 1번 교수 시나리오]</strong><br>- <strong>발문 팁:</strong> '그림에 무엇이 보여요? 그래요, 책이 보여요. 그럼 책을 가지고 할 수 있는 행동은 무엇일까요?'<br>- <strong>오답 소거법 지도:</strong> ① 밥(식당), ② 노래(노래방/공연장), ④ 옷(옷가게)처럼 각 보기별 핵심 단어와 어울리는 고유 장소를 판서하고, 서점 이미지와 어울리지 않음을 지적하여 오답을 소거하게 하세요.",
        optionExplanations: [
          "① 밥을 먹습니다 (X) - 음식을 식탁에서 먹고 있는 상황이 아닙니다.",
          "② 노래를 부릅니다 (X) - 마이크를 쥐고 노래하는 방이 아닌 책들이 있는 공간입니다.",
          "③ 책을 고릅니다 (O) - 책장 앞에서 서서 마음에 드는 책을 손에 들고 확인하는 행동이므로 그림과 완벽히 일치합니다.",
          "④ 옷을 삽니다 (X) - 옷가게에서 옷을 거울에 비춰보거나 계산하고 있지 않습니다."
        ]
      },
      {
        id: "q1_r2",
        type: "reading",
        category: "읽기 (Reading) 기출",
        question: "다음 빈칸에 들어갈 가장 알맞은 조사를 고르십시오. (TOPIK I 기출)<br><br><div class='quiz-box'>저는 오늘 시장에 갑니다. 시장에서 사과( &nbsp; &nbsp; &nbsp; &nbsp; ) 배를 삽니다.</div>",
        options: ["가", "와", "를", "로"],
        correct: 1, // 와
        explanation: "명사와 명사를 대등하게 연결하며 'and'의 의미를 지니는 접속 조사는 **와/과**입니다. 앞 명사 '사과'에 받침이 없으므로 **와**가 어울립니다.",
        instructorGuide: "<strong>[읽기 2번 교수 시나리오]</strong><br>- <strong>문법 판서:</strong> Noun + 와/과 (받침 O -> 과 / 받침 X -> 와). 예: '수박과 참외', '사과와 배'<br>- <strong>질문 유도:</strong> '사과' 밑에 받침이 있는지 학생들에게 소리쳐 답하게 유도하십시오. 받침이 없으므로 '와'임을 시각화하여 각인시킵니다.",
        optionExplanations: [
          "① 가 (X) - 주격을 나타내는 조사로, 사과를 문장의 주어로 만들기 때문에 어울리지 않습니다.",
          "② 와 (O) - 사과와 배라는 두 대상을 대등하게 나열하는 접속 조사로, 문장의 목적어 자리에 잘 들어맞습니다.",
          "③ 를 (X) - 목적격 조사로, 이미 뒤에 '배를' 목적격 조사가 결합해 있으므로 명사와 명사를 대등하게 이어줄 수 없습니다.",
          "④ 로 (X) - 도구나 수단, 방향을 나타내는 부사격 조사로 '사과로 배를 산다'는 의미가 되어 어색합니다."
        ]
      },
      {
        id: "q1_l1",
        type: "listening",
        category: "듣기 (Listening) 기출",
        question: "다음을 듣고 그림과 어울리는 올바른 대화 상황을 고르십시오. (TOPIK I 기출)",
        image: "/topik_cafe_scene.jpg",
        audioScript: [
          { speaker: "여", text: "여기 커피 두 잔하고 케이크 하나 주세요." },
          { speaker: "남", text: "네, 알겠습니다. 저기 테이블에서 잠시만 기다려 주세요." }
        ],
        options: [
          "병원에서 의사와 간호사가 환자를 만납니다.",
          "카페에서 여자가 음료와 디저트를 주문합니다.",
          "은행에서 남자가 카드를 넣어 돈을 찾습니다.",
          "서점에서 남자가 직원에게 책 위치를 묻습니다."
        ],
        correct: 1, // 카페
        explanation: "여자가 주문을 하고 점원(남자)이 대답을 하는 장소는 카페입니다. 카페에서 두 사람이 커피를 나누고 주문하는 장면이므로 ②번이 그림 상황과 완벽히 부합합니다.",
        instructorGuide: "<strong>[듣기 1번 교수 시나리오]</strong><br>- <strong>오디오 청취 전 지도:</strong> 그림 속에 테이블, 찻잔, 웃으며 대화하는 모습이 보임을 공유하고 카페 관련 단어(커피, 차, 주문, 잔)가 나올 것임을 예측하게 하세요.<br>- <strong>쉐도잉(따라 읽기) 기법:</strong> 음성을 들려준 후 '커피 두 잔', '케이크 하나'를 끊어서 따라 발음하게 하십시오. 숫자를 세는 단위 명사(잔, 개) 학습을 복습하게 유도합니다.",
        optionExplanations: [
          "① 병원에서 환자를 만납니다 (X) - 대화가 진료나 주사 등 병원과 무관하며, 그림 역시 청진기나 병실이 없습니다.",
          "② 카페에서 음료와 디저트를 주문합니다 (O) - 여자가 커피 두 잔과 케이크를 달라고 주문하며 남자가 서빙을 대기하라고 하는 내용이므로 카페 그림에 정확히 일치합니다.",
          "③ 은행에서 돈을 찾습니다 (X) - 금융 기기나 카드, 통장에 관한 언급이 전혀 없습니다.",
          "④ 서점에서 책 위치를 묻습니다 (X) - 책장이나 베스트셀러, 도서 검색 등에 대한 얘기가 아니며 그림도 커피잔이 놓인 테이블입니다."
        ]
      },
      {
        id: "q1_l2",
        type: "listening",
        category: "듣기 (Listening) 기출",
        question: "다음을 듣고 두 사람이 대화하는 장소로 가장 알맞은 곳을 고르십시오. (TOPIK I 기출)",
        audioScript: [
          { speaker: "여", text: "머리가 많이 아파요. 약 좀 주세요." },
          { speaker: "남", text: "네, 이 약을 드세요. 그리고 오늘은 따뜻한 물을 많이 마시고 푹 쉬세요." }
        ],
        options: ["은행", "약국", "우체국", "세탁소"],
        correct: 1, // 약국
        explanation: "여자가 아픈 부위를 말하며 '약'을 요구하였고, 약사가 '이 약을 드세요'라고 건네며 복약 지도를 하고 있으므로 대화 장소는 **약국**이 확실합니다.",
        instructorGuide: "<strong>[듣기 2번 교수 시나리오]</strong><br>- <strong>키워드 낚아채기 훈련:</strong> '머리가 아파요', '약 좀 주세요'가 나오는 순간 대화 상대방이 '약사'이고 장소는 '약국'임을 바로 추론하게 지도하세요.<br>- <strong>한국 문화 팁 설명:</strong> 한국에서는 가벼운 두통이나 감기 시 병원을 거치지 않고 바로 '약국'에 들러 일반의약품을 바로 구매하는 문화가 흔함을 학생들에게 설명해 주어 실생활 적용력을 높이십시오.",
        optionExplanations: [
          "① 은행 (X) - 예금, 출금, 통장 정리 등 은행 금융 업무와 관련된 핵심 단어가 들리지 않습니다.",
          "② 약국 (O) - '아파요', '약 좀 주세요', '이 약을 드세요' 등의 단어를 통해 조제약을 판매하는 약국임이 확실하게 도출됩니다.",
          "③ 우체국 (X) - 편지, 소포, 우표, 해외 배송 등의 배달 용어가 언급되지 않았습니다.",
          "④ 세탁소 (X) - 옷 수선, 드라이클리닝, 세탁물 수거 등의 단어와 매칭되지 않습니다."
        ]
      }
    ],

    // 3단계: 마무리 장악 (Vocabulary Mastery)
    vocabularyMastery: {
      title: "3단계: 마무리 정리 (오늘 꼭 장악해야 할 명사 & 동사)",
      description: "오늘 배운 어휘 중 핵심 단어 20개입니다. 카드를 클릭하여 뜻을 확인하고 확실히 암기했는지 체크하세요.",
      nouns: [
        { word: "학생", meaning: "Student" },
        { word: "선생님", meaning: "Teacher" },
        { word: "의사", meaning: "Doctor" },
        { word: "요리사", meaning: "Chef / Cook" },
        { word: "학교", meaning: "School" },
        { word: "병원", meaning: "Hospital" },
        { word: "식당", meaning: "Restaurant" },
        { word: "은행", meaning: "Bank" },
        { word: "커피", meaning: "Coffee" },
        { word: "책", meaning: "Book" }
      ],
      verbs: [
        { word: "가다", meaning: "To go" },
        { word: "오다", meaning: "To come" },
        { word: "하다", meaning: "To do" },
        { word: "먹다", meaning: "To eat" },
        { word: "마시다", meaning: "To drink" },
        { word: "공부하다", meaning: "To study" },
        { word: "가르치다", meaning: "To teach" },
        { word: "치료하다", meaning: "To treat / cure" },
        { word: "만들다", meaning: "To make" },
        { word: "기다리다", meaning: "To wait" }
      ]
    }
  },
  {
    id: 2,
    title: "2회차: 일상생활과 물건 쇼핑",
    subTitle: "가장 실용적인 한국어 표현! 물건 구매, 식사, 그리고 조사 결합 형태를 훈련합니다.",
    duration: "2시간",
    
    // 상세 시간표 (Timeline)
    timeline: [
      { time: "10분", activity: "도입 & 1회차 복습", detail: "지난 시간에 배운 인물, 장소, 기본 어휘 20개 퀴즈식 복습 및 오늘 수업의 쇼핑/물건 표현 학습 준비" },
      { time: "30분", activity: "1단계: 단위 공부", detail: "오늘의 주제 어휘 (물건 🛍️, 단위/화폐 🪙, 쇼핑 동사 🛒) 핵심 명사/동사 의미와 조사 결합 형태 파악" },
      { time: "35분", activity: "2단계: 읽기 실전 훈련", detail: "실제 TOPIK 기출 기반 읽기 문제 풀이 (미술관 안내판 해석, 과거시제 결합) 및 풀이법 설명" },
      { time: "10분", activity: "쉬는 시간", detail: "중간 휴식 시간" },
      { time: "25분", activity: "3단계: 듣기 실전 훈련", detail: "실제 TOPIK 기출 기반 듣기 문제 청취 (첫인상 인사, 컴퓨터 수리 일치) 및 쉐도잉 훈련" },
      { time: "10분", activity: "마무리 정리 & 장악", detail: "오늘 배운 쇼핑/물건 명사 10개, 생활 동사 10개 플래시카드로 자가진단 및 복습" }
    ],
    
    // 1단계: 단위 공부 (Vocab Warm-up)
    vocabWarmUp: {
      title: "1단계: 단위 공부 (물건 및 쇼핑 관련 어휘)",
      description: "그림 카드를 보고 어떤 물건이나 동작인지 유추한 뒤 카드를 클릭하여 한국어 단어를 확인해 보세요.",
      instructorGuide: "<strong>[단위 공부 교수 가이드]</strong><br>- 물건별 세는 단위 명사(개, 잔, 켤레 등)는 한국어 초급자에게 암기 부담이 높습니다. 칠판에 그림 카드를 그리거나 학생 주변 물건을 가리키며 훈련하십시오.<br>- 예문 '커피 한 잔에 오천 원입니다'를 통해 가격 질문 구조('얼마입니까?')와 단위를 유기적으로 연계 설명하세요.",
      categories: [
        {
          name: "🛍️ 물건 및 상점 명사 (Items & Shops)",
          words: [
            { word: "옷", definition: "Clothes", example: "백화점에서 예쁜 옷을 샀습니다.", image: "/topik_bookstore_scene.jpg" },
            { word: "신발", definition: "Shoes", example: "이 구두는 신발 가게에서 팝니다.", image: "/topik_student_scene.jpg" },
            { word: "과일", definition: "Fruit", example: "시장에서 신선한 과일을 샀어요.", image: "/topik_restaurant_scene.jpg" },
            { word: "우산", definition: "Umbrella", example: "비가 와서 우산을 준비했습니다.", image: "/topik_rainy_scene.jpg" }
          ]
        },
        {
          name: "🪙 가격 및 단위 명사 (Units & Prices)",
          words: [
            { word: "돈", definition: "Money", example: "지갑에 돈이 별로 없습니다.", image: "/topik_bank_scene.jpg" },
            { word: "원", definition: "Won (Korean Currency)", example: "커피 한 잔에 오천 원입니다.", image: "/topik_bank_scene.jpg" },
            { word: "잔", definition: "Glass / Cup", example: "물 한 잔만 가져다 주세요.", image: "/topik_cafe_scene.jpg" },
            { word: "개", definition: "Item counter (general)", example: "사과 세 개를 바구니에 담았습니다.", image: "/topik_restaurant_scene.jpg" }
          ]
        },
        {
          name: "🛒 쇼핑 관련 동사 (Shopping Verbs)",
          words: [
            { word: "사다", definition: "To buy", example: "가게에서 빵을 샀습니다.", image: "/topik_bookstore_scene.jpg" },
            { word: "팔다", definition: "To sell", example: "이 마트에서는 과일을 싸게 팝니다.", image: "/topik_restaurant_scene.jpg" },
            { word: "빌리다", definition: "To borrow", example: "도서관에서 책 세 권을 빌렸습니다.", image: "/topik_bookstore_scene.jpg" },
            { word: "주다", definition: "To give", example: "동생에게 생일 선물을 주었습니다.", image: "/topik_teacher_scene.jpg" }
          ]
        }
      ]
    },

    // 🕹️ 2회차 어휘-그림 매칭 게임 (영어가 완전 배제된 6쌍)
    vocabGamePairs: [
      { type: "text-image", text: "서점", matchVal: "/topik_bookstore_scene.jpg", key: "bookstore" },
      { type: "text-image", text: "카페", matchVal: "/topik_cafe_scene.jpg", key: "cafe" },
      { type: "text-image", text: "비 (날씨)", matchVal: "/topik_rainy_scene.jpg", key: "rainy" },
      { type: "text-image", text: "의사", matchVal: "/topik_doctor_scene.jpg", key: "doctor" },
      { type: "text-image", text: "요리사", matchVal: "/topik_chef_scene.jpg", key: "chef" },
      { type: "text-image", text: "학생", matchVal: "/topik_student_scene.jpg", key: "student" }
    ],

    // 2단계: 실전 훈련 (Actual Practice)
    practiceQuestions: [
      {
        id: "q2_r1",
        type: "reading",
        category: "읽기 (Reading) 기출",
        question: "다음 안내문의 내용과 <strong>같은 것</strong>을 고르십시오. (TOPIK I 기출)<br><br><div class='quiz-box'><strong>[미술관 안내]</strong><br>- 이용 시간: 오전 10시 ~ 오후 6시<br>- 입장 요금: 5,000원<br>- (※ 매주 월요일은 쉽니다.)</div>",
        options: [
          "미술관은 월요일에 문을 엽니다.",
          "미술관은 저녁 8시에 문을 닫습니다.",
          "미술관 입장 요금은 오천 원입니다.",
          "오전 9시부터 입장하여 볼 수 있습니다."
        ],
        correct: 2, // 요금은 오천 원입니다.
        explanation: "안내문을 보면 입장 요금은 '5,000원'이라 명시되어 있습니다. 월요일은 휴관(쉽니다)하고, 오전 10시에 열어 오후 6시(저녁 6시)에 닫으므로 다른 보기들은 오답이며, ③번이 확실한 정답입니다.",
        instructorGuide: "<strong>[읽기 1번 교수 시나리오]</strong><br>- <strong>대조 분석 훈련:</strong> 안내판 읽기는 사실 일치 유형으로, 보기를 하나씩 지문의 텍스트와 대조하는 것이 기본입니다.<br>- <strong>오답 설명:</strong> ① '월요일은 쉽니다' -> 닫습니다, ② '오후 6시까지' -> 6시에 닫습니다, ④ '오전 10시' -> 10시부터 엽니다. 이 세가지를 대조 판서하며 설명해 주십시오.",
        optionExplanations: [
          "① 월요일에 문을 엽니다 (X) - 안내문에 '매주 월요일은 쉽니다(휴무)'라고 나와 있으므로 문을 닫습니다.",
          "② 저녁 8시에 문을 닫습니다 (X) - 이용 시간이 '오후 6시'까지로 제한되어 있어 저녁 8시에는 이미 닫은 상태입니다.",
          "③ 입장 요금은 오천 원입니다 (O) - 요금란에 '5,000원'으로 적혀 있는 사실과 정확히 부합합니다.",
          "④ 오전 9시부터 입장할 수 있습니다 (X) - 이용 시작 시간은 오전 9시가 아닌 '오전 10시'부터입니다."
        ]
      },
      {
        id: "q2_r2",
        type: "reading",
        category: "읽기 (Reading) 기출",
        question: "다음 빈칸에 들어갈 가장 알맞은 단어를 고르십시오. (TOPIK I 기출)<br><br><div class='quiz-box'>저는 어제 주말에 친구를 ( &nbsp; &nbsp; &nbsp; &nbsp; ). 그리고 같이 재미있는 영화를 봤습니다.</div>",
        options: ["만났습니다", "만납니다", "만날 것입니다", "만나서"],
        correct: 0, // 만났습니다
        explanation: "문장에 '어제'라는 시간 단어가 있고, 뒷문장 역시 과거형 시제 '봤습니다'가 쓰였으므로 시제를 과거형으로 일치시켜야 합니다.",
        instructorGuide: "<strong>[읽기 2번 교수 시나리오]</strong><br>- <strong>시제 일치(Tense Agreement):</strong> 앞문장의 행동 시점이 '어제'이고 뒷문장 서술어가 '봤습니다'로 과거이므로, 중간 빈칸 동사 또한 반드시 과거시제 아/어/였어야 함을 주지시키십시오.<br>- <strong>오답 시제 분석:</strong> ② 만납니다(현재), ③ 만날 것입니다(미래), ④ 만나서(원인/순서의 연결어미)를 각각 설명하여 시제 선택의 명확성을 전달하세요.",
        optionExplanations: [
          "① 만났습니다 (O) - '어제' 일어난 일이므로 과거 선어말어미 '-었-'이 들어간 과거형 동사가 정확합니다.",
          "② 만납니다 (X) - 현재 시제 종결어미로 '어제'라는 부사와 시제가 맞지 않습니다.",
          "③ 만날 것입니다 (X) - 미래 시제 관형사형 및 의존명사 구성으로, 이미 끝난 어제 일과 맞지 않습니다.",
          "④ 만나서 (X) - 연결 어미로 문장을 연결하기에는 중간에 마침표(.)가 있어 서술형 종결어미가 필요합니다."
        ]
      },
      {
        id: "q2_l1",
        type: "listening",
        category: "듣기 (Listening) 기출",
        question: "다음을 듣고 이어질 대화로 가장 알맞은 것을 고르십시오. (TOPIK I 기출)",
        audioScript: [
          { speaker: "남", text: "처음 뵙겠습니다. 김민수입니다." }
        ],
        options: [
          "반갑습니다. 저는 이수진입니다.",
          "네, 안녕히 계세요.",
          "미안합니다. 괜찮습니다.",
          "축하합니다. 고맙습니다."
        ],
        correct: 0, // 반갑습니다.
        explanation: "남자가 처음 만났을 때 나누는 자기소개 인사를 건넸으므로 이에 이어질 가장 적절한 대답은 맞인사인 '반갑습니다. 저는 이수진입니다.'(①)가 가장 명확합니다.",
        instructorGuide: "<strong>[듣기 1번 교수 시나리오]</strong><br>- <strong>첫 만남 발화 상황 재현:</strong> 강사가 학생 한 명을 지목하여 '처음 뵙겠습니다. OO입니다'라고 말하고 학생의 대답을 유도해 보세요.<br>- <strong>상황별 인사말 정리:</strong> '안녕히 계세요/가세요'의 차이, 사과에 대한 응답('괜찮습니다'), 감사에 대한 대답('천만에요/아니에요')을 세트로 정리 판서하여 학생들이 암기하도록 가이드하세요.",
        optionExplanations: [
          "① 반갑습니다. 저는 이수진입니다 (O) - 상대방이 자신의 이름을 소개했을 때 건네는 가장 예의 바르고 상호적인 응답입니다.",
          "② 네, 안녕히 계세요 (X) - 대화 장소에서 헤어질 때 떠나는 사람에게 건네는 작별 인사입니다.",
          "③ 미안합니다. 괜찮습니다 (X) - 실수나 사과를 받았을 때 용서해 주는 맥락의 연결입니다.",
          "④ 축하합니다. 고맙습니다 (X) - 상대가 경사나 좋은 성과에 대해 축하를 건넸을 때 감사함을 표현하는 문장입니다."
        ]
      },
      {
        id: "q2_l2",
        type: "listening",
        category: "듣기 (Listening) 기출",
        question: "다음을 듣고 대화 내용과 일치하는 것(같은 내용)을 고르십시오. (TOPIK I 기출)",
        audioScript: [
          { speaker: "여", text: "민수 씨, 컴퓨터 다 고쳤어요?" },
          { speaker: "남", text: "아니요, 아직 고치고 있어요. 조금만 기다려 주세요." },
          { speaker: "여", text: "그럼 컴퓨터를 다 고친 후에 저한테 꼭 연락해 주세요." }
        ],
        options: [
          "남자는 컴퓨터 수리를 완전히 끝냈습니다.",
          "여자가 직접 도구를 들고 컴퓨터를 고치고 있습니다.",
          "남자는 지금 현재 컴퓨터를 고치고 있습니다.",
          "두 사람은 오늘 매장에 가서 컴퓨터를 새로 살 것입니다."
        ],
        correct: 2, // 남자는 컴퓨터 고치는 중
        explanation: "남자가 '아니요, 아직 고치고 있어요'라고 말했으므로 남자가 지금 컴퓨터를 수리 중인 상태입니다. 따라서 정답은 ③번입니다.",
        instructorGuide: "<strong>[듣기 2번 교수 시나리오]</strong><br>- <strong>진행 상태 파악:</strong> 대화 속 '아직 ~고 있어요'가 현재 진행 중이며 끝나지 않은 상태를 묘사함을 강조하십시오.<br>- <strong>미래 행동 설명:</strong> 여자가 '고친 후에 연락해 주세요'라고 제안했으므로 미래에 연락을 취할 사람은 남자(수리 완료자)입니다. 보기를 꼼꼼히 비틀어 분석하는 법을 알려주세요.",
        optionExplanations: [
          "① 수리를 완전히 끝냈습니다 (X) - 남자가 '아직 고치고 있다'고 하였으므로 완료되지 않았습니다.",
          "② 여자가 직접 컴퓨터를 고칩니다 (X) - 여자는 질문을 하고 있고, 실제 수리자는 남자입니다.",
          "③ 지금 현재 컴퓨터를 고치고 있습니다 (O) - 대화 중 '아직 고치고 있다'는 남자의 대사와 완벽하게 일치합니다.",
          "④ 컴퓨터를 새로 살 것입니다 (X) - 기존 컴퓨터를 수리하고 있으며 새로 구매한다는 계획은 없습니다."
        ]
      }
    ],

    // 3단계: 마무리 장악 (Vocabulary Mastery)
    vocabularyMastery: {
      title: "3단계: 마무리 정리 (오늘 꼭 장악해야 할 명사 & 동사)",
      description: "일상적인 물건 구매와 소통에 사용되는 중요한 어휘 목록입니다. 카드를 뒤집어가며 복습하세요.",
      nouns: [
        { word: "옷", meaning: "Clothes" },
        { word: "신발", meaning: "Shoes" },
        { word: "과일", meaning: "Fruit" },
        { word: "우산", meaning: "Umbrella" },
        { word: "돈", meaning: "Money" },
        { word: "원", meaning: "Won (Currency)" },
        { word: "잔", meaning: "Glass / Cup" },
        { word: "개", meaning: "Counter for items" },
        { word: "구두", meaning: "Dress shoes" },
        { word: "선물", meaning: "Gift / Present" }
      ],
      verbs: [
        { word: "사다", meaning: "To buy" },
        { word: "팔다", meaning: "To sell" },
        { word: "빌리다", meaning: "To borrow" },
        { word: "주다", meaning: "To give" },
        { word: "읽다", meaning: "To read" },
        { word: "깎아주다", meaning: "To give a discount" },
        { word: "이야기하다", meaning: "To talk / converse" },
        { word: "좋아하다", meaning: "To like" },
        { word: "운동하다", meaning: "To exercise" },
        { word: "만나다", meaning: "To meet" }
      ]
    }
  },
  {
    id: 3,
    title: "3회차: 시간, 상태, 그리고 미래 계획",
    subTitle: "일정 및 약속 잡기! 날씨, 시간 관련 어휘와 미래 시제 문법을 연습합니다.",
    duration: "2시간",
    
    // 상세 시간표 (Timeline)
    timeline: [
      { time: "10분", activity: "도입 & 2회차 복습", detail: "지난 시간의 물건, 단위, 쇼핑 관련 어휘 20개 구두 테스트 및 오늘 다룰 일정/시간/상태 표현 안내" },
      { time: "30분", activity: "1단계: 단위 공부", detail: "오늘의 주제 어휘 (시간/날씨 명사 📅, 상태 형용사 🌡️, 계획 동사 🗺️)의 뉘앙스 파악 및구문 활용" },
      { time: "35분", activity: "2단계: 읽기 실전 훈련", detail: "실제 TOPIK 기출 기반 읽기 문제 풀이 (요일 약속 메모 해석, 감기 지문 내용 일치) 및 주제 도출법 해설" },
      { time: "10분", activity: "쉬는 시간", detail: "중간 휴식 시간" },
      { time: "25분", activity: "3단계: 듣기 실전 훈련", detail: "실제 TOPIK 기출 기반 듣기 문제 청취 (주말 계획 대답, 비오는 날 빨래 걷기) 및 상황 추론 훈련" },
      { time: "10분", activity: "마무리 정리 & 장악", detail: "오늘 배운 시간/상태 명사 10개, 상태 동사/형용사 10개 플래시카드로 자가테스트" }
    ],
    
    // 1단계: 단위 공부 (Vocab Warm-up)
    vocabWarmUp: {
      title: "1단계: 단위 공부 (시간 및 상태 형용사)",
      description: "그림 카드를 보고 어떤 날씨나 상태 혹은 동사인지 유추한 뒤 카드를 클릭하여 한국어 단어를 확인해 보세요.",
      instructorGuide: "<strong>[단위 공부 교수 가이드]</strong><br>- 감정/상태 형용사 '아프다', '바쁘다'의 불규칙 어미 변화('아파요', '바빠요')를 칠판에 나란히 적어가며 'ㅡ' 모음 탈락 현상을 문법적으로 판서하여 요약하십시오.<br>- 요일 및 미래 계획 시제(Noun + 할 거예요)는 1급 고득점을 가르는 핵심 문형이므로, 주말에 무얼 하고 싶은지 한 명씩 릴레이 대답을 훈련시키십시오.",
      categories: [
        {
          name: "📅 시간 및 날씨 명사 (Time & Weather)",
          words: [
            { word: "오늘", definition: "Today", example: "오늘 오후에 친구를 만나기로 했습니다.", image: "/topik_cafe_scene.jpg" },
            { word: "내일", definition: "Tomorrow", example: "내일은 주말이라 회사에 안 갑니다.", image: "/topik_student_scene.jpg" },
            { word: "주말", definition: "Weekend", example: "주말에 산에 등산을 하러 갑니다.", image: "/topik_bookstore_scene.jpg" },
            { word: "비", definition: "Rain", example: "비가 오니까 외출하지 마세요.", image: "/topik_rainy_scene.jpg" }
          ]
        },
        {
          name: "🌡️ 상태 형용사 (Adjectives)",
          words: [
            { word: "아프다", definition: "Sick / Painful", example: "어제부터 머리가 아픕니다.", image: "/topik_doctor_scene.jpg" },
            { word: "피곤하다", definition: "Tired", example: "밤에 늦게 자서 오늘 아주 피곤해요.", image: "/topik_student_scene.jpg" },
            { word: "바쁘다", definition: "Busy", example: "시험 공부 때문에 요즘 무척 바쁩니다.", image: "/topik_bookstore_scene.jpg" },
            { word: "맑다", definition: "Clear / Sunny", example: "하늘이 아주 맑고 시원합니다.", image: "/topik_rainy_scene.jpg" }
          ]
        },
        {
          name: "🗺️ 상태 및 계획 동사 (State & Plan)",
          words: [
            { word: "쉬다", definition: "To rest", example: "피곤할 때는 집에서 푹 쉽니다.", image: "/topik_student_scene.jpg" },
            { word: "약속하다", definition: "To promise / make appointment", example: "친구와 6시에 만나기로 약속했습니다.", image: "/topik_cafe_scene.jpg" },
            { word: "생각하다", definition: "To think", example: "내년에는 한국에 갈까 생각합니다.", image: "/topik_bookstore_scene.jpg" },
            { word: "사오다", definition: "To buy and bring", example: "돌아오는 길에 약을 사왔습니다.", image: "/topik_doctor_scene.jpg" }
          ]
        }
      ]
    },

    // 🕹️ 3회차 어휘-그림 매칭 게임 (영어가 완전 배제된 6쌍)
    vocabGamePairs: [
      { type: "text-image", text: "서점", matchVal: "/topik_bookstore_scene.jpg", key: "bookstore" },
      { type: "text-image", text: "카페", matchVal: "/topik_cafe_scene.jpg", key: "cafe" },
      { type: "text-image", text: "비 (날씨)", matchVal: "/topik_rainy_scene.jpg", key: "rainy" },
      { type: "text-image", text: "의사", matchVal: "/topik_doctor_scene.jpg", key: "doctor" },
      { type: "text-image", text: "요리사", matchVal: "/topik_chef_scene.jpg", key: "chef" },
      { type: "text-image", text: "학생", matchVal: "/topik_student_scene.jpg", key: "student" }
    ],

    // 2단계: 실전 훈련 (Actual Practice)
    practiceQuestions: [
      {
        id: "q3_r1",
        type: "reading",
        category: "읽기 (Reading) 기출",
        question: "다음 글을 읽고 중심 생각(주제)으로 가장 알맞은 것을 고르십시오. (TOPIK I 기출)<br><br><div class='quiz-box'>저는 어제 자전거를 새로 샀습니다. 자전거를 타는 것이 아주 재미있습니다. 빨리 주말이 와서 근처 공원에서 자전거를 타고 싶습니다.</div>",
        options: [
          "저는 자전거를 타고 출근합니다.",
          "저는 자전거를 사고 싶습니다.",
          "저는 자전거 타는 것이 즐겁습니다.",
          "저는 주말마다 너무 바쁩니다."
        ],
        correct: 2, // 자전거 타는 것이 즐겁습니다.
        explanation: "자전거를 사서 그것을 타는 행위가 '아주 재미있다'고 했고, 주말이 와서 빨리 타고 싶다는 기대감을 표현하고 있으므로, 글쓴이의 중심 생각은 **자전거 타는 것이 즐겁다**는 내용인 ③번이 확실합니다.",
        instructorGuide: "<strong>[읽기 1번 교수 시나리오]</strong><br>- <strong>중심 생각 찾기 요령:</strong> 본문 속에 나오는 화자의 '감정 어휘(재미있다)'나 '의도/소망(타고 싶다)'이 들어가 있는 보기가 정답이 될 확률이 매우 높음을 기술하십시오.<br>- <strong>오답 소거:</strong> ① '공원에서 탄다'고 했으므로 출근용이 아님, ② '어제 새로 샀다'고 하여 사고 싶은 소망은 과거 일임. 이 두 가지 포인트를 대조하게 하세요.",
        optionExplanations: [
          "① 자전거를 타고 출근합니다 (X) - 공원에서 탈 것이라 하였으며 통근 목적의 대사가 아닙니다.",
          "② 자전거를 사고 싶습니다 (X) - 문장 첫머리에 '어제 새로 샀습니다'라고 구매 완료를 밝혔습니다.",
          "③ 자전거 타는 것이 즐겁습니다 (O) - 타는 것이 재미있고 또 타고 싶다는 서술 흐름에 완벽하게 일치하는 중심 주제입니다.",
          "④ 주말마다 너무 바쁩니다 (X) - 주말에 자전거 탈 시간을 고대할 뿐 바쁘다는 서술은 없습니다."
        ]
      },
      {
        id: "q3_r2",
        type: "reading",
        category: "읽기 (Reading) 기출",
        question: "다음 글을 읽고 내용과 같은 것(일치하는 것)을 고르십시오. (TOPIK I 기출)<br><br><div class='quiz-box'>우리 동네는 공기가 맑고 아주 조용합니다. 근처에 큰 산이 있어서 등산을 하기에 매우 좋습니다. 그래서 주말에는 다른 동네 사람들도 우리 동네 산에 많이 찾아옵니다.</div>",
        options: [
          "우리 동네는 사람들이 많아 시끄럽습니다.",
          "우리 동네 주변에는 산이 전혀 없습니다.",
          "주말에 사람들이 우리 동네 산에 옵니다.",
          "저는 주말마다 등산을 하러 다른 동네로 갑니다."
        ],
        correct: 2, // 주말에 사람들이 우리 동네 산에 옵니다.
        explanation: "글의 마지막 문장인 '주말에는 다른 동네 사람들도 우리 동네 산에 많이 찾아옵니다'를 통해 주말에 외부 사람들이 동네 산을 찾는다는 것을 유추할 수 있습니다. 따라서 정답은 ③번입니다.",
        instructorGuide: "<strong>[읽기 2번 교수 시나리오]</strong><br>- <strong>지문 팩트 매칭:</strong> '동네의 특징(맑음, 조용함, 큰 산이 있음)'을 칠판에 리스트로 판서한 뒤 보기의 거짓 명제들을 비교 대조시키세요.<br>- <strong>주어의 행위 주체 구분:</strong> ④번 보기처럼 '내 동네의 산에 다른 이가 오는 것'이지 '내가 다른 동네로 가는 것'이 아님을 지적하여 행위자의 주체를 혼동하지 않도록 훈련시키십시오.",
        optionExplanations: [
          "① 동네는 사람들이 많아 시끄럽습니다 (X) - 첫 문장에 '우리 동네는... 아주 조용합니다'라고 쓰여 있어 사실과 반대됩니다.",
          "② 주변에는 산이 전혀 없습니다 (X) - '근처에 큰 산이 있어서'라고 언급하여 산이 존재함을 밝혔습니다.",
          "③ 주말에 사람들이 우리 동네 산에 옵니다 (O) - '주말에는 다른 동네 사람들도... 산에 많이 찾아옵니다'라는 문장과 부합합니다.",
          "④ 주말마다 등산을 하러 다른 동네로 갑니다 (X) - 본인의 행동이 아닌 다른 사람들이 내 동네의 산으로 찾아온다는 뜻입니다."
        ]
      },
      {
        id: "q3_l1",
        type: "listening",
        category: "듣기 (Listening) 기출",
        question: "다음을 듣고 이어질 대화로 가장 알맞은 것을 고르십시오. (TOPIK I 기출)",
        audioScript: [
          { speaker: "남", text: "수진 씨, 이번 주말에 뭐 할 거예요?" }
        ],
        options: [
          "주말에 날씨가 아주 좋았어요.",
          "집에서 재미있는 책을 읽을 거예요.",
          "지난주에 친구를 만나 영화를 봤어요.",
          "영화관이 우리 집에서 아주 멀어요."
        ],
        correct: 1, // 책을 읽을 거예요.
        explanation: "남자가 '주말에 뭐 할 거예요?'라며 미래 계획을 물어보았으므로, 자신의 주말 예정 활동을 '~을 거예요' 시제로 답하는 '집에서 책을 읽을 거예요.'(②)가 유일하게 알맞은 대답입니다.",
        instructorGuide: "<strong>[듣기 1번 교수 시나리오]</strong><br>- <strong>의문사 및 시제 매칭:</strong> 질문 속 핵심 키워드는 '뭐(무엇)'와 '할 거예요(미래)'입니다. 보기를 고를 때 반드시 미래형 종결어미('-을 거예요')를 우선 탐색하도록 귀띔하세요.<br>- <strong>과거 함정 피하기:</strong> ①번('좋았어요'), ③번('봤어요') 등 과거형 함정을 문법적으로 제거하는 법을 알려 주십시오.",
        optionExplanations: [
          "① 주말에 날씨가 좋았어요 (X) - 과거 날씨에 대한 서술이므로 미래 할 일에 대한 답변으로 부적절합니다.",
          "② 집에서 재미있는 책을 읽을 거예요 (O) - 주말 예정 행동을 표현하는 문법적 시제와 맥락이 매끄럽게 연결됩니다.",
          "③ 지난주에 영화를 봤어요 (X) - '지난주'라는 과거 시점이므로 주말 계획 질문과 일치하지 않습니다.",
          "④ 영화관이 아주 멀어요 (X) - 영화관 거리 정보를 설명하는 것은 주말 예정 질문에 직접적인 연계가 되지 않습니다."
        ]
      },
      {
        id: "q3_l2",
        type: "listening",
        category: "듣기 (Listening) 기출",
        question: "다음을 듣고 대화가 끝난 후 두 사람이 할 행동으로 가장 알맞은 것을 고르십시오. (TOPIK I 기출)",
        image: "/topik_rainy_scene.jpg",
        audioScript: [
          { speaker: "여", text: "민수 씨, 지금 밖에 비가 많이 와요. 혹시 우산이 있어요?" },
          { speaker: "남", text: "아니요, 안 가져왔어요. 수진 씨는 우산이 있어요?" },
          { speaker: "여", text: "저도 없어요. 그럼 우리 아래층 편의점에 가서 우산을 같이 사요." },
          { speaker: "남", text: "네, 좋아요. 지금 같이 내려가요." }
        ],
        options: [
          "편의점에 우산을 사러 갑니다.",
          "공원에 가서 운동을 합니다.",
          "도서관에서 책을 빌립니다.",
          "친구에게 우산을 빌려줍니다."
        ],
        correct: 0, // 편의점에 우산을 사러 갑니다.
        explanation: "갑자기 비가 내리기 시작해 두 사람 모두 우산이 없는 상태입니다. 여자가 편의점에 우산을 사러 같이 가자고 제안했고 남자가 이에 수락했으므로 대화 직후 두 사람의 행동은 **우산을 사러 편의점에 가는 것**이 확실합니다. 따라서 정답은 ①번입니다.",
        instructorGuide: "<strong>[듣기 2번 교수 시나리오]</strong><br>- <strong>그림과의 연관성 지도:</strong> 비가 쏟아지는 거리 그림(`topik_rainy_scene.jpg`)을 먼저 줌 화면에 크게 보여주며 '비'와 관련된 상황이 벌어질 것임을 사전에 암시하십시오.<br>- <strong>공동 행동 유추:</strong> 대화 마지막에 '같이 편의점에 가서 우산을 사자'고 행동을 약속한 대목을 짚어 두 사람이 함께할 공동의 다음 액션을 낚아채도록 발문 가이드하세요.",
        optionExplanations: [
          "① 편의점에 우산을 사러 갑니다 (O) - 대화 끝부분에서 두 사람이 우산을 사기 위해 아래층 편의점으로 이동하기로 결정했습니다.",
          "② 공원에 가서 운동을 합니다 (X) - 밖에는 세차게 소나기가 오고 있으므로 야외 운동을 하는 것은 흐름에 어긋납니다.",
          "③ 도서관에서 책을 빌립니다 (X) - 도서관 이용이나 독서에 대한 언급은 전혀 없습니다.",
          "④ 친구에게 우산을 빌려줍니다 (X) - 두 사람 모두 우산이 없어 곤란해하는 상황이므로 빌려주는 것이 불가능합니다."
        ]
      }
    ],

    // 3단계: 마무리 장악 (Vocabulary Mastery)
    vocabularyMastery: {
      title: "3단계: 마무리 정리 (오늘 꼭 장악해야 할 명사 & 동사)",
      description: "날씨, 일정 조정, 상태 설명 등에 필수적인 핵심 10개 명사 및 10개 동사입니다.",
      nouns: [
        { word: "오늘", meaning: "Today" },
        { word: "내일", meaning: "Tomorrow" },
        { word: "주말", meaning: "Weekend" },
        { word: "비", meaning: "Rain" },
        { word: "눈", meaning: "Snow / Eye" },
        { word: "바람", meaning: "Wind" },
        { word: "약속", meaning: "Appointment / Promise" },
        { word: "시간", meaning: "Time" },
        { word: "감기", meaning: "Cold (flu)" },
        { word: "머리", meaning: "Head / Hair" }
      ],
      verbs: [
        { word: "쉬다", meaning: "To rest" },
        { word: "약속하다", meaning: "To promise" },
        { word: "생각하다", meaning: "To think" },
        { word: "사오다", meaning: "To buy and bring" },
        { word: "아프다", meaning: "To be sick (Adj)" },
        { word: "피곤하다", meaning: "To be tired (Adj)" },
        { word: "바쁘다", meaning: "To be busy (Adj)" },
        { word: "맑다", meaning: "To be clear (Adj)" },
        { word: "내리다", meaning: "To fall / rain" },
        { word: "걸리다", meaning: "To catch (cold) / take (time)" }
      ]
    }
  }
];

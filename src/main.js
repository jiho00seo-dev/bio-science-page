import './style.css';

console.log('BioAcademy Application Initializing...');

const bioData = {
  bio1: {
    title: '생명과학 I',
    chapters: [
      {
        id: 'bio1-1',
        title: 'I. 생명 과학의 이해',
        topics: ['생물의 특성', '생명 과학의 탐구 방법', '생명 과학과 첨단 과학'],
        detail: `
          <h3>생물의 특성</h3>
          <ul>
            <li>세포로 구성: 모든 생물은 세포를 기본 단위로 함</li>
            <li>물질대사: 생명 유지에 필요한 화학 반응 (동화/이화 작용)</li>
            <li>자극과 항상성: 외부 환경 변화에 반응하고 내부 상태를 일정하게 유지</li>
            <li>발생과 생장: 수정란이 개체가 되고 크기가 자람</li>
            <li>생식과 유전: 자손을 남기고 유전형질을 전달</li>
            <li>적응과 진화: 환경에 맞춰 변하고 종이 다양해짐</li>
          </ul>
          <h3 style="margin-top:20px">탐구 방법</h3>
          <p>귀납적 탐구는 관찰을 통한 일반화, 연역적 탐구는 가설 설정 후 실험을 통한 검증을 특징으로 합니다.</p>
        `
      },
      {
        id: 'bio1-2',
        title: 'II. 사람의 물질대사',
        topics: ['세포 호흡과 에너지', '물질대사와 건강'],
        detail: `
          <h3>세포 호흡</h3>
          <p>영양소를 분해하여 생물 활동에 필요한 에너지(ATP)를 얻는 과정입니다.</p>
          <h3>소화, 순환, 호흡, 배설의 상호 작용</h3>
          <p>각 기관계는 유기적으로 연결되어 물질대사가 원활히 일어나도록 돕습니다.</p>
        `
      },
      {
        id: 'bio1-3',
        title: 'III. 항상성과 몸의 조절',
        topics: ['신경계', '항상성과 호르몬', '면역 체계'],
        detail: `
          <h3>신경계</h3>
          <p>중추 신경계(뇌, 척수)와 말초 신경계로 구분되며, 흥분의 전도와 전달을 통해 신호를 보냅니다.</p>
          <h3>항상성 유지</h3>
          <p>체온, 혈당량, 삼투압 등이 호르몬과 자율 신경에 의해 조절됩니다.</p>
        `
      },
      {
        id: 'bio1-4',
        title: 'IV. 유전',
        topics: ['염색체와 유전', '사람의 유전병'],
        detail: `
          <h3>유전의 원리</h3>
          <p>DNA, 유전자, 염색체의 관계를 이해하고 감수 분열을 통한 생식 세포 형성을 배웁니다.</p>
          <h3>가계도 분석</h3>
          <p>상염색체 및 성염색체 유전의 특징을 분석하여 형질의 유전을 예측합니다.</p>
        `
      },
      {
        id: 'bio1-5',
        title: 'V. 생태계와 상호 작용',
        topics: ['생태계 구성', '종간 상호 작용', '생합 다양성'],
        detail: `
          <h3>생태계 평형</h3>
          <p>에너지 흐름과 물질 순환을 통해 생태계가 안정적으로 유지되는 원리를 다룹니다.</p>
        `
      }
    ]
  },
  bio2: {
    title: '생명과학 II',
    chapters: [
      {
        id: 'bio2-1',
        title: '1. 생명 과학의 역사',
        topics: ['초기 세포 발견', '유전학의 기틀', '분자 생물학의 탄생'],
        bgImage: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000', // DNA/Lab research background
        detail: `
          <div class="history-detail">
            <section>
              <h4>🔬 초기 생명 과학의 발견</h4>
              <ul>
                <li><strong>로버트 훅 (17세기):</strong> 현미경으로 코르크 세포를 처음 관찰하고 'Cell'이라 명명</li>
                <li><strong>파스퇴르 (19세기):</strong> 생물속생설 입증 및 백신 개발의 선구자</li>
              </ul>
            </section>
            <section>
              <h4>🧬 유전학 및 미생물학의 발전</h4>
              <ul>
                <li><strong>멘델:</strong> 완두콩 실험을 통한 유전 법칙 확립</li>
                <li><strong>플레밍:</strong> 푸른곰팡이에서 페니실린 발견 (항생제 시대 개막)</li>
              </ul>
            </section>
            <section>
              <h4>🛰️ 현대 생명 과학과 분자 생물학</h4>
              <ul>
                <li><strong>왓슨 & 크릭:</strong> DNA 이중 나선 구조 규명</li>
                <li><strong>게놈 프로젝트:</strong> 인간 유전 정보의 완전한 해독</li>
              </ul>
            </section>
          </div>
        `
      },
      {
        id: 'bio2-2',
        title: '2. 세포의 특성',
        topics: ['세포 소기관', '세포막의 물질 이동'],
        detail: `<h3>세포 구조</h3><p>핵, 미토콘드리아, 리보솜 등 소기관의 기능을 상세히 배웁니다.</p>`
      },
      {
        id: 'bio2-3',
        title: '3. 세포 호흡과 광합성',
        topics: ['효소', '세포 호흡 과정', '광합성 원리'],
        detail: `<h3>에너지 대사</h3><p>TCA 회로, 전자 전달계, 명반응, 탄소 고정 반응 등을 다룹니다.</p>`
      },
      {
        id: 'bio2-4',
        title: '4. 유전자의 발현과 조절',
        topics: ['DNA 복제', '전사와 번역', '유전자 발현'],
        detail: `<h3>분자 생물학</h3><p>DNA에서 단백질로 이어지는 생명 정보의 흐름을 배웁니다.</p>`
      },
      {
        id: 'bio2-5',
        title: '5. 생물의 진화와 다양성',
        topics: ['분류 체계', '진화의 증거', '생명 탄생'],
        detail: `<h3>3역 6계</h3><p>생물을 체계적으로 분류하고 종 분화의 원리를 이해합니다.</p>`
      },
      {
        id: 'bio2-6',
        title: '6. 생명 공학 기술',
        topics: ['유전자 재조합', '줄기 세포', '생명 윤리'],
        detail: `<h3>미래 과학</h3><p>PCR, 유전자 가위 등 현대 기술과 윤리적 쟁점을 다룹니다.</p>`
      }
    ]
  }
};

let currentSubject = 'bio1';

function renderApp() {
  const tocList = document.getElementById('toc-list');
  const grid1 = document.getElementById('grid-bio1');
  const grid2 = document.getElementById('grid-bio2');

  // Clear lists
  tocList.innerHTML = '';
  grid1.innerHTML = '';
  grid2.innerHTML = '';

  // Render Biology I
  bioData.bio1.chapters.forEach(ch => {
    const card = createCard(ch);
    grid1.appendChild(card);
    if (currentSubject === 'bio1') {
      const li = createTocItem(ch);
      tocList.appendChild(li);
    }
  });

  // Render Biology II
  bioData.bio2.chapters.forEach(ch => {
    const card = createCard(ch);
    grid2.appendChild(card);
    if (currentSubject === 'bio2') {
      const li = createTocItem(ch);
      tocList.appendChild(li);
    }
  });

  // Toggle Visibility
  document.getElementById('content-bio1').style.display = (currentSubject === 'bio1' ? 'block' : 'none');
  document.getElementById('content-bio2').style.display = (currentSubject === 'bio2' ? 'block' : 'none');
}

function createCard(chapter) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${chapter.title}</h3>
    <ul>
      ${chapter.topics.map(t => `<li>${t}</li>`).join('')}
    </ul>
  `;
  card.onclick = () => openModal(chapter);
  return card;
}

function createTocItem(chapter) {
  const li = document.createElement('li');
  li.className = 'nav-item';
  li.innerText = chapter.title;
  li.onclick = () => {
    openModal(chapter);
    handleNavClick();
  };
  return li;
}

function openModal(chapter) {
  console.log('Opening modal for:', chapter.title);
  const modal = document.getElementById('info-modal');
  const modalContent = modal.querySelector('.modal-content');
  const body = document.getElementById('modal-body');

  if (!modal || !body) {
    console.error('Modal elements not found!');
    return;
  }

  body.innerHTML = `<h2>${chapter.title}</h2><hr style="margin: 1.5rem 0; opacity: 0.1">${chapter.detail}`;
  console.log('Modal body innerHTML updated');

  if (chapter.bgImage) {
    modalContent.style.backgroundImage = `url(${chapter.bgImage})`;
  } else {
    modalContent.style.backgroundImage = 'none';
  }

  modal.style.display = 'flex';
  console.log('Modal display set to flex');
}

// Mobile Menu Logic
const menuToggle = document.getElementById('menu-toggle');
const aside = document.querySelector('aside');

if (menuToggle) {
  menuToggle.onclick = () => {
    menuToggle.classList.toggle('active');
    aside.classList.toggle('open');
  };
}

// Close sidebar on item click (mobile)
function handleNavClick() {
  if (window.innerWidth <= 1024) {
    menuToggle.classList.remove('active');
    aside.classList.remove('open');
  }
}

// Event Listeners
document.querySelectorAll('.nav-item[data-subject]').forEach(item => {
  item.onclick = (e) => {
    const target = e.currentTarget;
    document.querySelectorAll('.nav-item[data-subject]').forEach(i => i.classList.remove('active'));
    target.classList.add('active');
    currentSubject = target.dataset.subject;
    renderApp();
    handleNavClick();
  };
});

// (Duplicate removed)

document.querySelector('.close-modal').onclick = () => {
  document.getElementById('info-modal').style.display = 'none';
};

window.onclick = (event) => {
  const modal = document.getElementById('info-modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Initial Render
renderApp();


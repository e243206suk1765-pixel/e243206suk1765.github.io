function launchMission(type) {
    const overlay = document.getElementById('mission-overlay');
    const screen = document.getElementById('mission-screen');
    overlay.style.display = 'flex'; // 화면 띄우기

    if (type === 'shape') {
        screen.innerHTML = `
            <h2 style="color:#2563eb">🔵 미션: 비행 물체 식별</h2>
            <p>인공지능이 모양(데이터)을 보고 아군과 적군을 분류합니다.</p>
            <div style="font-size:80px; margin:20px;">▲</div>
            <button class="game-btn" onclick="alert('정답! 아군 수송기입니다.')">세모 (아군)</button>
            <button class="game-btn" onclick="alert('오답! 다시 확인하세요.')">네모 (적군)</button>
        `;
    } 
    else if (type === 'path') {
        screen.innerHTML = `
            <h2 style="color:#7c3aed">🧭 미션: 최적 경로 탐색</h2>
            <p>AI가 장애물을 피해 가장 안전하고 빠른 비행 경로를 계산합니다.</p>
            <div style="background:#f0f9ff; padding:20px; border-radius:15px; margin:15px;">
                <p>⚡ 번개 구름을 피해 목적지🚩로 가는 길을 고르세요!</p>
                <button onclick="alert('빙 돌아가지만 안전한 경로입니다! (최적화 성공)')">A코스 (우회)</button>
                <button onclick="alert('구름에 부딪혔습니다! 다시 경로를 짜보세요.')">B코스 (직진)</button>
            </div>
        `;
    }
    else if (type === 'predict') {
        screen.innerHTML = `
            <h2 style="color:#ea580c">🌦️ 미션: 기상 데이터 예측</h2>
            <p>과거 날씨 데이터를 분석하여 내일 비행이 가능할지 예측합니다.</p>
            <div style="font-size:40px; margin:15px;">☀️ ☁️ 🌧️ ❓</div>
            <p>어제는 맑음, 오늘은 흐림... 내일은 비가 올까요?</p>
            <button onclick="alert('데이터 분석 결과: 내일은 비가 올 확률이 높습니다! (예측 성공)')">비가 옴</button>
            <button onclick="alert('데이터를 다시 분석해보세요.')">맑음</button>
        `;
    }
    else if (type === 'signal') {
        screen.innerHTML = `
            <h2 style="color:#16a34a">📡 미션: 비밀 신호 해독</h2>
            <p>복잡한 잡음 섞인 신호에서 AI가 핵심 단어를 찾아냅니다.</p>
            <div style="background:#333; color:#0f0; padding:20px; font-family:monospace; margin:15px;">
                ...ERROR_101_MOVE_LEFT_NOW_...
            </div>
            <p>신호 속에 숨겨진 명령은 무엇일까요?</p>
            <button onclick="alert('해독 성공! 왼쪽으로 이동합니다.')">왼쪽 이동</button>
            <button onclick="alert('잘못된 해독입니다.')">오른쪽 이동</button>
        `;
    }
}

function closeMission() {
    document.getElementById('mission-overlay').style.display = 'none'; // 화면 닫기
}

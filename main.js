function launchMission(type) {
    const overlay = document.getElementById('mission-overlay');
    const screen = document.getElementById('mission-screen');
    overlay.classList.remove('hidden');

    if (type === 'shape') {
        screen.innerHTML = `
            <div style="padding: 20px;">
                <h2 style="color:#2563eb">🔵 미션: 비행 물체 식별</h2>
                <div style="background:#f8fafc; padding:30px; border-radius:20px; margin-top:20px;">
                    <p style="font-size:1.2rem;">레이더에 포착된 이 물체는 무엇일까요?</p>
                    <div style="font-size:100px; margin: 20px 0;">▲</div>
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                        <button class="game-btn" onclick="alert('정답! 아군 수송기입니다.')">삼각형 (아군)</button>
                        <button class="game-btn" onclick="alert('오답! 다시 확인하세요.')">사각형 (적군)</button>
                    </div>
                </div>
            </div>
        `;
    } else {
        screen.innerHTML = `<h2>준비 중인 미션입니다!</h2>`;
    }
}

function closeMission() {
    document.getElementById('mission-overlay').classList.add('hidden');
}

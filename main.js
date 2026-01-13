function launchMission(type) {
    const overlay = document.getElementById('mission-overlay');
    const screen = document.getElementById('mission-screen');
    
    // 화면을 보이게 설정
    overlay.style.display = 'flex';

    if (type === 'shape') {
        screen.innerHTML = `
            <div style="padding: 20px;">
                <h2 style="color:#2563eb">🔵 미션: 비행 물체 식별</h2>
                <div style="background:#f8fafc; padding:30px; border-radius:20px; margin-top:20px;">
                    <p style="font-size:1.2rem; color:#333;">레이더에 포착된 이 물체는 무엇일까요?</p>
                    <div style="font-size:100px; margin: 20px 0; color:#000;">▲</div>
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                        <button style="padding:15px; cursor:pointer;" onclick="alert('정답! 아군 수송기입니다.')">세모 (아군)</button>
                        <button style="padding:15px; cursor:pointer;" onclick="alert('오답! 다시 확인하세요.')">네모 (적군)</button>
                    </div>
                </div>
            </div>
        `;
    } else {
        screen.innerHTML = `<h2 style="color:#333; margin-top:20px;">준비 중인 미션입니다!</h2>`;
    }
}

function closeMission() {
    // 화면을 다시 숨김
    document.getElementById('mission-overlay').style.display = 'none';
}

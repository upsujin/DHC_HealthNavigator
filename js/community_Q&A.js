document.addEventListener('DOMContentLoaded', function() {
    // 초기 데이터 설정 (예: 서버에서 가져온 데이터)
    const qaData = {
        qa1: { views: 27, answers: 7 },
        qa2: { views: 30, answers: 6 },
        qa3: { views: 11, answers: 3 },
        qa4: { views: 2, answers: 1 }
    };

    // Q&A 데이터 업데이트
    for (const [id, data] of Object.entries(qaData)) {
        const qaItem = document.getElementById(id);
        if (qaItem) {
            qaItem.querySelector('.views').textContent = data.views;
            qaItem.querySelector('.answers').textContent = data.answers;
        }
    }

    // 조회수 증가 함수
    window.incrementViews = function(id) {
        const qaItem = document.getElementById(id);
        const viewsElement = qaItem.querySelector('.views');
        let views = parseInt(viewsElement.textContent, 10);
        viewsElement.textContent = ++views;

        // 여기에서 서버에 조회수 증가 요청을 보낼 수 있습니다.
        // 예: fetch('/api/incrementViews', { method: 'POST', body: JSON.stringify({ id }) });
    };
});
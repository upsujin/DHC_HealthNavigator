document.addEventListener('DOMContentLoaded', () => {
    const symptomAreas = document.querySelectorAll('input[name="symptomArea"]');
    const detailSymptomsDiv = document.querySelector('.detail-symptoms');
    const recommendationDiv = document.querySelector('.recommendations');
    const detailedSymptoms = document.querySelectorAll('input[name="detailedSymptom"]');
    const recommendationContent = document.getElementById('recommendationContent');
    const searchButton = document.getElementById('searchButton');
    const resetButton = document.getElementById('resetButton');

    function updateDetailedSymptoms() {
        const checkedAreas = Array.from(symptomAreas).filter(area => area.checked);

        if (checkedAreas.length > 0) {
            detailSymptomsDiv.style.display = 'block'; // 자세한 증상 보이기
        } else {
            detailSymptomsDiv.style.display = 'none'; // 자세한 증상 숨기기
            recommendationDiv.style.display = 'none'; // 추천 내용 숨기기
        }

        detailedSymptoms.forEach(symptom => {
            symptom.parentElement.style.display = 'none'; // 모든 자세한 증상 숨기기
        });

        if (checkedAreas.length > 0) {
            checkedAreas.forEach(area => {
                const symptomsForArea = document.querySelectorAll(`input[data-area="${area.value}"]`);
                symptomsForArea.forEach(symptom => {
                    symptom.parentElement.style.display = 'block'; // 선택된 증상 부위에 따라 해당하는 자세한 증상 보이기
                });
            });
        }
    }

    symptomAreas.forEach(area => {
        area.addEventListener('change', updateDetailedSymptoms);
    });

    searchButton.addEventListener('click', (event) => {
        event.preventDefault(); // 폼 제출 방지
        showRecommendations(detailedSymptoms, recommendationContent, recommendationDiv);
    });

    resetButton.addEventListener('click', () => {
        symptomAreas.forEach(area => {
            area.checked = false;
        });
        detailedSymptoms.forEach(symptom => {
            symptom.checked = false;
        });
        recommendationContent.innerHTML = ''; // 추천 내용 초기화
        detailSymptomsDiv.style.display = 'none'; // 자세한 증상 숨기기
        recommendationDiv.style.display = 'none'; // 추천 내용 숨기기
        updateDetailedSymptoms(); // 초기 상태 업데이트
    });

    detailSymptomsDiv.style.display = 'none'; // 초기에 자세한 증상 숨기기
    recommendationDiv.style.display = 'none'; // 초기에 추천 내용 숨기기
});

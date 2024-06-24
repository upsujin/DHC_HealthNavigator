let hospitalData = [];

function fetchHospitalData() {
    fetch('data/special_hospital_data.json')
        .then(response => response.json())
        .then(data => {
            hospitalData = data;
        })
        .catch(error => {
            console.error('Error fetching hospital data:', error);
        });
}

function confirmSelection() {
    const checkboxes = document.querySelectorAll('input[name="symptomArea"]:checked');
    const selectedAreas = Array.from(checkboxes).map(checkbox => checkbox.value);
    displayHospitalList(selectedAreas);
}

function displayHospitalList(selectedAreas) {
    const hospitalList = document.getElementById('hospital-list');
    hospitalList.innerHTML = '';

    const filteredHospitals = hospitalData.filter(hospital => selectedAreas.includes(hospital['전문분야']));

    filteredHospitals.forEach(hospital => {
        const hospitalItem = document.createElement('div');
        hospitalItem.className = 'hospital-item';
        hospitalItem.innerHTML = `
            <div class="hospital-info">
                <h3>${hospital['병원명']}</h3>
                <div class="info-row">
                    <span class="info-title">전문분야</span>
                    <span class="info-content">${hospital['전문분야']}</span>
                </div>
                <div class="info-row">
                    <span class="info-title">대표전화</span>
                    <span class="info-content">${hospital['전화번호']}</span>
                </div>
                <div class="info-row">
                    <span class="info-title">주소</span>
                    <span class="info-content">${hospital['소재지주소']}</span>
                </div>
                <div class="buttons-row">
                    <a href="${hospital['홈페이지']}" class="copy-info-button" target="_blank">병원정보 보기</a>
                </div>
            </div>
        `;
        hospitalList.appendChild(hospitalItem);
    });
}

function cancelSelection() {
    const checkboxes = document.querySelectorAll('input[name="symptomArea"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
    document.getElementById('hospital-list').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function () {
    fetchHospitalData(); // 데이터 가져오기 함수 호출

    const labels = document.querySelectorAll('.symptom-areas label');
    labels.forEach(label => {
        label.addEventListener('click', function () {
            labels.forEach(l => l.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});

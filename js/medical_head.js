function showRecommendations(detailedSymptoms, recommendationContent, recommendationDiv) {
    const selectedSymptoms = Array.from(detailedSymptoms)
        .filter(symptom => symptom.checked)
        .map(symptom => symptom.value);

    let recommendations = '';
        
        //건망증
        if (selectedSymptoms.includes('건망증')) {
            recommendations += generateRecommendationItem(
                '치매(dementia)',
                'image/dementia.jpg',
                '지남력 장애,  성격의변화,  감정 변화,  혼돈,  언어장애,  기억장애,  건망증',
                '비정형 파킨슨 증후군,  알츠하이머병,  혈관성 치매',
                '노년내과, 신경과, 정신건강의학과'
            );
        }
        if (selectedSymptoms.includes('건망증')) {
            recommendations += generateRecommendationItem(
                '크로이츠펠트-야콥병(Creutzfeldt-Jakob disease)',
                'image/Creutzfeldt-Jakob disease.jpg',
                '운동장애,  방향감각 상실,  인지장애,  건망증,  근육경련',
                '치매',
                '신경과, 소아신경과'
            );
        }
        if (selectedSymptoms.includes('건망증')) {
            recommendations += generateRecommendationItem(
                '폐경(Menopause)',
                'image/Menopause.jpg',
                '관절통,  성욕감퇴,  가슴 두근거림,  안면홍조,  피로감,  감정 변화,  건망증,  두통,  불면증,  불안,  발한,  요통',
                '복압성 요실금,  대퇴 골절,  우울증,  골다공증,  병리적 골절,  폐경기 및 여성의 갱년기 상태,  급성 심근경색증,  심계항진,  요실금',
                '내분비내과, 산부인과'
            );
        }
        
        //편두통
        if (selectedSymptoms.includes('편두통')) {
            recommendations += generateRecommendationItem(
                '뇌 동정맥 기형(Cerebral arteriovenous malformation)',
                'image/Cerebral arteriovenous malformation.jpg',
                '뇌전증 발작 ,  박동성 통증,  편두통,  뇌출혈,  두통',
                '자발성 두개강 내 출혈,  뇌졸중,  뇌경색',
                '신경외과, 소아신경외과'
            );
        }
        if (selectedSymptoms.includes('편두통')) {
            recommendations += generateRecommendationItem(
                '측두동맥염(Temporal arteritis)',
                'image/Temporal arteritis.jpg',
                '눈의 충혈,  눈의 통증,  시력 감소,  편두통,  근육통,  식욕부진',
                '혈관염,  뇌경색',
                '혈관외과, 심장외과'
            );
        }
        
        //언어장애
        if (selectedSymptoms.includes('언어장애')) {
            recommendations += generateRecommendationItem(
                '경동맥 협착증(Carotid artery stenosis)',
                'image/Carotid artery stenosis.jpg',
                '무증상,  언어장애,  반신마비,  어지러움,  감각 이상',
                '뇌졸중,  고혈압,  당뇨병,  죽상경화증,  급성 심근경색증',
                '혈관외과, 심장외과'
            );
        }
        if (selectedSymptoms.includes('언어장애')) {
            recommendations += generateRecommendationItem(
                '근위축성 측색 경화증(Amyotrophic lateral sclerosis)',
                'image/Amyotrophic lateral sclerosis.jpg',
                '손, 발 감각 저하,  피부 긴장도 저하,  근력 약화,  삼키기 곤란 ,  언어장애',
                '다발성 경화증,  운동신경 질환',
                '신경과'
            );
        }
        if (selectedSymptoms.includes('언어장애')) {
            recommendations += generateRecommendationItem(
                '기뇌증(Pneumocephalus)',
                'image/Pneumocephalus.jpg',
                '무증상,  피로감,  언어장애,  두통,  어지러움',
                '잠수병',
                '응급의학과'
            );
        }
        if (selectedSymptoms.includes('언어장애')) {
            recommendations += generateRecommendationItem(
                '뇌경색(Cerebral infarction)',
                'image/Cerebral infarction.jpg',
                '의식 변화,  언어장애,  시야장애,  반신마비,  어지러움',
                '뇌졸중,  일과성 뇌허혈증',
                '신경과, 신경외과, 재활의학과, 정신건강의학과, 소아신경과'
            );
        }
        if (selectedSymptoms.includes('언어장애')) {
            recommendations += generateRecommendationItem(
                '뇌동맥 폐쇄(Occlusion of cerebral artery)',
                'image/Cerebral infarction.jpg',
                '무의지증,  시력 감소,  의식 저하,  혼수,  운동 실어증,  언어장애,  시야장애,  경련,  편측 사지의 감각소실,  감각 이상',
                '뇌졸중,  뇌경색,  방광의 신경근육 기능 장애',
                '신경과, 신경외과'
            );
        }
        if (selectedSymptoms.includes('언어장애')) {
            recommendations += generateRecommendationItem(
                '뇌졸중(Cerebrovascular disease)',
                'image/Cerebrovascular disease.jpg',
                '운동장애,  복시,  시력 감소,  삼키기 곤란 ,  언어장애,  시야장애,  두통,  반신마비,  발음 이상,  어지러움',
                '고혈압,  뇌경색,  급성 심근경색증,  협심증,  뇌출혈',
                '신경과, 신경외과, 소아신경과, 소아신경외과'
            );
        }
        if (selectedSymptoms.includes('언어장애')) {
            recommendations += generateRecommendationItem(
                '단순 포진성 뇌염(Herpes simplex encephalitis)',
                'image/Herpes simplex encephalitis.jpg',
                '열,  뇌전증 발작 ,  의식 변화,  언어장애,  두통',
                '헤르페스 바이러스 감염,  대상포진,  바이러스성 뇌수막염,  박테리아성 뇌수막염,  대상포진 후 신경통,  뇌염,  구순포진',
                '감염내과, 신경과'
            );
        }
        if (selectedSymptoms.includes('언어장애')) {
            recommendations += generateRecommendationItem(
                '모야모야병(Moyamoya disease)',
                'image/Moyamoya disease.jpg',
                '안면마비,  시력 감소,  학습장애,  언어장애,  마비,  감각 이상',
                '자발성 두개강 내 출혈,  일과성 뇌허혈증,  뇌경색',
                '신경과, 신경외과, 소아신경과, 소아신경외과'
            );
        }
        if (selectedSymptoms.includes('언어장애')) {
            recommendations += generateRecommendationItem(
                '수막종(Meningioma)',
                'image/Meningioma.jpg',
                '운동장애,  복시,  시력 감소,  뇌전증 발작 ,  감정 변화,  언어장애,  두통',
                '뇌종양,  양성 뇌종양',
                '신경외과'
            );
        }
        if (selectedSymptoms.includes('언어장애')) {
            recommendations += generateRecommendationItem(
                '실어증(Aphasia)',
                'image/Aphasia.jpg',
                '언어장애',
                '뇌종양,  뇌졸중,  외상에 의한 뇌 손상,  치매',
                '정신건강의학과'
            );
        }
        if (selectedSymptoms.includes('언어장애')) {
            recommendations += generateRecommendationItem(
                "알츠하이머병(Alzheimer's disease)",
                'image/Alzheimer\'s disease.jpg',
                '조급증,  시력 감소,  방향감각 상실,  실인증,  감정 변화,  우울,  언어장애,  기억장애,  판단력장애,  섬망,  실행증',
                '고혈압,  치매,  섬망,  당뇨병,  비만,  혈관성 치매,  고지혈증,  다운 증후군',
                '신경과, 정신건강의학과'
            );
        }
        if (selectedSymptoms.includes('언어장애')) {
            recommendations += generateRecommendationItem(
                '치매(dementia)',
                'image/dementia.jpg',
                '지남력 장애,  성격의변화,  감정 변화,  혼돈,  언어장애,  기억장애,  건망증',
                '비정형 파킨슨 증후군,  알츠하이머병,  혈관성 치매',
                '노년내과, 신경과, 정신건강의학과'
            );
        }
        if (selectedSymptoms.includes('언어장애')) {
            recommendations += generateRecommendationItem(
                '일과성 뇌허혈증(Transient cerebral ischemia)',
                'image/Transient cerebral ischemia.jpg',
                '안면마비,  구토,  언어장애,  파행,  어지러움,  감각 이상',
                '뇌졸중,  고혈압,  고콜레스테롤혈증',
                '신경과'
            );
        }
        
        //두통
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '폐경(Menopause)',
                'image/Menopause.jpg',
                '관절통,  성욕감퇴,  가슴 두근거림,  안면홍조,  피로감,  감정 변화,  건망증,  두통,  불면증,  불안,  발한,  요통',
                '복압성 요실금,  대퇴 골절,  우울증,  골다공증,  병리적 골절,  폐경기 및 여성의 갱년기 상태,  급성 심근경색증,  심계항진,  요실금',
                '내분비내과, 산부인과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '결핵성 수막염(Tuberculous meningitis)',
                'image/Tuberculous meningitis.jpg',
                '눈운동신경마비,  열,  혼수,  졸림,  시야장애,  두통',
                '후천성 면역결핍증',
                '감염내과, 신경과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '기뇌증(Pneumocephalus)',
                'image/Pneumocephalus.jpg',
                '무증상,  피로감,  언어장애,  두통,  어지러움',
                '잠수병',
                '응급의학과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '뇌졸중(Cerebrovascular disease)',
                'image/Cerebrovascular disease.jpg',
                '운동장애,  복시,  시력 감소,  삼키기 곤란 ,  언어장애,  시야장애,  두통,  반신마비,  발음 이상,  어지러움',
                '고혈압,  뇌경색,  급성 심근경색증,  협심증,  뇌출혈',
                '신경과, 신경외과, 소아신경과, 소아신경외과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '단순 포진성 뇌염(Herpes simplex encephalitis)',
                'image/Herpes simplex encephalitis.jpg',
                '열,  뇌전증 발작 ,  의식 변화,  언어장애,  두통',
                '헤르페스 바이러스 감염,  대상포진,  바이러스성 뇌수막염,  박테리아성 뇌수막염,  대상포진 후 신경통,  뇌염,  구순포진',
                '감염내과, 신경과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '수막종(Meningioma)',
                'image/Meningioma.jpg',
                '운동장애,  복시,  시력 감소,  뇌전증 발작 ,  감정 변화,  언어장애,  두통',
                '뇌종양,  양성 뇌종양',
                '신경외과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '교모세포종(Glioblastoma)',
                'image/Glioblastoma.jpg',
                '오심,  뇌전증 발작 ,  구토,  두통',
                '뇌종양,  양성 뇌종양,  수두증,  신경모세포종,  원발성 중추신경계 림프종,  뇌신경 인플레',
                '종양내과, 방사선종양학과, 소아청소년종양혈액과, 신경외과, 소아신경외과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '급성 신우신염(Acute pyelonephritis)',
                'image/Acute pyelonephritis.jpg',
                '오한,  열,  오심,  배뇨곤란,  근육통,  빈뇨,  배뇨 시 통증,  구토,  두통,  잔뇨감,  요통',
                '신우요관암,  급성 방광염,  대장균 감염,  임균성 요도염,  비임균성 요도염,  신우요관 폐색,  방광요관 역류,  요관 협착',
                '감염내과, 신장내과, 소아신장과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '급성 중이염(Acute otitis media)',
                'image/Acute otitis media.jpg',
                '고름,  이폐색감,  청력장애,  열,  이명,  환부의 분비물,  두통,  귀의 통증',
                '만성 중이염,  삼출성 중이염',
                '이비인후과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                "넬슨 증후군(Nelson's syndrome)",
                'image/Nelson\'s syndrome.jpg',
                '시력 감소,  무월경,  색소 침착,  두통,  다뇨',
                '갑상선기능저하증,  뇌하수체 기능부전,  뇌하수체 양성 및 악성 신생물,  부신 기능부전,  쿠싱 증후군,  부신 종양,  뇌하수체의 악성 신생물,  뇌하수체 기능 항진',
                '내분비내과, 소아내분비대사과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '뇌농양(Brain abscess)',
                'image/Brain abscess.jpg',
                '열,  오심,  성격의변화,  구토,  두통,  경련',
                '뇌종양,  양성 뇌종양,  부비동염,  바이러스성 뇌수막염,  박테리아성 뇌수막염,  만성 중이염,  심내막염,  급성 중이염',
                '감염내과, 신경외과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '뇌동맥류(Cerebral aneurysm)',
                'image/Cerebral aneurysm.jpg',
                '오심,  뇌전증 발작 ,  구토,  의식 변화,  안구내 출혈,  두통',
                '자발성 두개강 내 출혈,  뇌동맥 폐쇄,  동맥류',
                '영상의학과, 신경외과, 신경중재클리닉'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '뇌염(Encephalitis)',
                'image/Encephalitis.jpg',
                '기운없음,  오한,  시력 감소,  열,  방향감각 상실,  의식 저하,  경부 강직,  정신 혼미,  구토,  두통,  경련',
                '바이러스성 뇌수막염,  박테리아성 뇌수막염,  일본 뇌염',
                '신경과, 소아신경과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '뇌종양(Brain tumor)',
                'image/Brain tumor.jpg',
                '운동장애,  오심,  뇌전증 발작 ,  구토,  두통,  감각 이상',
                '양성 뇌종양,  뇌하수체 양성 및 악성 신생물,  뇌하수체의 악성 신생물,  신경종',
                '종양내과, 방사선종양학과, 소아청소년종양혈액과, 신경과, 신경외과, 소아내분비대사과, 소아신경과, 암병원'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '뇌출혈(Cerebral hemorrhage)',
                'image/Cerebral hemorrhage.jpg',
                '의식 저하,  구토,  의식 변화,  두통,  어지러움,  마비',
                '자발성 두개강 내 출혈,  뇌졸중,  지주막하 출혈',
                '신경과, 신경외과, 재활의학과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '뎅기열(Dengue fever)',
                'image/Dengue fever.jpg',
                '관절통,  열,  근육통,  식욕부진,  두통,  발진,  반점',
                '말라리아,  황열',
                '감염내과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '라임병(Lyme disease)',
                'image/Lyme disease.jpg',
                '관절통,  오한,  안구혼탁,  열,  피로감,  근육통,  두통,  수면장애,  발진',
                '관절염',
                '감염내과, 피부과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '본히펠린다우 증후군 (Von Hippel-Lindau syndrome)',
                'image/Von Hippel-Lindau syndrome.jpg',
                '고혈압,  두통,  어지러움,  악성종양발생',
                '신세포암종,  갈색세포종,  가족성 적혈구잠식성 림프조직구증,  혈우병,  윌름즈 종양',
                '내분비내과, 의학유전학센터, 소아내분비대사과, 의학유전학과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '수두증(Hydrocephalus)',
                'image/Hydrocephalus.jpg',
                '눈운동신경마비,  시력 감소,  축 늘어짐,  수유 곤란,  구토,  기억장애,  유두부종,  두통,  마비',
                '뇌종양,  양성 뇌종양,  바이러스성 뇌수막염,  박테리아성 뇌수막염',
                '신경외과, 소아신경외과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '악성 신경교종(Malignant Glioma)',
                'image/Malignant Glioma.jpg',
                '뇌전증 발작 ,  기억장애,  두통',
                '뇌종양,  양성 뇌종양',
                '방사선종양학과, 산부인과, 소아청소년종양혈액과, 신경외과, 소아신경외과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '외상성 경막하 출혈(Traumatic subdural hemorrhage)',
                'image/Traumatic subdural hemorrhage.jpg',
                '호흡곤란,  구토,  혼수,  두통,  반신마비',
                '자발성 두개강 내 출혈,  외상에 의한 뇌 손상',
                '신경외과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '요독증(Uremia)',
                'image/Uremia.jpg',
                '의식 저하,  피로감,  두통,  피부소양감,  전신 부종,  출혈 경향성',
                '선천성 수신증,  신증후성 출혈열',
                '신장내과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '저나트륨혈증(Hyponatremia)',
                'image/Hyponatremia.jpg',
                '오심,  뇌전증 발작 ,  구토,  의식 변화,  두통,  흥분',
                '울혈성 심부전,  신부전,  요붕증',
                '내분비내과, 신장내과, 노년내과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '저혈당증(Hypoglycemia)',
                'image/Hypoglycemia.jpg',
                '기운없음,  온몸이 떨림,  손떨림,  창백,  가슴 두근거림,  의식 저하,  피로감,  공복감,  두통,  불안,  경련,  어지러움,  흥분,  발한,  쇼크',
                '췌장암,  인슐린 의존성 당뇨병,  인슐린 비의존성 당뇨병,  신생아 다혈구증,  당뇨병,  뇌하수체 기능부전,  부신 기능부전,  덤핑 증후군',
                '내분비내과, 소아내분비대사과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '지주막하 출혈(Subarachnoid hemorrhage)',
                'image/Subarachnoid hemorrhage.jpg',
                '심정지,  호흡곤란,  의식 저하,  경부 강직,  구토,  혼수,  눈꺼풀 처짐증,  두통,  반신마비,  경련,  감각 이상',
                '뇌 동정맥 기형,  고혈압,  고지혈증',
                '신경과, 신경외과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '척추 뇌저 동맥 증후군(Vertebro-basilar artery syndrome)',
                'image/Vertebro-basilar artery syndrome.jpg',
                '복시,  오심,  이명,  구토,  삼키기 곤란 ,  두통,  발음 이상,  어지러움',
                '대동맥 박리,  철결핍빈혈,  동맥색전증 및 혈전증,  죽상경화증,  혈관염,  현훈,  메니에르병',
                '신경과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '큐열(Q Fever)',
                'image/Q Fever.png',
                '오한,  열,  기침,  설사,  근육통,  권태감,  구토,  목의 통증,  간비대,  두통,  발진',
                '털진드기병,  브루셀라증,  라임병,  야토병,  조류 인플루엔자(AI) 인체감염증',
                '감염내과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '후두 신경통(Occipital Neuralgia)',
                'image/Occipital Neuralgia.jpg',
                '두통',
                '양성 뇌종양',
                '마취통증의학과, 신경과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '골수염(Osteomyelitis)',
                'image/Osteomyelitis.png',
                '열감,  열,  피부 긴장도 저하,  환부 부종,  권태감,  식욕부진,  두통',
                '척추 골수염,  결핵성 골수염',
                '감염내과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '열 피로(heat exhaustion)',
                'image/heat exhaustion.jpg',
                '탈수,  권태감,  차갑고 축축한 피부,  어지러움, 두통',
                '열사병',
                '가정의학과, 응급의학과'
            );
        }
        if (selectedSymptoms.includes('두통')) {
            recommendations += generateRecommendationItem(
                '호흡성 산증(Respiratory Acidosis)',
                'image/Respiratory Acidosis.jpg',
                '온몸이 떨림,  피부홍조,  호흡곤란,  지남력 장애,  의식 변화,  두통,  불안,  발한',
                '천식,  만성 기관지염,  폐부종',
                '호흡기내과, 응급의학과'
            );
        }

        //경련
        if (selectedSymptoms.includes('경련')) {
            recommendations += generateRecommendationItem(
                '뇌동맥 폐쇄(Occlusion of cerebral artery)',
                'image/Cerebral infarction.jpg',
                '무의지증,  시력 감소,  의식 저하,  혼수,  운동 실어증,  언어장애,  시야장애,  경련,  편측 사지의 감각소실,  감각 이상',
                '뇌졸중,  뇌경색,  방광의 신경근육 기능 장애',
                '신경과, 신경외과'
            );
        }
        if (selectedSymptoms.includes('경련')) {
            recommendations += generateRecommendationItem(
                '뇌농양(Brain abscess)',
                'image/Brain abscess.jpg',
                '열,  오심,  성격의변화,  구토,  두통,  경련',
                '뇌종양,  양성 뇌종양,  부비동염,  바이러스성 뇌수막염,  박테리아성 뇌수막염,  만성 중이염,  심내막염,  급성 중이염',
                '감염내과, 신경외과'
            );
        }
        if (selectedSymptoms.includes('경련')) {
            recommendations += generateRecommendationItem(
                '뇌염(Encephalitis)',
                'image/Encephalitis.jpg',
                '기운없음,  오한,  시력 감소,  열,  방향감각 상실,  의식 저하,  경부 강직,  정신 혼미,  구토,  두통,  경련',
                '바이러스성 뇌수막염,  박테리아성 뇌수막염,  일본 뇌염',
                '신경과, 소아신경과'
            );
        }
        if (selectedSymptoms.includes('경련')) {
            recommendations += generateRecommendationItem(
                '저혈당증(Hypoglycemia)',
                'image/Hypoglycemia.jpg',
                '기운없음,  온몸이 떨림,  손떨림,  창백,  가슴 두근거림,  의식 저하,  피로감,  공복감,  두통,  불안,  경련,  어지러움,  흥분,  발한,  쇼크',
                '췌장암,  인슐린 의존성 당뇨병,  인슐린 비의존성 당뇨병,  신생아 다혈구증,  당뇨병,  뇌하수체 기능부전,  부신 기능부전,  덤핑 증후군',
                '내분비내과, 소아내분비대사과'
            );
        }
        if (selectedSymptoms.includes('경련')) {
            recommendations += generateRecommendationItem(
                '지주막하 출혈(Subarachnoid hemorrhage)',
                'image/Subarachnoid hemorrhage.jpg',
                '심정지,  호흡곤란,  의식 저하,  경부 강직,  구토,  혼수,  눈꺼풀 처짐증,  두통,  반신마비,  경련,  감각 이상',
                '뇌 동정맥 기형,  고혈압,  고지혈증',
                '신경과, 신경외과'
            );
        }
        if (selectedSymptoms.includes('경련')) {
            recommendations += generateRecommendationItem(
                '뇌전증(Epilepsy)',
                'image/Epilepsy.jpg',
                '온몸이 떨림,  손떨림,  뇌전증 발작 ,  의식 저하,  눈꺼풀의 떨림,  경련',
                '뇌종양,  양성 뇌종양,  뇌 동정맥 기형,  뇌졸중,  저혈당증,  발작,  뇌경색,  외상성 경막하 출혈,  선천성 기형,  저칼슘혈증',
                '신경과, 신경외과'
            );
        }
        if (selectedSymptoms.includes('경련')) {
            recommendations += generateRecommendationItem(
                '스핑고 지질증(Other sphingolipidosis)',
                'image/Other sphingolipidosis.jpg',
                '손, 발 감각 저하,  눈운동신경마비,  학습장애,  실행증,  경련',
                '이상지질혈증,  고콜레스테롤혈증,  항인지질 항체 증후군',
                '의학유전학센터, 소아내분비대사과, 소아신경과, 의학유전학과'
            );
        }

        //열
        if (selectedSymptoms.includes('열')) {
            recommendations += generateRecommendationItem(
                '단순 포진성 뇌염(Herpes simplex encephalitis)',
                'image/Herpes simplex encephalitis.jpg',
                '열,  뇌전증 발작 ,  의식 변화,  언어장애,  두통',
                '헤르페스 바이러스 감염,  대상포진,  바이러스성 뇌수막염,  박테리아성 뇌수막염,  대상포진 후 신경통,  뇌염,  구순포진',
                '감염내과, 신경과'
            );
        }
        if (selectedSymptoms.includes('열')) {
            recommendations += generateRecommendationItem(
                '결핵성 수막염(Tuberculous meningitis)',
                'image/Tuberculous meningitis.jpg',
                '눈운동신경마비,  열,  혼수,  졸림,  시야장애,  두통',
                '후천성 면역결핍증',
                '감염내과, 신경과'
            );
        }
        if (selectedSymptoms.includes('열')) {
            recommendations += generateRecommendationItem(
                '급성 신우신염(Acute pyelonephritis)',
                'image/Acute pyelonephritis.jpg',
                '오한,  열,  오심,  배뇨곤란,  근육통,  빈뇨,  배뇨 시 통증,  구토,  두통,  잔뇨감,  요통',
                '신우요관암,  급성 방광염,  대장균 감염,  임균성 요도염,  비임균성 요도염,  신우요관 폐색,  방광요관 역류,  요관 협착',
                '감염내과, 신장내과, 소아신장과'
            );
        }
        if (selectedSymptoms.includes('열')) {
            recommendations += generateRecommendationItem(
                '급성 중이염(Acute otitis media)',
                'image/Acute otitis media.jpg',
                '고름,  이폐색감,  청력장애,  열,  이명,  환부의 분비물,  두통,  귀의 통증',
                '만성 중이염,  삼출성 중이염',
                '이비인후과'
            );
        }
        if (selectedSymptoms.includes('열')) {
            recommendations += generateRecommendationItem(
                '뇌농양(Brain abscess)',
                'image/Brain abscess.jpg',
                '열,  오심,  성격의변화,  구토,  두통,  경련',
                '뇌종양,  양성 뇌종양,  부비동염,  바이러스성 뇌수막염,  박테리아성 뇌수막염,  만성 중이염,  심내막염,  급성 중이염',
                '감염내과, 신경외과'
            );
        }
        if (selectedSymptoms.includes('열')) {
            recommendations += generateRecommendationItem(
                '뇌염(Encephalitis)',
                'image/Encephalitis.jpg',
                '기운없음,  오한,  시력 감소,  열,  방향감각 상실,  의식 저하,  경부 강직,  정신 혼미,  구토,  두통,  경련',
                '바이러스성 뇌수막염,  박테리아성 뇌수막염,  일본 뇌염',
                '신경과, 소아신경과'
            );
        }
        if (selectedSymptoms.includes('열')) {
            recommendations += generateRecommendationItem(
                '뎅기열(Dengue fever)',
                'image/Dengue fever.jpg',
                '관절통,  열,  근육통,  식욕부진,  두통,  발진,  반점',
                '말라리아,  황열',
                '감염내과'
            );
        }
        if (selectedSymptoms.includes('열')) {
            recommendations += generateRecommendationItem(
                '라임병(Lyme disease)',
                'image/Lyme disease.jpg',
                '관절통,  오한,  안구혼탁,  열,  피로감,  근육통,  두통,  수면장애,  발진',
                '관절염',
                '감염내과, 피부과'
            );
        }
        if (selectedSymptoms.includes('열')) {
            recommendations += generateRecommendationItem(
                '큐열(Q Fever)',
                'image/Q Fever.png',
                '오한,  열,  기침,  설사,  근육통,  권태감,  구토,  목의 통증,  간비대,  두통,  발진',
                '털진드기병,  브루셀라증,  라임병,  야토병,  조류 인플루엔자(AI) 인체감염증',
                '감염내과'
            );
        }
        if (selectedSymptoms.includes('열')) {
            recommendations += generateRecommendationItem(
                '골수염(Osteomyelitis)',
                'image/Osteomyelitis.jpg',
                '열감,  열,  피부 긴장도 저하,  환부 부종,  권태감,  식욕부진,  두통',
                '척추 골수염,  결핵성 골수염',
                '감염내과'
            );
        }
        if (selectedSymptoms.includes('열')) {
            recommendations += generateRecommendationItem(
                '백혈병(Leukemia)',
                'image/Leukemia.jpg',
                '열,  비장비대,  오심,  피부 긴장도 저하,  체중감소,  피로감,  구토,  간비대,  출혈 경향성,  잦은 감염,  뼈의 통증,  빈혈',
                '백혈구 이상,  급성림프모구백혈병,  급성골수성백혈병,  만성림프구백혈병,  만성골수백혈병',
                '혈액내과, 방사선종양학과, 소아청소년종양혈액과'
            );
        }
        if (selectedSymptoms.includes('열')) {
            recommendations += generateRecommendationItem(
                '자가면역 질환(autoimmune diseasse)',
                'image/autoimmune diseasse.jpg',
                '체모감소,  식욕증가,  열,  체중감소,  체중증가,  피로감,  식욕부진,  우울,  소화불량,  기억장애,  감각 이상',
                '전신 홍반성 낭창,  류마티스 관절염,  자가면역성 간염,  자가면역용혈질환,  약물 유발성 자가면역성 용혈성 빈혈',
                '내분비내과, 소화기내과, 신장내과, 호흡기내과, 피부과, 류마티스내과, 알레르기내과'
            );
        }
        if (selectedSymptoms.includes('열')) {
            recommendations += generateRecommendationItem(
                '호중구감소증(Neutropenia)',
                'image/Neutropenia.jpg',
                '오한,  온몸이 떨림,  열,  설사,  구내염,  발적,  작열감,  잦은 감염',
                '범혈구감소증,  골수형성이상증후군,  재생불량빈혈,  골수증식종양,  판코니범혈구감소증',
                '종양내과, 혈액내과, 소아청소년종양혈액과'
            );
        }
        if (selectedSymptoms.includes('열')) {
            recommendations += generateRecommendationItem(
                '황열(Yellow fever)',
                'image/Yellow fever.jpg',
                '황달,  무증상,  열,  복부 통증,  서맥,  근육통,  구토',
                '급성 신부전,  핵황달,  서맥',
                '감염내과'
            );
        }

        //어지러움
        if (selectedSymptoms.includes('어지러움')) {
            recommendations += generateRecommendationItem(
                '경동맥 협착증(Carotid artery stenosis)',
                'image/Carotid artery stenosis.jpg',
                '무증상,  언어장애,  반신마비,  어지러움,  감각 이상',
                '뇌졸중,  고혈압,  당뇨병,  죽상경화증,  급성 심근경색증',
                '혈관외과, 심장외과'
            );
        }
        if (selectedSymptoms.includes('어지러움')) {
            recommendations += generateRecommendationItem(
                '기뇌증(Pneumocephalus)',
                'image/Pneumocephalus.jpg',
                '무증상,  피로감,  언어장애,  두통,  어지러움',
                '잠수병',
                '응급의학과'
            );
        }
        if (selectedSymptoms.includes('어지러움')) {
            recommendations += generateRecommendationItem(
                '뇌경색(Cerebral infarction)',
                'image/Cerebral infarction.jpg',
                '의식 변화,  언어장애,  시야장애,  반신마비,  어지러움',
                '뇌졸중,  일과성 뇌허혈증',
                '신경과, 신경외과, 재활의학과, 정신건강의학과, 소아신경과'
            );
        }
        if (selectedSymptoms.includes('어지러움')) {
            recommendations += generateRecommendationItem(
                '뇌졸중(Cerebrovascular disease)',
                'image/Cerebrovascular disease.jpg',
                '운동장애,  복시,  시력 감소,  삼키기 곤란 ,  언어장애,  시야장애,  두통,  반신마비,  발음 이상,  어지러움',
                '고혈압,  뇌경색,  급성 심근경색증,  협심증,  뇌출혈',
                '신경과, 신경외과, 소아신경과, 소아신경외과'
            );
        }
        if (selectedSymptoms.includes('어지러움')) {
            recommendations += generateRecommendationItem(
                '뇌출혈(Cerebral hemorrhage)',
                'image/Cerebral hemorrhage.jpg',
                '의식 저하,  구토,  의식 변화,  두통,  어지러움,  마비',
                '자발성 두개강 내 출혈,  뇌졸중,  지주막하 출혈',
                '신경과, 신경외과, 재활의학과'
            );
        }
        if (selectedSymptoms.includes('어지러움')) {
            recommendations += generateRecommendationItem(
                '본히펠린다우 증후군 (Von Hippel-Lindau syndrome)',
                'image/Von Hippel-Lindau syndrome.jpg',
                '고혈압,  두통,  어지러움,  악성종양발생',
                '신세포암종,  갈색세포종,  가족성 적혈구잠식성 림프조직구증,  혈우병,  윌름즈 종양',
                '내분비내과, 의학유전학센터, 소아내분비대사과, 의학유전학과'
            );
        }
        if (selectedSymptoms.includes('어지러움')) {
            recommendations += generateRecommendationItem(
                '저혈당증(Hypoglycemia)',
                'image/Hypoglycemia.jpg',
                '기운없음,  온몸이 떨림,  손떨림,  창백,  가슴 두근거림,  의식 저하,  피로감,  공복감,  두통,  불안,  경련,  어지러움,  흥분,  발한,  쇼크',
                '췌장암,  인슐린 의존성 당뇨병,  인슐린 비의존성 당뇨병,  신생아 다혈구증,  당뇨병,  뇌하수체 기능부전,  부신 기능부전,  덤핑 증후군',
                '내분비내과, 소아내분비대사과'
            );
        }
        if (selectedSymptoms.includes('어지러움')) {
            recommendations += generateRecommendationItem(
                '척추 뇌저 동맥 증후군(Vertebro-basilar artery syndrome)',
                'image/Vertebro-basilar artery syndrome.jpg',
                '복시,  오심,  이명,  구토,  삼키기 곤란 ,  두통,  발음 이상,  어지러움',
                '대동맥 박리,  철결핍빈혈,  동맥색전증 및 혈전증,  죽상경화증,  혈관염,  현훈,  메니에르병',
                '신경과'
            );
        }
        if (selectedSymptoms.includes('어지러움')) {
            recommendations += generateRecommendationItem(
                '갈색세포종(Pheochromocytoma)',
                'image/Pheochromocytoma.jpg',
                '가슴 두근거림,  고혈압,  어지러움,  발한',
                '고혈압',
                '내분비내과'
            );
        }
        if (selectedSymptoms.includes('어지러움')) {
            recommendations += generateRecommendationItem(
                '동기능 부전 증후군(Sick sinus syndrome)',
                'image/Sick sinus syndrome.jpg',
                '가슴 두근거림,  호흡곤란,  어지러움,  가슴 통증,  자율신경장애',
                '부정맥,  심장 판막 질환,  심근병증,  오래된 심근경색증',
                '심장내과'
            );
        }
        if (selectedSymptoms.includes('어지러움')) {
            recommendations += generateRecommendationItem(
                '미로염(Labyrinthitis)',
                'image/Labyrinthitis.jpg',
                '난청,  어지러움',
                '만성 중이염,  홍역,  전정신경염',
                '이비인후과'
            );
        }
        if (selectedSymptoms.includes('어지러움')) {
            recommendations += generateRecommendationItem(
                '서맥(Bradycardia)',
                'image/Bradycardia.jpg',
                '어지러움,  자율신경장애',
                '고혈압,  심근염',
                '심장내과, 심장병원'
            );
        }
        if (selectedSymptoms.includes('어지러움')) {
            recommendations += generateRecommendationItem(
                '소적혈구빈혈(Microcytic anemia)',
                'image/Microcytic anemia.jpg',
                '비장비대,  스푼형 손톱,  창백,  호흡곤란,  피로감,  식욕부진,  간비대,  두통,  어지러움,  가슴 통증',
                '거대적혈모구빈혈,  철결핍빈혈,  지중해빈혈',
                '혈액내과'
            );
        }
        if (selectedSymptoms.includes('어지러움')) {
            recommendations += generateRecommendationItem(
                '열 피로(heat exhaustion)',
                'image/heat exhaustion.jpg',
                '탈수,  권태감,  차갑고 축축한 피부,  어지러움, 두통',
                '열사병',
                '가정의학과, 응급의학과'
            );
        }
        if (selectedSymptoms.includes('어지러움')) {
            recommendations += generateRecommendationItem(
                '용혈빈혈(Hemolytic anemia)',
                'image/Hemolytic anemia.png',
                '황달,  운동 시 호흡곤란,  비장비대,  창백,  피로감,  담석,  피부궤양,  어지러움,  빈혈',
                '자가면역용혈질환,  약물 유발성 자가면역성 용혈성 빈혈,  미세혈관병용혈빈혈',
                '소아청소년종양혈액과, 혈액내과'
            );
        }
        if (selectedSymptoms.includes('어지러움')) {
            recommendations += generateRecommendationItem(
                '이석증(Benign paroxysmal vertigo)',
                'image/Benign paroxysmal vertigo.jpg',
                '안구진탕,  구토,  어지러움',
                '전정신경염',
                '이비인후과'
            );
        }
        if (selectedSymptoms.includes('어지러움')) {
            recommendations += generateRecommendationItem(
                '일과성 뇌허혈증(Transient cerebral ischemia)',
                'image/Transient cerebral ischemia.jpg',
                '안면마비,  구토,  언어장애,  파행,  어지러움,  감각 이상',
                '뇌졸중,  고혈압,  고콜레스테롤혈증',
                '신경과'
            );
        }
        if (selectedSymptoms.includes('어지러움')) {
            recommendations += generateRecommendationItem(
                '일산화탄소 중독(Carbon monoxide-poisoning)',
                'image/Carbon monoxide-poisoning.jpg',
                '오심,  호흡곤란,  의식 저하,  구토,  어지러움',
                '구토',
                '응급의학과'
            );
        }
        if (selectedSymptoms.includes('어지러움')) {
            recommendations += generateRecommendationItem(
                "잠수병(Diver's disease)",
                'image/Diver\'s disease.jpg',
                '무감각,  관절통,  피부 긴장도 저하,  어지러움,  저림,  가슴 통증',
                '동맥색전증 및 혈전증',
                '응급의학과'
            );
        }
        
        

        //지남력 장애
        if (selectedSymptoms.includes('지남력 장애')) {
            recommendations += generateRecommendationItem(
                '치매(dementia)',
                'image/dementia.jpg',
                '지남력 장애,  성격의변화,  감정 변화,  혼돈,  언어장애,  기억장애,  건망증',
                '비정형 파킨슨 증후군,  알츠하이머병,  혈관성 치매',
                '노년내과, 신경과, 정신건강의학과'
            );
        }
        if (selectedSymptoms.includes('지남력 장애')) {
            recommendations += generateRecommendationItem(
                '거스트만 증후군(Gerstmann Syndrome)',
                'image/Gerstmann Syndrome.jpg',
                '지남력 장애,  학습장애,  인지장애',
                '뇌종양,  양성 뇌종양,  뇌졸중,  뇌농양',
                '신경과, 신경외과, 재활의학과'
            );
        }
        if (selectedSymptoms.includes('지남력 장애')) {
            recommendations += generateRecommendationItem(
                '베르니케 코시코프 증후군(Wernicke-korsakoff syndrome)',
                'image/Wernicke-korsakoff syndrome.jpg',
                '안구진탕,  말초 신경장애,  지남력 장애,  혼돈,  의식 변화,  기억장애,  보행이상,  불안',
                '치매,  알코올 의존성,  우울증,  불안 장애,  혈관성 치매,  보행 운동 장애',
                '신경과, 정신건강의학과'
            );
        }
        if (selectedSymptoms.includes('지남력 장애')) {
            recommendations += generateRecommendationItem(
                '호흡성 산증(Respiratory Acidosis)',
                'image/Respiratory Acidosis.jpg',
                '온몸이 떨림,  피부홍조,  호흡곤란,  지남력 장애,  의식 변화,  두통,  불안,  발한',
                '천식,  만성 기관지염,  폐부종',
                '호흡기내과, 응급의학과'
            );
        }

        //구토
        if (selectedSymptoms.includes('구토')) {
            recommendations += generateRecommendationItem(
                '교모세포종(Glioblastoma)',
                'image/Glioblastoma.jpg',
                '오심,  뇌전증 발작 ,  구토,  두통',
                '뇌종양,  양성 뇌종양,  수두증,  신경모세포종,  원발성 중추신경계 림프종,  뇌신경 인플레',
                '종양내과, 방사선종양학과, 소아청소년종양혈액과, 신경외과, 소아신경외과'
            );
        }
        if (selectedSymptoms.includes('구토')) {
            recommendations += generateRecommendationItem(
                '급성 신우신염(Acute pyelonephritis)',
                'image/Acute pyelonephritis.jpg',
                '오한,  열,  오심,  배뇨곤란,  근육통,  빈뇨,  배뇨 시 통증,  구토,  두통,  잔뇨감,  요통',
                '신우요관암,  급성 방광염,  대장균 감염,  임균성 요도염,  비임균성 요도염,  신우요관 폐색,  방광요관 역류,  요관 협착',
                '감염내과, 신장내과, 소아신장과'
            );
        }
        if (selectedSymptoms.includes('구토')) {
            recommendations += generateRecommendationItem(
                '뇌농양(Brain abscess)',
                'image/Brain abscess.jpg',
                '열,  오심,  성격의변화,  구토,  두통,  경련',
                '뇌종양,  양성 뇌종양,  부비동염,  바이러스성 뇌수막염,  박테리아성 뇌수막염,  만성 중이염,  심내막염,  급성 중이염',
                '감염내과, 신경외과'
            );
        }
        if (selectedSymptoms.includes('구토')) {
            recommendations += generateRecommendationItem(
                '뇌동맥류(Cerebral aneurysm)',
                'image/Cerebral aneurysm.jpg',
                '오심,  뇌전증 발작 ,  구토,  의식 변화,  안구내 출혈,  두통',
                '자발성 두개강 내 출혈,  뇌동맥 폐쇄,  동맥류',
                '영상의학과, 신경외과, 신경중재클리닉'
            );
        }
        if (selectedSymptoms.includes('구토')) {
            recommendations += generateRecommendationItem(
                '뇌염(Encephalitis)',
                'image/Encephalitis.jpg',
                '기운없음,  오한,  시력 감소,  열,  방향감각 상실,  의식 저하,  경부 강직,  정신 혼미,  구토,  두통,  경련',
                '바이러스성 뇌수막염,  박테리아성 뇌수막염,  일본 뇌염',
                '신경과, 소아신경과'
            );
        }
        if (selectedSymptoms.includes('구토')) {
            recommendations += generateRecommendationItem(
                '뇌종양(Brain tumor)',
                'image/Brain tumor.jpg',
                '운동장애,  오심,  뇌전증 발작 ,  구토,  두통,  감각 이상',
                '양성 뇌종양,  뇌하수체 양성 및 악성 신생물,  뇌하수체의 악성 신생물,  신경종',
                '종양내과, 방사선종양학과, 소아청소년종양혈액과, 신경과, 신경외과, 소아내분비대사과, 소아신경과, 암병원'
            );
        }
        if (selectedSymptoms.includes('구토')) {
            recommendations += generateRecommendationItem(
                '뇌출혈(Cerebral hemorrhage)',
                'image/Cerebral hemorrhage.jpg',
                '의식 저하,  구토,  의식 변화,  두통,  어지러움,  마비',
                '자발성 두개강 내 출혈,  뇌졸중,  지주막하 출혈',
                '신경과, 신경외과, 재활의학과'
            );
        }
        if (selectedSymptoms.includes('구토')) {
            recommendations += generateRecommendationItem(
                '수두증(Hydrocephalus)',
                'image/Hydrocephalus.jpg',
                '눈운동신경마비,  시력 감소,  축 늘어짐,  수유 곤란,  구토,  기억장애,  유두부종,  두통,  마비',
                '뇌종양,  양성 뇌종양,  바이러스성 뇌수막염,  박테리아성 뇌수막염',
                '신경외과, 소아신경외과'
            );
        }
        if (selectedSymptoms.includes('구토')) {
            recommendations += generateRecommendationItem(
                '외상성 경막하 출혈(Traumatic subdural hemorrhage)',
                'image/Traumatic subdural hemorrhage.jpg',
                '호흡곤란,  구토,  혼수,  두통,  반신마비',
                '자발성 두개강 내 출혈,  외상에 의한 뇌 손상',
                '신경외과'
            );
        }
        if (selectedSymptoms.includes('구토')) {
            recommendations += generateRecommendationItem(
                '저나트륨혈증(Hyponatremia)',
                'image/Hyponatremia.jpg',
                '오심,  뇌전증 발작 ,  구토,  의식 변화,  두통,  흥분',
                '울혈성 심부전,  신부전,  요붕증',
                '내분비내과, 신장내과, 노년내과'
            );
        }
        if (selectedSymptoms.includes('구토')) {
            recommendations += generateRecommendationItem(
                '지주막하 출혈(Subarachnoid hemorrhage)',
                'image/Subarachnoid hemorrhage.jpg',
                '심정지,  호흡곤란,  의식 저하,  경부 강직,  구토,  혼수,  눈꺼풀 처짐증,  두통,  반신마비,  경련,  감각 이상',
                '뇌 동정맥 기형,  고혈압,  고지혈증',
                '신경과, 신경외과'
            );
        }
        if (selectedSymptoms.includes('구토')) {
            recommendations += generateRecommendationItem(
                '척추 뇌저 동맥 증후군(Vertebro-basilar artery syndrome)',
                'image/Vertebro-basilar artery syndrome.jpg',
                '복시,  오심,  이명,  구토,  삼키기 곤란 ,  두통,  발음 이상,  어지러움',
                '대동맥 박리,  철결핍빈혈,  동맥색전증 및 혈전증,  죽상경화증,  혈관염,  현훈,  메니에르병',
                '신경과'
            );
        }
        if (selectedSymptoms.includes('구토')) {
            recommendations += generateRecommendationItem(
                '백혈병(Leukemia)',
                'image/Leukemia.jpg',
                '열,  비장비대,  오심,  피부 긴장도 저하,  체중감소,  피로감,  구토,  간비대,  출혈 경향성,  잦은 감염,  뼈의 통증,  빈혈',
                '백혈구 이상,  급성림프모구백혈병,  급성골수성백혈병,  만성림프구백혈병,  만성골수백혈병',
                '혈액내과, 방사선종양학과, 소아청소년종양혈액과'
            );
        }
        if (selectedSymptoms.includes('구토')) {
            recommendations += generateRecommendationItem(
                '이석증(Benign paroxysmal vertigo)',
                'image/Benign paroxysmal vertigo.jpg',
                '안구진탕,  구토,  어지러움',
                '전정신경염',
                '이비인후과'
            );
        }
        if (selectedSymptoms.includes('구토')) {
            recommendations += generateRecommendationItem(
                '일과성 뇌허혈증(Transient cerebral ischemia)',
                'image/Transient cerebral ischemia.jpg',
                '안면마비,  구토,  언어장애,  파행,  어지러움,  감각 이상',
                '뇌졸중,  고혈압,  고콜레스테롤혈증',
                '신경과'
            );
        }
        if (selectedSymptoms.includes('구토')) {
            recommendations += generateRecommendationItem(
                '일산화탄소 중독(Carbon monoxide-poisoning)',
                'image/Carbon monoxide-poisoning.jpg',
                '오심,  호흡곤란,  의식 저하,  구토,  어지러움',
                '구토',
                '응급의학과'
            );
        }
        
        //불안
        if (selectedSymptoms.includes('불안')) {
            recommendations += generateRecommendationItem(
                '폐경(Menopause)',
                'image/Menopause.jpg',
                '관절통,  성욕감퇴,  가슴 두근거림,  안면홍조,  피로감,  감정 변화,  건망증,  두통,  불면증,  불안,  발한,  요통',
                '복압성 요실금,  대퇴 골절,  우울증,  골다공증,  병리적 골절,  폐경기 및 여성의 갱년기 상태,  급성 심근경색증,  심계항진,  요실금',
                '내분비내과, 산부인과'
            );
        }
        if (selectedSymptoms.includes('불안')) {
            recommendations += generateRecommendationItem(
                '베르니케 코시코프 증후군(Wernicke-korsakoff syndrome)',
                'image/Wernicke-korsakoff syndrome.jpg',
                '안구진탕,  말초 신경장애,  지남력 장애,  혼돈,  의식 변화,  기억장애,  보행이상,  불안',
                '치매,  알코올 의존성,  우울증,  불안 장애,  혈관성 치매,  보행 운동 장애',
                '신경과, 정신건강의학과'
            );
        }
        if (selectedSymptoms.includes('불안')) {
            recommendations += generateRecommendationItem(
                '호흡성 산증(Respiratory Acidosis)',
                'image/Respiratory Acidosis.jpg',
                '온몸이 떨림,  피부홍조,  호흡곤란,  지남력 장애,  의식 변화,  두통,  불안,  발한',
                '천식,  만성 기관지염,  폐부종',
                '호흡기내과, 응급의학과'
            );
        }
        //졸림
        if (selectedSymptoms.includes('졸림')) {
            recommendations += generateRecommendationItem(
                '결핵성 수막염(Tuberculous meningitis)',
                'image/Tuberculous meningitis.jpg',
                '눈운동신경마비,  열,  혼수,  졸림,  시야장애,  두통',
                '후천성 면역결핍증',
                '감염내과, 신경과'
            );
        }
        recommendationContent.innerHTML = recommendations;
        recommendationDiv.style.display = 'block'; // 추천 내용 보이기
    }

    function generateRecommendationItem(name, imagePath, Symptom, relatedDiseases, medical) {
        return `
            <div class="recommendation-item">
                <img src="${imagePath}" alt="${name}">
                <div>
                    <h4>${name}</h4>
                    <p><strong>증상: </strong>${Symptom}</p>
                    <p><strong>관련질환: </strong>${relatedDiseases}</p>
                    <p><strong>진료과: </strong>${medical}</p>
                </div>
            </div>
        `;
    }
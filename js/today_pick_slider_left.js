async function bookData3() {
    const params = new URLSearchParams({
        target: "title",
        query: "영화",
        size: 10
    });

    const url = `https://dapi.kakao.com/v3/search/book?${params}`

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: "KakaoAK 7c2ab6765f3c21d3e339ae661841e44f"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // .box 요소 전체 선택
        const boxElements = document.querySelectorAll("#today_pick_slider_left .swiper-slide");

        // documents 데이터를 각 box에 대응하여 렌더링
        boxElements.forEach((box, i) => {
            const doc = data.documents[i];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // 요소 생성 및 추가
            box.innerHTML = `
                <a href="sub.html">
                    <img src="${data.documents[i].thumbnail}">
                    <div id="slider_text">
                        <h3>${data.documents[i].title}</h3>
                        <h4>${data.documents[i].authors}</h4>
                        <h5>${data.documents[i].contents.slice(0, 150) + '...'}</h5>
                    </div>
                </a>`
        });

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData3();
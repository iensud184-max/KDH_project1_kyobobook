async function bookData_AI() {
    const params = new URLSearchParams({
        target: "title",
        query: "ai",
        size: 15
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
        const boxElements = document.querySelectorAll("#sub_AI .swiper-slide");

        // documents 데이터를 각 box에 대응하여 렌더링
        boxElements.forEach((box, i) => {
            const doc = data.documents[i];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // 요소 생성 및 추가
            box.innerHTML = `<img src="${data.documents[i].thumbnail}">
                    <h5>
                        ${data.documents[i].title.length > 20
                            ? data.documents[i].title.slice(0, 20) + '...'
                            : data.documents[i].title}
                    </h5>
                    <h6>
                        ${data.documents[i].authors.join(', ').length > 12
                            ? data.documents[i].authors.join(', ').slice(0, 12) + '...'
                            : data.documents[i].authors.join(', ')}
                    </h6>
                    <h5>${data.documents[i].price}원</h5>`
        });

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData_AI();
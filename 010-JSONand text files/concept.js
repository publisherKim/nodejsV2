/*
    refactoring
    fetch
    1. 파일 읽는 부분 fetch 함수로 분리
    2. 에러일 경우 빈배열 반환
    3. 새로 생성되는 값의 경우 parsedJson.push(zsl);
    
    saveZslList(parsedJson)

    const duplicatedZsls = zsls.filter((zsl) => zsl.name === name);
    const duplicatedZsls = parsedJson.filter((zsl) => zsl.name === name);
    주어 교체 parsedJson 데이터로 처리하기 떄문에 중복 처리가 안됨

    코드 분리가 잘 보여야 하는데...
*/
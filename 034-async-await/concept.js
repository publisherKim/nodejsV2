/*
    getZsl: async await 의 경우에 queue 에 들어감 1, 3, 2, 4 (비동기 상황)
    getZsl: async await가 아닐 경우 stack에 쌓임  1, 3, 4, 2 (동기 상황)
    순서를 잘 생각해서 적용을 잘 해야한다.
*/
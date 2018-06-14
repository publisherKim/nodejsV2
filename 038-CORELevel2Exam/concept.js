/*
    zsls: Alice, Wang. Alice bought a tea from Wang at Bejing.
    the price of the tea is 10 yuan.
    Write an exchange program which calculate the price in the fiat currency of the payer.
    Pay the 10 yuan from Alice's balance to Wang's balance.
    Rewrite the bankAccounts.

    기대값: "the price ${10} ${unit} was paid from Alice's account balance ${credit} to Wang's balance ${resultCredit}. After the transaction, the balance of Alice is ${Alice}, and that of Wang is ${Wang}"
    crud + 함수형 코딩
    
    step01
    설계
    structure
        data/data.js (자료)
    아무 생각이 없다.
    일단 파일 로드해서 콘솔부터 찍어보자.
    app.js 라고 이름짓고 쪼갤수 있으면 쪼개고 아니면 쪼개지 말자.
    
    step02
    structure
        data/data.js (자료)
        app.js(program, get까지 구현)

    문제를 다시한번 생각해보자.
    차의 가격은 10 위안이다.
    왕이 차를 판다. 
    앨리스는 왕의 차를 구매한다.

    앨리스가 x를 왕에게 지불하고 구매한다. 
    환율을 고려한다.
    buy(x)

    변환 과정
        1000$ -> 100위안 -> 차 10개
        환율변경 = x$ * rate
        구매량 = 환율변경 / 10
    
    최종 result
        alice.amount + 10
        Wang.amount - 10

    step03
        프로그래밍 ㅠㅠ
        함수 몇개로 나눠야 할지도 모르겠다.
        
        우선 유저부터 찾자. 필요한지 불필요한지도 판단 불가
        공법을 모르겠당 사실...

    util
        isArray
        getUserList

    step04
        일단 분리 구분 동작으로 보이지 않으니,
        각각의 리스트에서 양을 조정하고 
        json에 다시 저장하자.
        scope 개념 부족, 자바스크립트 평가에대한 이해부족, 비동기와 시점에대한 이해 부족

    step05 
        의식의 흐름 -_-;
        아몰랑 공법을 시전한다.
*/

/*
async1
        V8Engine                                    Node.js
        Stack                                       node / WEB API
        setTimeOut(0)                               setTimeOut(0)
        setTimeOut(2000)                            setTimeOut(2000)
        console.log(1)
        main()
        
        Event Loop
        main() 종료휴 콜백 큐에 담긴 함수들을 Stack으로 이동시켜줌

        CallbackQueue
        setTimeout(0)   |   setTimeout(2000)
setTimeout case: Node/WEB API를 탐 Callback Queue 에 담김
stack -> node/WEBAPI -> Callback Queue -> Event Loop -> stack 순으로 처리함
Heap in memory

async2                                              
        stack                                       node / WebAPI
        product()
        multiply()
        squqre()
        main()
Top - down: 바닥부터 쌓고 위에서부터 빠져 나간다.

        Callback Queue
        

async3
step1
        Stack                                       
        foo()
        bar()
        console.log(bar(6));
        main()

step2
        bar()
        console.log(bar(6));
        main()
step3
        console.log(bar(6));
        main()
step4 
        main()
step5
        cf: https: //www.youtube.com/watch?v=U2K19fZNSUg&index=18&list=PLlSZlNj22M7Q4hNEwdW_Fk-3H-BHqHkaP
*/
                       
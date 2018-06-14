# 환율 변환 프로그램 + crub
## 의식의 흐름 기법을 통한 구현(어느 정도는 체계화나 방법론이 들어가 있을지도 모름, 인간의 의식은 구조나 순서보다 위대하다. 구조주의자들...)
### structure
1. /json-exercies/data.json
2. /json-exerices/crud.js
3. app.js

### cf용 resources
1. json-exerise/json.js
2. currency-special.js

#### json.js 만들고 데이터 읽기 까지 구현
```CLI
    node app
```
##### result
```javascript
    [
        {
            "name": "Alice",
            "balance": {
                "issuedNation": "USA",
                "amount": 1000
            }
        },
        {
            "name": "Wang",
            "balance": {
                "issuedNation": "China",
                "amount": 3000
            }
        }
    ]
```
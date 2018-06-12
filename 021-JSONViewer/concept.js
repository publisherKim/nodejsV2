/*
    res
    google에서 날려주는 req에 대한 res
    error
        url: 'https://magoogleapis.com/maps/api/geocode/json?address=1600%20Amphitheatre%20Parkway%20Mountain%20View,%20CA&key=AIzaSyB9O1f7y7Qzm3k5P6-4fNIMpeaQED827WI',
    {
        Error: getaddrinfo ENOTFOUND magoogleapis.com magoogleapis.com: 443
        at errnoException(dns.js: 50: 10)
        at GetAddrInfoReqWrap.onlookup[as oncomplete](dns.js: 92: 26)
        code: 'ENOTFOUND',
        errno: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: 'magoogleapis.com',
        host: 'magoogleapis.com',
        port: 443
        googling chrome extension json viewer
    }
*/
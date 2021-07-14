// 1. async
function fetchUser(){
    // do nw request for 10 secs...
    return "dm";
}


const user = fetchUser();
console.log(user);


function fetchUser2(){
    return new Promise((resolve, reject) =>{
        // do nw request for 10 secs...
        return "dm";
    })
}

const user2 = fetchUser2();
console.log(user2);

async function fetchUser3(){
    return "dm";
}

const user3 = fetchUser3();
console.log(user3);

// 2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(1000);
    return "apple";
}

async function getBanana(){
    await delay(1000);
    return "banana";
}


function pickFruits(){
    return getApple()
    .then(apple => {
        return getBanana()
        .then(banana => `${apple} + ${banana}`);
    })
}

pickFruits().then(console.log)

async function pickFruits2(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits2().then(console.log);

async function pickFruits3(){
    const applePromise = getApple();
    const bananaPromise= getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits3().then(console.log);

async function pickFruits4(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(" + "));
}

pickFruits4().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()])
}

pickOnlyOne().then(console.log);
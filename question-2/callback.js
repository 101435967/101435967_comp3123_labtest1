const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!'});
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ error: 'delayed exception!'});
        }, 500);
    });
};

resolvedPromise().then(result=> console.log(result)).catch(error => console.error(error));
rejectedPromise().then(result=> console.log(result)).catch(error => console.error(error));
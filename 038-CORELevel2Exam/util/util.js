const isArray = (target) => {
    Array.isArray(target);
};

const getUserList = (name, targetList) => {
    return targetList.find(item => item.name === name);
};

module.exports = {
    isArray,
    getUser
};

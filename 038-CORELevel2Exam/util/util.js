const isArray = (target) => {
    Array.isArray(target);
};

const getUser = (name, targetList) => {
    return targetList.find(item => item.name === name);
};

module.exports = {
    isArray,
    getUser
};

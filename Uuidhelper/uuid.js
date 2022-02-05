// function that generates random #'s and letters (export)

module.exports = () =>
    Math.floor((1 + Math.random()) * 0x10000 )
        .toString(16)
        .substring(1);
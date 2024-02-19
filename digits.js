function testAtLeast5Digits(str) {
    const regex = /[1-9]{5,}/;
    return regex.test(str);
}
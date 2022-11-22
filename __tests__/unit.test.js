// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2'



test('match valid phone numbers', () => {
  expect(functions.isPhoneNumber('123-123-1234')).toBe(true);
	expect(functions.isPhoneNumber('999-888-7777')).toBe(true);
});

test('invalid phone number characters', () => {
  expect(functions.isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('invalid phone number ', () => {
  expect(functions.isPhoneNumber('112asd4-1123-124')).toBe(false);
});

test('match valid email', () => {
  expect(functions.isEmail('x@z.com')).toBe(true);
	expect(functions.isEmail('x@com.cc')).toBe(true);
});


test('invalid email character', () => {
  expect(functions.isEmail('~~@||.com')).toBe(false);
});
test('detect invalid email missing character', () => {
  expect(functions.isEmail('@@@.com')).toBe(false);
});




test('checks for a strong password', () => {
    expect(functions.isStrongPassword('aaaa')).toBe(true);
});

test('checks for a strong password', () => {
    expect(functions.isStrongPassword('asdl123')).toBe(true);
});


test('checks for a weak password', () => {
    expect(functions.isStrongPassword('012')).toBe(false);
});

test('checks for a weak password', () => {
    expect(functions.isStrongPassword('aaa')).toBe(false);
});


test('checks for a valid date', () => {
    expect(functions.isDate('1/2/3456')).toBe(true);
});

test('checks for a valid date', () => {
    expect(functions.isDate('01/01/1010')).toBe(true);
});


test('checks for a valid date: 11/3', () => {
    expect(functions.isDate('11/3')).toBe(false);
});

test('checks for a valid date: 11.22.2023', () => {
    expect(functions.isDate('11/22/23')).toBe(false);
});





test('matches hex color 123456', () => {
    expect(functions.isHexColor('123456')).toBe(true);
});

test('matches hex color: ababab', () => {
    expect(functions.isHexColor('ababab')).toBe(true);
});

test('invalid hex', () => {
    expect(functions.isHexColor('1s)@#!(*')).toBe(false);
});

test('invalid hex', () => {
    expect(functions.isHexColor('asldkfjhasd;fdasdkhf')).toBe(false);
});
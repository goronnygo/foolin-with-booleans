/********************
 * YOUR CODE BELOW! *
 ********************/

function moreThan5(num){
  return num > 5;
}

function isNewTopScore(num, num2){
  return num > num2;
}

function isInDanger(num){
  return num >=60 && num<= 71;
}

function isCoasting(num){
  return num >= 72 && num <= 83;
  }

function isSucceeding(num){
  return num >= 84 && num <= 92;
} 

function isFailing(num){
  return num < 60;
}

function isAcing(num){
  return num > 92;
}

function isStudent(str){
  return str === "student";
}

function isTeacher(str){
  return str === "teacher";
}

function isAdmin(str){
  return str === "admin";
}

function isElementary(level){
  return level === "elementary";
}

function areDifferentPeople(person1, person2){
  return person1 !== person2;
}

function isMiddleSchoolTeacher(role, grade){
  return role === "teacher" && grade >= 6 && grade <= 8;
}

function notAnElementarySchoolAdministrator(level, role){
  return level !== "elementary" || role !== "admin";
}

/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}

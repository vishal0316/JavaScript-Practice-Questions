function abc() {
  let a = 4;

  function xyz() {
    console.log(a);
  }
  a = 5;
  return xyz;
}
const aff = abc();

aff();

const country = "korea";
const text = "hello";
const value = 77;
export { country, text }; // export 따로 가능 {} 사용
export { value };

function MyElem() {
  return null;
}
function MyNavBar() {
  return null;
}
function MyContent() {
  return null;
}
export { MyElem, MyNavBar };
export { MyContent };

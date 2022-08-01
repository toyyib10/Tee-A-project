let index;
let saved_Info = [];
const load = () => {
  saved_Info = JSON.parse(localStorage.tee_AInformation)
  index = JSON.parse(localStorage.index)
}
const editFunc = () => {
  console.log(saved_Info[index])
}
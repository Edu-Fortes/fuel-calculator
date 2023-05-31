const beforeLhInput = document.querySelector("#before-lh");
const beforeCtrInput = document.querySelector("#before-ctr");
const beforeRhInput = document.querySelector("#before-rh");

const afterLhInput = document.querySelector("#after-lh");
const afterCtrInput = document.querySelector("#after-ctr");
const afterRhInput = document.querySelector("#after-rh");

const resultModal = document.querySelector(".modal");

const resultBeforeLh = document.querySelector("#result-bfr-lh");
const resultBeforeCtr = document.querySelector("#result-bfr-ctr");
const resultBeforeRh = document.querySelector("#result-bfr-rh");

const resultAfterLh = document.querySelector("#result-aft-lh");
const resultAfterCtr = document.querySelector("#result-aft-ctr");
const resultAfterRh = document.querySelector("#result-aft-rh");

const totalBefore = document.querySelector("#total-before");
const totalAfter = document.querySelector("#total-after");

const fuelTruckOne = document.querySelector("#fuel-metered-one");
const fuelTruckTwo = document.querySelector("#fuel-metered-two");
const totalLiters = document.querySelector("#total-liters");

const fuelDensity = document.querySelector("#density");
const densityResult = document.querySelector("#density-result");

const poundAdded = document.querySelector("#pound-added");

const sumMeteredFuel = document.querySelector("#sum-metered-fuel");

const totalComputedFuel = document.querySelector("#total-computed");

const remarks = document.querySelector("#total-liters");

let beforeResult;
function sumBeforeFueling() {
  beforeResult =
    Number(beforeLhInput.value) +
    Number(beforeCtrInput.value) +
    Number(beforeRhInput.value);

  return beforeResult;
}

let afterResult;
function sumAfterFueling() {
  afterResult =
    Number(afterLhInput.value) +
    Number(afterCtrInput.value) +
    Number(afterRhInput.value);
  return afterResult;
}

function closeModal() {
  resultModal.classList.remove("modal_opened");
}

function handleCloseModal(event) {
  if (event.target.classList.contains("modal")) {
    closeModal();
  }
}
//returns total metered fuel in gallons
let trucksResult;
function sumTrucks() {
  trucksResult =
    (Number(fuelTruckOne.value) + Number(fuelTruckTwo.value)) * Number(0.2641);
  //precisa limitar resultado para 2 casa decimais
  return trucksResult;
}

let poundsAdded;
function totalPoundsAdded() {
  poundsAdded = Number(trucksResult) * Number(fuelDensity.value);
  return poundsAdded;
}

const formElement = document.querySelector(".form");
formElement.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  sumBeforeFueling();
  sumAfterFueling();
  sumTrucks();
  totalPoundsAdded();
  openModal();
  console.log(`${beforeResult} before result`);
  console.log(afterResult);
  console.log(event.target);
  console.log(trucksResult);
  console.log(`${poundsAdded} pounds added`);
}

function openModal() {
  //fill before fueling column
  resultBeforeLh.textContent = beforeLhInput.value;
  resultBeforeCtr.textContent = beforeCtrInput.value;
  resultBeforeRh.textContent = beforeRhInput.value;
  totalBefore.textContent = beforeResult;
  //fill after fueling column
  resultAfterLh.textContent = afterLhInput.value;
  resultAfterCtr.textContent = afterCtrInput.value;
  resultAfterRh.textContent = afterRhInput.value;
  totalAfter.textContent = afterResult;
  //fill total metered field
  sumMeteredFuel.textContent = `${trucksResult.toLocaleString()} Gallons`;
  //fill fuel desnity field
  densityResult.textContent = fuelDensity.value;
  //fill total pounds added
  poundAdded.textContent = Math.trunc(poundsAdded).toLocaleString();
  //fill total computed fuel
  totalComputedFuel.textContent = Math.trunc(
    Number(beforeResult * 1000) + Number(poundsAdded)
  ).toLocaleString();
  //fill remarks with sum of trucks in liters
  remarks.textContent = `${(
    Number(fuelTruckOne.value) + Number(fuelTruckTwo.value)
  ).toLocaleString()} Liters`;
  //add class to show modal
  resultModal.classList.add("modal_opened");
}

resultModal.addEventListener("click", handleCloseModal);

closeModal();

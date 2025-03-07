/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const inputEl = document.querySelector("#meter") as HTMLInputElement;
const outputEl = document.querySelector("#output") as HTMLDivElement;

const createOutputEl = (label: string, id: string) => {
  const par = document.createElement("p");
  par.textContent = `${label}: `;
  const span = document.createElement("span");
  span.id = id;
  par.appendChild(span);
  outputEl.appendChild(par);
};

createOutputEl("Centimeters", "cm");
createOutputEl("Inches", "in");
createOutputEl("Feet", "ft");
createOutputEl("Miles", "mi");
createOutputEl("Yards", "yd");

const cmOutput = document.querySelector("#cm") as HTMLElement;
const inOutput = document.querySelector("#in") as HTMLElement;
const ftOutput = document.querySelector("#ft") as HTMLElement;
const miOutput = document.querySelector("#mi") as HTMLElement;
const ydOutput = document.querySelector("#yd") as HTMLElement;

inputEl.addEventListener("input", (e) => {
  const targetEl = e.target as HTMLInputElement;
  const meters = parseFloat(targetEl.value);

  if (!isNaN(meters) && meters !== null) {
    cmOutput.textContent = (meters * 100).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    inOutput.textContent = (meters * 39.37).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    ftOutput.textContent = (meters * 3.281).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    miOutput.textContent = (meters / 1609).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    ydOutput.textContent = (meters * 1.094).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  } else {
    cmOutput.textContent = "";
    inOutput.textContent = "";
    ftOutput.textContent = "";
    miOutput.textContent = "";
    ydOutput.textContent = "";
  }
});

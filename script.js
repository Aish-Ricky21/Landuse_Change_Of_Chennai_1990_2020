const data = [
  { "CLASS NAME": "BARE LAND", "LOSS": 11.8053, "GAIN": 7.7715, "UNCHANGE": 0.9639, "CHANGE INDEX": -4.18487395 },
  { "CLASS NAME": "HIGH DENSITY URBAN", "LOSS": 114.5205, "GAIN": 199.5183, "UNCHANGE": 77.9292, "CHANGE INDEX": 1.09070541 },
  { "CLASS NAME": "LOW DENSITY URBAN", "LOSS": 107.2476, "GAIN": 106.9371, "UNCHANGE": 36.0459, "CHANGE INDEX": -0.008614017 },
  { "CLASS NAME": "SRUB", "LOSS": 101.3634, "GAIN": 40.7907, "UNCHANGE": 14.7816, "CHANGE INDEX": -4.097844618 },
  { "CLASS NAME": "VEGETATION", "LOSS": 74.9925, "GAIN": 53.4339, "UNCHANGE": 21.3336, "CHANGE INDEX": -1.010546743 },
  { "CLASS NAME": "WATERBODY", "LOSS": 18.6768, "GAIN": 20.1546, "UNCHANGE": 10.7316, "CHANGE INDEX": 0.137705468 }
];

// Populate Table
const tableHead = document.getElementById("table-head");
const tableBody = document.getElementById("data-table");

tableHead.innerHTML = `<tr>
  <th>Class Name</th>
  <th>Loss</th>
  <th>Gain</th>
  <th>Change Index</th>
  <th>Unchange</th>
</tr>`;

tableBody.innerHTML = data.map(row => `
  <tr>
    <td>${row["CLASS NAME"]}</td>
    <td>${row.LOSS.toFixed(2)}</td>
    <td>${row.GAIN.toFixed(2)}</td>
    <td>${row["CHANGE INDEX"].toFixed(2)}</td>
    <td>${row.UNCHANGE.toFixed(2)}</td>
  </tr>
`).join("");

// Bar Chart
Plotly.newPlot('barChart', [
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.GAIN),
    name: 'Gain',
    type: 'bar',
    marker: { color: 'green' }
  },
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.LOSS),
    name: 'Loss',
    type: 'bar',
    marker: { color: 'red' }
  }
], );

// Pie Chart
function updatePieChart(valueType) {
  const values = data.map(d => valueType === "Changed"
    ? Math.abs(d.GAIN - d.LOSS)
    : d.UNCHANGE);
  const labels = data.map(d => d["CLASS NAME"]);

  Plotly.newPlot('pieChart', [{
    values: values,
    labels: labels,
    type: 'pie',
    hole: 0.4
  }],);
}

document.getElementById("valueTypeSelect").addEventListener("change", (e) => {
  updatePieChart(e.target.value);
});

// Initial render
updatePieChart("Changed");

// Dark mode toggle
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});











  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
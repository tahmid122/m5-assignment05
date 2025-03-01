// theme change
let themeBtn = document.getElementById("theme-btn");
let body = document.getElementById("body");
let sum = 0;
themeBtn.addEventListener("click", function () {
  const colors = [
    "YellowGreen",
    "red",
    "blue",
    "pink",
    "green",
    "purple",
    "yellow",
    "orange",
    "blueviolet",
    "brown",
    "cyan",
  ];
  //   let randomNumber = Math.floor(Math.random() * 5);
  body.style.backgroundColor = colors[sum];
  sum++;
  if (sum >= colors.length) {
    sum = 0;
  }
});
// blog navigation
let blog = document.getElementById("blog");
blog.addEventListener("click", function () {
  window.location.href = "./blog.html";
});

// get and set date
const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let d = new Date();
let day = d.getDay();
let dayName = days[day];
let date = d.getDate();
let month = d.getMonth();
let monthName = months[month];
let year = d.getFullYear();
document.getElementById("day").innerText = dayName;
document.getElementById("month").innerText = monthName;
document.getElementById("date").innerText = date;
document.getElementById("year").innerText = year;

// clear history
document.getElementById("clearHistory").addEventListener("click", function () {
  document.getElementById("activityContainer").innerHTML = "";
});

//changing task values
let assignTaskText = document.getElementById("assignTask").innerText;
let convertedAssignValue = parseInt(assignTaskText);
let count = 0;
let navCount = document.getElementById("nav-count").innerText;
let convertedNavCount = parseInt(navCount);
let activityContainer = document.getElementById("activityContainer");
let completeButtons = document.querySelectorAll(".completeBtn");

for (let button of completeButtons) {
  button.addEventListener("click", function (e) {
    let parent = e.target.parentElement.parentElement;
    let title = parent.children[1].innerText;
    //get time
    let dates = new Date();
    let formatter = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    let formattedTime = formatter.format(dates);
    if (count < 5) {
      alert("Board Updated Successfully");
      count++;
      document.getElementById("assignTask").innerText =
        convertedAssignValue - count;
      document.getElementById("nav-count").innerText =
        convertedNavCount + count;
      e.target.disabled = true;
      e.target.style.backgroundColor = "gray";
      e.target.style.cursor = "not-allowed";
      let para = document.createElement("div");
      para.innerHTML = `
        <p class="text-base opacity-70 p-3 bg-[#F4F7FF] rounded-lg">You have Complete The Task <span class="font-bold">${title}</span> at ${formattedTime}</p>
      `;
      activityContainer.appendChild(para);
    } else {
      alert("Board Updated Successfully");
      count++;
      document.getElementById("assignTask").innerText =
        convertedAssignValue - count;
      document.getElementById("nav-count").innerText =
        convertedNavCount + count;
      e.target.disabled = true;
      e.target.style.backgroundColor = "gray";
      e.target.style.cursor = "not-allowed";
      let para = document.createElement("div");
      para.innerHTML = `
        <p class="text-base opacity-70 p-3 bg-[#F4F7FF] rounded-lg">You have Complete The <span class="font-bold">${title}</span> at ${formattedTime}</p>
      `;
      activityContainer.appendChild(para);
      alert("Congrats !! You have completed all the current task.");
    }
  });
}

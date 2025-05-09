const counters = [
  { totalItems: 0, customers: [] },
  { totalItems: 0, customers: [] },
  { totalItems: 0, customers: [] },
];

function checkoutItems() {
  const itemCount = parseInt(document.getElementById("itemCount").value);
  if (isNaN(itemCount) || itemCount <= 0) {
    alert("Please enter a valid number of items.");
    return;
  }

  // Find the counter with the min total items
  let minIndex = 0;
  for (let i = 1; i < counters.length; i++) {
    if (counters[i].totalItems < counters[minIndex].totalItems) {
      minIndex = i;
    }
  }

  counters[minIndex].totalItems += itemCount;
  counters[minIndex].customers.push(itemCount);

  updateUI();

  document.getElementById("itemCount").value = "";
}

function updateUI() {
  counters.forEach((counter, index) => {
    document.getElementById(
      `counter${index + 1}-customers`
    ).innerText = `${counter.customers.length} customers`;
    document.getElementById(
      `counter${index + 1}-total`
    ).innerText = `${counter.totalItems}`;

    const list = document.getElementById(`counter${index + 1}-list`);
    list.innerHTML = "";

    counter.customers.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `<i class="fas fa-shopping-cart"></i> ${item} items`;
      list.appendChild(li);
    });
  });
}

// Initial UI update
updateUI();

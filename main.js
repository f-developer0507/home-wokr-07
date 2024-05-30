const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
    return users;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createTable = (users) => {
  const tableContainer = document.getElementById("table-container");
  const table = document.createElement("table");
  const headers = [
    "T/R",
    "Name",
    "Username",
    "Phone",
    "Email",
    "Address",
    "Phone",
    "Website",
    "Company",
  ];
  const headerRow = table.insertRow();
  headers.forEach((headerText) => {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
  });
  users.forEach((item) => {
    const row = table.insertRow();
    row.insertCell().textContent = item.id;
    row.insertCell().textContent = item.name;
    row.insertCell().textContent = item.username;
    row.insertCell().textContent = item.phone;
    row.insertCell().textContent = item.email;
    const address = item.address;
    const addressText = `${address.suite}, ${address.street}, ${address.city}, ${address.zipcode}`;
    row.insertCell().textContent = addressText;
    row.insertCell().textContent = item.phone;
    row.insertCell().textContent = item.website;
    const company = item.company;
    const companyText = `${company.name}, ${company.catchPhrase}, ${company.bs}`;
    row.insertCell().textContent = companyText;
  });
  tableContainer.appendChild(table);
  table.classList.add("table");
};

const finish = async () => {
  const users = await fetchUsers();
  if (users) {
    createTable(users);
  }
};
finish();

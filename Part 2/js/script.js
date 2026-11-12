// GET THE FORM, TABLE BODY, AND EMPLOYEE COUNT FROM THE DOM
const form = document.getElementById('addForm');
const employeeTable = document.getElementById('employees');
const employeeBody = employeeTable.querySelector('tbody');
const empCountOutput = document.getElementById('empCount');

// INITIAL EMPLOYEE DATA: ID, NAME, EXTENSION, EMAIL, DEPARTMENT
const initialEmployees = [
    [10000001, 'Alex Johnson', 1234, 'alex.johnson@example.com', 'Administrative'],
    [10000002, 'Taylor Smith', 2345, 'taylor.smith@example.com', 'Engineering'],
    [10000003, 'Jordan Lee', 3456, 'jordan.lee@example.com', 'Executive'],
    [10000004, 'Morgan Davis', 4567, 'morgan.davis@example.com', 'Marketing'],
    [10000005, 'Casey Brown', 5678, 'casey.brown@example.com', 'Sales']
];

// USE SAVED EMPLOYEES WHEN AVAILABLE; OTHERWISE START WITH FIVE EMPLOYEES
const savedEmployees = localStorage.getItem('employees');
let employees = savedEmployees !== null ? JSON.parse(savedEmployees) : initialEmployees;

// BUILD THE TABLE FROM THE ARRAY AND SAVE IT TO LOCAL STORAGE
function buildGrid(employeeArray) {
    employeeBody.innerHTML = '';

    for (const employee of employeeArray) {
        const row = document.createElement('tr');
        // Build each cell using a template literal and innerHTML.
        row.innerHTML = `
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><button type="button" class="btn btn-danger btn-sm text-light">X</button></td>
        `;
        // textContent keeps employee-entered values as text, not HTML.
        const cells = row.querySelectorAll('td');
        for (let i = 0; i < employee.length; i++) {
            cells[i].textContent = employee[i];
        }
        employeeBody.appendChild(row);
    }

    empCountOutput.value = `(${employeeArray.length})`;
    localStorage.setItem('employees', JSON.stringify(employeeArray));
}

// ADD A NEW EMPLOYEE ARRAY TO THE MAIN EMPLOYEES ARRAY
function addEmployee(employeeArray, newEmployee) {
    employeeArray.push(newEmployee);
    buildGrid(employeeArray);
}

// REMOVE AN EMPLOYEE FROM THE ARRAY
function removeEmployee(employeeArray, index) {
    employeeArray.splice(index, 1);
    buildGrid(employeeArray);
}

// HANDLE THE ADD EMPLOYEE FORM
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = document.getElementById('id').value.trim();
    const name = document.getElementById('name').value.trim();
    const ext = document.getElementById('extension').value.trim();
    const email = document.getElementById('email').value.trim();
    const department = document.getElementById('department').value;

    if (!/^\d{8}$/.test(id) || !/^\d{4}$/.test(ext)) {
        alert('Please enter an 8-digit employee ID and a 4-digit extension.');
        return;
    }

    if (employees.some(employee => employee[0] === Number(id))) {
        alert('An employee with this ID already exists.');
        return;
    }

    const newEmployee = [Number(id), name, Number(ext), email, department];
    addEmployee(employees, newEmployee);
    form.reset();
    document.getElementById('id').focus();
});

// HANDLE DELETE BUTTON CLICKS
employeeBody.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const row = e.target.closest('tr');
        const index = Array.from(employeeBody.children).indexOf(row);
        if (index !== -1 && confirm('Are you sure you want to delete this employee?')) {
            removeEmployee(employees, index);
        }
    }
});

// SHOW THE INITIAL OR SAVED EMPLOYEES WHEN THE PAGE LOADS
buildGrid(employees);

// JavaScript to handle pagination, user management, student management, etc.
let currentPage = 1;
const recordsPerPage = 10;

function displayStudents(students) {
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = currentPage * recordsPerPage;
  const paginatedStudents = students.slice(startIndex, endIndex);

  const tableBody = document.querySelector("#students-table tbody");
  tableBody.innerHTML = "";

  paginatedStudents.forEach((student) => {
    const row = `
            <tr>
                <td>${student.student_id}</td>
                <td>${student.name}</td>
                <td>${student.course}</td>
                <td>${student.department}</td>
                <td>${student.email}</td>
                <td>${student.phone}</td>
                <td><button onclick="viewStudentProfile(${student.id})">View</button></td>
            </tr>
        `;
    tableBody.innerHTML += row;
  });
}

function nextPage() {
  currentPage++;
  fetchStudents();
}

function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    fetchStudents();
  }
}

function searchStudents() {
  const searchQuery = document.getElementById("search").value.toLowerCase();
  fetch("/students")
    .then((response) => response.json())
    .then((data) => {
      const filteredData = data.filter(
        (student) =>
          student.name.toLowerCase().includes(searchQuery) ||
          student.student_id.toLowerCase().includes(searchQuery) ||
          student.department.toLowerCase().includes(searchQuery)
      );
      displayStudents(filteredData);
    });
}

function fetchStudents() {
  fetch("/students")
    .then((response) => response.json())
    .then((data) => {
      displayStudents(data);
    })
    .catch((error) => console.error("Error fetching students:", error));
}

function viewStudentProfile(studentId) {
  // Implement logic to view detailed student profiles
  alert(`Viewing profile of student ID: ${studentId}`);
}

document.addEventListener("DOMContentLoaded", fetchStudents);

// User Management - Example function to add users
function openAddUserForm() {
  // Implement functionality for adding a new user (Admin/Faculty/Student)
  alert("Open Add User Form");
}
function viewStudents() {
  document.querySelector(".student-list").scrollIntoView({ behavior: "smooth" });
  fetchStudents();
}

// Tilt effect (optional)
document.querySelectorAll(".card-3d").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
});

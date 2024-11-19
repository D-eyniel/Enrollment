import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [activeSection, setActiveSection] = useState("studentInfo");

  const renderSection = () => {
    switch (activeSection) {
      case "studentInfo":
        return (
          <section className="dashboard-section">
            <img
            src="https://via.placeholder.com/150"
            className="student-image"
          />
            <h2>Student Information</h2>
            <p><b>Name:</b> Student Name</p>
            <p><b>Email:</b> studentemail@gmail.com</p>
            <p><b>Address:</b> Molino IV Cavite City</p>
            <p><b>Course:</b> Computer Science</p>
            <p><b>Year and Section:</b> 3-1</p>
          </section>
        );
      case "courses":
        return (
          <section className="dashboard-section">
            <h2>Courses Enrolled</h2>
            <ul>
              <li>Introduction to Programming</li>
              <li>Data Structures</li>
              <li>Operating Systems</li>
              <li>Web Development</li>
            </ul>
          </section>
        );
      case "announcements":
        return (
          <section className="dashboard-section">
            <h2>Announcements</h2>
            <ul>
              <li>Midterm exams start next week.</li>
              <li>Project submission deadline: Dec 15, 2024.</li>
              <li>Final exams: January 23, 2025.</li>
            </ul>
          </section>
        );
        case "checklist":
        return (
          <section className="dashboard-section">
            <h2>Checklist</h2>
          </section>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="nav-header">
          <img
            src="./cvsu.png"
            className="nav-image"
          />
        </div>
        <ul>
          <li onClick={() => setActiveSection("studentInfo")}>Student Information</li>
          <li onClick={() => setActiveSection("courses")}>Courses</li>
          <li onClick={() => setActiveSection("announcements")}>Announcements</li>
          <li onClick={() => setActiveSection("checklist")}>Checklist</li>
        </ul>

          <button className="logout">Log Out</button >

      </nav>
      <div className="dashboard-main">{renderSection()}</div>
    </div>
  );
}

export default Dashboard;

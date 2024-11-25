import React, { useState } from "react";
import "./Admin.css";

function AdminDashboard() {
  const [activePanel, setActivePanel] = useState("Overview");

  const handleMenuClick = (panel) => {
    setActivePanel(panel);
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <div className="logo">
          <img src="/cvsu.png" alt="Admin Logo" />
        </div>
        <nav>
          <ul>
            <li
              className={activePanel === "Overview" ? "active" : ""}
              onClick={() => handleMenuClick("Overview")}
            >
              Students
            </li>
            <li
              className={activePanel === "Users" ? "active" : ""}
              onClick={() => handleMenuClick("Users")}
            >
              Enrollment
            </li>
            <li
              className={activePanel === "Reports" ? "active" : ""}
              onClick={() => handleMenuClick("Reports")}
            >
              Class Schedule
            </li>
            <li
              className={activePanel === "Settings" ? "active" : ""}
              onClick={() => handleMenuClick("Settings")}
            >
              Curriculum
            </li>
          </ul>
        </nav>
        <div className="logout">Log out</div>
      </aside>

      <main className="main-content">

        <section className="panel">
          {activePanel === "Overview" && (
            <div>
              <h2>Overview</h2>
              <p>Welcome to the Admin Dashboard.</p>
            </div>
          )}
          {activePanel === "Users" && (
            <div>
              <h2>Enrolled</h2>
              <p>Manage enrolled students.</p>
              <div className="search-bar">
                <input 
                  type="text" 
                  placeholder="Search enrollment..." 
                />
                <select className="filter-dropdown">
                  <option value="all">Filter by All</option>
                  <option value="name">Filter by Name</option>
                  <option value="course">Filter by Course</option>
                </select>
                <select className="filter-dropdown">
                  <option value="all">Filter by All</option>
                  <option value="Year">Filter by Year Level</option>
                  <option value="regular">Regular</option>
                  <option value="irregular">Ireggular</option>

                </select>
              </div>
            </div>
          )}



          {activePanel === "Reports" && (
            <div>
              <h2>Reports</h2>
              <p>View reports here.</p>
            </div>
          )}
          {activePanel === "Settings" && (
            <div>
              <h2>Curriculum</h2>
              <p>Manage checklists here.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;

import React, { useState } from "react";
import "./Dashboard.css";

function App() {
  const [activePanel, setActivePanel] = useState("Dashboard");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleMenuClick = (panel) => {
    setActivePanel(panel);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="app">
      <div className="background">
        <div className="container">
          <div className="top-container">
            <header className="header">
              <div className="header-name">Welcome to Student Dashboard</div>

              <div className="user-profile">
                <div className="profile-info">
                  <img className="profile-img" alt="Profile" />
                </div>
                <div className="info">
                  <div className="name">Name</div>
                  <div className="year">Year</div>
                </div>
              </div>

              <div className="hamburger-menu" onClick={toggleSidebar}>
              </div>
            </header>
          </div>

          <div className="bottom-container">
            <div className={`sidebar-wrapper ${!isSidebarVisible ? 'hidden' : ''}`}>
              <aside className="sidebar">
                <div className="logo">
                  <img src="cvsu.png" alt="Logo" />
                </div>
                <nav className="menu">
                  <ul>
                    <li
                      className={activePanel === "Dashboard" ? "active" : ""}
                      onClick={() => handleMenuClick("Dashboard")}
                    >
                      Dashboard
                    </li>
                    <li
                      className={activePanel === "Profile" ? "active" : ""}
                      onClick={() => handleMenuClick("Profile")}
                    >
                      Profile
                    </li>
                    <li
                      className={activePanel === "Registration" ? "active" : ""}
                      onClick={() => handleMenuClick("Registration")}
                    >
                      Registration
                    </li>
                    <li
                      className={activePanel === "Payment Info" ? "active" : ""}
                      onClick={() => handleMenuClick("Payment Info")}
                    >
                      Payment Info
                    </li>
                    <li
                      className={activePanel === "Courses" ? "active" : ""}
                      onClick={() => handleMenuClick("Courses")}
                    >
                      Courses
                    </li>
                  </ul>
                </nav>
                <div className="logout">Log out</div>
              </aside>
            </div>

            <div className="right-section">
              <section className="panel-section">
                {activePanel === "Dashboard" && (
                  <div>
                    <h3>Dashboard Content</h3>
                    <p>Welcome to the dashboard, where you can see your summary.</p>
                  </div>
                )}
                {activePanel === "Profile" && (
                  <div>
                    <div className="panel-section">
                      <form className="profile-form">
                        <div className="form-group">
                          <div>
                            <label htmlFor="student-name">Name</label>
                            <input
                              type="text"
                              id="student-name"
                              name="name"
                              placeholder="Enter your name"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="student-email">Email</label>
                            <input
                              type="email"
                              id="student-email"
                              name="email"
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <div>
                            <label htmlFor="student-year">Year</label>
                            <input
                              type="text"
                              id="student-year"
                              name="year"
                              placeholder="Enter your year (e.g. 1st Year)"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="student-department">Department</label>
                            <input
                              type="text"
                              id="student-department"
                              name="department"
                              placeholder="Enter your department"
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <div>
                            <label htmlFor="student-phone">Phone Number</label>
                            <input
                              type="tel"
                              id="student-phone"
                              name="phone"
                              placeholder="Enter your phone number"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="student-age">Age</label>
                            <input
                              type="number"
                              id="student-age"
                              name="age"
                              placeholder="Enter your age"
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <div>
                            <label htmlFor="student-number">Student Number</label>
                            <input
                              type="text"
                              id="student-number"
                              name="student-number"
                              placeholder="Enter your student number"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="guardian-name">Guardian's Name</label>
                            <input
                              type="text"
                              id="guardian-name"
                              name="guardian-name"
                              placeholder="Enter your guardian's name"
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <div>
                            <label htmlFor="guardian-phone">Guardian's Phone Number</label>
                            <input
                              type="tel"
                              id="guardian-phone"
                              name="guardian-phone"
                              placeholder="Enter your guardian's phone number"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="address">Address</label>
                            <input
                              type="text"
                              id="address"
                              name="address"
                              placeholder="Enter your Address"
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <button type="submit" className="save">Save</button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
                {activePanel === "Registration" && (
                  <div>
                  <div className="panel-section">
                    <form className="profile-form">
                      <div className="form-group">
                        <div>
                          <label htmlFor="last-name">Last Name</label>
                          <input
                            type="text"
                            id="last-name"
                            name="name"
                            placeholder="Enter your Last Name"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="student-email">Email</label>
                          <input
                            type="email"
                            id="student-email"
                            name="email"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <div>
                          <label htmlFor="first-name">First Name</label>
                          <input
                            type="text"
                            id="first-year"
                            placeholder="Enter your First Name"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="gender">Gender</label>
                            <select className="dropdown-gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            </select >
                        </div>
                      </div>

                      <div className="form-group">
                        <div>
                          <label htmlFor="middle-name">Middle Name</label>
                          <input
                            type="text"
                            id="middle-name"
                            placeholder="Enter your Middle Name"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="student-age">Age</label>
                          <input
                            type="number"
                            id="student-age"
                            placeholder="Enter your age"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <div>
                          <label htmlFor="student-number">Student Number</label>
                          <input
                            type="text"
                            id="student-number"
                            name="student-number"
                            placeholder="Enter your student number"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="guardian-name">Guardian's Name</label>
                          <input
                            type="text"
                            id="guardian-name"
                            name="guardian-name"
                            placeholder="Enter your guardian's name"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <div>
                          <label htmlFor="guardian-phone">Guardian's Phone Number</label>
                          <input
                            type="tel"
                            id="guardian-phone"
                            name="guardian-phone"
                            placeholder="Enter your guardian's phone number"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="address">Address</label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Enter your Address"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <button type="submit" className="submit-button">Register</button>
                      </div>
                    </form>
                  </div>
                </div>
                )}
                {activePanel === "Payment Info" && (
                  <div>
                    <h3>Payment Information</h3>
                    <p>Manage your payment and billing information here.</p>
                  </div>
                )}
                {activePanel === "Courses" && (
                  <div>
                    <h3>Courses Content</h3>
                    <p>View and manage your enrolled courses.</p>
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

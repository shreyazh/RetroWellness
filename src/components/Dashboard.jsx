import React from "react";

const Dashboard = () => {
  const stats = {
    tasksCompleted: 5,
    upcomingSessions: 3,
    totalPosts: 12,
  };

  const recentActivities = [
    { id: 1, title: "Completed Yoga Routine", date: "2025-01-18" },
    { id: 2, title: "Post on Community Forum", date: "2025-01-20" },
    { id: 3, title: "New Wellness Routine", date: "2025-01-22" },
  ];

  return (
    <div className="dashboard-container">
      <section className="overview">
        <h2>Dashboard</h2>
        <div className="stats">
          <div className="stat">
            <h3>{stats.tasksCompleted}</h3>
            <p>Completed Tasks</p>
          </div>
          <div className="stat">
            <h3>{stats.upcomingSessions}</h3>
            <p>Upcoming Sessions</p>
          </div>
          <div className="stat">
            <h3>{stats.totalPosts}</h3>
            <p>Total Posts</p>
          </div>
        </div>
      </section>

      <section className="recent-activities">
        <h2>Recent Activities</h2>
        {recentActivities.length > 0 ? (
          recentActivities.map((activity) => (
            <div key={activity.id} className="activity">
              <h4>{activity.title}</h4>
              <p>{activity.date}</p>
            </div>
          ))
        ) : (
          <p>No recent activities.</p>
        )}
      </section>
    </div>
  );
};

export default Dashboard;

 "use client";

import { Box, Chip, Typography } from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ShowChartRoundedIcon from "@mui/icons-material/ShowChartRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";

export function FarmTracPreview() {
  return (
    <div className="preview-window farm-preview">
      <div className="preview-sidebar">
        <b><span className="mini-logo">F</span> FarmTrac</b>
        {["Dashboard", "Farmers", "Landholding", "Advisory", "Finance", "Reports", "Team"].map((x, i) => <span className={i === 0 ? "active" : ""} key={x}><DashboardRoundedIcon fontSize="inherit" />{x}</span>)}
      </div>
      <div className="preview-content">
        <div className="preview-top"><strong>Overview</strong><span>Analytics dashboard</span></div>
        <div className="metric-grid">
          {[["Total Farmers", "580"], ["Total Landholding", "892,382.5"], ["Avg. Landholding", "1538.6"], ["Smart Plot Farmers", "251"]].map(([a,b]) => <div className="metric" key={a}><small>{a}</small><b>{b}</b></div>)}
        </div>
        <div className="chart-grid">
          <div className="chart-card"><b>Monthly Attendance</b><MiniChart /></div>
          <div className="chart-card"><b>Activity Performance</b><MiniChart second /></div>
        </div>
        <div className="farm-module-strip">
          <div><span className="module-symbol"><PeopleAltRoundedIcon /></span><b>Farmers Management</b><small>Farmer records & profiles</small></div>
          <div><span className="module-symbol"><DashboardRoundedIcon /></span><b>Cluster Management</b><small>Clusters & field activity</small></div>
          <div><span className="module-symbol"><ShowChartRoundedIcon /></span><b>Finance & Advisory</b><small>Reports and advisory data</small></div>
          <div><span className="module-symbol"><PeopleAltRoundedIcon /></span><b>Team Tracker</b><small>Team targets & attendance</small></div>
        </div>
      </div>
    </div>
  );
}

export function ConnectPreview() {
  return (
    <div className="preview-window connect-preview">
      <div className="connect-head"><span className="mini-logo">☎</span><div><b>Farmtrac Connect</b><small>Today's Pending Leads</small></div><Chip size="small" label="Filter" /></div>
      <div className="fake-search">⌕ &nbsp; Search by name or number</div>
      <div className="fake-table">
        <div className="table-row table-header"><span>Name</span><span>Phone Number</span><span>Source</span><span>Purpose</span><span>Status</span></div>
        <div className="empty-state"><PeopleAltRoundedIcon /><b>No data available</b><small>Lead records appear here</small></div>
      </div>
      <div className="connect-bottom">
        <div><b><CampaignRoundedIcon /> Incoming Calls</b><p>test0010 <span className="status-pill">Inactive</span></p></div>
        <div><b><ArticleRoundedIcon /> Create Campaign</b><div className="steps"><span>1<br/><small>Basic info</small></span><span>2<br/><small>Audience</small></span><span>3<br/><small>Assign agent</small></span><span>4<br/><small>Review</small></span></div></div>
      </div>
    </div>
  );
}

export function CmsPreview() {
  return (
    <div className="preview-window cms-preview">
      <div className="preview-sidebar cms-sidebar"><b><span className="mini-logo">AV</span> Analytics Vidhya</b>{["Dashboard", "Posts", "Pages", "Events", "Courses", "Media", "Users", "Categories", "Settings"].map((x, i) => <span className={i === 1 ? "active" : ""} key={x}><ArticleRoundedIcon fontSize="inherit" />{x}</span>)}</div>
      <div className="cms-main">
        <div className="cms-top"><b>Posts</b><button>+ Add New Post</button></div>
        <div className="cms-tabs">All (120)　 Published　 Draft　 Scheduled　 Trash</div>
        <div className="cms-row cms-row-head"><span>Title</span><span>Category</span><span>Status</span><span>Date</span></div>
        {[["Top 10 Machine Learning Trends", "Machine Learning", "Published", "Oct 18"], ["A Guide to LLM Fine-Tuning", "Generative AI", "Draft", "Oct 16"], ["Data Science Career Roadmap", "Career", "Published", "Oct 14"], ["Introduction to Generative AI", "Data Science", "Scheduled", "Oct 13"]].map((r) => <div className="cms-row" key={r[0]}><span>{r[0]}</span><span>{r[1]}</span><span><i className={"publish-state " + r[2].toLowerCase()}>{r[2]}</i></span><span>{r[3]}, 2026</span></div>)}
      </div>
    </div>
  );
}

function MiniChart({ second = false }) {
  return <svg className="mini-chart" viewBox="0 0 300 90" preserveAspectRatio="none" aria-label="Dashboard trend chart">
    <path d={second ? "M0 70 C20 65 20 45 40 58 S65 82 85 62 S115 35 135 65 S160 78 180 48 S215 70 235 56 S265 20 300 30" : "M0 70 C20 75 25 35 45 50 S70 75 90 58 S120 72 145 18 S175 70 195 52 S220 75 240 45 S270 70 300 24"} fill="none" stroke="#16d6a0" strokeWidth="2.5" />
    <path d="M0 82 H300 M0 55 H300 M0 28 H300" stroke="#dbeafe" strokeOpacity=".12" strokeDasharray="3 4" />
  </svg>;
}

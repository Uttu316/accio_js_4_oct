import "./sidebar.css";

const Sidebar = (props) => {
  const { pageId } = props;
  return (
    <aside className="sidebar">
      <div>
        Sidebar
        {pageId === "home" ? "Home" : "Feed"}
      </div>
    </aside>
  );
};

export default Sidebar;

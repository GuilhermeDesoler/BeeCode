import { SidebarContainer, SidebarImage } from "./style.sidebar";

const Sidebar = ({ avatar, alternative }) => {
  return (
    <SidebarContainer>
      <SidebarImage src={avatar} alt={alternative} />
    </SidebarContainer>
  );
};

export default Sidebar;

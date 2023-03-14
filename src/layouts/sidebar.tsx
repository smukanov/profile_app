import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BookmarkIcon,
  ChartBarIcon,
  ChartIcon,
  MagnifyingGlassIcon,
  PaperClipIcon,
  PuzzleIcon,
  UserIcon,
} from "../assets/icons";
import { Colors } from "../res/colors";
import { PathName } from "../res/enums";

const logo = require("../assets/images/Logo.png");

type SideBarItemProps = {
  icon: JSX.Element;
  title: string;
  textColor?: string;
  bgColor?: string;
};

const SideBarItem: FC<SideBarItemProps> = ({
  icon,
  title,
  textColor,
  bgColor,
}) => {
  return (
    <div
      className="flex items-center px-5 rounded-xl"
      style={{
        height: 52,
        backgroundColor: bgColor,
      }}
    >
      {icon}
      <span className="ml-3">{title}</span>
    </div>
  );
};

export const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-64 fixed h-screen" style={{ gridArea: "sidebar" }}>
      <img src={logo} alt="" />
      <div
        style={{
          borderBottomWidth: 2,
          borderColor: Colors.secondaryColor,
        }}
      >
        <Link to={PathName.Dashboard}>
          <SideBarItem
            bgColor={pathname === PathName.Dashboard ? "#4BA5EC" : "white"}
            title="Dashboard"
            icon={<ChartBarIcon />}
          />
        </Link>
        <Link to={PathName.Profile}>
          <SideBarItem
            bgColor={pathname === PathName.Profile ? "#4BA5EC" : "white"}
            title="Profile"
            icon={<UserIcon />}
          />
        </Link>
        <Link to={PathName.Recommendations}>
          <SideBarItem
            bgColor={pathname === PathName.Recommendations ? "#4BA5EC" : "white"}
            title="Recommendations"
            icon={<PuzzleIcon />}
          />
        </Link>
        <Link to={PathName.Catalog}>
          <SideBarItem
            bgColor={pathname === PathName.Catalog ? "#4BA5EC" : "white"}
            title="Catalog"
            icon={<MagnifyingGlassIcon />}
          />
        </Link>
        <Link to={PathName.Saved}>
          <SideBarItem
            bgColor={pathname === PathName.Saved ? "#4BA5EC" : "white"}
            title="Saved"
            icon={<BookmarkIcon />}
          />
        </Link>
        <Link to={PathName.Applications}>
          <SideBarItem
            bgColor={pathname === PathName.Applications ? "#4BA5EC" : "white"}
            title="Applications"
            icon={<PaperClipIcon />}
          />
        </Link>
      </div>
      <div>
        <Link to={PathName.LearningPlatform}>
          <SideBarItem
            bgColor={pathname === PathName.LearningPlatform ? "#4BA5EC" : "white"}
            title="Learning Platform"
            icon={<ChartIcon />}
          />
        </Link>
      </div>
    </div>
  );
};

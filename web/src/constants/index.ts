import HomeImage from "../../public/icons/svg/home.svg";
import DiscoverImage from "../../public/icons/svg/discover.svg";
import SpacesImage from "../../public/icons/svg/spaces.svg";
import LibraryImage from "../../public/icons/svg/library.svg";
import XIcon from "../../public/icons/svg/x.svg";
import TelegramIcon from "../../public/icons/svg/telegram.svg";
import DiscordIcon from "../../public/icons/svg/discord.svg";

export const sidebarLinks = [
  {
    title: "Home",
    route: "/prompt",
    img: HomeImage,
  },
  {
    title: "Discover",
    route: "/prompt",
    img: DiscoverImage,
  },
  {
    title: "Spaces",
    route: "/prompt",
    img: SpacesImage,
  },
  {
    title: "Library",
    route: "/prompt",
    img: LibraryImage,
  },
];

export const sidebarFooterLinks = [
  {
    title: "X",
    img: XIcon,
  },
  {
    title: "Telegram",
    img: TelegramIcon,
  },
  {
    title: "Discord",
    img: DiscordIcon,
  },
];

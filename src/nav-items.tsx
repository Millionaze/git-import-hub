import { Home, Building2, Shield, FileText } from "lucide-react";
import Index from "@/pages/Index";
import SellYourHome from "@/pages/SellYourHome";
import SaveYourHome from "@/pages/SaveYourHome";
import Blog from "@/pages/Blog";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Sell Your Home",
    to: "/sell-your-home",
    icon: <Building2 className="h-4 w-4" />,
    page: <SellYourHome />,
  },
  {
    title: "Save Your Home",
    to: "/save-your-home",
    icon: <Shield className="h-4 w-4" />,
    page: <SaveYourHome />,
  },
  {
    title: "Blog",
    to: "/blog",
    icon: <FileText className="h-4 w-4" />,
    page: <Blog />,
  },
];

import logo from '../../../public/images/default-dark.svg'
import { SquareUserRound, Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"

// Menu items.
const items = [
    {
        title: "User profile",
        url: "#",
        icon: SquareUserRound,
    },
    {
        title: "Account",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Authentication",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Corporate",
        url: "#",
        icon: Search,
    },
    {
        title: "Social",
        url: "#",
        icon: Settings,
    },
    {
        title: "Blog",
        url: "#",
        icon: Home,
    },
    {
        title: "Careers",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Utilities",
        url: "#",
        icon: Calendar,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <span><Image src={logo} alt="logo" height={100} width={100} /></span>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>Sidebar footer</SidebarFooter>
        </Sidebar>
    )
}
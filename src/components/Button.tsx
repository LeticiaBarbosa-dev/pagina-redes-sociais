import { GithubLogo, LinkedinLogo, TelegramLogo } from "phosphor-react";

interface ButtonProps {
    icon: string;
    path: string;
    title: string;
}

export function Button({icon, path, title}: ButtonProps) {

    const colorButton = icon === "linkedin" ? "bg-[#12AD65]" : icon === "github" ? "bg-[#333333]" : icon === "telegram" ? "bg-[#3D67F1]" : ""
    return (
        <a className={`text-white text-lg font-bold ${colorButton} flex w-[250px] h-[60px] items-center justify-center rounded-sm`} href={path}>
            {icon  === "linkedin" ? (<LinkedinLogo weight="bold" size={24} className="mr-2" />) : icon === "github" ? (<GithubLogo weight="bold" size={24} className="mr-2" />) : icon === "telegram" ? (<TelegramLogo weight="bold" size={24} className="mr-2" />) : "" }
            {title}
        </a>
    )
}
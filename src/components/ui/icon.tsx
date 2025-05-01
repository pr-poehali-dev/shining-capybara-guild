
import React from "react";
import { LucideProps, icons } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps extends LucideProps {
  name: string;
  fallback?: string;
}

const Icon = ({ name, fallback = "Circle", className, ...props }: IconProps) => {
  const Icon = (icons as Record<string, React.FC<LucideProps>>)[name] || 
              (icons as Record<string, React.FC<LucideProps>>)[fallback];
  
  return <Icon className={cn("", className)} {...props} />;
};

export default Icon;

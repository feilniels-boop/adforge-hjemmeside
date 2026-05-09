import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Image
      src="/brand/adforge-logo-primary.svg"
      alt="StaticForge"
      width={162}
      height={36}
      priority={priority}
      className={cn("h-8 w-auto sm:h-9", className)}
    />
  );
}

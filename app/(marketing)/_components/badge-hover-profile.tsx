import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { GraduationCap } from "lucide-react";

const BadgeHoverProfile = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Badge className="text-sm md:text-base">
          <p>
            📢 Soon to be&nbsp;<span className="font-bold">Nica L. Deladia, LPT</span>
          </p>
        </Badge>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex space-x-4">
          <Avatar>
            <AvatarFallback>ND</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Nica L. Deladia</h4>
            <p className="text-sm">
              Cum Laude graduate of University of Caloocan City &#40;UCC&#41;.
            </p>
            <div className="flex items-center pt-1 space-x-2">
              <GraduationCap className="h-5 w-5 opacity-70" />
              <p className="text-xs text-muted-foreground">BTLE Major in Home Economics</p>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default BadgeHoverProfile;

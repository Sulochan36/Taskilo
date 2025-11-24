import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function TestDropdown() {
    return (
        <div className="p-10">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button>Open Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Item 1</DropdownMenuItem>
                    <DropdownMenuItem>Item 2</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

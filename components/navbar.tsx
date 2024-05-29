import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="sticky z-40 top-0 w-full bg-background/80 backdrop-blur-sm border-b border-muted">
      <div className="container flex items-center justify-between px-4 py-2">
        <a href="/">
          <p className="font-bold text-lg">EduCards</p>
        </a>
        <div className="flex items-center gap-2">
          <Button size={"sm"}>Let&apos;s Go!</Button>
          {/* <SettingsMenu /> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

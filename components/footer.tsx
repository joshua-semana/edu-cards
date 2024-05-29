import ThemeToggle from "./theme-toggle";

const Footer = () => {
  return (
    <footer className="bg-muted dark:bg-muted/20">
      <div className="container px-4 py-2 flex items-center justify-between">
        <p className="text-xs text-muted-foreground">Still work in progress</p>
        <ThemeToggle />
      </div>
    </footer>
  );
};

export default Footer;

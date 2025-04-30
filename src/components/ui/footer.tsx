export function Footer() {
  return (
    <footer className="border-t py-6 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} YourName. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
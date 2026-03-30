export default function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm text-[var(--color-text-muted)]">
          &copy; {new Date().getFullYear()} Atharv Jayprakash. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// components/portfolio/Footer.tsx
export function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-white/20 dark:border-slate-700/20 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-slate-600 dark:text-slate-400">
                    © {new Date().getFullYear()} Muhammad Sultan Alhakim. Crafted with passion and precision.
                </p>
            </div>
        </footer>
    );
}
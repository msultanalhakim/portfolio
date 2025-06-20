export function Footer() {
    return (
        <footer className="py-8 px-6 border-t border-slate-200/80 dark:border-slate-800/80 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                    © {new Date().getFullYear()} Muhammad Sultan Alhakim. 
                    <br className="sm:hidden" /> {/* Memberi jeda baris di layar kecil */}
                    Forging digital experiences from concept to code.
                </p>
            </div>
        </footer>
    );
}
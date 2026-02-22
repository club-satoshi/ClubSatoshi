import Link from "next/link";
import Image from "next/image";
import { XIcon } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary text-white py-6 border-t border-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="relative h-8 w-8 shrink-0">
                            <Image
                                src="/logo.png"
                                alt="Club Satoshi Icon"
                                fill
                                className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                        <div className="flex items-baseline font-bold text-lg tracking-tight text-white italic font-heading">
                            Club<span className="text-primary mx-0.5">.</span>Satoshi
                        </div>
                    </Link>

                    <p className="text-gray-500 text-xs order-last sm:order-none">
                        © {new Date().getFullYear()} Club Satoshi. Todos los derechos reservados.
                    </p>

                    <div className="flex items-center gap-3">
                        <Link href="https://x.com/ClubSatoshi_" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                            <XIcon className="w-4 h-4" />
                        </Link>
                        <Link href="https://www.instagram.com/club.satoshi/" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}

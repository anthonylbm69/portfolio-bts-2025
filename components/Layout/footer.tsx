import { Mail, Phone, Linkedin } from 'lucide-react';

function Footer() {
    return (
        <footer className="relative z-0 bg-dark rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 TonNom
        </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 gap-4">
                    <li>
                        <a href="https://www.linkedin.com/in/anthony-lybliamay-772244274/" target="_blank" rel="noopener noreferrer" className="hover:text-grey">
                            <Linkedin size={20} />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:anthony.lybliamay@gmail.com" className="hover:text-grey">
                            <Mail size={20} />
                        </a>
                    </li>
                    <li>
                        <a href="tel:+33768220603" className="hover:text-grey">
                            <Phone size={20} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;

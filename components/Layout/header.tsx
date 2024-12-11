function Header (){
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/ " className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto"
                             src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
                    </a>
                </div>
                <a href="/about" className="text-sm/6 font-semibold text-gray-900">About</a>
                <a href="/contact" className="text-sm/6 pl-8 font-semibold text-gray-900">Contact</a>
                <a href="/projects" className="text-sm/6 pl-8 font-semibold text-gray-900">Project</a>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">Log in <span
                        aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>
        </header>
    )
}

export default Header;
export function NavbarButton({children}: { children: JSX.Element }) {
    return (<button
        className="border-solid border-2 border-gray-200 rounded-lg w-8 h-8 bg-slate-50 flex justify-center items-center">
        {children}
    </button>)
}
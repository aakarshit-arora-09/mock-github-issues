export function TabButton({isActive, handleClick, title, svgPath}: {
    isActive: boolean,
    handleClick: () => void
    title: string,
    svgPath: string
}) {
    return <button onClick={handleClick} className="hover:bg-slate-200 rounded p-2">
        <div className={"flex items-center space-x-2"}>
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" className="h-4 w-4"
                 data-view-component="true">
                <path d={svgPath}></path>
            </svg>
            <span className={`${isActive && "font-bold"} text-sm text-slate-800`}>{title}</span>
        </div>
    </button>
}

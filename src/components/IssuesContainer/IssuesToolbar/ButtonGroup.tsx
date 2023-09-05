export function ButtonGroup() {
    return (<div className="flex">
        <button
            className="rounded-l border-solid border-[1px] border-gray-300 p-0.5 text-sm font-medium border-r-0 px-10 hover:bg-gray-100">Labels
        </button>
        <button
            className="rounded-r border-solid border-[1px] border-gray-300  text-sm font-medium px-10 hover:bg-gray-100">Milestones
        </button>
    </div>)
}
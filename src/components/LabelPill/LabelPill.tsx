export function LabelPill({name, color}: { name: string, color: string }) {
    return (
        <div
            className={`text-xs rounded-full font-medium bg-purple-200 px-1 py-0.5 text-ellipsis whitespace-nowrap`}>{name}</div>
    )
}
export default function TabButton(isSelected, children) {
    return (
        <div class={isSelected ? "" : "d-none"}>{children}</div>
    )
}
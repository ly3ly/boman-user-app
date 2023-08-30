export default function extractInitials(name: string): string {
    const words = name.split(" ").filter(word => word.length > 0);
    const initials = words.map(word => word.charAt(0).toUpperCase()).join("");
    return initials;
}

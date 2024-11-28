import Flag from "react-world-flags";

export default function getFlag(lang) {

    const langCode = lang ? (lang.toLowerCase() === 'en' ? 'us' : lang.toLowerCase()) : null;

    return (
        <Flag code={langCode} width={30} height={20} />
    )
}
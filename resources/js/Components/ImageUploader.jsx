import useImages from "@/Hooks/useImages";

export default function ImageUploader({ text, maxmb, height }) {
    const { UploadIcon } = useImages();
    return (
        <div
            className={`border border-borderprimary rounded-xl ${height} flex flex-col px-5 items-center justify-center gap-3`}
        >
            <img src={UploadIcon} alt="Upload Icon" className="w-10" />
            <p className="text-sm text-headertext">
                <span className="text-primary font-semibold">Browse </span>
                {text ? text : "or drag and drop your file here"}
            </p>
            <p className="text-sm text-headertext">{maxmb ? maxmb : ""}</p>
        </div>
    );
}

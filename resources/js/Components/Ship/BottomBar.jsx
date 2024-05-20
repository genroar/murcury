export default function BottomBar({ children }) {
    return (
        <div className="fixed bottom-0 right-0 w-full flex">
            <div className="min-w-[240px] max-w-[260px]"></div>
            <div className="w-full bg-white  border-t border-borderlight flex p-6">
                {children}
            </div>
        </div>
    );
}

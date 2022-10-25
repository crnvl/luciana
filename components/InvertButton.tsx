type ButtonProps = {
    children: React.ReactNode
}

export default function InvertButton(props: ButtonProps) {
    return <button className={
        `text-black 
        py-2 px-6
        rounded-md
        font-bold 
        transition ease-in-out duration-150
        active:scale-95 active:shadow-lg active:outline-none active:border-white
        hover:bg-black hover:text-white hover:border-white hover:scale-110
        border-2 border-black shadow-md`
    } {...props} />
}
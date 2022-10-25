type ButtonProps = {
    children: React.ReactNode
}

export default function Button(props: ButtonProps) {
    return <button className={
        `text-white 
        py-2 px-6
        rounded-md
        font-bold 
        transition ease-in-out duration-150
        active:scale-95 active:shadow-lg active:outline-none active:border-white
        hover:bg-white hover:text-black hover:border-black hover:scale-110
        border-2 border-white`
    } {...props} />
}
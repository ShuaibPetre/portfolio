import Image from 'next/image'
export default function Header() {
return (
    <div className='flex'>
        <div className="">profile pic</div>
        <div className="">
            <Image
                src="/menu.svg"
                width={50}
                height={50}
                alt="Picture of the author"
            />
        </div>
    </div>
)
}
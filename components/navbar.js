import style from './navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Logo from 'next/image'
import {useState} from 'react'
import {useRouter} from 'next/router'

function Navbar() {
    const router = useRouter();
    const pathName = router.pathname

    const [toggle,
        setToggle] = useState(true);

    const handleToggle = () => setToggle(!toggle);

    const menu = [
        {
            path: '/',
            menuName: 'Home'
        }, {
            path: '/news',
            menuName: 'News'
        }, {
            path: '/program',
            menuName: 'Program'
        }, {
            path: '/kontak',
            menuName: 'Kontak'
        }
    ];

    return (
        <div className={style.wrapper}>
            <div className={style.logo}>
                <Logo src="/ms.png" alt="Picture of the author" width={250} height={50}/>
            </div>

            <div
                className={toggle
                ? style.menuWrapper
                : style.menuWrapper + " " + style.menuWrapperActive}>
                {menu.map((item, index) => (
                    <Link key={index} href={item.path}>
                        <a
                            className={pathName === item.path
                            ? style.menuItem + " " + style.menuItemActive
                            : style.menuItem}
                            onClick={handleToggle}>
                            {item.menuName}</a>
                    </Link>
                ))}
            </div>

            {toggle
                ? <div className={style.toggle} onClick={handleToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                : <div className={style.toggle +" "+ style.toggleActive} onClick={handleToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>}

            {/* <Image
                src="/arrow.svg"
                alt="Picture of the author"
                width={50}
                height={50}
                className={style.toggle}
                onClick={handleToggle}/> */}
        </div>
    )
}

export default Navbar
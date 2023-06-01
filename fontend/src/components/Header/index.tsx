import {useContext} from 'react';
import style from './styles.module.scss';
import Link from 'next/link';
import { AuthContext } from '../../contexts/AuthContext';
import {FiLogOut} from 'react-icons/fi'

export function Header(){

    const {signOut} = useContext(AuthContext);
    return(
        <header className={style.headerContainer}>
            <div className={style.headerContent}>
                <Link legacyBehavior  href="/dashboard">
                <img src="/logo.svg" width={190} height={60}/>
                </Link>

                <nav className={style.menuNav}>
                <Link legacyBehavior  href="/category">
                        <a>Categoria</a>
                    </Link>
                    <Link legacyBehavior  href="/product">
                        <a>Cardapio</a>
                    </Link>
                    <button onClick={signOut}>
                        <FiLogOut color='#fff' size={24} />
                    </button>
                </nav>

            </div>
        </header>
    )
}
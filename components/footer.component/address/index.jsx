import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';
import style from '../footer.module.css'

const Address = () => {
    return (
        <div className={style.address}>
            <Link href={'https://goo.gl/maps/wjXhUPbyiVfo5D467'} >
                <a target='_blank' className={style.address}>
                    <LocationOnIcon />
                    <span>
                        {`9 de Julio 368, Villa Carlos Paz - Córdoba`}
                    </span>
                </a>
            </Link>
        </div>
    )
}

export default Address;
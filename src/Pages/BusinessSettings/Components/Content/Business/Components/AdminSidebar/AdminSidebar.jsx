import React from 'react'
import classes from './adminsidebar.module.css';
import settingsWhite from '../../../../../../../Assets/BusinessSettings/settingsWhite.svg';
import settingsBlue from '../../../../../../../Assets/BusinessSettings/settingsBlue.svg';
import brand from '../../../../../../../Assets/BusinessSettings/brand.svg';
import brandBlue from '../../../../../../../Assets/BusinessSettings/brandBlue.svg';
import businessId from '../../../../../../../Assets/BusinessSettings/businessId.svg';
import businessIdBlue from '../../../../../../../Assets/BusinessSettings/businessIdBlue.svg';
import { NavLink } from 'react-router-dom'
import classesSidebar from '../../../../Sidebar/sidebar.module.css';

const AdminSidebar = () => {
    const [activeClass, setActiveClass] = React.useState('Business ID');
    let navElements = [{ name: 'Admin Settings', img: settingsWhite, img2: settingsBlue }, { name: 'Brand Kit', img: brand, img2: brandBlue }, { name: 'Business ID', img: businessId, img2: businessIdBlue }]

    return (
        <div className={classes.container}>
            <div style={{ marginTop: 0, paddingTop: '10px' }} className={classesSidebar.navOptions}>
                {navElements.map((element, index) => {
                    return (<>
                        <NavLink to="/admin-page/business">
                            <div onClick={() => setActiveClass(element.name)} className={`d-flex align-items-center g-6 cursor-pointer ${activeClass === element.name && classes.activeClass}`}>
                                <img src={activeClass === element.name ? element.img2 : element.img} alt="" width={"18px"} />
                                <span className="ml-8">{element.name}</span>
                            </div>
                        </NavLink>
                        {/* {index === 4 && <div className="mt-16 mb-16"><Divider /></div>} */}
                    </>
                    )
                })}


            </div>



        </div>
    )
}

export default AdminSidebar

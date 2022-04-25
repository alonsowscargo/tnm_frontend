import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton'
import {Dropdown, DropdownMenu, DropdownToggle, Popover} from 'reactstrap';
import SearchBox from 'components/SearchBox';


const AppModuleHeader = (props) => {

    const [searchBox, setSearchBox] = useState(false);
    const [popoverOpen, setPopOverOpen] = useState(false);

    const onSearchBoxSelect = () => {
        setSearchBox(!searchBox);
    };

    const toggle = () => {
        setPopOverOpen(!popoverOpen)
    };

    const {placeholder, onChange, value, user, notification, apps} = props;

    return (
        <div className="module-box-header-inner">
            <div className="search-bar right-side-icon bg-transparent d-none d-sm-block">
                <div className="form-group">
                    <input className="form-control border-0" type="search" placeholder={placeholder}
                           onChange={onChange}
                           value={value}/>
                    <button className="search-icon"><i className="zmdi zmdi-search zmdi-hc-lg"/></button>
                </div>
            </div>

            <Popover className="p-3" placement="bottom" isOpen={popoverOpen} target="Popover1"
                     toggle={toggle}>
                <h3>{user.name}</h3>
                <h4>{user.email}</h4>
            </Popover>

            
        </div>
    )
};

export default AppModuleHeader;

AppModuleHeader.defaultProps = {
    styleName: '',
    value: '',
    notification: true,
    apps: true
};
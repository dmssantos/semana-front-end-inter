import {HeaderContainer, HeaderWrapper, UserInfo} from './styles';
import UserCircle from '../UserCircle';

import logoInter from '../../assets/images/Inter-orange.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const handleLogoff = () => {
    navigate('/')
  };

  return(
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logoInter} width={172} height={61} alt="logo inter" />
        <UserInfo>
          <UserCircle initials="DS"/>
          <div>
            <p>Olá. <span className="primary-color font-bold">David</span></p>
            <strong>22541112-1</strong><br />
            <a href="#" onClick={handleLogoff}>Sair</a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header;

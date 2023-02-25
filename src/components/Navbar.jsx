import '../styles/Navbar.css';

export const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <div className='logo_div'>
                <img src="/Images/wstf_logo.svg" alt="" />
                <h2>Wasserstoff</h2>
            </div>
            <div className='searchbar_div'>
                <input type="text" />
                <img src="/Images/search_icon.svg" alt="" />
            </div>
            <div className='redirects_div'>
                <h3>
                    <a className='link' href="">Statistics</a>
                </h3>
                <h3>
                    <a className='link' href="">Overview</a>
                </h3>
                <h3>
                    <a className='link' href="">Dashboard</a>
                </h3>
                <h3>
                    <a className='link' href="">Analytics</a>
                </h3>
            </div>
            <div className='details_div'>
                <img src="/Images/user_icon.svg" alt="" />
                <img src="/Images/settings_icon.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

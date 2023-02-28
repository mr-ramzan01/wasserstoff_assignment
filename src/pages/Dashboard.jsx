import { useEffect, useRef, useState } from 'react'
import { Downarrow } from '../components/Downarrow'
import { LargeBubble } from '../components/LargeBubble'
import { MediumBubble } from '../components/MediumBubble'
import { MediumBubble2 } from '../components/MediumBubble2'
import { SmallBubble } from '../components/SmallBubble'
import { Uparrow } from '../components/Uparrow'
import '../styles/dashboard.css'
import {useNavigate} from 'react-router-dom'

export const Dashboard = () => {
    const [data, setData] = useState({});
    const [zoom, setZoom] = useState(0);
    const navigate = useNavigate();
    const [dataTime, setDataTime] = useState('3months');
    const [isLoading, setIsLoading] = useState(false);

    const ZoomIn = () => {
        if(zoom === 500) {
            return;
        }
        setZoom((prev) => prev+100);
    }

    const ZoomOut = () => {
        if(zoom === 0) {
            return;
        }
        setZoom((prev) => prev-100);
    }

    useEffect(() => {
        fetchData();
    },[dataTime]);

    const fetchData = () => {
        setIsLoading(true);
        fetch(`https://dackend-data.onrender.com/${dataTime}`)
        .then(res => res.json())
        .then(res => {
            setData(res);
            if(!res.total_earning) {
                navigate('/');
            }
        })
        .catch(err => {
            console.log(err, 'error');
            alert('something went wrong');
            navigate('/');
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    if(isLoading) {
        return <div className='loading'>
            <div></div>
            {/* <h1>Loading...</h1> */}
        </div>
    }

  return (
    <div className='dashboard_div'>
        <div>
            <div className='dash_info'>
                <h1>
                    Design faster
                </h1>
                <div className='target_div'>
                    <div className="target">
                        <div className='progress1'>
                            <div className='progress3'>
                                <div className='innerCircle'>
                                    <div className="diamondOutter">
                                    </div>
                                        <div className="diamondInner"></div>
                                </div>
                            </div>
                            <svg width="100" height='100' className='barProgressInner'> 
                                <circle r='42' cx='50' cy='50' className='circle'></circle>
                                <circle r='42' cx='50' cy='50' className='inner_circle_progress'></circle>
                            </svg>
                            <svg width="120" height='120' className='barProgressOuter'> 
                                <circle r='56' cx='60' cy='60' className='circleOuter'></circle>
                                <circle r='56' cx='60' cy='60' className='outer_circle_progress1'></circle>
                                <circle r='56' cx='60' cy='60' className='outer_circle_progress2'></circle>
                            </svg>
                        </div>
                    </div>
                    <h3>Total earning</h3>
                    <div className='totalEarning'>
                        <h4>${data.total_earning}</h4>
                        <div>
                            <Uparrow color={'#00B929'} />
                            <p>2%</p>
                        </div>
                    </div>
                    <p className='compared'>Compare to ${data.last_year_earning} last year</p>
                    <div className="presentation">
                        <div>
                            <h6>Presentation</h6>
                            <p>{data.presentation}</p>
                            <div className='curve_div'>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <svg viewBox="0 0 700 200">
                                    <path 
                                        id="curve"
                                        d="M 29.928125,119.32884 C 59.868756,78.85387 99.789596,30.283895 138.66049,30.104515 c 80.46172,-0.37133 90.87185,137.794285 140.7729,129.699295 40.35037,-6.54568 49.90105,-80.94994 86.53937,-78.86548 33.24073,1.89117 22.2547,70.77048 73.14399,70.77048 39.92084,0 58.65264,-56.66496 99.80211,-56.66496 49.90105,0 69.86147,80.94995 99.8021,48.56997" 
                                        style={{fill: 'none', stroke: '#8676FF', strokeWidth: 10,}} />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6>Development</h6>
                            <p>{data.development}</p>
                            <div className='curve_div'>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <svg viewBox="0 0 700 200">
                                    <path 
                                        id="curve"
                                        d="M 29.928125,119.32884 C 59.868756,78.85387 99.789596,30.283895 138.66049,30.104515 c 80.46172,-0.37133 90.87185,137.794285 140.7729,129.699295 40.35037,-6.54568 49.90105,-80.94994 86.53937,-78.86548 33.24073,1.89117 22.2547,70.77048 73.14399,70.77048 39.92084,0 58.65264,-56.66496 99.80211,-56.66496 49.90105,0 69.86147,80.94995 99.8021,48.56997" 
                                        style={{fill: 'none', stroke: '#FF708B', strokeWidth: 10,}} />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6>Research</h6>
                            <p>{data.research}</p>
                            <div className='curve_div'>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <svg viewBox="0 0 700 200">
                                    <path 
                                        id="curve"
                                        d="M 29.928125,119.32884 C 59.868756,78.85387 99.789596,30.283895 138.66049,30.104515 c 80.46172,-0.37133 90.87185,137.794285 140.7729,129.699295 40.35037,-6.54568 49.90105,-80.94994 86.53937,-78.86548 33.24073,1.89117 22.2547,70.77048 73.14399,70.77048 39.92084,0 58.65264,-56.66496 99.80211,-56.66496 49.90105,0 69.86147,80.94995 99.8021,48.56997" 
                                        style={{fill: 'none', stroke: '#FFBA69', strokeWidth: 10,}} />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='purple_div'>
                    <div>
                        <h4>Total earning</h4>
                        <div>
                            <h3>${data.total_earning}</h3>
                            <div>
                                <Uparrow color={'#38F261'}/>
                                <p className='percentage'>{data.earning_hike}%</p>
                            </div>
                        </div>
                        <p>Compared to ${data.last_year_earning} last year</p>
                    </div>
                    <hr />
                    <div>
                        <h4>Sales</h4>
                        <div>
                            <h3>${data.sales}</h3>
                            <div>
                                <Uparrow color={'#38F261'} />
                                <p className='percentage'>{data.sales_hike}%</p>
                            </div>
                        </div>
                        <p>Compared to ${data.last_year_earning} last year</p>
                    </div>
                </div>
                <div className='values_div'>
                    <div>
                        <h6>Travel</h6>
                        <p>760</p>
                        <p>2,540</p>
                        <Uparrow color={'#00B929'} />
                    </div>
                    <div>
                        <h6>Presentation</h6>
                        <p>650</p>
                        <p>2,304</p>
                        <Downarrow />
                    </div>
                    <div>
                        <h6>Business</h6>
                        <p>612</p>
                        <p>2,140</p>
                        <Uparrow color={'#00B929'} />
                    </div>
                </div>
            </div>
            <div className='dash_bubble'>
                <div style={{width: `calc(100% + ${zoom}px)`, height: `calc(100% + ${zoom}px)`}} className='bubbles'>
                    <div className='outerBubble'>
                        <div className='innerBubble'>
                            <div className="investmentBubble">
                                <div>
                                    <h5>Investments</h5>
                                    <h4>${data.investment_price}</h4>
                                    <p>3 month</p>
                                </div>
                            </div>
                            <div className='financeBubble bubble '>
                                <div>
                                    <h5>Finance</h5>
                                    <h4>${data.finance}</h4>
                                </div>
                            </div>
                            <div className='businessBubble bubble'>
                                <div>
                                    <h5>Business</h5>
                                    <h4>${data.business_price}</h4>
                                </div>
                            </div>
                            <div className='designBubble bubble'>
                                <div>
                                    <h5>Design</h5>
                                    <h4>${data.design}</h4>
                                    <p>3 month</p>
                                </div>
                            </div>
                            <div className='developmentBubble bubble'>
                                <div>
                                    <h5>Development</h5>
                                    <h4>${data.development_price}</h4>
                                </div>
                            </div>
                            <div className='pinkBubble'></div>
                            <SmallBubble top={'15%'} left={'22%'} />
                            <SmallBubble top={'30%'} left={'83%'} />
                            <SmallBubble top={'68%'} left={'73%'} />
                            <SmallBubble top={'70%'} left={'0'} />
                            <MediumBubble top={'18%'} left={'35%'} />
                            <MediumBubble top={'18%'} left={'35%'} />
                            <MediumBubble top={'70%'} left={'90%'} />
                            <MediumBubble top={'47%'} left={'13%'} />
                            <MediumBubble top={'90%'} left={'13%'} />
                        </div>
                        <div className='yellowBubble'></div>
                    </div>
                    <LargeBubble top={'20%'} left={'80%'} />
                    <LargeBubble top={'40%'} left={'70%'} />
                    <LargeBubble top={'70%'} left={'60%'} />
                    <LargeBubble top={'60%'} left={'15%'} />
                    <MediumBubble top={'90%'} left={'13%'} />
                    <MediumBubble top={'90%'} left={'13%'} />
                    <MediumBubble top={'20%'} left={'13%'} />
                    <MediumBubble2 top={'35%'} left={'25%'} />
                    <MediumBubble2 top={'45%'} left={'15%'} />
                    <MediumBubble2 top={'85%'} left={'85%'} />
                    <div className="timeline">
                        <p>Timeline</p>
                        <div>
                            <p onClick={() => setDataTime('1week')} className={dataTime === '1week' ? 'current_timeline' : ''}>1W</p>
                            <p onClick={() => setDataTime('1month')} className={dataTime === '1month' ? 'current_timeline' : ''}>1M</p>
                            <p onClick={() => setDataTime('3months')} className={dataTime === '3months' ? 'current_timeline' : ''}>3M</p>
                            <p onClick={() => setDataTime('1year')} className={dataTime === '1year' ? 'current_timeline' : ''}>1Y</p>
                            <p onClick={() => setDataTime('all')} className={dataTime === 'all' ? 'current_timeline' : ''}>ALL</p>
                        </div>
                    </div>
                    <div className='bubble_details'>
                        <div>
                            <div>
                            <span className="material-symbols-outlined">radio_button_checked</span>
                            </div>
                            <p>Trend Goods</p>
                            <h1>{data.trend_goods}</h1>
                        </div>
                        <div>
                            <div>
                            <span className="material-symbols-outlined">visibility</span>
                            </div>
                            <p>Shopping views</p>
                            <h1>{data.shopping_views}</h1>
                        </div>
                        <div>
                            <div>
                            <span className="material-symbols-outlined">equalizer</span>
                            </div>
                            <p>Store Dynamics</p>
                            <h1>{data.store_dynamics}</h1>
                        </div>
                    </div>
                    <div className='bubble_functionality'>
                        <div>
                            <svg onClick={ZoomIn} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="#5A5A89"/>
                            </svg>
                            <svg onClick={ZoomOut} width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 0H8H14V2H8H6H0V0H6Z" fill="#5A5A89"/>
                            </svg>
                        </div>
                        <div>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 12C9.46957 12 8.96086 11.7893 8.58579 11.4142C8.21071 11.0391 8 10.5304 8 10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8C10.5304 8 11.0391 8.21071 11.4142 8.58579C11.7893 8.96086 12 9.46957 12 10C12 10.5304 11.7893 11.0391 11.4142 11.4142C11.0391 11.7893 10.5304 12 10 12Z" fill="#5A5A89"/>
                            </svg>
                        </div>
                        <div>
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.10495 12.2102C5.7586 12.4693 6.30051 12.9497 6.63613 13.5676C6.97175 14.1855 7.07975 14.9016 6.9413 15.5909C6.80285 16.2803 6.42673 16.8992 5.87858 17.3396C5.33043 17.7799 4.64505 18.0138 3.94204 18.0005C3.23903 17.9871 2.56303 17.7273 2.032 17.2665C1.50098 16.8056 1.14864 16.1729 1.03648 15.4787C0.924318 14.7846 1.05945 14.0731 1.4183 13.4685C1.77715 12.8638 2.33692 12.4043 2.99995 12.1702V5.83023C2.33245 5.59432 1.76985 5.13003 1.41159 4.51942C1.05332 3.90881 0.92246 3.1912 1.04213 2.49344C1.16181 1.79567 1.52431 1.16268 2.06557 0.706352C2.60683 0.250023 3.29199 -0.000262044 3.99995 -0.000262044C4.7079 -0.000262044 5.39306 0.250023 5.93432 0.706352C6.47558 1.16268 6.83808 1.79567 6.95776 2.49344C7.07743 3.1912 6.94657 3.90881 6.58831 4.51942C6.23004 5.13003 5.66744 5.59432 4.99995 5.83023V9.00023C5.83595 8.37223 6.87395 8.00023 7.99995 8.00023H11.9999C12.6581 8.00025 13.2979 7.78395 13.821 7.38461C14.3441 6.98528 14.7215 6.42506 14.8949 5.79023C14.2381 5.53013 13.6941 5.04666 13.3587 4.42492C13.0233 3.80318 12.9179 3.08304 13.0612 2.39128C13.2045 1.69952 13.5873 1.08049 14.1421 0.643167C14.6969 0.205846 15.3882 -0.0217274 16.0943 0.000511863C16.8004 0.0227512 17.476 0.293377 18.0022 0.764746C18.5284 1.23611 18.8714 1.87801 18.9709 2.57741C19.0704 3.27682 18.92 3.9889 18.5461 4.5883C18.1722 5.1877 17.5988 5.63598 16.9269 5.85423C16.7255 7.01491 16.1209 8.06723 15.2195 8.82572C14.3182 9.5842 13.178 10.0001 11.9999 10.0002H7.99995C7.34184 10.0002 6.70196 10.2165 6.17885 10.6158C5.65575 11.0152 5.27841 11.5754 5.10495 12.2102ZM3.99995 14.0002C3.73473 14.0002 3.48038 14.1056 3.29284 14.2931C3.1053 14.4807 2.99995 14.735 2.99995 15.0002C2.99995 15.2654 3.1053 15.5198 3.29284 15.7073C3.48038 15.8949 3.73473 16.0002 3.99995 16.0002C4.26516 16.0002 4.51952 15.8949 4.70705 15.7073C4.89459 15.5198 4.99995 15.2654 4.99995 15.0002C4.99995 14.735 4.89459 14.4807 4.70705 14.2931C4.51952 14.1056 4.26516 14.0002 3.99995 14.0002ZM3.99995 2.00023C3.73473 2.00023 3.48038 2.10558 3.29284 2.29312C3.1053 2.48066 2.99995 2.73501 2.99995 3.00023C2.99995 3.26544 3.1053 3.5198 3.29284 3.70733C3.48038 3.89487 3.73473 4.00023 3.99995 4.00023C4.26516 4.00023 4.51952 3.89487 4.70705 3.70733C4.89459 3.5198 4.99995 3.26544 4.99995 3.00023C4.99995 2.73501 4.89459 2.48066 4.70705 2.29312C4.51952 2.10558 4.26516 2.00023 3.99995 2.00023ZM15.9999 2.00023C15.7347 2.00023 15.4804 2.10558 15.2928 2.29312C15.1053 2.48066 14.9999 2.73501 14.9999 3.00023C14.9999 3.26544 15.1053 3.5198 15.2928 3.70733C15.4804 3.89487 15.7347 4.00023 15.9999 4.00023C16.2652 4.00023 16.5195 3.89487 16.7071 3.70733C16.8946 3.5198 16.9999 3.26544 16.9999 3.00023C16.9999 2.73501 16.8946 2.48066 16.7071 2.29312C16.5195 2.10558 16.2652 2.00023 15.9999 2.00023Z" fill="#5A5A89"/>
                            </svg>
                            <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.874 4.9999C12.6516 5.85814 12.1504 6.61822 11.4493 7.16082C10.7481 7.70343 9.8866 7.99784 9 7.99784C8.1134 7.99784 7.2519 7.70343 6.55074 7.16082C5.84957 6.61822 5.34844 5.85814 5.126 4.9999H0V2.9999H5.126C5.34844 2.14166 5.84957 1.38158 6.55074 0.83897C7.2519 0.296364 8.1134 0.00195312 9 0.00195312C9.8866 0.00195312 10.7481 0.296364 11.4493 0.83897C12.1504 1.38158 12.6516 2.14166 12.874 2.9999H18V4.9999H12.874ZM9 5.9999C9.53043 5.9999 10.0391 5.78918 10.4142 5.41411C10.7893 5.03904 11 4.53033 11 3.9999C11 3.46946 10.7893 2.96076 10.4142 2.58568C10.0391 2.21061 9.53043 1.9999 9 1.9999C8.46957 1.9999 7.96086 2.21061 7.58579 2.58568C7.21071 2.96076 7 3.46946 7 3.9999C7 4.53033 7.21071 5.03904 7.58579 5.41411C7.96086 5.78918 8.46957 5.9999 9 5.9999Z" fill="#5A5A89"/>
                            </svg>
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3H14C14.5305 3 15.0392 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5V13.17C16.6675 13.4059 17.2301 13.8702 17.5884 14.4808C17.9467 15.0914 18.0775 15.809 17.9578 16.5068C17.8382 17.2046 17.4757 17.8375 16.9344 18.2939C16.3931 18.7502 15.708 19.0005 15 19.0005C14.2921 19.0005 13.6069 18.7502 13.0657 18.2939C12.5244 17.8375 12.1619 17.2046 12.0422 16.5068C11.9225 15.809 12.0534 15.0914 12.4117 14.4808C12.7699 13.8702 13.3325 13.4059 14 13.17V5H12V8L7.50003 4L12 0V3ZM2.00003 6.83C1.33254 6.59409 0.769936 6.1298 0.41167 5.51919C0.0534039 4.90859 -0.0774567 4.19098 0.0422185 3.49321C0.161894 2.79545 0.524399 2.16246 1.06566 1.70613C1.60692 1.2498 2.29208 0.999512 3.00003 0.999512C3.70798 0.999512 4.39314 1.2498 4.9344 1.70613C5.47566 2.16246 5.83817 2.79545 5.95784 3.49321C6.07752 4.19098 5.94666 4.90859 5.58839 5.51919C5.23012 6.1298 4.66752 6.59409 4.00003 6.83V13.17C4.66752 13.4059 5.23012 13.8702 5.58839 14.4808C5.94666 15.0914 6.07752 15.809 5.95784 16.5068C5.83817 17.2046 5.47566 17.8375 4.9344 18.2939C4.39314 18.7502 3.70798 19.0005 3.00003 19.0005C2.29208 19.0005 1.60692 18.7502 1.06566 18.2939C0.524399 17.8375 0.161894 17.2046 0.0422185 16.5068C-0.0774567 15.809 0.0534039 15.0914 0.41167 14.4808C0.769936 13.8702 1.33254 13.4059 2.00003 13.17V6.83ZM3.00003 5C3.26525 5 3.5196 4.89464 3.70714 4.70711C3.89467 4.51957 4.00003 4.26522 4.00003 4C4.00003 3.73478 3.89467 3.48043 3.70714 3.29289C3.5196 3.10536 3.26525 3 3.00003 3C2.73481 3 2.48046 3.10536 2.29292 3.29289C2.10539 3.48043 2.00003 3.73478 2.00003 4C2.00003 4.26522 2.10539 4.51957 2.29292 4.70711C2.48046 4.89464 2.73481 5 3.00003 5ZM3.00003 17C3.26525 17 3.5196 16.8946 3.70714 16.7071C3.89467 16.5196 4.00003 16.2652 4.00003 16C4.00003 15.7348 3.89467 15.4804 3.70714 15.2929C3.5196 15.1054 3.26525 15 3.00003 15C2.73481 15 2.48046 15.1054 2.29292 15.2929C2.10539 15.4804 2.00003 15.7348 2.00003 16C2.00003 16.2652 2.10539 16.5196 2.29292 16.7071C2.48046 16.8946 2.73481 17 3.00003 17ZM15 17C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8947 16.5196 16 16.2652 16 16C16 15.7348 15.8947 15.4804 15.7071 15.2929C15.5196 15.1054 15.2652 15 15 15C14.7348 15 14.4805 15.1054 14.2929 15.2929C14.1054 15.4804 14 15.7348 14 16C14 16.2652 14.1054 16.5196 14.2929 16.7071C14.4805 16.8946 14.7348 17 15 17Z" fill="#5A5A89"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

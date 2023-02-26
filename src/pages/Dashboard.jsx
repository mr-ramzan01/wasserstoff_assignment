import { Downarrow } from '../components/Downarrow'
import { Uparrow } from '../components/Uparrow'
import '../styles/dashboard.css'

export const Dashboard = () => {
  return (
    <div className='dashboard_div'>
        <div className='dash_info'>
            <h1>
                Design faster
            </h1>
            <div className='target_div'>
                <div className="target">
                    <div className='progress1'>
                        <div className='progress2'>
                            <div className='progress3'>
                                <div className='innerCircle'>
                                    <div className="diamondOutter">
                                    </div>
                                        <div className="diamondInner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>Total earning</h3>
                <div className='totalEarning'>
                    <h4>$12,875</h4>
                    <div>
                        <Uparrow color={'#00B929'} />
                        <p>2%</p>
                    </div>
                </div>
                <p className='compared'>Compare to $21,504 last year</p>
                <div className="presentation">
                    <div>
                        <h6>Presentation</h6>
                        <p>862</p>
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
                        <p>753</p>
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
                        <p>553</p>
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
                        <h3>$12,875</h3>
                        <div>
                            <Uparrow color={'#38F261'}/>
                            <p className='percentage'>2%</p>
                        </div>
                    </div>
                    <p>Compared to $21,490 last year</p>
                </div>
                <hr />
                <div>
                    <h4>Sales</h4>
                    <div>
                        <h3>$43,123</h3>
                        <div>
                            <Uparrow color={'#38F261'} />
                            <p className='percentage'>2%</p>
                        </div>
                    </div>
                    <p>Compared to $21,490 last year</p>
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
            <div className='bubbles'>
                <div className='outerBubble'>
                    <div className='innerBubble'>
                        <div className="investmentBubble"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

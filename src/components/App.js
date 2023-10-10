import './App.css'
import Blue from './component/Blue.png'
import Design from './component/Design.png'

import Com29 from './component/Component 29.png'
import Com31 from './component/Component 31.png'

function App(){
    return(
        <div className="container">
            <div className='value'>
                <h1>Automate the water pump with 3.5k Only</h1>
                <p id='l'>Lorem ipsum dolor sit amet, consectetur </p>
            </div>

            <div className='side'>

                <div className='adv'>
                    <img id='i' className='first' src={Com29} alt='' height= '50' width= "40"/>
                    <h2>User Friendly Design</h2>
                </div>
                <div className='state'>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisc amet,</p>
                </div>

                <div className='adv'>
                    <img id='i' className='c' src={Com31} alt='' height= '50' width= "40"/>
                    <h2 id='second'>User Friendly Design</h2>
                </div>
                <div className='state2'>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisc amet,</p>
                </div>
                
            </div>
            <div className='pic'height="505" width="560" >
            <img className='design' src={Design} height="462" width="320" />
            <img className='blue' src={Blue} height={471} width={345}/>
            </div>
            
        </div>
    );
}

export default App



import React from "react";
import Scroll from '../components/Scroll'
import SearchEvent from '../components/SearchEvent'
import EventCard from "../components/EventCard";

class MainPage extends React.Component {
    state = {
        mas: ["1", "2", "3","1", "2", "3"]
    }

    render() {
        return (
            <section>
                <div className="MainPage container-fluid">
                    <Scroll/>
                    <SearchEvent/>

                    <div className='row'>
                        {
                            this.state.mas.map((i) => {
                                return <div key={this.state.mas[i]} className='col-lg-4 col-md-6'>
                                    <EventCard/>
                                </div>
                            })
                        }
                    </div>

                </div>
            </section>
        )
    }
}

export default MainPage
import React from 'react';
import moment from 'moment';
import { Calendar,
  DateLocalizer,
  momentLocalizer,
  globalizeLocalizer,
  move,
  Views,
  Navigate,
  components,
  
} from 'react-big-calendar';
import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css';



class MyEvent extends React.Component{
  render(){
    return(
      <div>
      
      </div>
    )
  }
}
 

class CalProp extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      view: 'month'
    }
  }


  

   

    render(){
      console.log(this.state.view)
      let components ={
        event: MyEvent
      }
      
      const localizer = momentLocalizer(moment);
 
     
        return(
          <div>
       
    <Calendar
    defaultView={this.state.view}
    views={['day','month']}
      localizer={localizer}
      onView = {console.log("asd")}
      events={[
        {
          'title': 'Also event',
          'allDay': false,
          'start': new Date(moment()), // 10.00 AM
          'end': new Date(moment().add(2,'hours')), // 2.00 PM 
        },
        {
          'title': 'Evebt',
          'allDay': false,
          'start': new Date(moment().subtract(3,'hours')), // 10.00 AM
          'end': new Date(moment().subtract(1,'hours')), // 2.00 PM 
        }
      ]}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      onSelectEvent={event => {if(this.state.view == 'month'){
        this.setState({view: 'day'})
      }}}
    />
    {console.log(new Date(moment()))}
          </div>
        )
            
        
    }
}

export default CalProp;
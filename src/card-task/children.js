import React, { Component } from 'react';
import { ChildContext, ParentContext } from './export_context';
import SubChildTWO from './subchild';
class ChildCard extends Component {
static contextType = ParentContext
    constructor(props) {
        super(props)
        this.state = {
            resdata: null
        }
        this.setState({
            resdata: this.props.api
        })
    }

    componentDidMount() {
        const user = this.context
       console.log("context api",user) 
      }
    render() {
        
        // const [val1,val2,val3,val4,val5] = this.state.resdata

        console.log('ChildCard res props =>>',this.context )
  
        return (
            <div>
                
                <h1 className="text-center">Child Component</h1>
                <div className="mt-5 d-flex justify-content-around">
              
                    {/* {this.props.api && this.props.api.map((val,ind)=>{
                       return <SubChildTWO key={ind} res ={val}/>
                    })} */}
           {
               this.context && this.context.map((res,ind)=>{
                   return(
                       <ChildContext.Provider key={ind} value={res}>
                           <SubChildTWO/>
                       </ChildContext.Provider>
                   )
               })
           }
                </div>

            </div>
        );
    }
}
// ChildCard.contextType = DataContext;
export default ChildCard;
import React , {Component} from 'react';


export default class contactlist extends Component{
    render(){
        console.log('props',this.props)
        return(
            <div>
                <ul className="Contact_List">
                   {this.props.contact.map((contacts)=>(
                        <li key={contacts.id} >
                            
                            <div>
                                <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-header">
                                   <div style={{backgroundImage:`url(${contacts.src})`}}>
                                </div>
                                    <strong className="mr-auto">{contacts.designation}</strong>
                                    <small>11 mins ago</small>
                                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="toast-body">
                                    <p>{contacts.name}</p>
                                      <p>{contacts.handle}</p>
                                </div>
                                </div>
                     </div>
                            
                        </li>

                   ))}
                
                </ul>
        
            </div>)
    }
}
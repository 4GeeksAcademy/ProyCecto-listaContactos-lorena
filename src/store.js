export const initialStore=()=>{
  return{
    message: null,  
    contacts:[],
    contact:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){  
      
      case "setcontacts":
        return{
          ...store,
          contacts:action.payload
        }
        case "deletecontact":
    return {
      ...store,
      contacts: store.contacts.filter(contact => contact.id !== action.payload)
    }


  case "updatecontact":
    return{
      ...store,
      contact: store.contacts.filter(contact => contact.id == action.payload)
    };



    default:
      throw Error('Unknown action.');
      
      
  }    
}

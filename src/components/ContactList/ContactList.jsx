import { useSelector,useDispatch} from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { List, Item, Button, Name } from './ContactList.styled';
// import { getContacts, getContactsFilter } from 'redux/selectors';


export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => {
        return state.contacts.items.filter(item =>
            item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim()))
    });
    
    return (
        <List>
            {contacts.map(({ id, name, number }) => (
                <Item key={id}>
                    <Name>{name}:</Name>
                    <Name>{number}</Name>
                    <Button
                        type="button"
                        id={id}
                        onClick={() => dispatch(deleteContacts(id))}>
                        Delete
                    </Button>
                </Item>
            ))
            }
        </List>
    );
};

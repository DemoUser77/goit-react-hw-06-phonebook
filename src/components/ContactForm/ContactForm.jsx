import {  useDispatch,useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { Form, Label, Input, Button } from './ContactForm.styled';


export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleSubmit = (event) => {
        event.preventDefault();
        
    
        const form = event.target;
        const formName = event.target.elements.name.value;
        const formNumber = event.target.elements.number.value;
 
         if (contacts.some(({ name }) => name === formName)) {
      return alert(`${formName} is already in contacts`);
        }
         if (contacts.some(({ number }) => number === formNumber)) {
      return alert(`${formNumber} is already in contacts`);
    }
    
        dispatch(addContacts([{ name: formName, number: formNumber }]));
        form.reset();
            
    };
    
        return (
            <Form onSubmit={handleSubmit}>
                <Label>
                    Name
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                
                <Label>
                    Number
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>

                <Button type="submit">Add contact</Button>
            </Form>
        )
    };

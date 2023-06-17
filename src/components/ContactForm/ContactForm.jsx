import {  useDispatch,useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { Form, Label, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const form = event.target;
        const formName = form.elements.name.value;
        const formNumber = form.elements.number.value;
 
         if (contacts.some(({ name }) => name.toLowerCase() === formName.toLowerCase())) {
      return alert(`${formName} is already in contacts`);
        }
         if (contacts.some(({ number }) => number === formNumber)) {
      return alert(`${formNumber} is already in contacts`);
    }
    
        dispatch(addContact({ name: formName, number: formNumber }));
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

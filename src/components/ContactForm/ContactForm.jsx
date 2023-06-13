import {  useDispatch } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactForm.styled';


export const ContactForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
       
        const data = {
            id: nanoid(),
            name: event.target.elements.name.value,
            number: event.target.elements.number.value,
        };
        dispatch(addContacts(data));
        event.target.reset();
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

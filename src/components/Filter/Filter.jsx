import { useDispatch, useSelector } from 'react-redux';
import { getContactsFilter } from 'redux/selectors';
import { setContactsFilter } from 'redux/filterSlice';
import { Label, Input } from './Filter.styled';


export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getContactsFilter);

    const handleChangeFilter = event => {
        dispatch(setContactsFilter(event.target.value))
    };

    return (
        <Label>
            Find contacts by name
            <Input
                type="text"
                name="filter"
                value={filter}
                onChange={handleChangeFilter} />
            
        </Label>
    );

};

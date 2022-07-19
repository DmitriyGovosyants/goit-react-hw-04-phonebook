import PropTypes from 'prop-types';
import { Contact, Info, DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ name, number, id, onDelete }) => {
  return (
    <Contact>
      <Info>
        {name}: {number}
      </Info>
      <DeleteBtn type="button" onClick={() => onDelete(id)}>
        Delete
      </DeleteBtn>
    </Contact>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

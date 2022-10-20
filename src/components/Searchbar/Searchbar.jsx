import { Formik } from 'formik';
import {
  HeaderSearchbar,
  Input,
  SearchForm,
  SearchFormBtn,
} from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    const query = values.query;
    resetForm();
    onSubmit(query);
  };

  return (
    <HeaderSearchbar>
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <Input
            id="search"
            type="text"
            name="query"
            autoFocus
            placeholder="Search images and photos"
          />
          <SearchFormBtn type="submit">
            <BsSearch />
          </SearchFormBtn>
        </SearchForm>
      </Formik>
    </HeaderSearchbar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

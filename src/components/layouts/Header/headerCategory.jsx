import React from 'react';
import PropTypes from 'prop-types';

export default function HeaderCategory(props) {
  return (
    <a
      href="#responsive-header"
      className=" flex-grow block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-900 ml-2 mr-2  text-center"
    >
      {props.title}
    </a>
  );
}
HeaderCategory.propTypes = {
  title: PropTypes.string,
};

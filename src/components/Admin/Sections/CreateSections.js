import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import Modal from 'react-modal';
import axios from 'axios';

// Component declaration

const CreateSection = (props) => {

  const [createSectiontModalOpen, setCreateSectionModalOpen] = useState(false);
  
  const modalCustomStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div>
        <Buttons align = "center"
          label="Create Section"
          onClick = {() => setCreateSectionModalOpen(true)}
        >
          Create Project
        </Buttons>

        <Modal
        isOpen ={createSectiontModalOpen}
        onRequestClose = {() => setCreateSectionModalOpen(false)}
        ariaHideApp={false}
        style={modalCustomStyles}
        >

        <Formik
        initialValues={{ sectionName: '' }}
        validate={(values) => {
            const errors = {};
            if (!values.sectionName)
              errors.sectionName = 'Section Name required';
            return errors;
          }}
        >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
          <label>
            Create a section
            <br />
            <Input
            name = "sectionName"
            type = "text"
            onChange={formik.handleChange}
              onBlur={formik.handleBlur}
                value={formik.values.sectionName}
                label = "Create a Section"

            />
          </label>
          <Button type="submit">Submit</Button>
          <Button align="right" onClick={() => setCreateSectionModalOpen(false)}>Cancel</Button>
          <br />
          {formik.touched.sectionName && formik.errors.sectionName ? (
                <div>{formik.errors.sectionName}</div>
              ) : null}
          </form>

        )

        }

        </Formik>

        </Modal>
    </div>
  );
};

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 0.2rem;
  width: 6em;
  background: white;
  color: black;
  border: 2px solid palevioletred;
`;

const Buttons = styled.button`
  display: inline-block;
  border-radius: 10px;
  padding: 0.5rem 0;
  margin: 1rem 0.5rem;
  width: 10em;
  height: 5em;
  fontSize: 14pt;
  background: white;
  color: black;
  border: 2px solid black;
  font-size: 16px;

`;



const Input = styled.input`
  display: inline-block;
  padding: 0.5rem 0;

  width: 11em;
  background: white;
  color: black;
  border: 2px solid black;
  
`;

export default CreateSection;

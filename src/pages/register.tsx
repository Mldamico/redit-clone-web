import React from 'react';
import { Form, Formik } from 'formik';
import { Box, Button } from '@chakra-ui/core';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { useRegisterMutation } from '../generated/graphql';
interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const [, register] = useRegisterMutation();
  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values) => {
          console.log(values);
          const response = await register(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name='username' label='Username' />
            <Box mt={4}>
              <InputField name='password' label='Password' type='password' />
            </Box>
            <Button
              type='submit'
              variantColor='teal'
              mt={4}
              isLoading={isSubmitting}
            >
              Register{' '}
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
